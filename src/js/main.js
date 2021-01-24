import modals from './moules/modals';
import sliders from './moules/sliders';

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
});
