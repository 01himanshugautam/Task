console.log("Linked")


$(document).ready(function() {
    $("#Language").on('change', function() {
        // alert($(this).val());
        $(".data").hide();
        $("#" + $(this).val()).fadeIn(700);
    }).change();
});