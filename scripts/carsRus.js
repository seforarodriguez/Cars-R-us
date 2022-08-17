import { interiorsHTML } from "./interiors.js"
import { paintColorHTML } from "./paintColors.js"
import { technologyHTML } from "./technologies.js"
import { wheelsHTML } from "./wheels.js"


export const carsRus = () => {
    return `
    <h1>Cars R Us</h1>
    <article class="choices">
        <section class="choices__Colors options">
            <h2>Paint Colors</h2>
            <div> ${paintColorHTML()} </div>
        </section>
        <section class="choices__interiors options">
            <h2>Interiors</h2>
            <div> ${interiorsHTML()} </div>
        </section>
        <section class="choices__tech options">
            <h2>Technologies</h2>
            <div> ${technologyHTML()} </div>
        </section>
        <section class="choices__wheels options">
            <h2>Wheels Options</h2>
            <div> ${wheelsHTML()} </div>
        </section>
    </article>
    <article>
        <button id="orderButton">Create Custom Order</button>
    </article>
    <article class="customOrders">
        <h2>Custom Cars</h2>
        <div> HERE GOES THE FINISHED CAR</div>
    </article>
`
}