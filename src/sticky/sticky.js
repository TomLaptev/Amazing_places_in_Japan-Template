 /* var sections = $(".section"),
     nav = $("#menu"),
     nav_height = nav.outerHeight();

   $(window).on("scroll", function() {
     var cur_pos = $(this).scrollTop();

     sections.each(function() {
       var top = $(this).offset().top - nav_height,
         bottom = top + $(this).outerHeight();

       if (cur_pos >= top && cur_pos <= bottom) {
         nav.find("a").removeClass("active");
         sections.removeClass("active");

         $(this).addClass("active");
         nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
       }
     });
   });

   nav.find("a").on("click", function() {
     var $el = $(this),
       id = $el.attr("href");

     $("html, body").animate(
       {
         scrollTop: $(id).offset().top - nav_height
       },
       500
     );

     return false;
   });  */
 //===================Progress-bar==========================
 /*  $(function() {
    $(window).on("scroll resize", function() {
      var o = $(window).scrollTop() / $("#sendForm").height();
      $(".progress-bar").css({
        width: ((100 * o) | 0) + "%"
      });
      $("progress")[0].value = o;
    });
  });

  $(function() {
    $(window).on("scroll resize", function() {
      var o =
        ($(window).scrollTop() - $("#sendForm").height()) / $("#svg").height();
      $(".progress-bar").css({
        width: ((100 * o) | 0) + "%"
      });
      $(".svg-i")[0].value = o;
    });
  });

  $(function() {
    $(window).on("scroll resize", function() {
      var o =
        ($(window).scrollTop() -
          $("#sendForm").height() -
          $("#svg").height()) /
        $("#modal").height();
      $(".progress-bar").css({
        width: ((100 * o) | 0) + "%"
      });
      $(".modal-i")[0].value = o;
    });
  });

  $(function() {
    $(window).on("scroll resize", function() {
      var o =
        ($(window).scrollTop() -
          $("#sendForm").height() -
          $("#svg").height() -
          $("#modal").height()) /(
       $("#contacts").height());
      $(".progress-bar").css({
        width: ((100 * o) | 0) + "%"
      });
      $(".contacts-i")[0].value = o;
    });
  }); */

//============================================


 $(document).ready(function () {

var StickyElement = function(node) {
    var doc = $(document),
      fixed = false,
      anchor = node.find(".sticky-anchor"),
      content = node.find(".sticky-content");

    var onScroll = function(e) {
      var docTop = doc.scrollTop(),
        anchorTop = anchor.offset().top;

      if (docTop > anchorTop) {
        if (!fixed) {
          anchor.height(content.outerHeight());
          content.addClass("fixed");
          fixed = true;
        }
      } else {
        if (fixed) {
          anchor.height(0);
          content.removeClass("fixed");
          fixed = false;
        }
      }
    };

    $(window).on("scroll", onScroll);
  };

  var demo = new StickyElement($("#sticky"));


}); 

 /* $('#sticky').stickybits({useStickyClasses: true});
*/