import { interiorsHTML } from "./interiors.js"
import { paintColorHTML } from "./paintColors.js"
import { technologyHTML } from "./technologies.js"
import { wheelsHTML } from "./wheels.js"
import { Orders } from "./order.js"
import { addCustomOrder } from "./database.js"

document.addEventListener("click" , event => {
    if(event.target.id === "orderButton") {
      addCustomOrder()  
    }
})


export const carsRus = () => {
    return `
    <h1>Cars R Us</h1>
    <article class="choices">
        <div class="firstBox">
        <section class="choices__Colors options">
            <h2>Paint Colors</h2>
            <div> ${paintColorHTML()} </div>
        </section>
        <section class="choices__interiors options">
            <h2>Interiors</h2>
            <div> ${interiorsHTML()} </div>
        </section>
        </div>
        <div class="SecondBox">
        <section class="choices__tech options">
            <h2>Technologies</h2>
            <div> ${technologyHTML()} </div>
        </section>
        <section class="choices__wheels options">
            <h2>Wheels Options</h2>
            <div> ${wheelsHTML()} </div>
        </section>
        </div>
    </article>
    <article>
        <button id="orderButton">Create Custom Order</button>
    </article>
    <article class="customOrders">
        <h2>Custom Cars</h2>
        <div>${Orders()}</div>
    </article>
`
}