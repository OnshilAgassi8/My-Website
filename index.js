document.addEventListener("DOMContentLoaded", function() {
    function typeWriter(element, text, delay = 100) {
        let i = 0;
        (function type() {
            if (i < text.length) {
                if (text[i] === '<') {
                    while (text[i] !== '>') {
                        element.innerHTML += text[i++];
                    }
                    element.innerHTML += text[i++];
                } else {
                    element.innerHTML += text[i++];
                }
                setTimeout(type, delay);
            }
        })();
    }

    const typingTextElement = document.getElementById('typing-text');
    const text = 'hi, Agassi here.';
    typingTextElement.innerHTML = '';
    typeWriter(typingTextElement, text);
});


document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.content-section');

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');
    
    const updateTime = () => {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4]; 
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDay = days[now.getUTCDay()];

        currentTimeElement.textContent = `Current Time in UTC: ${utcTime}`;
        currentDayElement.textContent = `Current Day of the week: ${currentDay}`;
    };

    updateTime();
    setInterval(updateTime, 1000);
});