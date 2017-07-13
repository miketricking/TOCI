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


})(jQuery, window, document);
