import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';

window.addEventListener('DOMContentLoaded', () => {
    'use stict';

    modals();
    sliders(
        '.feedback-slider-item',
        'horizontal',
        '.main-prev-btn',
        '.main-next-btn',
    );
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    checkTextInputs('input[name="name"]');
    checkTextInputs('input[name="message"]');
    showMoreStyles('.button-styles', '#styles .row');
});
