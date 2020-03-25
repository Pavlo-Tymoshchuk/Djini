

document.addEventListener('DOMContentLoaded', function(){
    
    // Header
    
    let buttonMenu = document.querySelector('.open-menu');
    
    if(buttonMenu) {
        buttonMenu.addEventListener('click', function(){
            this.closest('.header__nav').classList.toggle('active');
        });
    }
    
    document.addEventListener('click', function(e){
        let elem = e.target;
        
        if(!elem.closest('.header__nav')) {
            if(document.querySelector('.header__nav')){
                document.querySelector('.header__nav').classList.remove('active');
            }
            
        }
    });
    
    let buttonCategory = document.querySelector('.open__category');
    
    if(buttonCategory) {
        buttonCategory.addEventListener('click', function(){
            this.classList.toggle('active');
            document.querySelector('.js-name-category').classList.toggle('active');
            document.querySelector('html').classList.toggle('overflow');
        });
    }
    
    
    document.addEventListener('click', function(e){
        let elem = e.target;
        
        if(!elem.closest('.js-name-category') && !elem.closest('.open__category') && !elem.closest('.header-mobile__nav')) {
            
            if(document.querySelector('.js-name-category')) {
                document.querySelector('.js-name-category').classList.remove('active');
                document.querySelector('.open__category').classList.remove('active');
                document.querySelector('html').classList.remove('overflow');
            }
        }
        
        if(elem.closest('.burger-button')) {
            let mobileMenu = document.querySelector('.header-mobile__nav');
            
            if(mobileMenu) {
                mobileMenu.classList.add("active");
                document.querySelector('html').classList.add('overflow');
            }
        }
        
        if(elem.closest(".header__close")) {
            document.querySelector('.header-mobile__nav').classList.remove("active");
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
        
        if(element.closest('.js-catalog-drop-button')){
            let isActive = element.closest('.js-catalog-drop-item').classList.contains('active')? true: false;
            dropList = document.querySelectorAll('.js-catalog-drop-item');
            dropList.forEach(item => {item.classList.remove('active')});
            
            if(isActive)
                element.closest('.js-catalog-drop-item').classList.remove('active');
            else
                element.closest('.js-catalog-drop-item').classList.add('active');
        }
        
        if(element.closest('.js-sub-drop-button')){
            let isActive = element.closest('.js-sub-drop-item').classList.contains('active')? true: false;
            dropList = document.querySelectorAll('.js-sub-drop-item');
            dropList.forEach(item => {item.classList.remove('active')});
            
            if(isActive)
                element.closest('.js-sub-drop-item').classList.remove('active');
            else
                element.closest('.js-sub-drop-item').classList.add('active');
        }
    });
    
    document.querySelector('body').addEventListener('click', function(event){
        if(!event.target.closest('.js-drop-item')) {
            document.querySelectorAll('.js-drop-item').forEach(function(item){
                item.classList.remove('active');
            }); 
        }
    });
    
    
    // //Drop list
    
    // Catalog 
    
    document.addEventListener('click', function(e){
        let elem = e.target;
        
        if(elem.closest('.js-catalog-button')) {
            let target = elem.closest('.js-catalog-button').getAttribute('data-target');
            let catalogItem = document.querySelector('.js-catalog-content[data-target = ' + target + ']');
            catalogItem.classList.add('active');
        }
        
        if(!elem.closest('.js-catalog-content') && !elem.closest('.js-catalog-button')) {
            let catalogList =  document.querySelectorAll('.js-catalog-content');
            catalogList.forEach(function(item){
                item.classList.remove('active');
            });
        }
        
        if(elem.closest('.js-catalog-close')) {
            
            elem.closest('.js-catalog-content').classList.remove('active');
        }
    });
    
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
    
    // More info
        
      function showMoreInfo() {
            
        let info = document.querySelectorAll('.js-item .js-content p');
        let content = document.querySelectorAll('.js-item .js-content');
        let moreButton = document.querySelectorAll('.js-item .js-more');
        
        if(info) {
            for(var i = 0; info.length > i; i++) {
                if(info[i].offsetHeight > content[i].offsetHeight) {
                    moreButton[i].classList.add('show');
                }else {
                    moreButton[i].classList.remove('show');
                }
            }
        }
    }
        
    showMoreInfo();
    
    window.addEventListener('resize', function(){
        showMoreInfo();
    });
    
    // /More info
    
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
    
    // Show product img
    
    let allImg = document.querySelectorAll('.js-image');
    let generalImg = document.querySelector('.js-general-image');
    let buttonPrev = document.querySelector('.js-image-button-prev');
    let buttonNext = document.querySelector('.js-image-button-next');
    
    function changeImg(item) {
        let style = item.getAttribute('style');
        generalImg.setAttribute('style', style);
    }
    
    if(allImg) {
        allImg.forEach(function(item){
            item.addEventListener('click', function(){
                allImg.forEach(function(item){
                    item.classList.remove("active");
                });
                item.classList.add('active');
                let getIndex = item.getAttribute('data-index');
                
                buttonNext.classList.remove('disabled');
                buttonPrev.classList.remove('disabled');
                
                if(getIndex == 1) {
                    buttonPrev.classList.add('disabled');
                }
                
                if(getIndex == allImg.length) {
                    buttonNext.classList.add('disabled');
                }
                
                changeImg(item.querySelector('.img'));

            });
        });
        
        if(buttonPrev){
            buttonPrev.addEventListener('click', function(){
                let showImg = document.querySelector('.js-image.active');
                
                
                if(!showImg.previousElementSibling) {
                    return;
                }
                
                showImg.previousElementSibling.scrollIntoView({block: "nearest", behavior: "smooth", inline: "nearest"});

                showImg.previousElementSibling.classList.add("active");
                showImg.classList.remove("active");
                
                changeImg(showImg.previousElementSibling.querySelector('.img'));
                
                buttonNext.classList.remove("disabled");
                
                if(showImg.previousElementSibling.previousElementSibling == null) {
                    buttonPrev.classList.add('disabled');
                }
            });
            
            buttonNext.addEventListener("click", function(){
                let showImg = document.querySelector('.js-image.active');

                if(!showImg.nextElementSibling) {
                    return;
                }

                
                showImg.nextElementSibling.scrollIntoView({block: "nearest", behavior: "smooth", inline: "nearest"});
                
                showImg.nextElementSibling.classList.add("active");
                showImg.classList.remove("active");
                
                changeImg(showImg.nextElementSibling.querySelector('.img'));
                
                buttonPrev.classList.remove("disabled");
                
                if(showImg.nextElementSibling.nextElementSibling == null) {
                    buttonNext.classList.add('disabled');
                }
                
            });
        
        }
    }
    
    // //Show product img
    
    
    // Main input
    
    function customePlaceholder() {
        let allInput = document.querySelectorAll('.js-input');
        
        if(allInput) {
            allInput.forEach(function(item){
                let itemLenght = item.value.length;
                if(itemLenght) {
                    item.classList.add('active');
                }else {
                    item.classList.remove('active');
                }
            });
        }
       
    }
    
    customePlaceholder();
    
    
    document.addEventListener('keyup', function(e){
        let item = e.target;
        
        if(item.closest('.js-input')) {
            let itemLenght = item.closest('.js-input').value.length;
            if(itemLenght) {
                item.closest('.js-input').classList.add('active');
            }else {
                item.closest('.js-input').classList.remove('active');
            }
        }
        
    });
    
    // /Main input
    
    // Stars 
    
    document.addEventListener("click", function(e){
        let item = e.target;
        
        if(item.closest('.js-stars-item')) {
            let value = item.closest('.js-stars-item').getAttribute('data-index');
            let allStars = document.querySelectorAll(".js-stars-item");
            
            allStars.forEach(function(item){
                item.classList.remove('active');
            });
            item.closest('.js-stars-item').classList.add('active');
            document.querySelector(".js-input-stars").value = value;
        }
    });

});
