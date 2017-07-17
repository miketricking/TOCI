/*!
 * ICOToken
 * ICO Token
 * https://icotoken.tk
 * @author 
 * @version 0.0.1
 * Copyright 2017. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    document.getElementById("play").onclick = function () {
      var rocket = document.getElementById("rocket");
      var clouds = document.getElementById("clouds");
      rocket.classList.add("rocket-animation");
      clouds.classList.add("clouds-animation");

      setTimeout(function() {
        rocket.classList.remove("rocket-animation");
        clouds.classList.remove("clouds-animation");
      },3000);
    };
  });

  $(window).scroll(function() {
   var nav = document.getElementById("sticky-nav");
   var hT = $("#about.section").offset().top,
       hH = $("#about.section").outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();

  if ($(window).scrollTop() > 100) {
    nav.style.top = "-100px";
  } else {
    nav.style.top = "0px";
  }

   if (wS > (hT+hH-wH) && nav.classList.contains("stick") == false) {
      nav.classList.add("stick")
   }
   if ($(window).scrollTop() < 1) {
     nav.classList.remove("stick")
   }
});

  function getTotal() {
      var total;
      var issued;
      var eth;
      var url = "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xb9955B00FB89456B1a0364CD392e81cD37f6bCe8&address=0xA25e2De7B76435BED3e3173e82F18a7C76af8c35&tag=latest";
      return $.ajax(url, {
          cache: false,
          dataType: "json"
      }).then(function (data) {
        total = parseInt(data.result)
        total = (total / 1000000000000000000) - 12500;
        total = total.toFixed(4);
        issued = (12500 - total).toFixed(4);
        eth = (issued / 25).toFixed(4);
        document.getElementById("eth").innerHTML = eth
        document.getElementById("tokens").innerHTML = issued
        document.getElementById("total").innerHTML = total
      });
  }

  getTotal()

    var burger = document.querySelector('.navbar-burger');
    var target = burger.dataset.target;
    var menu = document.getElementById(target);

    function toggleMenu() {
          burger.classList.toggle('is-active');
          menu.classList.toggle('is-active');
    }

    burger.addEventListener('click', toggleMenu);

  $('#navMenu .navbar-item').on('click', toggleMenu);


})(jQuery, window, document);
