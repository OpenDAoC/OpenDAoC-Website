export const onRequest = async (context, next) => {
  const response = await next();
  const html = await response.text();

  // Inject the Plausible script at the end of the <head> section
  const modifiedHtml = html.replace(
    '</head>',
    `
    <script defer data-domain="opendaoc.com" src="https://pl.clait.sh/js/script.js"></script>
    </head>
    `
  );

  return new Response(modifiedHtml, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
};
