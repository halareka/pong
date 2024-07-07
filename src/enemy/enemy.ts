export function enemy(): void {
    const ENEMY: HTMLElement | null = document.getElementById("enemy");
    const STEP: number = 13;

    let position: number = Math.floor(window.innerHeight / 2 - 75);
    let flagTop = true,
        flagDown = true;

    function setDown() {
        flagTop = true;
        if (position >= window.innerHeight - 115) flagDown = false;
        
        position += STEP;
        ENEMY ? (ENEMY.style.marginTop = `${position}px`) : false;
    }
    function setUp() {
        flagDown = true;
        if (position < 25) flagTop = false;

        position -= STEP;
        ENEMY ? (ENEMY.style.marginTop = `${position}px`) : false;
    }

    setInterval(() => {
        let shapePos: DOMRect | undefined = document.getElementById("shape")?.getBoundingClientRect();
        let enemyPos: DOMRect | undefined = ENEMY?.getBoundingClientRect()
        if (shapePos && enemyPos) {
            if(shapePos.left >= window.innerWidth / 2){
                if(shapePos.top > enemyPos.top + 25 ){
                    if (flagDown) setDown();
                }
                if(shapePos.top < enemyPos.top ){
                    if (flagTop) setUp();
                }
            }
        }
    }, 40);
}