function showTabOne() {
  $("#tab-default-1__item").parent().attr(
    "class", "slds-tabs_default__item slds-is-active");
  $("#tab-default-1").attr(
    "class", "slds-tabs_default__content slds-show");

  $("#tab-default-2__item").parent().attr(
    "class", "slds-tabs_default__item");
  $("#tab-default-3__item").parent().attr(
    "class", "slds-tabs_default__item");

  $("#tab-default-1__item").attr("aria-selected", "true");
  $("#tab-default-2__item").attr("aria-selected", "false");
  $("#tab-default-2__item").attr("aria-selected", "false");

  $("#tab-default-2").attr(
    "class", "slds-tabs_default__content slds-hide");
  $("#tab-default-3").attr(
    "class", "slds-tabs_default__content slds-hide");
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

  $("#tab-default-2__item").attr("aria-selected", "true");
  $("#tab-default-1__item").attr("aria-selected", "false");
  $("#tab-default-1__item").attr("aria-selected", "false");

  $("#tab-default-1").attr(
    "class", "slds-tabs_default__content slds-hide");
  $("#tab-default-3").attr(
    "class", "slds-tabs_default__content slds-hide");
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

  $("#tab-default-3__item").attr("aria-selected", "true");
  $("#tab-default-1__item").attr("aria-selected", "false");
  $("#tab-default-1__item").attr("aria-selected", "false");

  $("#tab-default-1").attr(
    "class", "slds-tabs_default__content slds-hide");
  $("#tab-default-2").attr(
    "class", "slds-tabs_default__content slds-hide");
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

  $("#CAROUSEL_SLIDER").attr("style", "transform:translateX(-100%)");
}