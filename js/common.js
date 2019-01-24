let mainButtonEl = document.querySelector('.main-button');
let bgMainEl = document.querySelector('.bg_modal_window');
let popupWrapperEl = document.querySelector('.popup-wrapper');
let bodyEl = document.querySelector('body');
let closeButtonEl = document.querySelector('.modal_close');
let headerBlock = document.querySelector('header');
let mainBlock = document.querySelector('main');
let footerBlock = document.querySelector('footer');

function onOpenPopupWrapperClick() {
    bodyEl.classList.add('scroll-out');
    bgMainEl.classList.add('bg_modal_window-active');
    popupWrapperEl.classList.add('popup-wrapper-active');
    headerBlock.classList.add('blur-effect');
    mainBlock.classList.add('blur-effect');
    footerBlock.classList.add('blur-effect');
}

function onClosePopupWrapperClick() {
    bodyEl.classList.remove('scroll-out');
    bgMainEl.classList.remove('bg_modal_window-active');
    popupWrapperEl.classList.remove('popup-wrapper-active');
    headerBlock.classList.remove('blur-effect');
    mainBlock.classList.remove('blur-effect');
    footerBlock.classList.remove('blur-effect');
}

if(mainButtonEl) {
    mainButtonEl.addEventListener('click', onOpenPopupWrapperClick);
    closeButtonEl.addEventListener('click', onClosePopupWrapperClick);
}
