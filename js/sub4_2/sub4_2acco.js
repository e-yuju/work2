
const Button2 = document.getElementById('btn_collapse_2'),
      heading1 = document.getElementsByClassName('sub_4_2ReviewTitle2'),
      Title1 = document.getElementsByClassName('sub_4_2Review2_in'),
      BodyText1 = document.getElementsByClassName('sub_4_2ReviewBody2');

      for(var y = 0; y < heading1.length; y++) {
        heading1[y].addEventListener('click', function(ev){
          for(var a = 0; a < Title1.length; a++) {
            Title1[a].classList.remove('active3');
            ev.target.parentNode.classList.add('active3');
            activateBody1();
          }
        });
      }
      function activateBody1() {
        for(var j = 0 ; j < BodyText1.length; j++) {
          BodyText1[j].style.display = 'none';          
        }
        var activePanel1 = document.querySelector('.sub_4_2Review2_in.active3 .sub_4_2ReviewBody2');
        activePanel1.style.display = 'block';
        
      }
      activateBody1();
      Button2.addEventListener('click', function(){
        for(var x = 0; x < BodyText1.length; x++) {
          BodyText1[x].style.display = 'none';
        }
      });
      
