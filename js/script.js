$(document).ready(function () {
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    backSpeed: 40,
    typeSpeed: 40,
    backDelay: 2500,
    loop: true,
    loopCount: Infinity,
  });
});

function showTabOne() {
  $("#tab-default-1__item").parent().attr(
    "class", "slds-tabs_default__item slds-is-active");
  $("#tab-default-1").attr(
    "class", "slds-tabs_default__content slds-show");

  $("#tab-default-2__item").parent().attr(
    "class", "slds-tabs_default__item");
  $("#tab-default-3__item").parent().attr(
    "class", "slds-tabs_default__item");
  $("#tab-default-4__item").parent().attr(
    "class", "slds-tabs_default__item");

  $("#tab-default-1__item").attr("aria-selected", "true");
  $("#tab-default-3__item").attr("aria-selected", "false");
  $("#tab-default-2__item").attr("aria-selected", "false");
  $("#tab-default-4__item").attr("aria-selected", "false");

  $("#tab-default-2").attr(
    "class", "slds-tabs_default__content slds-hide");
  $("#tab-default-3").attr(
    "class", "slds-tabs_default__content slds-hide");

  $("#CAROUSEL_SLIDER").attr("style", "transform:translateX(-0%)");
  selectCarouselOne();
}

function showTabTwo() {
  $("#tab-default-2__item").parent().attr(
    "class", "slds-tabs_default__item slds-is-active");
  $("#tab-default-2").attr(
    "class", "slds-tabs_default__content slds-show");

  $("#tab-default-1__item").parent().attr(
    "class", "slds-tabs_default__item");
  $("#tab-default-3__item").parent().attr(
    "class", "slds-tabs_default__item");
  $("#tab-default-4__item").parent().attr(
    "class", "slds-tabs_default__item");

  $("#tab-default-2__item").attr("aria-selected", "true");
  $("#tab-default-3__item").attr("aria-selected", "false");
  $("#tab-default-1__item").attr("aria-selected", "false");
  $("#tab-default-4__item").attr("aria-selected", "false");

  $("#tab-default-1").attr(
    "class", "slds-tabs_default__content slds-hide");
  $("#tab-default-3").attr(
    "class", "slds-tabs_default__content slds-hide");
  $("#tab-default-4").attr(
    "class", "slds-tabs_default__content slds-hide");

  $("#CAROUSEL_SLIDER").attr("style", "transform:translateX(-100%)");
  selectCarouselTwo();
}

function showTabThree() {
  $("#tab-default-3__item").parent().attr(
    "class", "slds-tabs_default__item slds-is-active");
  $("#tab-default-3").attr(
    "class", "slds-tabs_default__content slds-show");

  $("#tab-default-1__item").parent().attr(
    "class", "slds-tabs_default__item");
  $("#tab-default-2__item").parent().attr(
    "class", "slds-tabs_default__item");
  $("#tab-default-4__item").parent().attr(
    "class", "slds-tabs_default__item");

  $("#tab-default-3__item").attr("aria-selected", "true");
  $("#tab-default-2__item").attr("aria-selected", "false");
  $("#tab-default-1__item").attr("aria-selected", "false");
  $("#tab-default-4__item").attr("aria-selected", "false");

  $("#tab-default-1").attr(
    "class", "slds-tabs_default__content slds-hide");
  $("#tab-default-2").attr(
    "class", "slds-tabs_default__content slds-hide");
  $("#tab-default-4").attr(
    "class", "slds-tabs_default__content slds-hide");

  $("#CAROUSEL_SLIDER").attr("style", "transform:translateX(-200%)");
  selectCarouselThree();
}

function showTabFour() {
  $("#tab-default-4__item").parent().attr(
    "class", "slds-tabs_default__item slds-is-active");
  $("#tab-default-4").attr(
    "class", "slds-tabs_default__content slds-show");

  $("#tab-default-1__item").parent().attr(
    "class", "slds-tabs_default__item");
  $("#tab-default-2__item").parent().attr(
    "class", "slds-tabs_default__item");
  $("#tab-default-3__item").parent().attr(
    "class", "slds-tabs_default__item");

  $("#tab-default-4__item").attr("aria-selected", "true");
  $("#tab-default-3__item").attr("aria-selected", "false");
  $("#tab-default-2__item").attr("aria-selected", "false");
  $("#tab-default-1__item").attr("aria-selected", "false");

  $("#tab-default-1").attr(
    "class", "slds-tabs_default__content slds-hide");
  $("#tab-default-2").attr(
    "class", "slds-tabs_default__content slds-hide");
  $("#tab-default-3").attr(
    "class", "slds-tabs_default__content slds-hide");

  $("#CAROUSEL_SLIDER").attr("style", "transform:translateX(-300%)");
  selectCarouselFour();
}

