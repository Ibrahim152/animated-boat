let starts1 = document.getElementById('starts1');
let moon2 = document.getElementById('moon2');
let mount3 = document.getElementById('mount3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let nov = document.querySelector('.novil');
window.onscroll = function () {
    let value = scrollY;
    starts1.style.left = value+'px';
    moon2.style.top = value*3+'px';
    mount3.style.top = value*2+'px';
    mountains4.style.top = value*1.5+'px';
    river5.style.top = value+'px';
    boat6.style.top = value+'px';
    boat6.style.left = value * 3 + 'px';
    nov.style.fontSize = value + 'px'
    if (scrollY >= 101.5999984741211) {
            nov.style.fontSize = 101.5999984741211 + 'px'
        nov.style.position = 'fixed'
        if (scrollY >= 476) {
            nov.style.display='none'
        }
        else {
            nov.style.display='block'
        }
    }
}