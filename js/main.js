$(function () {
    $(".appstore-banner a.btn-close").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $("#appstore-banner-wrapper").remove();
    });
});