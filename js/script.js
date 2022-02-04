const availableScreenHeight = window.screen.availHeight
const mainPage = document.querySelector(".main-page");
mainPage.style.height = (availableScreenHeight - 3 * 75 + 1) + "px";