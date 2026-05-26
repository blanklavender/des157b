(function () {

    "use strict";
    console.log('reading js');

    const signIn = document.querySelector('#signIn');
    const loading = document.querySelector('#loading');
    const mainPage = document.querySelector('#mainPage');
    const sideBar = document.querySelector('#sideBar');

    const enterButton = document.querySelector('#enterButton');
    const nameInput = document.querySelector('#name');

    const greeting = document.querySelector('#mainPage h1');

    const mainParagraph = document.querySelector('#mainPage p');
    const taskList = document.querySelector('#mainPage ul');

    const beginButton = document.querySelector('#beginButton');
    const task = document.querySelector('#task');

    enterButton.addEventListener('click', function () {

        // user name
        const userName = document.querySelector('#name').value;
        greeting.textContent = `Good Morning ${userName}!`;

        signIn.classList.remove('showing');
        signIn.classList.add('hidden');

        // loading screen fade in + fade out
        loading.classList.remove('hidden');
        loading.classList.add('showing');

        setTimeout(function () {

            loading.classList.add('fadeOut');

            setTimeout(function () {

                loading.classList.remove('showing');
                loading.classList.add('hidden');
                loading.classList.remove('fadeOut');

                mainPage.classList.remove('hidden');
                mainPage.classList.add('showing');
                mainPage.classList.add('fadeIn');

                sideBar.classList.remove('hidden');
                sideBar.classList.add('showing');
                sideBar.classList.add('fadeIn');


                // animation of the greeting 

                setTimeout(function () {
                    greeting.classList.add('animateText');
                }, 300);

                setTimeout(function () {
                    mainParagraph.classList.add('animateText');
                }, 900);

                setTimeout(function () {
                    taskList.classList.add('animateText');
                }, 1500);

            }, 1000);

        }, 2000);

    });

    beginButton.addEventListener('click', function () {

        // hide main page
        mainPage.classList.remove('showing');
        mainPage.classList.add('hidden');

        // show task page
        task.classList.remove('hidden');
        task.classList.add('showing');
        task.classList.add('fadeIn');

    });

})();
