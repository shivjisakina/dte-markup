
function toggleShowMore()
{
    var x = document.getElementById("showMoreDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("toggleButton").innerHTML = "Show less"
  } else {
    x.style.display = "none";
    document.getElementById("toggleButton").innerHTML = "Show More"
  }
}
function toggleTerms()
{
    var x = document.getElementById("terms-div");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// var toggle = document.getElementsByClassName('btn-link');
// console.log(toggle)
// function toggleMinus() {
//     if (toggle === false) {
//         console.log(toggle)
//         document.getElementById('plus').src  = 'resources/images/plus.svg';
//     } else {
//         console.log(toggle)
//        document.getElementById('plus').src = 'resources/images/minus.png';
//        document.getElementById("accordion-button").classList.add('header-active');
//        alert(img); 
//     }
//     toggle = !toggle; 
// }
 $( document ).ready(function() {
/*  $('.accept-terms button').attr("disabled", true);
  $('.accept-terms .checkmark').click(function() {
    console.log($('.accept-terms .btn'))
    $('.accept-terms .btn').removeAttr('disabled');
  if ($(this).is(':checked')) {
  } else {
  $('.accept-terms button').attr('disabled',true);}
  }); */

  $(".accept-terms .checkmark").click(function(){
    console.log($('.accept-terms .btn'))
    $('.accept-terms .btn').prop("disabled", false);
    $(".accept-terms:input").prop("checked")
    if ($(this).is(':checked')) {
      $('.accept-terms .btn').prop("disabled", false);
      } else {
      $('.accept-terms .btn').attr('disabled',true);}
 });

 
 $('.card').click(function(){
     var $this = $(this);
     console.log($this.children().children().children())
     if($this.children().hasClass('collapse')){
       console.log("hi")
       $this.children('.card-header').addClass('header-active');
       $this.children('.card-header').children(".icon-div").children().attr('src','resources/images/minus.png');
       $this.children('.card-header').children(".icon-div").children().addClass('minus');
       $this.children('.card-header').children(".icon-div").children().removeClass('plus');
       $this.children().removeClass('collapse')
     } else if ($this.children().children().children().attr('aria-expanded')){
      console.log($this.children().children().children())
      console.log("hello")
      $this.children('.card-header').removeClass('header-active');
      $this.children('.card-header').children(".icon-div").children().addClass('plus');
      $this.children('.card-header').children(".icon-div").children().attr('src','resources/images/plus.svg');
     }
 });

});


