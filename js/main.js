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
        return false;
    });
}

function burger() {
    const bgOpen = $('.burger-btn');
    const bgClose = $('.burger-close');
    const bgWrap = $('.burger-wrap');
    const bgMain = $('.bg-main');
    const center = $('.center');
    const centerWrap = $('.center-wrap');
    let isOpen = false;

    $(window).on('resize', function () {
        if (window.matchMedia('(max-width:1023px)').matches == false) {
            bgWrap.css({ right: '-100%' });
            $('body').css({ overflow: 'visible' });
            center.removeClass('on');
            centerWrap.hide();
            isOpen = false;
            bgMain.next().hide();
            bgMain.removeClass('on');
            bgMain.data('opCheck', false);
        }
    })

    bgOpen.on('click', function () {
        bgWrap.css({ right: 0 });
        $('body').css({ overflow: 'hidden' });
    })
    bgClose.on('click', function () {
        bgWrap.css({ right: '-100%' });
        $('body').css({ overflow: 'visible' });
        center.removeClass('on');
        centerWrap.hide();
        isOpen = false;
        bgMain.next().hide();
        bgMain.removeClass('on');
        bgMain.data('opCheck', false);
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
    const close = $('.search-close');
    const form = $('.search-form');
    const newsCon = $('.news-container');

    search.on('click', function () {
        con.show();
        close.fadeIn(300);
        setTimeout(function () {
            form.animate({ top: 0, opacity: 1 }, 300);
        }, 200);
        newsCon.addClass('scOn');
        $('body').css({ overflow: 'hidden' });
    })

    close.on('click', function () {
        form.animate({ top: '-30px', opacity: 0 }, 200, function () {
            close.fadeOut(0);
        });
        setTimeout(function () {
            con.hide();
        }, 200);
        newsCon.removeClass('scOn');
        $('body').css({ overflow: 'visible' });
    })
}
function content() {
    const lSize = $('.news-container').find('.l-size');
    let bottomP = $('.side-news').innerHeight() - lSize.innerHeight();

    $(window).on('scroll', function () {
        let scrollT = $(window).scrollTop();

        if (scrollT < 277) {
            lSize.removeClass('onFix');
            lSize.css({ top: 0 });
        } else if (scrollT >= 277 && scrollT < 1134) {
            lSize.addClass('onFix');
            lSize.css({ top: '120px' });
        } else if (scrollT >= 1134) {
            lSize.removeClass('onFix');
            lSize.css({ top: bottomP });
        }
    })

    $('.report-box').on('mouseenter',function(){
        $(this).addClass('hov',300);
    })
    $('.report-box').on('mouseleave',function(){
        $('.report-box').removeClass('hov');
    })
    lSize.on('mouseenter',function(){
        let scrollT = $(window).scrollTop();
        if(scrollT < 277){
            lSize.stop().animate({top:'-5px'},300);
        }else if (scrollT >= 277 && scrollT < 1134){
            lSize.stop().animate({top:'115px'},300);
        }else if (scrollT >= 1134){
            lSize.stop().animate({top:bottomP - 5},300);
        }
    })
    lSize.on('mouseleave',function(){
        let scrollT = $(window).scrollTop();
        if(scrollT < 277){
            lSize.css({ top: 0 });
        }else if (scrollT >= 277 && scrollT < 1134){
            lSize.css({ top: '120px' });
        }else if (scrollT >= 1134){
            lSize.css({ top: bottomP });
        }
    })
}