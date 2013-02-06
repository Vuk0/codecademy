// build styled page HTML
$(document).ready(function() {
  $('head').append(
    '<link href="https://betadev.gilt.com/assets/stylesheets/bootstrap.min.css" rel="stylesheet" />' +
    '<link href="https://betadev.gilt.com/assets/stylesheets/custom.css" rel="stylesheet" />'
    );
  $('body').html(
    '<div class="navbar navbar-inverse navbar-top">' +
    '<div class="navbar-inner">' +
    '<a class="brand" href="#"><img style="position: relative; top: -2px;" src="https://betadev.gilt.com/assets/img/gilt-logo-header.png"> <span>Developers</span></a>' +
    '</div>' +
    '</div>' +
    '<div class="container">' +
    '<div class="row"><div class="span12">' +
    '<button class="btn submit_button">Run your code</a>' +
    '<code class="result"></div>' +
    '</div></div>' +
    '</div>'
    );
});