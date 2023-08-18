const img = document.getElementById('img');
const buttons = document.getElementById ('buttons');

conts = trafficLght = (event) => {
    turnOn[event.target.id]();
}

const turnOn = {
    'red':     ()=>img.src="vermelho.png",
    'yellow':  ()=>img.src="amarelo.png",
    'green':   ()=>img.src="verde.png",
    'automatic': ()=> setInterval(changecolor, 1000)

}

buttons.addEventListener('click', trafficLght );