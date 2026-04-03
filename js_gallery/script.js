const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {
    if (e.target.classList.contains('thumb')) {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function() {
            jumbo.classList.remove('fade');
        }, 500);

        thumbs.forEach(function(thumb) {
            thumb.classList.remove('active');
        });

        e.target.classList.add('active');
    }
});