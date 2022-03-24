function initLazyload() {
  return new LazyLoad({
    elements_selector: ".lazy",
  });
}

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
  $(document).on(
    "click",
    ".header .menu-item-has-children .icon-dropdown",
    function (e) {
      const dropdown = $(this).siblings(".sub-menu");
      const hasDropdown = $(this).parents(".menu-item-has-children");
      if (dropdown.is(":hidden")) {
        $(".header .sub-menu").slideUp();
        $(".header .menu-item-has-children").removeClass("current_page_item");
        hasDropdown.addClass("current_page_item");
        dropdown.slideDown();
      } else {
        hasDropdown.removeClass("current_page_item");
        dropdown.slideUp();
      }
    }
  );
}

function addIconToHasSubItem() {
  $(".header .menu-item-has-children").each(function () {
    $(this).find(".sub-menu").before(`<span class="icon-dropdown"></span>`);
    console.log($(this));
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

function equalHeightElement(el) {
  let height = 0;
  let thisHeight = 0;
  $(el).each(function () {
    thisHeight = $(this).height();
    if (thisHeight > height) {
      height = thisHeight;
    }
  });
  if (window.matchMedia("(min-width: 1025px)").matches) {
    $(el).height(height);
  } else {
    $(el).height("100px");
  }
}

function caseStudyScrollToSection() {
  $(".gtd-case-study-1 .navigation__item").on("click", function () {
    const idx = $(this).index();
    const offset = $(".gtd-case-study-1 h2").eq(idx).length
      ? $(".gtd-case-study-1 h2").eq(idx).offset().top
      : null;
    // const heightDismiss = $(window).height() / 5;
    const heightDismiss = 30;
    const menuHeight = $(".header").height();
    if (offset) {
      $("body, html").animate(
        {
          scrollTop: offset - heightDismiss - menuHeight,
        },
        1000
      );
    }
  });
}

function caseStudyScrollListener() {
  if ($(".gtd-case-study-1 .navigation").length) {
    $(".gtd-case-study-1 .navigation__item").each(function (idx) {
      const offset = $(".gtd-case-study-1 h2").eq(idx).length
        ? $(".gtd-case-study-1 h2").eq(idx).offset().top
        : null;
      // const heightDismiss = $(window).height() / 5;
      const heightDismiss = 30;
      const menuHeight = $(".header").height();

      if (
        offset &&
        $(window).scrollTop() >= offset - heightDismiss - menuHeight
      ) {
        $(".gtd-case-study-1 .navigation__item").removeClass("active");
        $(this).addClass("active");
      }
    });
  }
}

$(document).ready(function () {
  initLazyload();
  mobileMenuToggle();
  scrollToActiveHeader();
  addIconToHasSubItem();
  languageToggle();
  mobileMappingListener();
  mobileDropdown();
  homeAccordion();
  caseStudyScrollToSection();
  caseStudyScrollListener();
  equalHeightElement(".gtd-btm-2 .content__item h4");
  equalHeightElement(".gtd-btm-3 .solution__text");

  let customerReviewSlider = new Swiper(".gtd-home-4 .swiper-container", {
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 5000,
    },
  });
});

$(window).on("scroll", function () {
  scrollToActiveHeader();
  caseStudyScrollListener();
});
