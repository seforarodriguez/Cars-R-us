import { carsRus } from "carsRus.js"
const mainContainer = document.querySelector("#container")

const renderAllhtml = () => {
    mainContainer.innerHTML = carsRus()
}

renderAllhtml()