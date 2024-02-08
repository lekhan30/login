$(document).ready(function(){
      $("#eye-change").click(function(){
        $("#eye-change").toggleClass("fa-eye");

        $(this).toggleClass("active");
            if ($(this).hasClass("active")) {
                $(this).prev("input").attr("type", "text");
            } else {
                $(this).prev("input").attr("type", "password");
        }

      });
  });

 

  

