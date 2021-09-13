
$(document).ready(function() {

    $('.sub_1_1garden1').slice(0,3).show()
        $('.sub_1_1bttn').on('click',function(){
            $('.sub_1_1garden1:hidden').slice(0,1).slideDown()
            if($('.sub_1_1garden1:hidden').length == 0) {
                $('.sub_1_1bttn').fadeOut('show');
            }
        });
});