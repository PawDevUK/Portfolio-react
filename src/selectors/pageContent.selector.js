import parse from 'html-react-parser';
import { createSelector } from '@reduxjs/toolkit'

export const getPageContent = (state) => {
    return state.PageContent
}
export const getAboutIntro = (state) =>{
        return getPageContent(state).aboutIntro
}

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

export const getAboutHeader = createSelector(
    getAboutIntro, 
    getLang, 
    (aboutIntro, EngLang) =>{
    
    let pol = aboutIntro?.PolLang.header
    let eng = aboutIntro?.header

    return EngLang ? eng : pol
})

export const getAboutText = createSelector(
    getAboutIntro,
    getLang, 
    (aboutIntro, EngLang) => {

    let pol = aboutIntro.PolLang.text
    let eng = aboutIntro.text
    
    return EngLang && eng ? parse(eng) : parse(pol)
})
