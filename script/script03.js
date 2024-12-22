document.addEventListener("DOMContentLoaded", () => {
    const mouse = document.querySelector(".mouse");
    const message = document.querySelector(".message");
    let clickCount = 0;

    const messages = [
        "You can never catch me!",
        "Still can't catch me!",
        "Too fast for you!",
        "Nice try, but no!",
        "Keep clicking!",
        "Better luck next time!"
    ];

    function getRandomPosition() {
        const wrapper = document.querySelector(".wrapper");
        const wrapperRect = wrapper.getBoundingClientRect();

        const maxX = wrapperRect.width - mouse.offsetWidth;
        const maxY = wrapperRect.height - mouse.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        return { x: randomX, y: randomY };
    }

    function updateMousePosition() {
        const { x, y } = getRandomPosition();
        mouse.style.left = `${x}px`;
        mouse.style.top = `${y}px`;
    }

    function handleClick() {
        clickCount++;

        if (clickCount % 6 === 0) {
            const messageIndex = (clickCount / 6 - 1) % messages.length;
            message.textContent = messages[messageIndex];
            message.style.opacity = "1";
            message.style.transition = "opacity 0.5s ease";
            setTimeout(() => {
                message.style.opacity = "0";
            }, 2000);
        }

        mouse.style.transition = "transform 0.4s ease, opacity 0.4s ease";
        mouse.style.transform = "scale(0)";
        mouse.style.opacity = "0";

        setTimeout(() => {
            const { x, y } = getRandomPosition();
            mouse.style.transform = "scale(1)";
            mouse.style.opacity = "1";
            mouse.style.left = `${x}px`;
            mouse.style.top = `${y}px`;
        }, 500);
    }

   
    updateMousePosition();

   
    mouse.addEventListener("click", handleClick);
    window.addEventListener("resize", updateMousePosition);
});
