const sub_2Accodions1 = document.querySelectorAll('.sub_2Accodion1');
const sub_2Accodions2 = document.querySelectorAll('.sub_2Accodion2');
const sub_2Accodions3 = document.querySelectorAll('.sub_2Accodion3');

for(var i = 0; i < sub_2Accodions1.length; i++) {
    sub_2Accodions1[i].addEventListener('click', function() {
        for (var x = 0; x < sub_2Accodions1.length; x++) {
            sub_2Accodions1[x].classList.toggle('active');
        }
    });
}
for(var i = 0; i < sub_2Accodions2.length; i++) {
    sub_2Accodions2[i].addEventListener('click', function() {
        for (var x = 0; x < sub_2Accodions2.length; x++) {
            sub_2Accodions2[x].classList.toggle('active');
        }
    });
}
for(var i = 0; i < sub_2Accodions3.length; i++) {
    sub_2Accodions3[i].addEventListener('click', function() {
        for (var x = 0; x < sub_2Accodions3.length; x++) {
            sub_2Accodions3[x].classList.toggle('active');
        }
    });
}

