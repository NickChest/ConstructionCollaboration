document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.olvega_container');

    const animations = [
        'img-fadein', 'img-fadebot', 'img-fadebotbig', 'img-FadeInLeft',
        'img-FadeInLeftBig', 'img-FadeInRight', 'img-FadeInRightBig', 
        'img-FadeInUp', 'img-FadeInUpBig', 'img-Flipx', 'img-Flipx-short', 
        'img-Flipy', 'img-RotateIn', 'img-RotateInDownLeft', 
        'img-RotateInDownRight', 'img-RotateInUpLeft', 'img-RotateInUpRight',
        'img-ZoomIn', 'img-ZoomInDown', 'img-ZoomInLeft', 'img-ZoomInRight', 
        'img-ZoomInUp', 'img-BounceIn', 'img-BounceInDown', 
        'img-BounceInLeft', 'img-BounceInRight', 'img-BounceInUp'
    ];

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
                const img = entry.target.querySelector('img');
                img.classList.add(animations[index]);
            }
        });
    }, {
        threshold: 0.5  
    });

    containers.forEach(container => {
        observer.observe(container);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.olvega_animations_content img');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.5  
    });

    images.forEach(img => {
        observer.observe(img);
    });
});
