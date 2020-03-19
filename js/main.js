

document.addEventListener('DOMContentLoaded', function(){
    
    // Header
    
    let buttonMenu = document.querySelector('.open-menu');
    
    buttonMenu.addEventListener('click', function(){
        this.closest('.header__nav').classList.toggle('active');
    });
    
    document.addEventListener('click', function(e){
        let elem = e.target;
        
        if(!elem.closest('.header__nav')) {
            document.querySelector('.header__nav').classList.remove('active');
        }
    });
    
    let buttonCategory = document.querySelector('.open__category');
    
    buttonCategory.addEventListener('click', function(){
        this.classList.toggle('active');
        document.querySelector('.header__name-category__list').classList.toggle('active');
        document.querySelector('html').classList.toggle('overflow');
    });
    
    document.addEventListener('click', function(e){
        let elem = e.target;
        
        if(!elem.closest('.header__name-category__list') && !elem.closest('.open__category')) {
            document.querySelector('.header__name-category__list').classList.remove('active');
            document.querySelector('.open__category').classList.remove('active');
            document.querySelector('html').classList.remove('overflow');
        }
    });
    
    // // Header
    
    // Drop list 
    
    var dropList = document.querySelectorAll('.js-drop-item');


    document.addEventListener('click', function(e){
    let element = e.target;
    
    if(element.closest('.js-drop-button')){
        let isActive = element.closest('.js-drop-item').classList.contains('active')? true: false;
        
        dropList.forEach(item => {item.classList.remove('active')});
        
        if(isActive)
            element.closest('.js-drop-item').classList.remove('active');
        else
            element.closest('.js-drop-item').classList.add('active');
    }
    
    if(element.closest('.js-drop-contains')){
        let droplist = element.closest('.js-drop-item');
        let dropItems = droplist.querySelectorAll('.js-drop-contains');
        
        dropItems.forEach(item => {item.classList.remove('active')});
        element.closest('.js-drop-contains').classList.add('active');
        
        // close dropdown
        droplist.classList.remove('active');
    }
    
    });
    
    
    // //Drop list
    
    // Main banner
    
    function changeBanner() {
        let bannerShow = document.querySelector('.main-banner__item.show');
        let getId = bannerShow.getAttribute('data-index');
        let lengthArray = document.querySelectorAll('.main-banner__item').length;
        
        if(getId == lengthArray) {
            document.querySelector('.main-banner__item[data-index="1"]').classList.add('show');
            bannerShow.classList.remove('show');
        }else {
            bannerShow.nextElementSibling.classList.add('show');
            bannerShow.classList.remove('show');
        }
    }
    
    setInterval(changeBanner, 5000);
    
    // /Main banner
    
    // Infinty slider
    
    let arrowsInfinity = document.querySelectorAll('.js-arrow-infinity');
    
    function initialInfinitySlider() {
        for(var i = 0;arrowsInfinity.length > i; i++) {
            let slider = arrowsInfinity[i].closest(".slider-infinity");
            let arrowNext = arrowsInfinity[i].querySelector('.next');
            let arrowPrev = arrowsInfinity[i].querySelector('.prev');
            let sliderList = slider.querySelector('.js-infinity-slider-list');

            
            arrowNext.addEventListener('click', function() {
                let itemShow = slider.querySelector('.js-slider-item-infinity.show');
                itemShow.nextElementSibling.classList.add('show');
                itemShow.classList.remove('show');
                
                setTimeout(function(){
                    let newElem = itemShow;
                    itemShow.remove();
                    sliderList.append(newElem);
                },750);
                
            });
            
            arrowPrev.addEventListener('click', function() {
                let itemShow = slider.querySelector('.js-slider-item-infinity.show');
                let lastElem = sliderList.lastElementChild;

                sliderList.prepend(lastElem);
                
                setTimeout(function(){
                    itemShow.previousElementSibling.classList.add('show');
                    itemShow.classList.remove('show');
                },20);
            });
            
            var startPointX;
            var startPointY;
            slider.addEventListener("touchstart", function(event) {
                startPointX = event.changedTouches[0].screenX;
                startPointY = event.changedTouches[0].screenY;
            }, false);
            slider.addEventListener("touchend", function(event){
                var endPointX = event.changedTouches[0].screenX;
                var endPointY = event.changedTouches[0].screenY;
                
                if(startPointX - endPointX > 40) {
                    arrowNext.click();
                } else if(endPointX - startPointX > 40) {
                    arrowPrev.click();
                }
            }, false);
        }
    }
    
    initialInfinitySlider();
    
    // //Infinty slider
    
    
    // Scroll to top
    
    let wrapperToTop = document.querySelector('.button-to-top');
    let buttonToTop = document.querySelector('.to-top');
    
    document.addEventListener('scroll', function(){
        if(window.pageYOffset > 1000) {
            wrapperToTop.classList.add('show');
        }else {
            wrapperToTop.classList.remove('show');
        }
    });
    
    buttonToTop.addEventListener('click', function(){
       window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    
    // /Scroll to top

});
