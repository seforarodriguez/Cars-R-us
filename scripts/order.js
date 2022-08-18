import { getOrder, getPaintColors, getInteriors, getWheels, getTechnology} from "./database.js";

const interiors = getInteriors()
const paints = getPaintColors()
const wheels = getWheels()
const technologies = getTechnology()

const buildOrderListItem = (order) => {
    if(order.timestamp === undefined) {
        return `I'm waiting for your orders...`
    }
    else {
    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        })
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        })
    const foundTechnology = technologies.find(
        (technology) => {
            return technology.id === order.techId
        })
    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelsId
        })
    
       const totalCost = foundWheels.price + foundInterior.price +foundPaint.price +foundTechnology.price
        
    const costString = totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
        return `<div class="eachOrder">
                Order #${order.id} was placed on ${order.timestamp} 
            <div>`
    }
    }





export const Orders = () => {

    const orders = getOrder()
   
    let html = "<ul>"

    const listItems = orders.map(order => {return buildOrderListItem(order)})

    html += listItems.join("")
    html += "</ul>"

    return html
}