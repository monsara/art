const accordion = (triggersSelector, itemsSelector) => {
    const btns = document.querySelectorAll(triggersSelector);

    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Show/hide all accordions
            // this.classList.toggle('active-style');
            // this.nextElementSibling.classList.toggle('active-content');

            // Hide all and open active accrodion
            if (!this.classList.contains('active-style')) {
                btns.forEach(btn => hideContent(btn));
                showContent(btn);
            } else {
                hideContent(this);
            }

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight =
                    this.nextElementSibling.scrollHeight + 80 + 'px';
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });

    function showContent(btn) {
        btn.classList.add('active-style');
        btn.nextElementSibling.classList.add('active-content');
    }

    function hideContent(btn) {
        btn.classList.remove('active-style');
        btn.nextElementSibling.classList.remove('active-content');
        btn.nextElementSibling.style.maxHeight = '0px';
    }

    //#region Version with SCSS
    // const blocks = document.querySelectorAll(itemsSelector);

    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown');
    // });

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function () {
    //         if (!this.classList.contains('active')) {
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style');
    //             });
    //             this.classList.add('active', 'active-style');
    //         }
    //     });
    // });
    //#endregion
};

export default accordion;
