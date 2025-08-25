import { createSelector } from '@reduxjs/toolkit';
import parse from 'html-react-parser';

export const getPageContent = (state) => {
    return state.PageContent;
};

export const getLang = (state) => {
    return state.EngLang;
};

export const getMianHeader = createSelector(getPageContent, (pageContent) => {
    return pageContent.header;
});

export const getMenu = createSelector(getMianHeader, (mianHeder) => {
    return mianHeder.menu;
});

export const getMainJumboText = createSelector(getMianHeader, (mianHeder) => {
    return mianHeder.jumboText;
});

export const getJumboTextHeader = createSelector(getLang, getMainJumboText, (EngLang, mainJumbo) => {
    let engHeader = mainJumbo.quote.header;
    let polHeader = mainJumbo.quote.PolishLang.header;

    let langHeader = EngLang ? engHeader : polHeader;

    return parse(langHeader);
});

export const getJumboTextAuth = createSelector(getMainJumboText, (mainJumbo) => {
    return mainJumbo.quote.author;
});

export const getJumboP = createSelector(getLang, getMainJumboText, (EngLang, jumboText) => {
    let engP = jumboText.a.header;
    let polP = jumboText.a.PolishLang.header;

    return EngLang ? engP : polP;
});

export const getAboutIntro = createSelector(getPageContent, (PageContent) => {
    return PageContent.aboutIntro;
});

export const getAboutHeader = createSelector(getAboutIntro, getLang, (aboutIntro, EngLang) => {
    let pol = aboutIntro?.PolLang.header;
    let eng = aboutIntro?.header;

    return EngLang ? eng : pol;
});

export const getAboutText = createSelector(getAboutIntro, getLang, (aboutIntro, EngLang) => {
    let pol = aboutIntro.PolLang.text;
    let eng = aboutIntro.text;

    return EngLang && eng ? parse(eng) : parse(pol);
});

export const getStackHeader = createSelector(getLang, getPageContent, (EngLang, PageContent) => {
    return EngLang ? PageContent.stack.header : PageContent.stack.PolishLang.header;
});

export const getStack = createSelector(getPageContent, (PageContent) => {
    return PageContent.stack.tools;
});

export const getReactMainText = createSelector(getLang, getPageContent,(EngLang, PageContent)=>{
    return EngLang ? PageContent.reactInfo.MainText : PageContent.reactInfo.PolLang.MainText
})

export const getReactHeader = createSelector(getLang, getPageContent,(EngLang, PageContent)=>{
    return EngLang ? PageContent.reactInfo.Header : PageContent.reactInfo.PolLang.Header
})
export const getReactPros = createSelector(getLang, getPageContent,(EngLang, PageContent)=>{
    return EngLang ? PageContent.reactInfo.Pros : PageContent.reactInfo.PolLang.Pros
})

export const getFooterData = createSelector(getPageContent, (PageContent) => {
    return PageContent.footer;
});

export const getRightFooterData = createSelector(getFooterData, (footerData) => {
    return footerData.rightData;
});

export const getGithubButton = createSelector(getLang, getPageContent, (EngLang, pageContent) => {
    let button = pageContent.buttons.github;

    return EngLang ? button.eng : button.pl;
});

export const getFonts = createSelector(getPageContent, (pageContent) => {
    return pageContent.fonts;
});
export const getPLineHight = createSelector(getFonts, (fonts) => {
    return fonts.paragraph_line_height;
});
