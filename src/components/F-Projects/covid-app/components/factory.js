export const getNumberNull = (data) => {
    return data && data !== 'N/A' ? parseFloat(data.replace(/[,+]/g, '')) : null;
};

export const removeComa = (data) => {
    return parseFloat(data.replace(/,/g, ''));
};

export const checkForData = (data) => {
    return data ? data : null;
};

export function getYear() {
    return new Date().getFullYear();
}

export function CheckMax(data) {
    if (data) {
        let values = Object.values(data);
        return Math.max(...values);
    }
    return;
}
export function RemoveURLFromString(str) {
    return str.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
}
