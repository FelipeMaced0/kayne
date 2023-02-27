
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

