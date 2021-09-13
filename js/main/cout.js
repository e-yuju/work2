
$(document).ready(function(){
    var $services = $('.contentsBg1');
    var $counters = $('.content_position2');
    var $counterData = $counters.find('p');
    var $counterExecuted = false;


    $(window).scroll(function() {
        var $currentSct = $(this).scrollTop();
        var $offset = 650;

        var $counterThreshold = $counters.offset().top - $offset;
        
        if($currentSct > $counterThreshold){
            if(!$counterExecuted){
                $counterData.each(function(){
                    var $current = $(this);
                    var $target = $current.attr('data-rate');

                    $({rate: 0}).animate({rate: $target},{
                        duration: 2500,
                        progress: function(){
                            var now = this.rate;
                            $current.text(Math.ceil(now));
                        }
                    });
                });
                $counterExecuted = true;
            }
        }

    });
});