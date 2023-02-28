
const initEventsKayne = () => {
    kaynePic = document.getElementById('Ye');
    //Events
    kaynePic.addEventListener('mouseenter', (mouse_event) => {
        const follower = document.getElementById('follower');
        const audio = document.getElementById('jumpscare-audio');

        follower.style.display = 'inline';
        audio.play();
    });

    kaynePic.addEventListener('mouseleave', (mouse_event) => {
        const follower = document.getElementById('follower');
        const audio = document.getElementById('jumpscare-audio');

        follower.style.display = 'none';
        audio.pause();
    });

    document.addEventListener('mousemove', (mouse_event) => {
        const message = document.getElementById('follower');
        message.style.left = mouse_event.pageX + 30 + 'px';
        message.style.top = mouse_event.pageY + 'px';
    });
    //Events
}

const runningmouse = () => {
    document.addEventListener("mousemove", (mouse_event) => {
        const nav_bar = document.getElementById('nav-list');

        const leftNav = nav_bar.getAttribute("left");
        const topNav = nav_bar.getAttribute('top');
        const leftMouse = mouse_event.pageX;
        const topMouse = mouse_event.pageY;

        const distance = Math.sqrt((leftNav-leftMouse)**2+(topNav-topMouse)**2);
        //console.log('dis:'+distance);
    });
}
runningmouse();
initEventsKayne();


var apiRequest = () => {
    const options = {
        method: 'GET'
    }

    fetch('https://api.kanye.rest/', options).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data.quote);
        const contentDiv = document.body.querySelector("#content");
        contentDiv.innerHTML = data.quote;
    }).catch((error) => {
        console.log(error);
    });
}

