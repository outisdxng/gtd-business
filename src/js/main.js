function languageToggle() {
  $(".header__language .header__language-current").on("click", function (e) {
    $(this).parents(".header__language").toggleClass("active");
    $("html").one("click", function () {
      $(".header__language").removeClass("active");
    });
    e.stopPropagation();
  });
}

function mobileMenuToggle() {
  $(".header .toggle-btn").on("click", function () {
    $(this).parents(".header").toggleClass("opening");
    $("body, html").toggleClass("overflow-hidden");
  });
}

function scrollToActiveHeader() {
  $(window).scrollTop() > 50
    ? $("header").addClass("active")
    : $("header").removeClass("active");
}

function mobileDropdown() {
  $(".header .has-dropdown .icon-dropdown").on("click", function (e) {
    const dropdown = $(this).siblings(".dropdown");
    const hasDropdown = $(this).parents(".has-dropdown");
    if (dropdown.is(":hidden")) {
      $(".header .dropdown").slideUp();
      $(".header .has-dropdown").removeClass("active");
      hasDropdown.addClass("active");
      dropdown.slideDown();
    } else {
      hasDropdown.removeClass("active");
      dropdown.slideUp();
    }
  });
}

function mobileMappingListener() {
  $(".header .header__pages").mapping({
    breakpoint: 1025,
    mobileWrapper: ".header .mobile-wrapper",
    mobileMethod: "appendTo",
    desktopWrapper: ".header .header__logo",
    desktopMethod: "insertAfter",
  });
}

function homeAccordion() {
  $(".gtd-home-2 .accordion__item").on("click", function () {
    const idx = $(this).index();
    $(".gtd-home-2 .accordion__item").removeClass("active");
    $(".gtd-home-2 .accordion__item").eq(idx).addClass("active");
    $(".gtd-home-2 .content__item").removeClass("active");
    $(".gtd-home-2 .content__item").eq(idx).addClass("active");
  });
  $(".gtd-home-2 .accordion__item").first().trigger("click");
}

$(document).ready(function () {
  mobileMenuToggle();
  scrollToActiveHeader();
  languageToggle();
  mobileMappingListener();
  mobileDropdown();
  homeAccordion();
});

$(window).on("scroll", function () {
  scrollToActiveHeader();
});
