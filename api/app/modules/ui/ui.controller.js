module.exports = {
    redirectToUI(request, response) {
        console.log('redirect--->');
        response.redirect(308, '/ui');
    }
};
