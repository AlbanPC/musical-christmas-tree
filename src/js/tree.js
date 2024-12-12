// Initialize the canvas and context
const canvas = document.getElementById('christmasTreeCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Tree drawing function
function drawTree(x, y, width, height, levels) {
    const trunkHeight = height / 5;
    const trunkWidth = width / 4;

    // Draw trunk
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(x - trunkWidth / 2, y, trunkWidth, trunkHeight);

    // Draw tree levels
    ctx.fillStyle = '#0f5132';
    for (let i = 0; i < levels; i++) {
        const levelWidth = width - (i * (width / levels));
        const levelHeight = height / levels;
        const levelX = x - levelWidth / 2;
        const levelY = y - trunkHeight - i * levelHeight;
        
        ctx.beginPath();
        ctx.moveTo(levelX, levelY + levelHeight);
        ctx.lineTo(levelX + levelWidth / 2, levelY);
        ctx.lineTo(levelX + levelWidth, levelY + levelHeight);
        ctx.closePath();
        ctx.fill();
    }
}

// Ornament drawing function
function drawOrnaments(x, y, width, height, levels) {
    const colors = ['#ff0000', '#ffff00', '#00ff00', '#0000ff', '#ff69b4'];
    for (let i = 0; i < levels * 3; i++) {
        const ornamentX = x + (Math.random() - 0.5) * width;
        const ornamentY = y - Math.random() * height;
        const radius = Math.random() * 5 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];

        ctx.beginPath();
        ctx.arc(ornamentX, ornamentY, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
    }
}

// Star drawing function
function drawStar(x, y) {
    ctx.fillStyle = 'gold';
    ctx.beginPath();
    ctx.moveTo(x, y - 20);
    for (let i = 1; i <= 5; i++) {
        const angle = (i * Math.PI) / 2.5;
        const starX = x + Math.cos(angle) * 20;
        const starY = y + Math.sin(angle) * 20;
        ctx.lineTo(starX, starY);
    }
    ctx.closePath();
    ctx.fill();
}

// Initialize the scene
function initializeScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const centerX = canvas.width / 2;
    const baseY = canvas.height - 100;
    const treeWidth = 200;
    const treeHeight = 400;
    const levels = 5;

    drawTree(centerX, baseY, treeWidth, treeHeight, levels);
    drawOrnaments(centerX, baseY - treeHeight / 2, treeWidth, treeHeight, levels);
    drawStar(centerX, baseY - treeHeight - 30);
}

// Resize handler
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initializeScene();
});

// Start drawing
initializeScene();
