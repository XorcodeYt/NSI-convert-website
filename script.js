function conversion() {
    let decimal = document.getElementById("decimal");
    let binaire = document.getElementById("binaire");
    let hexadecimal = document.getElementById("hexadecimal");

    let decVal = decimal.value.trim();
    let binVal = binaire.value.trim();
    let hexVal = hexadecimal.value.trim();

    if (decVal !== "") {
        let number = parseInt(decVal, 10);
        if (isNaN(number)) {
            alert("Valeur décimale invalide !");
            return;
        }
        binaire.value = number.toString(2);
        hexadecimal.value = number.toString(16).toUpperCase();
    }
    else if (binVal !== "") {
        let number = parseInt(binVal, 2);
        if (isNaN(number)) {
            alert("Valeur binaire invalide !");
            return;
        }
        decimal.value = number;
        hexadecimal.value = number.toString(16).toUpperCase();
    }
    else if (hexVal !== "") {
        let number = parseInt(hexVal, 16);
        if (isNaN(number)) {
            alert("Valeur hexadécimale invalide !");
            return;
        }
        decimal.value = number;
        binaire.value = number.toString(2);
    }
    else {
        alert("Veuillez remplir au moins une case !");
    }
}

function clearAll() {
    document.getElementById("decimal").value = "";
    document.getElementById("binaire").value = "";
    document.getElementById("hexadecimal").value = "";
}

let moveTimes = 0;

function secretFunction() {
    moveTimes = 0;
    const overlay = document.createElement('div');
    overlay.id = 'secret-overlay';
    overlay.innerHTML = `
        <div style="position: relative;">
            <img src="https://media1.tenor.com/m/f5khlE2M6p8AAAAd/shreck.gif" alt="secret">
            <button class="close-btn" onmouseover="moveButton(event)" onclick="activateShrekMode()">×</button>
        </div>
    `;
    document.body.appendChild(overlay);
}

function moveButton(event) {
    if (moveTimes < 10) {
        const btn = event.target;
        const btnWidth = btn.offsetWidth;
        const btnHeight = btn.offsetHeight;

        const maxX = window.innerWidth - btnWidth - 20;
        const maxY = window.innerHeight - btnHeight - 20;
        
        const randomX = Math.floor(Math.random() * maxX) + 10;
        const randomY = Math.floor(Math.random() * maxY) + 10;
        
        btn.style.left = randomX + 'px';
        btn.style.top = randomY + 'px';
        btn.style.position = 'fixed';
        moveTimes++;
    }
}

function activateShrekMode() {
    if (moveTimes < 10) {
        return;
    }
    
    // Fermer l'overlay
    const overlay = document.getElementById('secret-overlay');
    if (overlay) {
        overlay.remove();
    }
    
    // Ajouter la police Shrek
    if (!document.getElementById('shrek-font')) {
    const style = document.createElement('style');
    style.id = 'shrek-font';

    style.textContent = `
        @font-face {
            font-family: 'Shrek';
            src: url('shrek.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
        }
    `;

    document.head.appendChild(style);
    }

    
    const videoOverlay = document.createElement('div');
    videoOverlay.id = 'shrek-video-overlay';
    videoOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        pointer-events: none;
    `;


    videoOverlay.innerHTML = `
        <video
            autoplay
            loop
            playsinline
            preload="auto"
            style="width:100%; height:100%; object-fit:cover;">
            <source src="shrek.mp4" type="video/mp4">
        </video>
    `;
    document.body.appendChild(videoOverlay);
    
    const shrekStyle = document.createElement('style');
    shrekStyle.id = 'shrek-mode-style';
    shrekStyle.textContent = `
        * {
            font-family: 'Shrek', Arial, sans-serif !important;
        }
        
        body {
            background: rgba(74, 124, 51, 0) !important;
        }

        main { background: transparent !important; }
        
        header {
            background: #6b9d47 !important;
        }
        
        nav {
            background: #6b9d47 !important;
            border-bottom: 2px solid #8b7355 !important;
        }
        
        nav a:hover {
            color: #4a7c33 !important;
        }
        
        .converter-card, .info-page {
            background: rgb(83, 61, 34) !important;
            color: white !important;
        }
        
        label, .info-page h1, .info-page li {
            color: white !important;
        }
        
        .base-label {
            background: #4a7c33 !important;
        }
        
        input {
            background: rgba(255, 255, 255, 0.9) !important;
            border-color: #4a7c33 !important;
        }
        
        input:focus {
            border-color: #6b9d47 !important;
        }
        
        button {
            background: #6b9d47 !important;
        }
        
        button:hover {
            background: #4a7c33 !important;
        }
        
        .btn-clear {
            background: #8b7355 !important;
        }
        
        .btn-clear:hover {
            background: #6b5d45 !important;
        }
        
        .secret-btn {
            background: rgba(107, 157, 71, 0) !important;
            color: rgba(107, 157, 71, 0) !important;
        }
        
        .secret-btn:hover {
            background:rgba(107, 157, 71, 0) !important;
            color: rgba(107, 157, 71, 0) !important;
        }

        footer a:hover {
            color: #6b9d47;
        }
    `;
    document.head.appendChild(shrekStyle);
}

function closeSecret() {
    const overlay = document.getElementById('secret-overlay');
    if (overlay) {
        overlay.remove();
    }
}