$(document).ready(() => {
  new WOW().init();

  $('.header-contacts__button').on('click', () => {
    $('.overlay').show()
  });

  $('.popup-close').on('click', () => {
    $('.overlay').hide()
  });
});