document.addEventListener('DOMContentLoaded', function () {
    var myFullpage = new fullpage('#content', {
        anchors: ['about', 'schedule', 'location', 'team', 'contact'],
        menu: 'nav',
        scrollOverflow: true,
        css3: true,
        scrollingSpeed: 700,
        afterLoad: function (origin, destination, direction) {
            let activeSection = destination.anchor;
            document.querySelectorAll('nav ul li a').forEach(link => {
                if (link.getAttribute('href').substring(1) === activeSection) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });

    // Event listeners for navigation links to implement smooth scrolling
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            let targetId = this.getAttribute('href').substring(1);
            fullpage_api.moveTo(targetId);
        });
    });
});
