import '../scss/category.scss';


import "bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min";
$(function () {
    // Basic instantiation:
    $('#category_color').colorpicker();

    // Example using an event, to change the color of the #demo div background:
    $('#category_color').on('colorpickerChange', function(event) {
        $('#category_color').css('background-color', event.color.toString());
    });
});