
$(document).ready(function() {

    $('.sub_1_3succulent1').slice(0,3).show()
        $('.sub_1_3bttn').on('click',function(){
            $('.sub_1_3succulent1:hidden').slice(0,1).slideDown()
            if($('.sub_1_3succulent1:hidden').length == 0) {
                $('.sub_1_3bttn').fadeOut('show');
            }
        });
});