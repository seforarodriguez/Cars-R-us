const database = {
    paintColors: [
        { id: 1, colorName: "Silver", price: 100 },
        { id: 2, colorName: "Midnight Blue", price: 220 },
        { id: 3, colorName: "Firebrick Red", price: 125 },
        { id: 4, colorName: "Spring Green", price: 125 }
    ],
    interiors: [
        { id: 1, seatTypes: "Beige Fabric", price: 100 },
        { id: 2, seatTypes: "Charcoal Fabric", price: 220 },
        { id: 3, seatTypes: "White Leather", price: 125 },
        { id: 4, seatTypes: "Black Leather", price: 125 }
    ],
    technologies: [
        { id: 1, techCapabilities: "Basic Package", price: 100 },
        { id: 2, techCapabilities: "Navigation Package", price: 220 },
        { id: 3, techCapabilities: "Visibility Package", price: 125 },
        { id: 4, techCapabilities: "Ultra Package", price: 125 }
    ],
    wheels: [
        { id: 1, radialPair: "17-inch Pair Radial", price: 100 },
        { id: 2, radialPair: "17-inch Pair Radial Black", price: 220 },
        { id: 3, radialPair: "18-inch Pair Radial Silver", price: 125 },
        { id: 4, radialPair: "18-inch Pair Radial Black", price: 125 }
    ],
    customOrders:[
        { id: 1, techId:1, paintId: 4, interiorId: 2, wheelsId:4 },
    ],
    orderBuilder: {}
}

//This is exporting the different keys from the database object
//With the .map function I am allowing the access to each element in the array
//like a loop.
export const getPaintColors = () => {
    return database.paintColors.map(paintColor => ({...paintColor}))
};

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnology = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrder = () => {
    return database.customOrders.map(order => ({...order}))
}

export const setpaintColors = (id) => {
    return database.orderBuilder.paintId = id
}

export const setInteriors = (id) => {
    return database.orderBuilder.interiorId = id
}

export const setTechnologies = (id) => {
    return database.orderBuilder.techId = id
}

export const setWheels = (id) => {
    return database.orderBuilder.wheelsId = id
}




export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1
    newOrder.timestamp = Date.now()
    database.customOrders.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
};




