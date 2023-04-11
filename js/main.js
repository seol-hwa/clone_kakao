gnb();
burger();

function gnb() {
    const mainMenu = $('.main-menu');
    const subMenu = $('.sub-menu-list');


    mainMenu.parent('li').on('mouseenter', function () {
        mainMenu.addClass('off');
        $(this).children(mainMenu).removeClass('off');
    })
    mainMenu.parent('li').on('mouseleave', function () {
        mainMenu.removeClass('off');
    })

    mainMenu.each(function () {
        $(this).data('opCheck', false);
    })
    mainMenu.on('click', function () {
        if ($(this).data('opCheck') == false) {
            subMenu.removeClass('on');
            $(this).next().addClass('on');
            mainMenu.data('opCheck', false);
            $(this).data('opCheck', true);
        } else {
            subMenu.removeClass('on');
            mainMenu.data('opCheck', false);
        }
    });
}

function burger() {
    const bgOpen = $('.burger-btn');
    const bgClose = $('.burger-close');
    const bgWrap = $('.burger-wrap');
    const bgMain = $('.bg-main');
    let time=500;
    const center=$('.center');
    const centerWrap=$('.center-wrap');
    let isOpen=false;

    bgOpen.on('click', function () {
        bgWrap.css({ right: 0 });
    })
    bgClose.on('click', function () {
        bgWrap.css({ right: '-100%' });
    })


    bgMain.each(function () {
        $(this).data('opCheck', false);
    })

    bgMain.on('click', function () {
        if ($(this).data('opCheck') == false) {
            $(this).next().slideDown(time);
            $(this).addClass('on');
            $(this).data('opCheck', true);
        } else {
            $(this).next().slideUp(time);
            $(this).removeClass('on');
            $(this).data('opCheck', false);
        }
    })

    center.on('click',function(){
        if(isOpen==false){
            $(this).addClass('on');
            centerWrap.show();
            isOpen=true;
        }else{
            $(this).removeClass('on');
            centerWrap.hide();
            isOpen=false;
        }
    })
}