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



// Create - POST



// Update - PUT



// Delete - DELETE




export {
    index
}