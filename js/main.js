gnb();
burger();
search();
content();

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
    let time = 500;
    const center = $('.center');
    const centerWrap = $('.center-wrap');
    let isOpen = false;

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
            $(this).next().show();
            $(this).addClass('on');
            $(this).data('opCheck', true);
        } else {
            $(this).next().hide();
            $(this).removeClass('on');
            $(this).data('opCheck', false);
        }
    })

    center.on('click', function () {
        if (isOpen == false) {
            $(this).addClass('on');
            centerWrap.show();
            isOpen = true;
        } else {
            $(this).removeClass('on');
            centerWrap.hide();
            isOpen = false;
        }
    })
}

function search() {
    const search = $('.search');
    const con = $('.search-container');
    const head = $('.search-head');
    const close = $('.search-close');
    const form = $('.search-form');

    search.on('click', function () {
        con.show();
        close.fadeIn(300);
        setTimeout(function () {
            form.animate({ top: 0, opacity: 1 }, 300);
        }, 200);
    })

    close.on('click', function () {
        form.animate({ top: '-30px', opacity: 0 }, 200, function () {
            close.fadeOut(0);
        });
        setTimeout(function () {
            con.hide();
        }, 200);
    })
}
function content(){
    $(window).on('scroll',function(){
        let scrollT=$(window).scrollTop();
        const lSize=$('.l-size');
        if(scrollT >= 277){
            lSize.addClass('onFix');
        }else if(scrollT >= 680){
            lSize.removeClass('onFix');
            lSize.css({bottom:0});
        }else{
            lSize.removeClass('onFix');
        }
    })
}