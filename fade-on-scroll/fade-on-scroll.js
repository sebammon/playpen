const elements = document.querySelectorAll('.static');

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
});

elements.forEach(entry => {
    observer.observe(entry);
});