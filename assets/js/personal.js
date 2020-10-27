(function personal() {
  // Flip business card in contact section
  $(".flip").click(flipContact)

  function flipContact(){
    $("#contact-wrapper").toggleClass("flip-down");
    $("#contact-wrapper").toggleClass("flip-up");
  }


  // Project animation slide
  $(".project-desc").hide();

  $(".project-div").hover( 

    function() {
      const divHeight = $(this).height();
      $(this).height(divHeight);
      $(this).toggleClass("project-hover");
      $("img", this).toggleClass("shrink");
      $(".project-desc", this).show();
    }, function() { 
      $(".project-desc").hide(); 
      $(this).toggleClass("project-hover");
      $("img", this).toggleClass("shrink");
    }
  )
})(jQuery);
