const sub_4ReviewText1 = document.querySelectorAll('.sub_4Reviewtext1');
const sub_4ReviewText2 = document.querySelectorAll('.sub_4Reviewtext2');
const sub_4ReviewText3 = document.querySelectorAll('.sub_4Reviewtext3');

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
const Button1 = document.getElementById('btn_collapse'),
      heading = document.getElementsByClassName('sub_4ReviewTitle2'),
      Title = document.getElementsByClassName('sub_4Review2_in'),
      BodyText = document.getElementsByClassName('sub_4ReviewBody2');

      for(var y = 0; y < heading.length; y++) {
          heading[y].addEventListener('click',function(ev) {
            for(var a = 0; a < Title.length; a++) {
                Title[a].classList.remove('active2');
                ev.target.parentNode.classList.add('active2');
                activateBody();
            }
        });
      }
      function activateBody() {
        for(var j = 0; j < BodyText.length; j++){
            BodyText[j].style.display = 'none';
        }
        var activePaner = document.querySelector('.sub_4Review2_in.active2 .sub_4ReviewBody2');
        activePaner.style.display = 'block';
      }
      activateBody();

      Button1.addEventListener('click', function(){
          for(var i = 0; i < BodyText.length; i++) {
            BodyText[i].style.display = 'none';
          }
      });