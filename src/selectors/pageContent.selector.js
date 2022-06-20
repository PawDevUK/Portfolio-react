import parse from 'html-react-parser';

export const getMenu = (state) => {
    return state.PageContent.header.menu
}

export const getStack = (state) => {
    if(state.PageContent.stack.tools){
        return state.PageContent.stack.tools
    }
    return [{},{}]   
}

export const getStackHeader = (state) => {
    const EngLang = state?.EngLang

    if(!EngLang){
        return state.PageContent?.stack?.PolishLang?.header
    }
    return state.PageContent?.stack?.header
}

export const getLang = (state) => {
    return state.EngLang
}

export const getFooterData = (state)=>{
    return state.PageContent.footer
}

export const getRightFooterData = (state) =>{
    return state.PageContent.footer.rightData
}
export const getJumboTextHeader = (state) => {
    let EngLang = state.EngLang
    let header = state.PageContent.header?.jumboText

    let engHeader = header.quote?.header
    let polHeader = header.quote?.PolishLang.header

    let langHeader = EngLang ? engHeader : polHeader

    if(langHeader){
        return parse(langHeader)
    }   

}

export const getJumboTextAuth = (state) =>{
    return state.PageContent.header?.jumboText.quote?.author
}

export const getJumboP = (state) =>{
    let EngLang = state.EngLang
    let header = state.PageContent.header?.jumboText

    let engP = header.a?.header
    let polP = header.a?.PolishLang.header

    let langP = EngLang ? engP : polP

    return langP
}

export const getGithubButton = (state) =>{
    const EngLang = state.EngLang
    let button = state.PageContent.buttons?.github
    const buttonE = button?.eng
    const buttonPL = button?.pl

    return EngLang ? buttonE : buttonPL
}

export const getAboutIntro = (state) =>{
    if(state.PageContent?.aboutIntro?.text){
        return parse(state.PageContent.aboutIntro.text)
        }
}
 export const getHeader = (state) =>{
     return state.PageContent?.aboutIntro?.header
 }
    