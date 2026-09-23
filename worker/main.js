/* // website/worker/main.js */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === "whitepaper.sphinxfnd.org") {
      const wpUrl = new URL("/wp" + url.pathname, url);
      return env.ASSETS.fetch(wpUrl);
    }

    if (url.hostname === "foundation.sphinxfnd.org") {
      const foundationUrl = new URL("/fnd" + url.pathname, url);
      return env.ASSETS.fetch(foundationUrl);
    }

    return env.ASSETS.fetch(request);
  }
};
