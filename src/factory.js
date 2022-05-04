export function getYear() {
    return new Date().getFullYear()
};

export function LimitText(str, length) {
    let dots = "..."
    if (str.length > length) {
        str = str.substring(0, length) + dots
    }
    return str
}

const AddZero = (param) => {
    return param < 10 ? `0${param}` : param
}

export const CurrentTime = () => {
    const Hour = new Date().getHours()
    const Minutes = new Date().getMinutes()
    return `${AddZero(Hour)}:${AddZero(Minutes)}`
}
export const CurrentDate = () => {
    const day = new Date().getDate()
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    const date = `${AddZero(day)}.${AddZero(month + 1)}.${year}`
    return date
}
export const isPopulatedArray =  (source) => Array.isArray(source) && source.length > 0;