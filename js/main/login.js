const N_name = document.querySelector('.n_name');
const E_mail = document.querySelector('.e_mail');
const P_word = document.querySelector('.p_word');
const LogIn = document.querySelector('.log_bttn');
const ReSet = document.querySelector('.reset_bttn');

console.log(LogIn);

function LoginSubmit(){
    if(N_name.value == ''){
        alert('닉네임을 입력하세요.');
        N_name.value = '';
        N_name.focus();
    }else if(E_mail.value == ''){
        alert('이메일을 입력하세요.');
        E_mail.value = '';
        E_mail.focus();
    }else if(E_mail.value.indexOf('@') == -1){
        alert('이메일 형식 오류입니다.');
        E_mail.value = '';
        E_mail.focus();
    }else if(P_word.value == ''){
        alert('비밀번호를 입력하세요.');
        P_word.value = '';
        P_word.focus();
    }else if(P_word.length != 6){
        alert('비밀번호를 정확히 입력하세요.');
        P_word.value = '';
        P_word.focus();
    }
}


LogIn.addEventListener('click', LoginSubmit);

ReSet.addEventListener('click', function() {
    if(N_name.value != '' && E_mail.value != '' && P_word.value != ''){
        alert('삭제하겠습니다.');
        N_name.value = '';
        E_mail.value = '';
        P_word.value = '';
        N_name.focus();
    }
});