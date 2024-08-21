document.addEventListener("DOMContentLoaded", function() {
    // Intro screen fade-out
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 2000); // Adjust timing as needed

    const terminalBody = document.getElementById("terminal-body");
    const terminalInput = document.getElementById("terminal-input");
    const typedText = document.getElementById("typed-text");

    // Adjust font size based on screen width
    const adjustFontSize = () => {
        if (window.innerWidth < 768) {
            terminalBody.style.fontSize = "14px"; // Smaller font for mobile
        } else {
            terminalBody.style.fontSize = "16px"; // Default font for larger screens
        }
    };

    // Call the function once to set the initial size
    adjustFontSize();

    // Listen for window resize to adjust font size dynamically
    window.addEventListener('resize', adjustFontSize);

    const typeEffect = (text, element, callback) => {
        let index = 0;
        const interval = setInterval(() => {
            element.textContent += text[index];
            index++;
            if (index === text.length) {
                clearInterval(interval);
                if (callback) callback();
            }
        }, 50); // Adjust typing speed here
    };

    typeEffect('HELLO AND WELCOME TO THE HACKERS WORLD. MAY BE YOU ARE HACKED OR GOING TO BE HACKED.\n \nWelcome to my portfolio! I’m Gagan Chauhan, a passionate Computer Science and Cyber Security enthusiast with a drive for innovation and a keen eye for detail. This portfolio showcases my journey through the world of technology, highlighting my skills, projects, and accomplishments. Explore my work, learn about my expertise, and see how I blend creativity with technical prowess to tackle modern challenges. Thank you for visiting, and I hope you find inspiration and insight as you navigate through my projects and achievements. \n \nIf you want you can type to navigate to these pages:- \n \n1. About \n2. Education \n3. Work \n4. Other' , typedText, () => {
        terminalInput.focus();
    });

    terminalInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const command = terminalInput.value.trim().toUpperCase();
            if (command === 'ABOUT') {
                window.location.href = 'updated_about.html';
            } else if (command === 'EDUCATION') {
                window.location.href = 'updated_education.html';
            } else if (command === 'WORK') {
                window.location.href = 'updated_work.html';
            } else if (command === 'OTHER') {
                terminalBody.innerHTML = '<div class="terminal-prompt">YOU HAVE BEEN HACKED!!!</div>';
                setTimeout(() => {
                    location.reload();
                }, 5000); // 5000 milliseconds = 5 seconds
            }

            terminalInput.value = '';
        }
    });
});
