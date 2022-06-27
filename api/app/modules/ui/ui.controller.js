module.exports = {
  redirectToUi(request, response) {
    response.redirect(308, "/ui");
  },
};
