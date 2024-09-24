const nums = document.querySelectorAll('.cicle span');
const replay = document.querySelector('.replay');
const countdown = document.querySelector('.countdown');
const show = document.querySelector('.show');

// Iniciar a animação na primeira vez
animation();

function reset() {
    show.classList.remove('final');
    countdown.classList.remove('hide');

    nums.forEach((n) => {
        n.classList.remove('numberIn', 'numberOut');
    });

    nums[0].classList.add('numberIn');
};

function animation() {
    nums.forEach((num, i) => {
        const c = nums.length - 1;

        num.addEventListener('animationend', (e) => {
            if (e.animationName === 'in' && i !== c) {
                num.classList.remove('numberIn');
                num.classList.add('numberOut');
            } else if (e.animationName === 'out' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('numberIn');
            } else {
                show.classList.add('final');
                countdown.classList.add('hide');
            }
        });
    });
}

replay.addEventListener('click', () => {
    reset();
    animation();
});


