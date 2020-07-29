function addRotation() {
    let frame;

    const el = document.getElementById('rotate');
    const elWidth = el.clientWidth;
    const elHeight = el.clientHeight;

    el.addEventListener('mousemove', function (e) {
        el.style.transition = "transform 0.1s linear";

        const xRotation = -15 * (e.offsetY - elHeight / 2) / elHeight;
        const yRotation = 15 * (e.offsetX - elWidth / 2) / elWidth;

        frame = window.requestAnimationFrame(function () {
            el.style.transform = `rotateX(${xRotation.toFixed(2)}deg) rotateY(${yRotation.toFixed(2)}deg)`;
        });
    });

    el.addEventListener('mouseleave', function (e) {
        el.style.transition = "transform 0.3s ease";
        el.style.transform = null;
        window.cancelAnimationFrame(frame);
    });
}

function addTransform() {
    let frame;

    const el = document.getElementById('translate');
    const elWidth = el.clientWidth;
    const elHeight = el.clientHeight;

    el.addEventListener('mousemove', function (e) {
        el.style.transition = "transform 0.1s linear";

        const yRotation = -15 * (e.offsetY - elHeight / 2) / elHeight;
        const xRotation = -15 * (e.offsetX - elWidth / 2) / elWidth;

        frame = window.requestAnimationFrame(function () {
            el.style.transform = `translateX(${xRotation.toFixed(2)}px) translateY(${yRotation.toFixed(2)}px)`;
        });
    });

    el.addEventListener('mouseleave', function (e) {
        el.style.transition = "transform 0.3s ease";
        el.style.transform = null;
        window.cancelAnimationFrame(frame);
    });
}

addRotation();
addTransform();