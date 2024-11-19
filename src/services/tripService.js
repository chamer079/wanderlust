const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}trips`


// Index/Get All - GET
const index = async () => {
    try {
        const res = await fetch(BASE_URL)
        return res.json()
    }catch (error) {
        console.log(error)
        return {error: error.message}
    }
}


// Read/Show 1 - GET
const show = async (tripId) => {
    try {
        const res = await fetch(`${BASE_URL}/${tripId}`)

        return res.json()
    }catch (error) {
        console.log(error)
    }
}


// Create - POST
const create = async (tripFormData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tripFormData),
        })
        return res.json()
    }catch (error) {
        console.log(error)
    }
}


// Create Itinerary - POST
const createItinerary = async (tripId, itineraryFormData) => {
    try {
        const res = await fetch(`${BASE_URL}/${tripId}/itineraries`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(itineraryFormData)
        })
        return res.json()
    }catch (error) {
        console.log(error)
    }
}


// Delete - DELETE
const deleteTrip = async (tripId) => {
    try {
        const res = await fetch(`${BASE_URL}/${tripId}`, {
            method: "DELETE",
        }) 
        return res.json()
    }catch (error) {
        console.log(error)
    }
}




// Update - PUT





export {
    index,
    show,
    create, 
    createItinerary,
    deleteTrip
}