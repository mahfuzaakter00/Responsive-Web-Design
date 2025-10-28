$(document).ready(function(){
    const header = $("header");

    $(window).on("scroll",function () {
        const scrollPos = $(window).scrollTop() + header.outerHeight();

        $("section").each(function () {
            const sectionTop = $(this).offset().top - header.outerHeight(); 
            const sectionBottom = sectionTop + $(this).outerHeight();

            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                $(".nav-link").removeClass("active");
                $(".nav-link[href='#" + $(this).attr("id") + "']").addClass("active"); 
            }

        });

    });

    //trigger the scroll handler on page load, so the correct link is highlighted immediately
    $(window).trigger("scroll");


    // // Run on scroll
    // $(window).on("scroll", highlightOnScroll);

    // // Run on page load (so correct link is active if user reloads in middle of page)
    // highlightOnScroll();

    // // Run on nav link click
    // $(".nav-link").on("click", function () {
    //     $(".nav-link").removeClass("active");
    //     $(this).addClass("active");
    // });
    
});






