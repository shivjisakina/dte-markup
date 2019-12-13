function toggleShowMore() {
  var x = document.getElementById("showMoreDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("toggleButton").innerHTML = "Show less"
  } else {
    x.style.display = "none";
    document.getElementById("toggleButton").innerHTML = "Show More"
  }
}

function toggleTerms() {
  var x = document.getElementById("terms-div");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

$(document).ready(function () {

  $(".accept-terms .checkmark").click(function () {
    console.log($('.accept-terms .btn'))
    $('.accept-terms .btn').prop("disabled", false);
    $(".accept-terms:input").prop("checked")
    if ($(this).is(':checked')) {
      $('.accept-terms .btn').prop("disabled", false);
    } else {
      $('.accept-terms .btn').attr('disabled', true);
    }
  });

  $('.card').click(function () {
    var $this = $(this);
    console.log("first" + ($this.children().children().children()))
    if (!$this.children().hasClass('show')) {
      $this.children('.card-header').addClass('header-active');
      $this.children('.card-header').children(".icon-div").children().attr('src', 'resources/images/minus.png');
      $this.children('.card-header').children(".icon-div").children().addClass('minus');
      $this.children('.card-header').children(".icon-div").children().removeClass('plus');
      $this.children().removeClass('collapse')
    } else if ($this.children().hasClass('show')) {
      $this.children('.card-header').removeClass('header-active');
      $this.children('.card-header').children(".icon-div").children().addClass('plus');
      $this.children('.card-header').children(".icon-div").children().attr('src', 'resources/images/plus.svg');
    }
  });

  $('.video').parent().click(function () {
    if($(this).children(".video").get(0).paused){        
      $(this).children(".video").get(0).play();   
      $(this).children(".playpause").hide();
      }else{       
        $(this).children(".video").get(0).pause();
        $(this).children(".playpause").hide();
      }
  });

  if ($(document).width() <= 768) {

  $(".carousel-item.active").next().css({"display": "block", "left": "100%", "opacity": "0.4"});
  $('#carouselExample').on('slid.bs.carousel', function () {
    $(".carousel-item").css({"display": "none", "left": "initial"});
    $(".carousel-item.active").css({"display": "block", "left": "initial", "opacity": "1"});
    $(".carousel-item.active").next().css({"display": "block", "left": "100%", "opacity": "0.4"});
  })
}

});