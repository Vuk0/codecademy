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
    ' for <img src="http://www.codecademy.com/assets/codecademy_logo_smallest-0323fdd409fc100a1991db8aa706f57e.png />' +
    '</div>' +
    '</div>'
    );
});