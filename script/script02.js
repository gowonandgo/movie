const circle = document.querySelector(".circle");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const hand = document.querySelector(".hand");
const onAirText = document.querySelector(".on_air p");
const contents = document.querySelector(".contents");


const updateText = (isOnAir) => {
    onAirText.style.opacity = '0';
    contents.style.opacity = '0';

    setTimeout(() => {
        onAirText.textContent = isOnAir ? 'ON AIR' : 'OFF THE AIR';
        contents.innerHTML = isOnAir
            ? "you're afraid.<br/>That's why you can't leave"
            : "You never had a camera in my head.<br/>Good Afternoon, Good Evening and Good Night.";

        onAirText.style.opacity = '1';
        contents.style.opacity = '1';
    }, 200); 
};


const waveHand = () => {
    let position = 1;
    const interval = setInterval(() => {
        if (position > 10) {
            clearInterval(interval); 
            hand.style.transform = 'rotate(0deg)';
        } else {
            hand.style.transform = `rotate(${position % 2 === 0 ? 10 : -10}deg)`;
            position++;
        }
    }, 200); 
};


const circleMove = (e) => {
    const x = ((e.x - window.innerWidth / 3) / (window.innerWidth / 3)) * 110;
    const y = ((e.y - window.innerHeight / 3) / (window.innerHeight / 3)) * 110;

    circle.style.transition = 'none';
    circle.style.boxShadow = `inset ${x}px ${y}px 18px rgba(0, 0, 0, 0.5)`;

    horizontal.style.opacity = '1';
    vertical.style.opacity = '1';
    hand.style.opacity = '0';
};


const circleLeave = () => {
    setTimeout(() => {
        circle.style.transition = 'box-shadow 1.5s ease';
        circle.style.boxShadow = `15px 25px 12px 0px rgba(0, 0, 0, 0.25)`;
    }, 100);

    horizontal.style.opacity = '0';
    vertical.style.opacity = '0';

    setTimeout(() => {
        hand.style.opacity = '1';
        waveHand(); 
    }, 300); 
    updateText(false);
};


const circleEnter = () => {
    updateText(true);
};


const leftSection = document.querySelector(".left");
leftSection.addEventListener("mouseenter", circleEnter);
leftSection.addEventListener("mousemove", circleMove);
leftSection.addEventListener("mouseleave", circleLeave);
