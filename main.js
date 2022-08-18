import { carsRus } from "./scripts/carsRus.js"
const mainContainer = document.querySelector("#container")

const renderAllhtml = () => {
    mainContainer.innerHTML = carsRus()
}

renderAllhtml()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllhtml()
})