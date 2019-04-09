// function offset() {
//     var doc = document, w = window;
//     var y, docEl;
    
//     if ( typeof w.pageYOffset === 'number' ) {
//         y = w.pageYOffset;
//     } else {
//         docEl = (doc.compatMode && doc.compatMode === 'CSS1Compat')?
//                 doc.documentElement: doc.body;
//         y = docEl.scrollTop;
//     }
//     return y;
// }
// var y =0;
// var runOnScroll =  function(evt) {
//     // not the most exciting thing, but a thing nonetheless
//     y = offset();
//     console.log(y)
//     document.getElementById('p-pic').style.top = 'y';
//   };

//   window.addEventListener("scroll", runOnScroll);
var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
var buttonstate = 1;
var width = $(window).width();

function set_black_comp()
{
    bgChange('Black');
    tcChange('rgba(255,255,255,0.8)');
    document.getElementById('button').style.background = 'rgba(0,0,0,1)';
    document.getElementById('button').style.color = 'rgba(255,255,255,1)';
    document.getElementById('button').style.borderColor = 'rgba(255,255,255,1)';
    document.getElementById('button').innerHTML = 'LIGHT';
    document.getElementById('header').style.background = '#c51f5d'
    document.getElementById('header-top').style.background = '#c51f5d'
}
function set_white_comp()
{
    bgChange('White');
    tcChange('Black');
    document.getElementById('button').style.background = 'rgba(255,255,255,1)';
    document.getElementById('button').style.color = 'rgba(0,0,0,1)';
    document.getElementById('button').style.borderColor = 'rgba(0,0,0,1)';
    document.getElementById('button').innerHTML = 'DARK';
    document.getElementById('header').style.background = '#49bf9d'
    document.getElementById('header-top').style.background = '#49bf9d'
}
function set_white_phone()
{
    tcChange('Black');
    document.getElementById('main').style.background = 'rgba(255,255,255,0.7)';
    document.getElementById('button').style.background = 'rgba(255,255,255,1)';
    document.getElementById('button').style.color = 'rgba(0,0,0,1)';
    document.getElementById('button').style.borderColor = 'rgba(0,0,0,1)';
    document.getElementById('button').innerHTML = 'DARK';
    document.getElementById('header-top').style.background = '#49bf9d'
    document.getElementById('footer').style.background = '#49bf9d'
}
function set_black_phone()
{
    tcChange('rgba(255,255,255,0.8)');
    document.getElementById('main').style.background = 'rgba(0,0,0,0.8)';
    document.getElementById('button').style.background = 'rgba(0,0,0,1)';
    document.getElementById('button').style.color = 'rgba(255,255,255,1)';
    document.getElementById('button').style.borderColor = 'rgba(255,255,255,1)';
    document.getElementById('button').innerHTML = 'LIGHT';
    document.getElementById('header-top').style.background = '#c51f5d'
    document.getElementById('footer').style.background = '#c51f5d'
}

window.onresize = function(){
    width = $(window).width()
    if(width < 640)
    {
        if(buttonstate == 1)
        {
            set_white_phone();
        }
        else
        {
            set_black_phone();
        }
    }
    else
    {
        if(buttonstate == 1)
        {
           set_white_comp();
        }
        else
        {
            set_black_comp();
        } 
    }
};

function bgChange(bg) {
    document.body.style.background = bg;
  };
function tcChange(tc){
    document.body.style.color = tc;
};

button.onclick = function(){
    console.log(iOS);
    if(width > 640)
    {
        document.getElementById('main').style.background = 'rgba(0,0,0,0)';
        if (buttonstate == 1)
        {
            set_black_comp();
            buttonstate = 0;
        }
        else
        {
            set_white_comp();
            buttonstate = 1;
        }
    }
    else
    {
        document.getElementById('main').style.background = 'rgba(0,0,0,0.8)';
        if(buttonstate == 1)
        {
            set_black_phone();
            buttonstate = 0;
        }
        else
        {
            set_white_phone();
            buttonstate = 1;
        }
    }
};