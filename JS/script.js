isOn = false

const r = document.querySelector(':root');

function lightSwitch() {
    if (isOn == false) {
        document.getElementById("offBulb").style.display = "none"
        document.getElementById("onBulb").style.display = "block"
        // document.getElementById("switch").style.rotate = "180deg"
        document.getElementById("container").style.backgroundColor = "beige"
        r.style.setProperty('--text', 'black')
        isOn = true
    } else {
        document.getElementById("onBulb").style.display = "none"
        document.getElementById("offBulb").style.display = "block"
        // document.getElementById("switch").style.rotate = "0deg"
        document.getElementById("container").style.backgroundColor = "gray"
        r.style.setProperty('--text', 'white')
        isOn = false
    }
}