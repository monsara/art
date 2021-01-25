import { getResource } from '../services/requests';

const showMoreStyles = (trigger, wrapper) => {
    // const cards = document.querySelectorAll(styles);
    const btn = document.querySelector(trigger);

    // #region Open version with simple upload styles
    // cards.forEach(card => {
    //     card.classList.add('animated', 'fadeInUp');
    // });

    // btn.addEventListener('click', () => {
    //     cards.forEach(card => {
    //         card.classList.remove(
    //             'hidden-lg',
    //             'hidden-md',
    //             'hidden-sm',
    //             'hidden-xs',
    //         );
    //         card.classList.add(
    //             'col-sm-3',
    //             'col-sm-offset-0',
    //             'col-xs-10',
    //             'col-xs-offset-1',
    //         );
    //     });
    //     // btn.style.display = 'none';
    //     btn.remove();
    // });
    // #endregion

    btn.addEventListener('click', function () {
        // getResource('http://localhost:3004/styles')
        getResource('assets/db.json')
            // .then(res => createCards(res))
            .then(res => createCards(res.styles))
            .catch(error => console.log(error));

        this.remove();
    });

    function createCards(response) {
        response.forEach(({ src, title, link }) => {
            const card = document.createElement('div');

            card.classList.add(
                'animated',
                'fadeInUp',
                'col-sm-3',
                'col-sm-offset-0',
                'col-xs-10',
                'col-xs-offset-1',
            );

            card.innerHTML = `
                <div class="styles-block">
                    <img src="${src}" alt="style">
                    <h4>${title}</h4>
                    <a href="#">${link}</a>
                </div>
           `;

            document.querySelector(wrapper).append(card);
        });
    }
};

export default showMoreStyles;

{
    /* <div class="col-md-5 col-md-offset-1 col-sm-5 col-sm-offset-1">
        <div class=card-block-text>
            <h3>Потрясающий портрет флип-флап в стиле поп арт
            </h3>
            <p class=p-heading>Вы подарите яркие эмоции,
                запомнится надолго!</p>
            <button class="button button-order button-consultation  wow zoomIn">Подробнее
                об услуге</button>
        </div>
    </div> */
}
