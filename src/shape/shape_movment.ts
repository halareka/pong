import { updateCount } from "../interface/count";
export function shapeMovment(): void {
    const getRandomNumber = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

    const SHAPE: HTMLElement | null = document.getElementById("shape");
    let leftDir: number,
        topDir: number = getRandomNumber(-10, 10);
    let leftX: number = Math.floor(window.innerWidth / 2 - 50),
        topY: number = Math.floor(window.innerHeight / 2 - 50);
        
    getRandomNumber(1, 2) == 1 ? (leftDir = 10) : (leftDir = -10);
    setCenter();

    let setInt: any = setInterval(() => {
        let shapePos: DOMRect | undefined = SHAPE?.getBoundingClientRect();
        let linePosUser: DOMRect | undefined = document.getElementById("root")?.getBoundingClientRect();
        let linePosEnemy: DOMRect | undefined = document.getElementById("enemy")?.getBoundingClientRect();
        if (shapePos && linePosUser && linePosEnemy) {
            if (SHAPE) {
                SHAPE.style.marginLeft = `${(leftX += leftDir)}px`;
                SHAPE.style.marginTop = `${(topY += topDir)}px`;
            }

            if (shapePos.left <= -50) sideDetect(0);
            if (shapePos.left >= window.innerWidth) sideDetect(1);

            if (shapePos.top <= 10 && topDir < 0) topDir = getRandomNumber(10, 15);
            if (shapePos.top >= window.innerHeight - 70 && topDir > 0) topDir = getRandomNumber(-15, -10);

            if (shapePos.top <= linePosUser.top + 150 && leftDir <= -10) {
                if (shapePos.top <= linePosUser.top + 110 && shapePos.top >= linePosUser.top - 55 && shapePos.left >= linePosUser.left && shapePos.left <= linePosUser.left + 65) {
                    leftDir = 15;
                    topDir = getRandomNumber(-7, 7);
                }
            }

            if (shapePos.top <= linePosEnemy.top + 150 && leftDir >= 10) {
                if (shapePos.top <= linePosEnemy.top + 110 && shapePos.top >= linePosEnemy.top - 55 && shapePos.right >= linePosEnemy.left && shapePos.left <= linePosEnemy.left) {
                    leftDir = -15;
                    topDir = getRandomNumber(-7, 7);
                }
            }
        }
    }, 40);
    function setCenter(): void {
        SHAPE ? (SHAPE.style.marginTop = `${Math.floor(window.innerHeight / 2 - 50)}px`) : false;
        SHAPE ? (SHAPE.style.marginLeft = `${Math.floor(window.innerWidth / 2 - 25)}px`) : false;
        leftX = Math.floor(window.innerWidth / 2 - 50);
        topY = Math.floor(window.innerHeight / 2 - 50);
    }
    function sideDetect(side: number): void {
        setCenter();
        setTimeout(() => {
            clearInterval(setInt);
            updateCount(side);
        }, 25);
        setTimeout(() => {
            shapeMovment();
        }, 1500);
    }
}
