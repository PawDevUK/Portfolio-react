export const getNumberNull = (data) => {
    return data && (data !== "N/A" ) ? parseFloat(data.replace(/[,+]/g, '')) : null
}

export const removeComa = (data) => {
    return parseFloat(data.replace(/,/g, ''))
}

export const checkForData =(data)=>{
    return data?data:null
}