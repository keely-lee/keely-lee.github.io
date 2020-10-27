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
    function() { //mousein
      const divHeight = $(this).height();
      $(this).height(divHeight);
      $(this).toggleClass("project-hover");
      $("img", this).toggleClass("shrink");
      $(".project-desc", this).show();

    }, function() {  //mouseout
      $(".project-desc").hide(); 
      $(this).toggleClass("project-hover");
      $("img", this).toggleClass("shrink");
    }
  )

    $(".project-desc > a").hover(
      function(){ $(this).toggleClass("link-flip"); }, 
      function(){ $(this).toggleClass("link-flip"); }
    )

})(jQuery);
