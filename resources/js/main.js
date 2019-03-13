window.addEventListener('scroll', () => {
//   var parallax = document.getElementById('parallax-container');
   var paraChildren = document.getElementsByClassName('parallax-div');
   for(i = 0; i < paraChildren.length; i++) {
     paraChildren[i].style.transform = 'translateY(-' + (window.pageYOffset * i / paraChildren.length) + 'px)';
   }
}, false)

setTimeout(moveClouds, 1000);

function moveClouds() {
    var clouds = document.getElementsByClassName('clouds');
    clouds[0].classList.add('cloud1Init');
    clouds[0].classList.add('cloud1Phase2');
    setTimeout(function() {
        clouds[1].classList.add('cloud2Init');
    }, 1000);
    
    setTimeout(function() {
        clouds[0].classList.add('cloud1RestPos');
    }, 2500)
    
    setTimeout(function() {
        clouds[0].classList.add('animatePara3Loop');
    }, 3000);
    
//    setTimeout(function() {
//        clouds[1].classList.add('animatePara5Loop');
//    }, 4300);
}

$(document).ready(function() {
    $('#shine').hover(function(){
        $('#shine').addClass('hoverDiscover');
        $('#discover').addClass('hoverDiscover');
        $('#border').addClass('hoverDiscover');
        $('#shadow').addClass('showShadow');
        }, function() {
        $('#shine').removeClass('hoverDiscover');
        $('#discover').removeClass('hoverDiscover');
        $('#border').removeClass('hoverDiscover');
        $('#shadow').removeClass('showShadow');
    });
});