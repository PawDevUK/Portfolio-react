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
export const CurrentTime = () => {
    const Hour = new Date().getHours()
    const Minutes = new Date().getMinutes()
    return `${Hour}:${Minutes}`
}
export const CurrentDate = () => {
    const day = new Date().getDate()
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    const date = `${day}.${month + 1}.${year}`
    console.log(date)
    return date
}