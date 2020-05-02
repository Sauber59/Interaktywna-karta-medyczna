$(function () {
    $("#check_date").datepicker();
    $("#check_date").datepicker();
});

$(function () {
    $("#result_date").datepicker();
    $("#result_date").datepicker();
});

$(document).ready(function () {
    $("#book_toggle").click(function () {
        $("#book-form_col-2").slideToggle()
        $("#map").slideToggle()
        $("#visits").slideToggle()
    });
});

$(document).ready(function () {
    $("#result_toggle").click(function () {
        $("#result-form_col-2").slideToggle()
    });
});

$(document).ready(function () {
    $("#result_toggle").click(function () {
        $("#wynikBadania").slideToggle()
    });
});
