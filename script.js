function setupBoard() {
    // your javascript file
    const container = document.querySelector('#container');

    gridSize = document.querySelector('input').value;

    container.style.setProperty("--columns-row", gridSize);

    for (let i = 0; i < gridSize * gridSize; i++) {
        const content = document.createElement('div');
        content.classList.add('box');

        let color = document.querySelector('#colorPicker').value;

        content.addEventListener('mouseover', (event) => {
            if (color === "color") {
                event.target.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
            } else {
                event.target.style.backgroundColor = "black";
            }
            
        })
    
        container.appendChild(content);
    }

    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        removeBoard();
    })


}

function removeBoard() {
    const container = document.querySelector('#container');
    container.innerHTML = "";
    setupBoard();
}

setupBoard();