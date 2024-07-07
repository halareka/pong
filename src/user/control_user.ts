export function userControl():void {
    const ROOT: HTMLElement | null = document.getElementById("root");
    const STEP: number = 15;

    let position: number = Math.floor(window.innerHeight / 2 - 75);
    let flagTop = true,flagDown = true;

    function setDown() {
        flagTop = true;
        if (position >= window.innerHeight - 115) flagDown = false;
        position += STEP;
        ROOT ? (ROOT.style.marginTop = `${position}px`) : false;
    }
    function setUp() {
        flagDown = true;
        if (position < 25) flagTop = false;
        position -= STEP;
        ROOT ? (ROOT.style.marginTop = `${position}px`) : false;
    }
    document.addEventListener("keypress", function (event) {
        if (event.code === "KeyS") {
            if (flagDown) setDown();
        }
        if (event.code === "KeyW") {
            if (flagTop) setUp();
        }
    });
}
