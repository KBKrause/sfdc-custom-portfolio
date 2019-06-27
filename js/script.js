let currentSelection = '1';
const numSelections = 4;

// Typed.js won't work till DOM loaded
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

function showTabN(n) {
  $("#tab-default-" + n + "__item").parent().attr(
    "class", "slds-tabs_default__item slds-is-active");
  $("#tab-default-" + n).attr(
    "class", "slds-tabs_default__content slds-show");
  $("#tab-default-" + n + "__item").attr("aria-selected", "true");

  // Hide the unselected tabs
  for (iter = 1; iter <= numSelections; iter++) {

    if (iter === currentSelection)
      continue;
    else {
      $("#tab-default-" + iter + "__item").parent().attr(
        "class", "slds-tabs_default__item");
      $("#tab-default-" + iter + "__item").attr("aria-selected", "false");
      $("#tab-default-" + iter).attr(
        "class", "slds-tabs_default__content slds-hide");
    }
  }

  selectCarouselN(n);

  if (n === '1') {
    $("#CAROUSEL_SLIDER").attr("style", "transform:translateX(-0%)");
  }
  else if (n === '2') {
    $("#CAROUSEL_SLIDER").attr("style", "transform:translateX(-100%)");
  }
  else if (n === '3') {
    $("#CAROUSEL_SLIDER").attr("style", "transform:translateX(-200%)");
  }
  else if (n === '4') {
    $("#CAROUSEL_SLIDER").attr("style", "transform:translateX(-300%)");
  }

  currentSelection = n;
}

function selectCarouselN(n) {
  $("#content-id-" + n).attr("aria-hidden", "false");
  $("#content-id-" + n).children().eq(0).attr("tabindex", "0");
  $("#indicator-id-" + n).attr("class", "slds-carousel__indicator-action slds-is-active");
  $("#indicator-id-" + n).attr("tabindex", "0");

  for (iter = 1; iter <= numSelections; iter++) {

    if (iter === currentSelection)
      continue;
    else {
      $("#content-id-" + iter).attr("aria-hidden", "true");
      $("#content-id-" + iter).children().eq(0).attr("tabindex", "-1");
      $("#indicator-id-" + iter).attr("class", "slds-carousel__indicator-action");
      $("#indicator-id-" + iter).attr("tabindex", "-1");
    }
  }
}

function autoplay() {
  $("#CAROUSEL_AUTOPLAY").attr("aria-pressed", "true");
}

function openAccordionOne() {
  $("#accordion-frameworks").attr("class", "slds-accordion__section");
  $("#accordion-products").attr("class", "slds-accordion__section");
  $("#accordion-languages").attr("class", "slds-accordion__section slds-is-open");
}

function openAccordionTwo() {
  $("#accordion-languages").attr("class", "slds-accordion__section");
  $("#accordion-products").attr("class", "slds-accordion__section");
  $("#accordion-frameworks").attr("class", "slds-accordion__section slds-is-open");
}

function openAccordionThree() {
  $("#accordion-languages").attr("class", "slds-accordion__section");
  $("#accordion-frameworks").attr("class", "slds-accordion__section");
  $("#accordion-products").attr("class", "slds-accordion__section slds-is-open");
}