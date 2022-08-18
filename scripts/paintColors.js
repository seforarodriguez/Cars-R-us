import { getPaintColors, setpaintColors } from "./database.js";

const paintColors = getPaintColors()

document.addEventListener("change", event => {
    if(event.target.id === "paintColorSelect")
    setpaintColors(parseInt(event.target.value))
})


export const paintColorHTML = () => {
    let html = `<select id="paintColorSelect">
                <option value="0">Prompt to Select</option>
    `

    // Using .map() to convert objects to loop through 
    //the paintColors and print out the options
    let listItem = paintColors.map((paintColor) => {
        return `
           <option value="${paintColor.id}"/> ${paintColor.colorName}</option>
       `
    })
    
    
    // Join all of the strings in the array into a single string
    html += listItem.join('')
    html += "</select>"
    return html
}