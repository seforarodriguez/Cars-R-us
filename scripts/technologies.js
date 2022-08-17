import { getTechnology } from "./database.js";

const technologies = getTechnology()

export const technologyHTML = () => {
    let html = `<select id="technologySelect">
    <option value="0">Prompt to Select</option>
`

    // Using .map() to convert objects to loop through 
    //the paintColors and print out the options
    let listItem = technologies.map((technology) => {
        return `<option value="${technology.id}"/> ${technology.techCapabilities}</option>`
    })


    // Join all of the strings in the array into a single string
    html += listItem.join('')
    html += "</select>"
    return html
}