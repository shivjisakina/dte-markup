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

var toggle = false;
function toggleMinus() {
    if (toggle === false) {
        document.getElementById('plus').src  = 'resources/images/plus.svg';
    } else {
       document.getElementById('plus').src = 'resources/images/minus.png';
       document.getElementById("accordion-header").classList.add('header-active');
       alert(img); 
    }
    toggle = !toggle; 
}

