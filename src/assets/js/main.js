
 (function(){
  "use strict";
}); 

$(".btn, .header__item").on("click", function () {
  
  $(".header__item").toggleClass("is-Open1");
  $(".header__link").toggleClass("is-Open2");
});
