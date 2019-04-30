window.addEventListener('scroll', () => {
//   var parallax = document.getElementById('parallax-container');
   var paraChildren = document.getElementsByClassName('parallax-div');
   for(i = 0; i < paraChildren.length; i++) {
     paraChildren[i].style.transform = 'translateY(-' + (window.pageYOffset * i / paraChildren.length) + 'px)';
   }
}, false)

//setTimeout(moveClouds, 1000);

function moveClouds() {
    var clouds = document.getElementsByClassName('clouds');
//    clouds[0].classList.add('cloud1Init');
//    clouds[0].classList.add('cloud1Phase2');
//    setTimeout(function() {
//        clouds[1].classList.add('cloud2Init');
//    }, 1000);
//    
//    setTimeout(function() {
//        clouds[0].classList.add('cloud1RestPos');
//    }, 2500)
    

    clouds[0].classList.add('animatePara3Loop');
    setTimeout(function() {
        clouds[0].classList.remove('animatePara3Loop');
    }, 3000);

    
    setInterval(function() {
        clouds[0].classList.add('animatePara3Loop');
        setTimeout(function() {
            clouds[0].classList.remove('animatePara3Loop');
        }, 3000);
    }, 30000);
    
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

$(document).ready(function() {
    $('#shine1').hover(function(){
        $('#shine1').addClass('hoverDiscover');
        $('#discover1').addClass('hoverDiscover');
        $('#border1').addClass('hoverDiscover');
        $('#shadow1').addClass('showShadow');
        }, function() {
        $('#shine1').removeClass('hoverDiscover');
        $('#discover1').removeClass('hoverDiscover');
        $('#border1').removeClass('hoverDiscover');
        $('#shadow1').removeClass('showShadow');
    });
});

//setTimeout(function() {
//    var test = document.getElementById('test');
//    test.innerHTML = '<linearGradient id="mygradient"><stop offset="0%" stop-color="red"/><stop offset="100%" stop-color="yellow"/></linearGradient>';
//}, 3000);


var originalBG = $(".discover").css("background-image");

$('.discoverBtn:not(".active")').mousemove(function(e) {

    x  = e.pageX - this.offsetLeft;
    y  = e.pageY - this.offsetTop;
    xy = x + " " + y;

    bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", 50, from(rgba(255,255,255,0.1)), to(rgba(255,255,255,0.0))), " + originalBG;

    $('.discover').css({ background: bgWebKit });

}).mouseleave(function() {
        $('.discover').css({ background: originalBG });
});

//var myWave = $('#myID').wavify({
//  height: 60,
//  bones: 4,
//  amplitude: 120,
//  color: 'url(#mygradient)',
//  speed: .10
//});

$(function () {
  $(document).scroll(function () {
    $('#topbar').toggleClass('scrolled', $(this).scrollTop() > $('#topbar').height());
  });
});

var burger = document.getElementById('burgerBtn');
burger.addEventListener('click', toggleMobNav, false);

function toggleMobNav() {
    var mobNav = document.getElementById('mobNav');
    var burgerLines = document.getElementsByClassName('burgerLine');
    
    if(mobNav.classList.contains('noDisplay')) {
        burgerLines[0].classList.add('closeNav1');
        burgerLines[1].classList.add('closeNav2');
        burgerLines[2].classList.add('closeNav3');
        mobNav.classList.remove('noDisplay');
        setTimeout(function(){
            mobNav.classList.remove('noOpacity');
        }, 100);
    } else {
        burgerLines[0].classList.remove('closeNav1');
        burgerLines[1].classList.remove('closeNav2');
        burgerLines[2].classList.remove('closeNav3');
        mobNav.classList.add('noOpacity');
        setTimeout(function(){
            mobNav.classList.add('noDisplay');
        }, 300);
    }
}