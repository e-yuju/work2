const sub_4ReviewText1 = document.querySelectorAll('.sub_4Reviewtext1');
const sub_4ReviewText2 = document.querySelectorAll('.sub_4Reviewtext2');
const sub_4ReviewText3 = document.querySelectorAll('.sub_4Reviewtext3');
const sub_4ReviewText4 = document.querySelectorAll('.sub_4Reviewtext4');
const sub_4ReviewText5 = document.querySelectorAll('.sub_4Reviewtext5');
const sub_4ReviewText6 = document.querySelectorAll('.sub_4Reviewtext6');
const sub_4ReviewText7 = document.querySelectorAll('.sub_4Reviewtext7');
const sub_4ReviewText8 = document.querySelectorAll('.sub_4Reviewtext8');
const sub_4ReviewText9 = document.querySelectorAll('.sub_4Reviewtext9');

for(var i = 0; i < sub_4ReviewText1.length; i++) {
    sub_4ReviewText1[i].addEventListener('click', function(){
        for(var x = 0; x < sub_4ReviewText1.length; x++) {
            sub_4ReviewText1[x].classList.toggle('active');
        }
    });
}
for(var i = 0; i < sub_4ReviewText2.length; i++) {
    sub_4ReviewText2[i].addEventListener('click', function(){
        for(var x = 0; x < sub_4ReviewText2.length; x++) {
            sub_4ReviewText2[x].classList.toggle('active');
        }
    });
}
for(var i = 0; i < sub_4ReviewText3.length; i++) {
    sub_4ReviewText3[i].addEventListener('click', function(){
        for(var x = 0; x < sub_4ReviewText3.length; x++) {
            sub_4ReviewText3[x].classList.toggle('active');
        }
    });
}
for(var i = 0; i < sub_4ReviewText4.length; i++) {
    sub_4ReviewText4[i].addEventListener('click', function(){
        for(var x = 0; x < sub_4ReviewText4.length; x++) {
            sub_4ReviewText4[x].classList.toggle('active');
        }
    });
}
for(var i = 0; i < sub_4ReviewText5.length; i++) {
    sub_4ReviewText5[i].addEventListener('click', function(){
        for(var x = 0; x < sub_4ReviewText5.length; x++) {
            sub_4ReviewText5[x].classList.toggle('active');
        }
    });
}
for(var i = 0; i < sub_4ReviewText6.length; i++) {
    sub_4ReviewText6[i].addEventListener('click', function(){
        for(var x = 0; x < sub_4ReviewText6.length; x++) {
            sub_4ReviewText6[x].classList.toggle('active');
        }
    });
}
for(var i = 0; i < sub_4ReviewText7.length; i++) {
    sub_4ReviewText7[i].addEventListener('click', function(){
        for(var x = 0; x < sub_4ReviewText7.length; x++) {
            sub_4ReviewText7[x].classList.toggle('active');
        }
    });
}
for(var i = 0; i < sub_4ReviewText8.length; i++) {
    sub_4ReviewText8[i].addEventListener('click', function(){
        for(var x = 0; x < sub_4ReviewText8.length; x++) {
            sub_4ReviewText8[x].classList.toggle('active');
        }
    });
}
for(var i = 0; i < sub_4ReviewText9.length; i++) {
    sub_4ReviewText9[i].addEventListener('click', function(){
        for(var x = 0; x < sub_4ReviewText9.length; x++) {
            sub_4ReviewText9[x].classList.toggle('active');
        }
    });
}


const sub_4ReviewTexts = document.querySelectorAll('.sub_4Reviewtext');



for(var i = 0; i < sub_4ReviewTexts.length; i++) {

    sub_4ReviewTexts[i].addEventListener('click', function(){
                for(var x = 0; x < sub_4ReviewTexts.length; x++) {
                    sub_4ReviewTexts[x].classList.toggle('active');
                }
});
}


const sub4Review1 = document.querySelector('.sub_4Review1');

console.log(sub4Review1);

var currentMenu;

function toggle(e) {

      console.log(e.currentTarget);

    if(e.currentTarget.matches('.sub_4Reviewtitle')) {

        document.getElementById(e.taget.getAttribute('data-id')).classList.add('active');
  }
}


sub4Review1.addEventListener('click', toggle);