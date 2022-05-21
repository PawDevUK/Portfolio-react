export const getMenu = (state) => {
    return state.PageContent.header.menu
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
