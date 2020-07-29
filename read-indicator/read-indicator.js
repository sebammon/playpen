window.addEventListener('scroll', function (e) {
    const scrollY = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollY / height) * 100;

    document.getElementById("indicator").style.width = scrolled + "vw";
});