gnb();
burger();

function gnb() {
    const mainMenu = $('.main-menu');
    const subMenu = $('.sub-menu-list');
    const gnbWrap = $('gnb-wrap');

    mainMenu.each(function () {
        $(this).data('opCheck', false);
    })

    mainMenu.parent('li').on('mouseenter', function () {
        mainMenu.addClass('off');
        $(this).children(mainMenu).removeClass('off');
    })
    mainMenu.parent('li').on('mouseleave', function () {
        mainMenu.removeClass('off');
    })

    mainMenu.on('click focus', function (e) {
        if ($(this).data('opCheck') == false) {
            subMenu.css({ 'display': 'none' });
            $(this).next().css({ 'display': 'flex' });
            mainMenu.data('opCheck', false);
            $(this).data('opCheck', true);
        } else {
            subMenu.css({ 'display': 'none' });
            mainMenu.data('opCheck', false);
        }
    });
}
function burger() {
    const bgOpen = $('.burger-btn');
    const bgClose = $('.burger-close');
    const bgWrap = $('.burger-wrap');

    bgOpen.on('click', function () {
        bgWrap.css({ right: 0 });
    })
    bgClose.on('click', function () {
        bgWrap.css({ right: '-100%' });
    })

    const bgMain = $('.bg-main');

    bgMain.each(function () {
        $(this).data('opCheck', false);
    })

    bgMain.on('click', function () {
        if ($(this).data('opCheck') == false) {
            // bgSub.slideUp(500);
            $(this).next().slideDown(500);
            $(this).addClass('on');
            // bgMain.data('opCheck',false);
            $(this).data('opCheck', true);
        } else {
            $(this).next().slideUp(500);
            $(this).removeClass('on');
            $(this).data('opCheck', false);
        }
    })
}