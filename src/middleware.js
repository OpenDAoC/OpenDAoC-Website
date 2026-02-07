const UMAMI_SCRIPT_URL = import.meta.env.PUBLIC_UMAMI_SCRIPT_URL || 'https://u.clait.sh/script.js';
const UMAMI_WEBSITE_ID = import.meta.env.PUBLIC_UMAMI_WEBSITE_ID || '43a955c1-9654-48cb-9ebe-551f83a42340';

export const onRequest = async (_context, next) => {
  const response = await next();
  const contentType = response.headers.get('content-type') || '';

  if (!contentType.includes('text/html')) {
    return response;
  }

  const html = await response.text();

  if (!html.includes('</head>')) {
    return new Response(html, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  }

  const injection = `\n    <script defer src="${UMAMI_SCRIPT_URL}" data-website-id="${UMAMI_WEBSITE_ID}"></script>\n    <script defer src="/js/umami-events.js"></script>\n    </head>\n`;
  const modifiedHtml = html.replace('</head>', injection);

  return new Response(modifiedHtml, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
};
