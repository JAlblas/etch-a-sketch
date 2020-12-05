function setupBoard(gridSize) {
    // your javascript file
    const container = document.querySelector('#container');
    container.style.setProperty("--columns-row", gridSize);

    for (let i = 0; i < gridSize * gridSize; i++) {
        const content = document.createElement('div');
        content.classList.add('box');

        content.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = "black";
        })
    
        container.appendChild(content);
    }


}

setupBoard(16);