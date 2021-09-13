const sub_4star = $('.sub_4star');

sub_4star.each(function() {
    const targetScore = $(this).attr('data-rate');
    console.log(targetScore);
    $(this).find('i:nth-child(-n+' +targetScore +')').css({color: '#efcf38'});
});