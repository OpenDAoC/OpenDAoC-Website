(function () {
  if (typeof window === 'undefined') {
    return;
  }

  var normalizeText = function (value) {
    return (value || '').replace(/\s+/g, ' ').trim().slice(0, 80);
  };

  var track = function (eventName, payload) {
    if (!window.umami || typeof window.umami.track !== 'function') {
      return;
    }

    window.umami.track(eventName, payload || {});
  };

  var toUrl = function (href) {
    try {
      return new URL(href, window.location.origin);
    } catch (_error) {
      return null;
    }
  };

  var handleLinkTracking = function (link) {
    var href = link.getAttribute('href') || '';
    var targetUrl = toUrl(href);

    if (!targetUrl) {
      return;
    }

    var payload = {
      page: window.location.pathname,
      href: targetUrl.pathname,
      label: normalizeText(link.textContent),
    };

    if (targetUrl.origin !== window.location.origin) {
      track('outbound_link_click', payload);
    }

    if (targetUrl.hostname === 'discord.gg') {
      track('cta_discord_click', payload);
    }

    if (targetUrl.hostname === 'github.com' && targetUrl.pathname.indexOf('/OpenDAoC') === 0) {
      track('cta_github_click', payload);
    }

    if (targetUrl.pathname.indexOf('/docs/core/getting-started') === 0) {
      track('getting_started_click', payload);
    }
  };

  var handleCodeCopyTracking = function (target) {
    var button = target.closest("button[aria-label*='Copy'], button[title*='Copy']");

    if (!button) {
      return;
    }

    track('code_copy_clicked', {
      page: window.location.pathname,
    });
  };

  var handleSearchTracking = function (form) {
    var input = form.querySelector("input[type='search'], input[name='q'], input[name='search']");

    if (!input || typeof input.value !== 'string') {
      return;
    }

    var query = input.value.trim();

    if (!query) {
      return;
    }

    track('docs_search_submitted', {
      page: window.location.pathname,
      query_length: query.length,
    });
  };

  var setupReadDepthTracking = function () {
    if (window.location.pathname.indexOf('/docs/') !== 0) {
      return;
    }

    var sent = false;

    var onScroll = function () {
      if (sent) {
        return;
      }

      var scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollableHeight <= 0) {
        return;
      }

      var depth = window.scrollY / scrollableHeight;

      if (depth >= 0.75) {
        sent = true;
        track('docs_read_75_percent', {
          page: window.location.pathname,
        });
        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  };

  document.addEventListener(
    'click',
    function (event) {
      if (!(event.target instanceof Element)) {
        return;
      }

      var link = event.target.closest('a[href]');

      if (link) {
        handleLinkTracking(link);
      }

      handleCodeCopyTracking(event.target);
    },
    true
  );

  document.addEventListener(
    'submit',
    function (event) {
      if (!(event.target instanceof HTMLFormElement)) {
        return;
      }

      handleSearchTracking(event.target);
    },
    true
  );

  setupReadDepthTracking();
})();
