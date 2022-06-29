module.exports = {
  redirectToUI(request, response) {
    response.redirect(308, "/ui");
  },
  serveUI(request, response) {
    response.sendFile(process.env.PWD + "/public/ui/index.html");
  },
};
