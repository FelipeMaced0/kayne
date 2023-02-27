const initEventsNavBar = () => {
    const nav_bar = document.getElementById('nav-list');
    const links = nav_bar?.querySelectorAll('.nav-link');

    //debugger;
    links?.forEach(link =>
        link.addEventListener('mouseenter', () => {
            links?.forEach(otherlink =>
                otherlink.classList.remove('active')
            );
            link.classList.add('active');
        })
    );
}

initEventsNavBar();