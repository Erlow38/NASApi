window.scroll(function(){
    if(document.querySelector(this).scrollTop() > 100){
         document.querySelector('.scrollUp').style('right', '10px');
    } else {
         document.querySelector('.scrollUp').removeAttribute('style');
    }
});