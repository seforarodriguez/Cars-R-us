import { getInteriors } from "./database.js"; 

const interiors = getInteriors()

export const interiorsHTML = () => {
    let html = `<select id="interiorSelect">
    <option value="0">Prompt to Select</option>
`

    // Using .map() to convert objects to loop through 
    //the paintColors and print out the options
    let listItem = interiors.map((interior) => {
        return `<option value="${interior.id}"/> ${interior.seatTypes}</option>`
    })


    // Join all of the strings in the array into a single string
    html += listItem.join('')
    html += "</select>"
    return html
}