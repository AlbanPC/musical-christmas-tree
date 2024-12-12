document.addEventListener('DOMContentLoaded', function() {  
    const musicToggle = document.getElementById('musicToggle');  
    const snowToggle = document.getElementById('snowToggle');  
    const lightsToggle = document.getElementById('lightsToggle');  

    let musicOn = false;  
    let snowOn = false;  
    let lightsOn = false;  

    musicToggle.addEventListener('click', () => {  
        musicOn = !musicOn;  
        musicToggle.textContent = musicOn ? '🔊' : '🔇';  
    });  

    snowToggle.addEventListener('click', () => {  
        snowOn = !snowOn;  
        document.getElementById('snow').style.display = snowOn ? 'block' : 'none';  
    });  

    lightsToggle.addEventListener('click', () => {  
        lightsOn = !lightsOn;  
        document.querySelector('.tree').classList.toggle('lights-on');  
    });  
});  
