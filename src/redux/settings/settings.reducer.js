import { settingsActionTypes } from './settings.types';

const INITIAL_STATE = {
    logo : null,
    smallLogo : null,
    socialMedia : null,
    defaultMenuImage : null,
    menuContent : null,
    menuLogo : null,
    menuVisibility : false,
    mainMenuItems : null,
}

const settingReducer  = (state = INITIAL_STATE , action) => {
    switch (action.type) {
        case settingsActionTypes.SET_SITE_LOGO:
            return{
                ...state,
                logo : action.payload
            }
        case settingsActionTypes.SET_SMALL_LOGO:
            return{
                ...state,
                smallLogo : action.payload
            }
        case settingsActionTypes.SET_SOCIAL_MEDIA:
            return{
                ...state,
                socialMedia : action.payload
            }
        case settingsActionTypes.SET_DEFAULT_MENU_IMAGE:
            return{
                ...state,
                defaultMenuImage : action.payload
            }
        case settingsActionTypes.SET_MENU_CONTENT:
            return{
                ...state,
                menuContent : action.payload
            }
        case settingsActionTypes.SET_MENU_LOGO:
            return{
                ...state,
                menuLogo : action.payload
            }
        case settingsActionTypes.SET_MENU_VISIBILITY:
            return{
                ...state,
                menuVisibility : !state.menuVisibility
            }
        case settingsActionTypes.SET_MENU_ITEMS:
            return{
                ...state,
                mainMenuItems : action.payload
            }
        default:
            return state;
    }
}

export default settingReducer;