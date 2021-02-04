export function Year(){
    return new Date().getFullYear()
}
export function LimitText(str,length){
    let dots = "..."
    if(str.length>length){
        str = str.substring(0,length) + dots
    }
    return str
}