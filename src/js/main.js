import modals from './moules/modals';
import sliders from './moules/sliders';
import forms from './moules/forms';

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
});
