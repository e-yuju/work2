

var slideWrap = document.querySelector('.container'),
    slideContainer = document.querySelector('.slider-container'),
    slides = document.querySelectorAll('.slide'),
    slideLength = slides.length,
    slideHeight = 0,
    slideCount = slides.length,
    currentIndex = 0,
    timer,
    pagerHTML = '',
    pagers = document.querySelector('.pager'), 
    // pagerBtn = document.querySelectorAll('.pager span'),
    navPrev = document.getElementById('prev'),
    navNext = document.getElementById('next');

    // console.log(slideHeight);
    // slideWrap.style.height = '800px';

    // for(var i = 0; i < slides.length; i++){

    //     if(slideHeight < slides[i].offsetHeight){
    //         slideHeight = slides[i].offsetHeight;
    //     }
    // }
    // console.log(slideHeight);

    // slideWrap.style.height = slideHeight + 'px';
    // slideContainer.style.height = slideHeight + 'px';


    /*가로배열*/

    for(var a = 0; a < slideCount; a++) {
        slides[a].style.left = a * 100 + '%';
        //<span data-idx="0">1</span>
        pagerHTML += '<span data-idx="' + a + '">' + (a+1) + '</span>'
        pagers.innerHTML = pagerHTML;

    }
    var pagerBtn = document.querySelectorAll('.pager span');


    

    //슬라이드 이동 함수
    function goToSlide(idx) {
        slideContainer.classList.add('animated');
        slideContainer.style.left = -100 * idx + '%';
        currentIndex = idx;

        for(var y = 0; y < pagerBtn.length; y++) {
            pagerBtn[y].classList.remove('active');
        }
        pagerBtn[idx].classList.add('active');
    }//goToSlide
   
    goToSlide(0);
    

    navPrev.addEventListener('click', function() {
        // goToSlide(currentIndex - 1);
        if(currentIndex == 0){
            // navPrev.classList.add('disabled');
            goToSlide(slideCount - 1);
        }else{
            // navPrev.classList.remove('disabled');
            goToSlide(currentIndex - 1);
        }        
    });
    navNext.addEventListener('click', function() {
        //goToSlide(currentIndex + 1);

        if(currentIndex == slideCount - 1){
            //navNext.classList.add('disabled');
            goToSlide(0);
        }else{
            //navNext.classList.remove('disabled');
            goToSlide(currentIndex + 1);
        }
    });

    //자동슬라이드
    //4초 마다 goToSlide(숫자) : 0, 1, 2, ...5, 0
    //setInterval(할일, 4000);
    //함수 = 할일 = function(){실제할일};
    //실제할일 = goToSlide(숫자)

    //자동슬라이드 함수
    function startAutoSlide(){
        timer = setInterval(function(){
            //goToSlide(숫자) : 0, 1, 2, ...5, 0
            var nextIdx = (currentIndex + 1) % slideCount;
            goToSlide(nextIdx);
        },3000);
    }
    startAutoSlide();

    function stopAutoSlide(){
        clearInterval(timer);
    }
    //clearInterval(대상)
    //slideWrap에 마우스가 들어오면 할일 나가면 할일
    slideWrap.addEventListener('mouseenter',function() {
        stopAutoSlide();
    });
    slideWrap.addEventListener('mouseleave',function() {
        startAutoSlide();
    });

    //pager로 이동
    for(var x = 0; x < pagerBtn.length; x++) {
        pagerBtn[x].addEventListener('click', function(event) {
            // console.log(event.target);
            //innerText 내용반환
            //innerHTML 태그를 반환
            // console.log(event.target.innerText);
            // var pagerNum = event.target.getAttribute('data-idx');
            var pagerNum = event.target.innerText - 1;
            goToSlide(pagerNum);  
            
            
        });
    }

    

