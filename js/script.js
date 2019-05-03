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