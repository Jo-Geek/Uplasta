/*!
 * Mango JS
 * Jones Joseph
 * For Uplasta - via DQube GSS 
 */

$(document).ready(function () {
    dataActionUrl();
})

var dataActionUrl = function () {
    $('body').on('click', '[data-action-url]', function () {
        location.href = $(this).data('action-url');
    })
}