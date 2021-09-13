var Drop = document.querySelector('.drop'),
    mainmenuList = document.querySelectorAll('.mainmenu > li'),
    subMenu = document.querySelectorAll('.submenu'),
    headerHeight = Drop.offsetHeight,
    subMenuHeight = 0;

    for(var i = 0; i < subMenu.length; i++) {
        if(subMenu[i].offsetHeight > subMenuHeight) {
            subMenuHeight = subMenu[i].offsetHeight;
        }
    }
    console.log(subMenuHeight);
    for(var i = 0; i < mainmenuList.length; i++) {
        mainmenuList[i].addEventListener('mouseover', function() {
            Drop.style.height = headerHeight + subMenuHeight + 'px';
        });
        mainmenuList[i].addEventListener('mouseout', function() {
            Drop.style.height = headerHeight + 'px';
        });
    }

const target = document.querySelector('.target');
const links = document.querySelectorAll('.inmenu a');
const color = ['#f1efc8', '#f1efc8', '#f1efc8', '#f1efc8', '#f1efc8'];

// for(let i = 0; i < links.length; i++){
//     links[i].addEventListener('mouseenter', function(){
//         mouseenterFunc = links[i].parentNode.classList.remove('active');
//     });
// }

// function mouseenterFunc(){
//     if(!this.parentNode.classList.contains('active'){
//         for(let i = 0; i < links.length; i++){
//             if(links[i].parentNode.classList.contains('active')){
//                 links[i].parentNode.classList.remove('active');
//             }
//             links[i].style.opacity = '0.25';
//         }
//     });
// }