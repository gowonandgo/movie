/**마우스 */
document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".mouse");
    const mouseSize = cursor.offsetWidth; 
  
    const maxX = window.innerWidth - mouseSize;
    const maxY = window.innerHeight - mouseSize;
  
    const mouseX = Math.min(Math.max(e.pageX - mouseSize / 2, 0), maxX);
    const mouseY = Math.min(Math.max(e.pageY - mouseSize / 2, 0), maxY);
  
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });
  
  
  /**버튼 */
  const focus = document.querySelector(".focus");
  const innerElements = document.querySelectorAll(".background .inner");
  
  focus.addEventListener("click", () => {
    innerElements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = "1";
      }, index * 100);
    });
  });
  
  const ending = document.querySelector(".ending");
  
  ending.addEventListener("click", () => {
    for (let i = innerElements.length - 1; i >= 0; i--) {
      setTimeout(() => {
        innerElements[i].style.opacity = "0";
      }, (innerElements.length - 1 - i) * 260); 
    }
  });
  
  
  /**사운드 */
  const drum = document.querySelector(".drum");
  const stick = document.querySelector(".stick");
  const clickSound = document.getElementById("click-sound");
  
  drum.addEventListener("click", () => {
    stick.classList.add("shake");
    clickSound.currentTime = 0;
    clickSound.play();
  
    const animationDuration = Math.max(clickSound.duration - 0.7, 0);
    setTimeout(() => {
      stick.classList.remove("shake");
    }, animationDuration * 1000);
  });
  
  
  
  /**크레딧 */
  const credit = document.querySelector(".credit");
  
  ending.addEventListener("click", () => {
   
    credit.style.transition = "none"; 
    credit.style.transform = "translateY(0)"; 
    credit.style.opacity = "1";
    
    setTimeout(() => {
      credit.style.transition = "transform 46s ease, opacity 46s ease";
      credit.style.transform = "translateY(-600%)";
    }, 10); 
  });
  