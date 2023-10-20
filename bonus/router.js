const router = (url, method, body) => {
  switch (url) {
    case "/":
      return { status: 200, contentType: "text/html", content: "index" };

    case "/echo":
      return {
        status: 200,
        contentType: "application/json",
        content: JSON.stringify({ url, method, body }),
      };

    case "/about":
      return {
        status: 200,
        contentType: "text/html",
        content: "about",
      };

    case "/healthcheck":
      return {
        status: 200,
        contentType: "application/json",
        content: "{status: 'ok'}",
      };

    default:
      return {
        status: 404,
        contentType: "text/html",
        content: "fourOhFour",
      };
  }
};

module.exports = { router };
