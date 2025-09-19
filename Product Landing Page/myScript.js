$(document).ready(function(){
    const header = $("header");

    $(window).on("scroll",function () {
        const scrollPos = $(window).scrollTop() + header.outerHeight();

        $("section").each(function () {
            const sectionTop = $(this).offset().top - header.outerHeight(); 
            const sectionBottom = sectionTop + $(this).outerHeight();

            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                $(".nav-links a").removeClass("active");
                $(".nav-links a[href='#" + $(this).attr("id") + "']").addClass("active"); 
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
    $(".nav-links a").on("click", function () {
        $(".nav-links a").removeClass("active");
        $(this).addClass("active");
    });
    
});

// $(document).ready(function () {

//   function setActiveByScroll() {
//     const h   = $("header").outerHeight();
//     const pos = $(window).scrollTop() + h + 1; // small bias

//     let matched = false;

//     $("section").each(function () {
//       const top    = $(this).offset().top;
//       const bottom = top + $(this).outerHeight();

//       if (pos >= top && pos < bottom) {        // NOTE: strict < bottom
//         $(".nav-links a").removeClass("active");
//         $(".nav-links a[href='#" + this.id + "']").addClass("active");
//         matched = true;
//         return false; // break out of .each()
//       }
//     });

//     // When exactly at the bottom and no section matched, force the last one active
//     if (!matched && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
//       const lastId = $("section").last().attr("id");
//       $(".nav-links a").removeClass("active");
//       $(".nav-links a[href='#" + lastId + "']").addClass("active");
//     }
//   }

//   // Scroll highlight
//   $(window).on("scroll", setActiveByScroll);
//   setActiveByScroll(); // on load

//   // Click: highlight immediately + smooth scroll with header offset
//   $(".nav-links a").on("click", function (e) {
//     e.preventDefault();
//     const $target = $($(this).attr("href"));
//     if (!$target.length) return;

//     $(".nav-links a").removeClass("active");
//     $(this).addClass("active");

//     $("html, body").animate(
//       { scrollTop: $target.offset().top - $("header").outerHeight() + 1 },
//       400,
//       setActiveByScroll // sync once scrolling finishes
//     );
//   });
// });
