import { carsRus } from "./scripts/carsRus.js"
const mainContainer = document.querySelector("#container")

const renderAllhtml = () => {
    mainContainer.innerHTML = carsRus()
}

renderAllhtml()