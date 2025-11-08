$(document).ready(function(){
    $("#theme-toggle").click(function(){
        $("body").toggleClass("darkMode").css({
            "transition": "background-color 1s, color 1s"
        });
        
        $("input").toggleClass("darkMode");
        $("textarea").toggleClass("darkMode");
        $("select").toggleClass("darkMode");

        if($(this).children(".mode-icon").hasClass("fas fa-lightbulb")){
            $(this).children(".mode-icon").removeClass("fas fa-lightbulb").addClass("far fa-lightbulb").addClass("pulse-glow");
            setTimeout(()=>$(this).children(".mode-icon").removeClass("pulse-glow"),500);
        }
        else{
            $(this).children(".mode-icon").removeClass("far fa-lightbulb").addClass("fas fa-lightbulb");
        }        
    });
});
