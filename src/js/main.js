import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filter from './modules/filter';

window.addEventListener('DOMContentLoaded', () => {
    'use stict';

    modals();
    sliders({
        slides: '.feedback-slider-item',
        direction: 'horizontal',
        prev: '.main-prev-btn',
        next: '.main-next-btn',
    });
    sliders({ slides: '.main-slider-item', direction: 'vertical' });
    forms();
    mask('[name="phone"]');
    checkTextInputs('input[name="name"]');
    checkTextInputs('input[name="message"]');
    showMoreStyles('.button-styles', '#styles .row');
    calc({
        size: '#size',
        material: '#material',
        options: '#options',
        promocode: '.promocode',
        result: '.calc-price',
    });
    filter();
});
