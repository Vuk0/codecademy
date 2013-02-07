// build styled page HTML
$(document).ready(function() {
  $('head').append(
    '<link href="https://betadev.gilt.com/assets/stylesheets/bootstrap.min.css" rel="stylesheet" />' +
    '<link href="https://betadev.gilt.com/assets/stylesheets/custom.css" rel="stylesheet" />' +
    '<style>' +
    '.dataresult { width: 550px; height: 261px; overflow: auto; font-family: monospace; white-space: pre; background-color: #ddd; padding: 10px; border: 1px solid #ccc; }' +
    '</style>'
    );
  $('body').html(
    '<div class="navbar navbar-inverse navbar-top">' +
    '<div class="navbar-inner">' +
    '<a class="brand" href="#"><img style="position: relative; top: -2px;" src="https://betadev.gilt.com/assets/img/gilt-logo-header.png"> <span>Developers</span></a>' +
    '</div>' +
    '</div>' +
    '<div class="container-fluid">' +
    '<div class="row-fluid"><div class="span12"><button class="btn submit_button">Run your code</button></div></div>' +
    '<div class="row-fluid"><div class="span12"><div class="dataresult"></div></div></div>' +
    '</div>'
    );
});