export const TOGGLE_LANG = "TOGGLE_LANG"

export function toggleLang(boolean){
    return{
        type: TOGGLE_LANG,
        payload:boolean
    }
}