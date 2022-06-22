import parse from 'html-react-parser';
import { createSelector } from '@reduxjs/toolkit'

export const getPageContent = (state) => {
    return state.PageContent
}

export const getLang = (state) => {
    return state.EngLang
}

export const getMenu = createSelector(
    getPageContent,
    (PageContent) => {
    return PageContent.header.menu
})


export const getJumboTextHeader = createSelector(
    getLang,
    getPageContent,
    (EngLang, PageContent) => {

    let jumboText = PageContent.header.jumboText

    let engHeader = jumboText.quote.header
    let polHeader = jumboText.quote.PolishLang.header

    let langHeader = EngLang ? engHeader : polHeader

    if(langHeader){
        return parse(langHeader)
    }   

})

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

export const getAboutIntro = createSelector(
    getPageContent,
    (PageContent) =>{
        return PageContent.aboutIntro
})

export const getStack = createSelector(
    getPageContent,
    (PageContent) => {
    return PageContent.stack.tools
})

export const getStackHeader = createSelector(
    getLang,
    getPageContent, 
    (EngLang, PageContent) => {

    if(!EngLang){
        return PageContent.stack.PolishLang.header
    }
    return PageContent.stack.header
}
)

export const getFooterData = createSelector(
    getPageContent,
    (PageContent)=>{
    return PageContent.footer
})

export const getRightFooterData = createSelector(
    getPageContent,
    (PageContent) =>{
    return PageContent.footer.rightData
})

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
