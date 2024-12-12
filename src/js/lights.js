function addLights() {
    const tree = document.querySelector('.tree');
    const colors = ['#ff0000', '#00ff00', '#ffff00', '#0000ff', '#ff00ff'];
    const lightCount = 30;

    for (let i = 0; i < lightCount; i++) {
        const light = document.createElement('div');
        light.className = 'light';

        // Randomly assign light properties
        light.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        light.style.left = `${Math.random() * 80 + 10}%`;  // Avoid edges
        light.style.top = `${Math.random() * 80 + 10}%`;   // Avoid edges
        light.style.animationDelay = `${Math.random() * 2}s`;

        // Append light to the tree
        tree.appendChild(light);
    }
}
