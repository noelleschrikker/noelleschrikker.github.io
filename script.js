var h1 = $('#h1');
var h2 = $('#h2');
var h3 = $('#h3');
var h4 = $('#h4');
var g1 = $('#g1')
var g2 = $('#g2')
var g3 = $('#g3')
var g4 = $('#g4')
var promoPara = $('.promo_para')
var headerText = $('.header_text');
var promoText1 = $('#p1');
var promoText2 = $('#p2');
var promoText3 = $('#p3');
var promoText4 = $('#p4');
var promoButton1 = $('#b1');
var promoButton2 = $('#b2');
var promoButton3 = $('#b3');
var promoButton4 = $('#b4');
var hide = true;
var fadeSpeed = 700;

headerText.hide();
headerText.fadeIn(1500);

promoText1.hide();
promoText2.hide();
promoText3.hide();
promoText4.hide();


h1.click(function() {
  if (hide) {
    h1.hide();
    h2.hide();
    h3.hide();
    h4.hide();
    promoText1.fadeIn(fadeSpeed);
    hide = false;
  }
});
h2.click(function() {
  if (hide) {
    h1.hide();
    h2.hide();
    h3.hide();
    h4.hide();
    promoText2.fadeIn(fadeSpeed);
    hide = false;
  }
});
h3.click(function() {
  if (hide) {
    h1.hide();
    h2.hide();
    h3.hide();
    h4.hide();
    promoText3.fadeIn(fadeSpeed);
    hide = false;
  }
});
h4.click(function() {
  if (hide) {
    h1.hide();
    h2.hide();
    h3.hide();
    h4.hide();
    promoText4.fadeIn(fadeSpeed);
    hide = false;
  }
});

g1.click(function() {
  promoText1.hide();
  h1.fadeIn(fadeSpeed);
  h2.fadeIn(fadeSpeed);
  h3.fadeIn(fadeSpeed);
  h4.fadeIn(fadeSpeed);
  hide = true;
})
g2.click(function() {
  promoText2.hide();
  h1.fadeIn(fadeSpeed);
  h2.fadeIn(fadeSpeed);
  h3.fadeIn(fadeSpeed);
  h4.fadeIn(fadeSpeed);
  hide = true;
})
g3.click(function() {
  promoText3.hide();
  h1.fadeIn(fadeSpeed);
  h2.fadeIn(fadeSpeed);
  h3.fadeIn(fadeSpeed);
  h4.fadeIn(fadeSpeed);
  hide = true;
})
g4.click(function() {
  promoText4.hide();
  h1.fadeIn(fadeSpeed);
  h2.fadeIn(fadeSpeed);
  h3.fadeIn(fadeSpeed);
  h4.fadeIn(fadeSpeed);
  hide = true;
})
