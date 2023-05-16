gnb();
burger();
search();
content();
fInfo();
site();

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
    })

    subMenu.prev().on('click', function () {
        return false;
    })
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
        return false;
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
        return false;
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
    let bottomP = $('.news-container').find('.side-news').innerHeight() - lSize.innerHeight();
    let sideBot = $('.news-container').find('.side-news').offset().top + $('.news-container').find('.side-news').innerHeight() - 820;
    let sideTop = $('.news-container').find('.side-news').offset().top - 120;
    const lSize2 = $('.last-news-container').find('.l-size');
    let bottomP2 = $('.last-news-container').find('.side-news').innerHeight() - lSize2.innerHeight();
    let sideTop2 = $('.last-news-container').find('.side-news').offset().top - 120;
    let sideBot2 = $('.last-news-container').find('.side-news').offset().top + $('.last-news-container').find('.side-news').innerHeight() - 820;

    $(window).on('resize', function () {
        bottomP = $('.side-news').innerHeight() - lSize.innerHeight();
        sideBot = $('.news-container').find('.side-news').offset().top + $('.news-container').find('.side-news').innerHeight() - 820;
        sideTop = $('.news-container').find('.side-news').offset().top - 120;
        let scrollT = $(window).scrollTop();
        bottomP2 = $('.last-news-container').find('.side-news').innerHeight() - lSize2.innerHeight();
        sideTop2 = $('.last-news-container').find('.side-news').offset().top - 120;
        sideBot2 = $('.last-news-container').find('.side-news').offset().top + $('.last-news-container').find('.side-news').innerHeight() - 820;

        if (window.matchMedia('(max-width:1023px)').matches == true) {
            lSize.removeClass('onFix');
            lSize.css({ top: 0 });
            lSize2.removeClass('onFix');
            lSize2.css({ top: 0 });
        } else {
            onMove(scrollT, sideBot, sideTop, lSize, bottomP);
            onMove(scrollT, sideBot2, sideTop2, lSize2, bottomP2);
        }
    })

    $(window).on('scroll', function () {
        let scrollT = $(window).scrollTop();

        if (window.matchMedia('(max-width:1023px)').matches == false) {
            onMove(scrollT, sideBot, sideTop, lSize, bottomP);
            onMove(scrollT, sideBot2, sideTop2, lSize2, bottomP2);
        }
    })

    function onMove(scrollT, sideBot, sideTop, lSize, bottomP) {
        if (scrollT < sideTop) {
            lSize.removeClass('onFix');
            lSize.css({ top: 0 });
        } else if (scrollT >= sideTop && scrollT < sideBot) {
            lSize.addClass('onFix');
            lSize.css({ top: '120px' });
        } else if (scrollT >= sideBot) {
            lSize.removeClass('onFix');
            lSize.css({ top: bottomP });
        }
    }

    $('.report-box').on('mouseenter', function () {
        $(this).addClass('hov', 300);
    })

    $('.report-box').on('mouseleave', function () {
        $('.report-box').removeClass('hov');
    })

    lSize.on('mouseenter', function () {
        onMouse($(this),sideTop,sideBot,bottomP);
    })

    lSize.on('mouseleave', function () {
        outMouse($(this),sideTop,sideBot,bottomP)
    })

    lSize2.on('mouseenter', function () {
        onMouse($(this),sideTop2,sideBot2,bottomP2);
    })

    lSize2.on('mouseleave',function(){
        outMouse($(this),sideTop2,sideBot2,bottomP2);
    })

    function onMouse(lSize,sideTop,sideBot,bottomP){
        let scrollT = $(window).scrollTop();

        if (window.matchMedia('(max-width:1023px)').matches == false) {
            if (scrollT < sideTop) {
                lSize.stop().animate({ top: '-5px' }, 300);
            } else if (scrollT >= sideTop && scrollT < sideBot) {
                lSize.stop().animate({ top: '115px' }, 300);
            } else if (scrollT >= sideBot) {
                lSize.stop().animate({ top: bottomP - 5 }, 300);
            }
        } else {
            lSize.stop().animate({ top: '-5px' }, 300);
        }
    }

    function outMouse(lSize,sideTop,sideBot,bottomP){
        let scrollT = $(window).scrollTop();

        if (window.matchMedia('(max-width:1023px)').matches == false) {
            if (scrollT < sideTop) {
                lSize.css({ top: 0 });
            } else if (scrollT >= sideTop && scrollT < sideBot) {
                lSize.css({ top: '120px' });
            } else if (scrollT >= sideBot) {
                lSize.css({ top: bottomP });
            }
        } else {
            lSize.stop().animate({ top: 0 });
        }
    }
}
function fInfo() {
    const main = $('.f-info');
    const sub = $('.f-info-box');

    main.each(function () {
        $(this).data('isOn', false);
    })

    main.on('click', function () {
        if ($(this).data('isOn') == false) {
            sub.removeClass('on');
            $(this).next(sub).addClass('on');
            $(this).addClass('on');
            main.data('isOn', false);
            $(this).data('isOn', true);
        } else {
            sub.removeClass('on');
            main.removeClass('on');
            main.data('isOn', false);
        }
    })

    sub.prev(main).on('click', function () {
        return false;
    })
}
function site() {
    let isOpen = false;
    const siteList = $('.site-list');

    $('.rel-site').on('click', function () {
        if (isOpen == false) {
            siteList.addClass('on');
            $(this).addClass('on');
            isOpen = true;
        } else {
            siteList.removeClass('on');
            $(this).removeClass('on');
            isOpen = false;
        }
        return false;
    })
}