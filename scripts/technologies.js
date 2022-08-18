import { getTechnology, setTechnologies } from "./database.js";

const technologies = getTechnology()

document.addEventListener("change", event => {
    if(event.target.id === "technologySelect")
    setTechnologies((parseInt(event.target.value)))
})

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