const sub_4star2 = $('.sub_4_2star');

sub_4star2.each(function() {
    const targetScore2 = $(this).attr('data-rate');
    console.log(targetScore2);
    $(this).find('i:nth-child(-n+' +targetScore2 +')').css({color: '#efcf38'});
});