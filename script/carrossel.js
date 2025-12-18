const carrossel = document.querySelector('.carrossel');
const dots = document.querySelectorAll('.dot');

carrossel.addEventListener('scroll', () => {
    const scrollLeft = carrossel.scrollLeft;
    const largura = carrossel.offsetWidth;
    const index = Math.round(scrollLeft / largura);

    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        carrossel.scrollTo({
            left: carrossel.offsetWidth * index,
            behavior: 'smooth'
        });
    });
});
