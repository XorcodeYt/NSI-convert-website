function conversion() {
    let dec = document.getElementById("decimal");
    let bin = document.getElementById("binaire");
    let hex = document.getElementById("hexadecimal");

    if (dec.value !== "") {
        bin.value = parseInt(dec.value).toString(2);
        hex.value = parseInt(dec.value).toString(16).toUpperCase();
    }
    else if (bin.value !== "") {
        dec.value = parseInt(bin.value, 2);
        hex.value = parseInt(bin.value, 2).toString(16).toUpperCase();
    }
    else if (hex.value !== "") {
        dec.value = parseInt(hex.value, 16);
        bin.value = parseInt(hex.value, 16).toString(2);
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

function secretFunction() {
    const overlay = document.createElement('div');
    overlay.id = 'secret-overlay';
    overlay.innerHTML = `
        <div style="position: relative;">
    	    <img src="https://media1.tenor.com/m/f5khlE2M6p8AAAAd/shreck.gif" alt="secret">
            <button class="close-btn" onmouseover="moveButton(event)">×</button>
        </div>
    `;
    document.body.appendChild(overlay);
}

function moveButton(event) {
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
}

function closeOverlay() {
    document.getElementById('secret-overlay').remove();
}