
const Bttn = document.querySelector('.subscribe-button');
const eMail = document.querySelector('.Email');

function goSubmit() {
    if(eMail.value == ''){
        alert('이메일을 입력하세요.');
        eMail.value = '';
        eMail.focus();
    }else if(eMail.value.indexOf('@') == -1){
        alert('이메일 형식 오류입니다.');
        eMail.value = '';
        eMail.focus();
    }
}


Bttn.addEventListener('click', goSubmit);


const Bttn1 = document.querySelector('.subscribe-button2');
const eMail1 = document.querySelector('.Email2');

function goSubmit1() {
    if(eMail1.value == ''){
        alert('이메일을 입력하세요.');
        eMail1.value = '';
        eMail1.focus();
    }else if(eMail1.value.indexOf('@') == -1){
        alert('이메일 형식 오류입니다.');
        eMail1.value = '';
        eMail1.focus();
    }
}
Bttn1.addEventListener('click', goSubmit1);














































// const subscribeBtn = document.querySelector('.subscribe-button');
// const email = document.querySelector('.Email');

// function gosubmit(){

//     if(email.value == '') {
//         alert('이메일값을 입력');
//         email.value = '';
//         email.focus();
//         // document.Email.value = '';
//         // document.Email.focus();
//     }

//     else if(email.value.indexOf("@") == -1) {
//         alert('형식오류');
//     }
// }




// console.log(email);





// subscribeBtn.addEventListener('click', gosubmit);