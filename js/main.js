refresh();
gnb();
headChange();
burger();
search();
newsDate();
content();
contentSns();
stockTime();
topMove();
fgnb();
fInfo();
site();
function refresh() {
    document.onkeydown = fkey;
    document.onkeypress = fkey;
    document.onkeyup = fkey;

    var wasPressed = false;

    function fkey(e) {
        e = e || window.event;
        if (wasPressed) return;

        if (e.keyCode == 116) {
            window.open('.', '_self');
        }
    }
}
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
    $('body,html').on('click', function () {
        subMenu.removeClass('on');
        mainMenu.data('opCheck', false);
    })
    $('.search').on('focus', function () {
        subMenu.removeClass('on');
        mainMenu.data('opCheck', false);
    })

    subMenu.prev().on('click', function () {
        return false;
    })
}
function headChange() {
    const header = $('header');
    const mainHead = $('.head-container');
    const subHead = $('.sub-head-container');
    const time = 200;
    let lastScroll = 0;
    const before = $('.today-img');
    let todate = new Date().getDate();

    before.html('<img src="img/' + todate + 'd.png" alt="' + todate + '일">');

    $(window).on('scroll', function () {
        let scrollT = $(window).scrollTop();

        if (scrollT < 100) {
            header.removeClass('on', time);
            mainHead.removeClass('on');
        } else if (scrollT >= 100 && scrollT < 200) {
            header.removeClass('on', time);
            mainHead.addClass('on');
            subHead.removeClass('on');
        } else if (scrollT >= 200) {
            subHead.addClass('on');
            if (scrollT < lastScroll) {
                header.removeClass('on', time);
            } else {
                header.addClass('on', time);
            }
        }
        lastScroll = $(window).scrollTop();
    })
}
function burger() {
    const bgOpen = $('.burger-btn');
    const bgClose = $('.burger-close');
    const bgWrap = $('.burger-wrap');
    const bgMain = $('.bg-main');
    const bgSub = $('.bgsub-list');
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
        bgMain.next(bgSub).removeClass('on');
        bgMain.removeClass('on');
        bgMain.data('opCheck', false);
        return false;
    })

    accordion(bgMain, bgSub);

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
        $('body,html').stop().animate({scrollTop:0},0);
        con.show();
        close.fadeIn(300);
        setTimeout(function () {
            form.animate({ top: 0, opacity: 1 }, 300);
        }, 200);
        newsCon.addClass('scOn');
        $('body').css({ overflow: 'hidden' });
        $('header').removeClass('on',200);
        $('.sub-head-container').removeClass('on');
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
function newsDate() {
    const todayKakao = $('.news-date-img');
    const dateN = $('.news-title').children('.text-news');
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let week = new Date().getDay();
    const arr = ['일', '월', '화', '수', '목', '금', '토'];

    todayKakao.html('<img src="img/ico_date' + day + '.gif" alt="' + day + '일">');
    dateN.html(month + '월 ' + day + '일 ' + arr[week] + '요일 소식입니다');
}
function content() {
    const lSize = $('.news-container').find('.l-size');
    let bottomP = $('.news-container').find('.side-news').innerHeight() - 700;
    let sideBot = $('.news-container').find('.side-news').innerHeight() + $('.news-container').find('.side-news').offset().top - $(window).innerHeight();
    let sideTop = $('.news-container').find('.side-news').offset().top - 120;
    const lSize2 = $('.last-news-container').find('.l-size');
    let bottomP2 = $('.last-news-container').find('.side-news').innerHeight() - 700;
    let sideTop2 = $('.last-news-container').find('.side-news').offset().top - 120;
    let sideBot2 = $('.last-news-container').find('.side-news').innerHeight() + $('.last-news-container').find('.side-news').offset().top - $(window).innerHeight();
    const time = 200;
    let lastScroll = 0;
    console.log(bottomP);

    $(window).on('resize', function () {
        bottomP = $('.news-container').find('.side-news').innerHeight() - 700;
        sideBot = $('.news-container').find('.side-news').innerHeight() + $('.news-container').find('.side-news').offset().top - $(window).innerHeight();
        sideTop = $('.news-container').find('.side-news').offset().top - 120;
        let scrollT = $(window).scrollTop();
        bottomP2 = $('.last-news-container').find('.side-news').innerHeight() - 700;
        sideTop2 = $('.last-news-container').find('.side-news').offset().top - 120;
        sideBot2 = $('.last-news-container').find('.side-news').innerHeight() + $('.last-news-container').find('.side-news').offset().top - $(window).innerHeight();

        if (window.matchMedia('(max-width:1023px)').matches == true) {
            lSize.removeClass('onFix');
            lSize.css({ top: 0 });
            lSize2.removeClass('onFix');
            lSize2.css({ top: 0 });
        } else {
            onMove(scrollT, sideBot, sideTop, lSize, bottomP, lastScroll);
            onMove(scrollT, sideBot2, sideTop2, lSize2, bottomP2, lastScroll);
        }

        if ($('.sub-head-container').hasClass('on') == true) {
            if (scrollT >= sideTop && scrollT < sideBot) {
                if ($('header').hasClass('on') == true) {
                    lSize.css({ top: '90px' });
                    lSize.css({ height: 'calc(100vh - 110px)' });
                } else {
                    lSize.css({ top: '163px' });
                    lSize.css({ height: 'calc(100vh - 183px)' });
                }
            } else if (scrollT >= sideTop2 && scrollT < sideBot2) {
                if ($('header').hasClass('on') == true) {
                    lSize2.css({ top: '90px' });
                    lSize2.css({ height: 'calc(100vh - 110px)' });
                } else {
                    lSize2.css({ top: '163px' });
                    lSize2.css({ height: 'calc(100vh - 183px)' });
                }
            }
        }
    })

    $(window).on('scroll', function () {
        let scrollT = $(window).scrollTop();

        if (window.matchMedia('(max-width:1023px)').matches == false) {
            onMove(scrollT, sideBot, sideTop, lSize, bottomP, lastScroll);
            onMove(scrollT, sideBot2, sideTop2, lSize2, bottomP2, lastScroll);
        }
        lastScroll = $(window).scrollTop();
    })

    function onMove(scrollT, sideBot, sideTop, lSize, bottomP, lastScroll) {
        if (scrollT < sideTop) {
            lSize.removeClass('onFix');
            lSize.css({ top: 0 });
            lSize.css({ height: '700px' });
        } else if (scrollT >= sideTop && scrollT < sideBot) {
            lSize.addClass('onFix');
            lSize.css({ top: '90px' });
            lSize.css({ height: 'calc(100vh - 110px)' });
            if (scrollT < lastScroll) {
                lSize.css({ height: 'calc(100vh - 183px)' });
                lSize.css({ top: '163px' });
            }
        } else if (scrollT >= sideBot) {
            lSize.removeClass('onFix');
            lSize.css({ height: '700px' });
            lSize.css({ top: bottomP });
        }
    }

    $('.report-box').on('mouseenter', function () {
        $(this).addClass('hov', time);
    })

    $('.report-box').on('mouseleave', function () {
        $('.report-box').removeClass('hov');
    })

    lSize.on('mouseenter', function () {
        onMouse($(this), bottomP);
    })

    lSize.on('mouseleave', function () {
        outMouse($(this), bottomP);
    })

    lSize2.on('mouseenter', function () {
        onMouse($(this), bottomP2);
    })

    lSize2.on('mouseleave', function () {
        outMouse($(this), bottomP2);
    })

    function onMouse(lSize, bottomP) {
        if (lSize.position().top == 0) {
            lSize.stop().animate({ top: '-5px' }, time);
        } else if (lSize.position().top == 90) {
            lSize.stop().animate({ top: '85px' }, time);
        } else if (lSize.position().top == 163) {
            lSize.stop().animate({ top: '158px' }, time);
        } else if (lSize.position().top == bottomP) {
            lSize.stop().animate({ top: bottomP - 5 }, time);
        }
    }

    function outMouse(lSize, bottomP) {
        if (lSize.position().top == '-5') {
            lSize.stop().animate({ top: 0 }, 0);
        } else if (lSize.position().top == 85) {
            lSize.stop().animate({ top: '90px' }, 0);
        } else if (lSize.position().top == 158) {
            lSize.stop().animate({ top: '163px' }, 0);
        } else if (lSize.position().top == bottomP - 5) {
            lSize.stop().animate({ top: bottomP }, 0);
        }
    }
}
function contentSns() {
    const openBtn = $('.three-point');
    const closeBtn = $('.sns-close');

    openBtn.on('click', function () {
        $('.report-box').removeClass('on');
        $(this).parent().addClass('on');
    })
    closeBtn.on('click', function (e) {
        $('.report-box').removeClass('on');
    })

}
function stockTime() {
    const update = $('.update-time');
    let year = new Date().getFullYear();
    let month = ('0' + (new Date().getMonth() + 1)).slice(-2);
    let day = ('0' + new Date().getDate()).slice(-2);
    let hour = new Date().getHours();
    let minuite = new Date().getMinutes();
    let ap = 'AM';

    if (hour > 11) {
        ap = 'PM';
    }

    update.html(year + '.' + month + '.' + day + ' ' + hour + ':' + minuite + ap);
}
function topMove(){
    const topBtn=$('.top-btn');

    topBtn.on('click',function(){
        $('body,html').stop().animate({scrollTop:0},0);
        $('header').removeClass('on',200);
        $('.sub-head-container').removeClass('on');

        return false;
    })
}
function fgnb() {
    const main = $('.f-main');
    const sub = $('.f-sub-menu');

    accordion(main, sub);
}
function fInfo() {
    const main = $('.f-info');
    const sub = $('.f-info-box');

    main.each(function () {
        $(this).data('opCheck', false);
    })

    main.on('click', function () {
        if ($(this).data('opCheck') == false) {
            sub.removeClass('on');
            $(this).next(sub).addClass('on');
            $(this).addClass('on');
            main.data('opCheck', false);
            $(this).data('opCheck', true);
        } else {
            sub.removeClass('on');
            main.removeClass('on');
            main.data('opCheck', false);
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
function accordion(main, sub) {
    main.each(function () {
        $(this).data('opCheck', false);
    })

    main.on('click', function () {
        if ($(this).data('opCheck') == false) {
            $(this).next(sub).addClass('on');
            $(this).addClass('on');
            $(this).data('opCheck', true);
        } else {
            $(this).next(sub).removeClass('on');
            $(this).removeClass('on');
            $(this).data('opCheck', false);
        }
    })

    sub.prev().on('click', function () {
        return false;
    })
}
function linkBlock(){
    $('a').on('click',function(){
        return false;
    })
}
linkBlock();