function selectCarouselOne() {
  $("#content-id-01").attr("aria-hidden", "false");
  $("#content-id-01").children().eq(0).attr("tabindex", "0");
  $("#indicator-id-01").attr("class", "slds-carousel__indicator-action slds-is-active");
  $("#indicator-id-01").attr("tabindex", "0");

  $("#content-id-02").attr("aria-hidden", "true");
  $("#content-id-02").children().eq(0).attr("tabindex", "-1");
  $("#indicator-id-02").attr("class", "slds-carousel__indicator-action");
  $("#indicator-id-02").attr("tabindex", "-1");

  $("#content-id-03").attr("aria-hidden", "true");
  $("#content-id-03").children().eq(0).attr("tabindex", "-1");
  $("#indicator-id-03").attr("class", "slds-carousel__indicator-action");
  $("#indicator-id-03").attr("tabindex", "-1");

  $("#content-id-04").attr("aria-hidden", "true");
  $("#content-id-04").children().eq(0).attr("tabindex", "-1");
  $("#indicator-id-04").attr("class", "slds-carousel__indicator-action");
  $("#indicator-id-04").attr("tabindex", "-1");
}

function selectCarouselTwo() {
  $("#content-id-01").attr("aria-hidden", "true");
  $("#content-id-01").children().eq(0).attr("tabindex", "-1");
  $("#indicator-id-01").attr("class", "slds-carousel__indicator-action");
  $("#indicator-id-01").attr("tabindex", "-1");

  $("#content-id-02").attr("aria-hidden", "false");
  $("#content-id-02").children().eq(0).attr("tabindex", "0");
  $("#indicator-id-02").attr("class", "slds-carousel__indicator-action slds-is-active");
  $("#indicator-id-02").attr("tabindex", "0");

  $("#content-id-03").attr("aria-hidden", "true");
  $("#content-id-03").children().eq(0).attr("tabindex", "-1");
  $("#indicator-id-03").attr("class", "slds-carousel__indicator-action");
  $("#indicator-id-03").attr("tabindex", "-1");

  $("#content-id-04").attr("aria-hidden", "true");
  $("#content-id-04").children().eq(0).attr("tabindex", "-1");
  $("#indicator-id-04").attr("class", "slds-carousel__indicator-action");
  $("#indicator-id-04").attr("tabindex", "-1");
}

function selectCarouselThree() {
  $("#content-id-01").attr("aria-hidden", "true");
  $("#content-id-01").children().eq(0).attr("tabindex", "-1");
  $("#indicator-id-01").attr("class", "slds-carousel__indicator-action");
  $("#indicator-id-01").attr("tabindex", "-1");

  $("#content-id-02").attr("aria-hidden", "true");
  $("#content-id-02").children().eq(0).attr("tabindex", "-1");
  $("#indicator-id-02").attr("class", "slds-carousel__indicator-action");
  $("#indicator-id-02").attr("tabindex", "-1");

  $("#content-id-03").attr("aria-hidden", "false");
  $("#content-id-03").children().eq(0).attr("tabindex", "0");
  $("#indicator-id-03").attr("class", "slds-carousel__indicator-action slds-is-active");
  $("#indicator-id-03").attr("tabindex", "0");

  $("#content-id-04").attr("aria-hidden", "true");
  $("#content-id-04").children().eq(0).attr("tabindex", "-1");
  $("#indicator-id-04").attr("class", "slds-carousel__indicator-action");
  $("#indicator-id-04").attr("tabindex", "-1");
}

function selectCarouselFour() {
  $("#content-id-01").attr("aria-hidden", "true");
  $("#content-id-01").children().eq(0).attr("tabindex", "-1");
  $("#indicator-id-01").attr("class", "slds-carousel__indicator-action");
  $("#indicator-id-01").attr("tabindex", "-1");

  $("#content-id-02").attr("aria-hidden", "true");
  $("#content-id-02").children().eq(0).attr("tabindex", "-1");
  $("#indicator-id-02").attr("class", "slds-carousel__indicator-action");
  $("#indicator-id-02").attr("tabindex", "-1");

  $("#content-id-04").attr("aria-hidden", "false");
  $("#content-id-04").children().eq(0).attr("tabindex", "0");
  $("#indicator-id-04").attr("class", "slds-carousel__indicator-action slds-is-active");
  $("#indicator-id-04").attr("tabindex", "0");

  $("#content-id-03").attr("aria-hidden", "true");
  $("#content-id-03").children().eq(0).attr("tabindex", "-1");
  $("#indicator-id-03").attr("class", "slds-carousel__indicator-action");
  $("#indicator-id-03").attr("tabindex", "-1");
}

function autoplay() {
  $("#CAROUSEL_AUTOPLAY").attr("aria-pressed", "true");
}
