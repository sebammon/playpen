function goToElement(elementId) {
    const element = document.getElementById(elementId);
    element.scrollIntoView({
        behavior: 'smooth',
    })
}

function goToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'})
}