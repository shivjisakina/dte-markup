var status = "less";

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
 $('.btn-link').on('click', function(){
     var $this = $(this);
    console.log( $this.text());
     if($this.parent().siblings().hasClass('plus')){
        $this.parent().parent().parent().addClass('header-active');
    $this.parent().siblings('.plus').attr('src','resources/images/minus.png');
    $this.parent().siblings('.plus').addClass('minus');
     }else{
         console.log($this.parent().parent().parent())
        $this.parent().parent().parent().removeClass('header-active');
        $this.parent().siblings('.plus').attr('src','resources/images/plus.svg');
     }
 });
});
