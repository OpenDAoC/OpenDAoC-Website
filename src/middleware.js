export const onRequest = async (context, next) => {
  const response = await next();
  const html = await response.text();

  // Inject the Plausible script at the end of the <head> section
  const modifiedHtml = html.replace(
    '</head>',
    `
    <script defer src="https://u.clait.sh/script.js" data-website-id="43a955c1-9654-48cb-9ebe-551f83a42340"></script>
    </head>
    `
  );

  return new Response(modifiedHtml, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
};
