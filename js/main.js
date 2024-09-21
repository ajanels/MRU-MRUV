// Función para mostrar una sección y ocultar las demás
function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
}

// Cálculos para MRU
function calcularVelocidad() {
    const distancia = parseFloat(document.getElementById("distancia-velocidad").value);
    const tiempo = parseFloat(document.getElementById("tiempo-velocidad").value);
    if (distancia && tiempo) {
        const velocidad = distancia / tiempo;
        document.getElementById("resultado-velocidad").innerText = `Resultado: ${velocidad.toFixed(2)} m/s`;
    } else {
        document.getElementById("resultado-velocidad").innerText = "Por favor ingrese valores válidos.";
    }
}

function calcularTiempo() {
    const distancia = parseFloat(document.getElementById("distancia-tiempo").value);
    const velocidad = parseFloat(document.getElementById("velocidad-tiempo").value);
    if (distancia && velocidad) {
        const tiempo = distancia / velocidad;
        document.getElementById("resultado-tiempo").innerText = `Resultado: ${tiempo.toFixed(2)} s`;
    } else {
        document.getElementById("resultado-tiempo").innerText = "Por favor ingrese valores válidos.";
    }
}

function calcularDistancia() {
    const velocidad = parseFloat(document.getElementById("velocidad-distancia").value);
    const tiempo = parseFloat(document.getElementById("tiempo-distancia").value);
    if (velocidad && tiempo) {
        const distancia = velocidad * tiempo;
        document.getElementById("resultado-distancia").innerText = `Resultado: ${distancia.toFixed(2)} m`;
    } else {
        document.getElementById("resultado-distancia").innerText = "Por favor ingrese valores válidos.";
    }
}


function calcularVelocidadFinalMRUV() {
    const v0 = parseFloat(document.getElementById('velocidad-inicial').value);
    const a = parseFloat(document.getElementById('aceleracion').value);
    const t = parseFloat(document.getElementById('tiempo-mruv').value);
    
    if (!isNaN(v0) && !isNaN(a) && !isNaN(t)) {
        const velocidadFinal = v0 + a * t;
        document.getElementById('resultado-velocidad-final').innerText = `Resultado: ${velocidadFinal.toFixed(2)} m/s`;
    } else {
        document.getElementById('resultado-velocidad-final').innerText = "Por favor ingrese valores válidos.";
    }
}

function calcularDistanciaMRUV() {
    const v0 = parseFloat(document.getElementById('velocidad-inicial-distancia').value);
    const a = parseFloat(document.getElementById('aceleracion-distancia').value);
    const t = parseFloat(document.getElementById('tiempo-distancia').value);
    
    console.log(`Velocidad Inicial: ${v0}, Aceleración: ${a}, Tiempo: ${t}`); // Debugging
    
    if (!isNaN(v0) && !isNaN(a) && !isNaN(t) && v0 >= 0 && a >= 0 && t >= 0) {
        const distancia = v0 * t + 0.5 * a * t * t;
        document.getElementById('resultado-distancia-mruv').innerText = `Resultado: ${distancia.toFixed(2)} m`;
    } else {
        document.getElementById('resultado-distancia-mruv').innerText = "Por favor ingrese valores válidos.";
    }
}



function calcularTiempoMRUV() {
    const vf = parseFloat(document.getElementById('velocidad-final').value);
    const v0 = parseFloat(document.getElementById('velocidad-inicial-tiempo').value);
    const a = parseFloat(document.getElementById('aceleracion-tiempo').value);
    
    if (!isNaN(vf) && !isNaN(v0) && !isNaN(a)) {
        const tiempo = (vf - v0) / a;
        document.getElementById('resultado-tiempo-mruv').innerText = `Resultado: ${tiempo.toFixed(2)} s`;
    } else {
        document.getElementById('resultado-tiempo-mruv').innerText = "Por favor ingrese valores válidos.";
    }
}
