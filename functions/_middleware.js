export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Block access on pages.dev — only allow custom domain
  if (url.hostname.includes("pages.dev")) {
    return new Response("Not Found", { status: 404 });
  }

  return context.next();
}
