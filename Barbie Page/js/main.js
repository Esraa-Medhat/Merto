const middle = document.querySelector('.middle');
const img = middle.querySelector('.zoom-pan-img');

middle.addEventListener('mousemove', function (e) {
    const rect = middle.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    img.style.transform = `scale(1.8) translate(${50 - x}%, ${50 - y}%)`;
});

middle.addEventListener('mouseleave', function () {
    img.style.transform = 'scale(1) translate(0, 0)';
});
