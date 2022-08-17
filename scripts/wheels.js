import { getWheels } from "./database.js";

const wheels = getWheels()

export const wheelsHTML = () => {
    let html = `<select id="wheelsSelect">
                <option value="0">Prompt to Select</option>
    `

    // Using .map() to convert objects to loop through 
    //the paintColors and print out the options
    let listItem = wheels.map((wheel) => {
        return `
           <option value="${wheel.id}"/> ${wheel.radialPair}</option>
       `
    })
    
    
    // Join all of the strings in the array into a single string
    html += listItem.join('')
    html += "</select>"
    return html
}