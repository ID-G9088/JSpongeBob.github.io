import $ from "jquery";
import "slick-carousel";

(function ($) {
    $(function () {
        $("ul.tabs__caption").on("click", "li:not(.active)", function () {
            const oldTabList = $(this).addClass("active").siblings().removeClass("active");
            const oldTabContent = oldTabList.closest("div.tabs").find("div.tabs__content").removeClass("active");
            const newActiveTab = oldTabContent.eq($(this).index()).addClass("active");
        });
    });
})($);

$(function () {
    $('a[href^="#"]').on("click", function (event) {
        event.preventDefault();

        let sc = $(this).attr("href"),
            dn = $(sc).offset().top;

        $("html, body").animate({ scrollTop: dn }, 1000);
    });
});

$(".products__gallery").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
});

$(".arrows__next").on("click", function () {
    $(".products__gallery").slick("slickNext");
});

$(".arrows__prev").on("click", function () {
    $(".products__gallery").slick("slickPrev");
});

$(".accordion-item .heading").on("click", function (e) {
    e.preventDefault();

    if ($(this).closest(".accordion-item").hasClass("active")) {
        $(".accordion-item").removeClass("active");
    } else {
        $(".accordion-item").removeClass("active");

        $(this).closest(".accordion-item").addClass("active");
    }

    var $content = $(this).next();
    $content.slideToggle(100);
    $(".accordion-item .content").not($content).slideUp("fast");
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 650) {
        $(".navigation").css("background-color", "rgba(49.0, 149.0, 101.0, .9)");
    } else {
        $(".navigation").css("background-color", "transparent");
    }
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 650) {
        $(".scroll").addClass("active");
    } else {
        $(".scroll").removeClass("active");
    }
});

$(".products__btn").on("click", function () {
    let counter = +$(".user__item--cart span").text();
    $(".user__item--cart span").text(`${counter + 1}`);
});
