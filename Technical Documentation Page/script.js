$(document).ready(function(){
    $("#theme-toggle").click(function(){
        $("body").toggleClass("darkMode").css({
            "transition": "background-color 1s, color 1s"
        });
        
        $("#navbar").toggleClass("darkNav").css({
            "transition": "background-color 1s, color 1s"
        });

        $(".nav-link").toggleClass("darkLink").css({
            "transition": "background-color 1s, color 1s"
            
        });

        $("code").toggleClass("darkCode").css({
            "transition": "background-color 1s, color 1s"
        });

        if($(this).children(".mode-icon").hasClass("fas fa-lightbulb")){
            $(this).children(".mode-icon").removeClass("fas fa-lightbulb").addClass("far fa-lightbulb").addClass("pulse-glow");
            setTimeout(()=>$(this).children(".mode-icon").removeClass("pulse-glow"),500);
        }
        else{
            $(this).children(".mode-icon").removeClass("far fa-lightbulb").addClass("fas fa-lightbulb"); 
        
        }
        
    });

    // jQuery scroll-spy to highlight nav-links while scrolling the related sections

    $(window).on("scroll", function () {
        $("section").each(function () {
            if (
                $(window).scrollTop() >= $(this).offset().top &&
                $(window).scrollTop() <= $(this).offset().top + $(this).outerHeight()
            ) {
                $(".nav-link").removeClass("active");
                $(".nav-link[href='#" + $(this).attr("id") + "']").addClass("active");
            }
        });
    });



});
