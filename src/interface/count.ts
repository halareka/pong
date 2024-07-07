export function updateCount(side: number): void {
    const RIGHT_COUNT: HTMLElement | null = document.getElementById("leftCount");
    const LEFT_COUNT: HTMLElement | null = document.getElementById("rightCount");

    let rightNum = RIGHT_COUNT ? parseInt(RIGHT_COUNT.innerText) : 0;
    let leftNum = LEFT_COUNT ? parseInt(LEFT_COUNT.innerText) : 0;

    switch (side) {
        case 0:
            if (LEFT_COUNT) {
                LEFT_COUNT.innerText = (leftNum + 1).toString();
                LEFT_COUNT.style.fontSize = `35px`;
                setTimeout(()=>{
                    LEFT_COUNT.style.fontSize = `25px`;
                },1000)
            }
            break;
        case 1:
            if (RIGHT_COUNT){
                RIGHT_COUNT.innerText = (rightNum + 1).toString();
                RIGHT_COUNT.style.fontSize = `35px`;
                setTimeout(()=>{
                    RIGHT_COUNT.style.fontSize = `25px`;
                },1000)
            }
            break;
    }
}
