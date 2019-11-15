import { settingsActionTypes } from './settings.types';

export const setSiteLogo = logo => ({
    type : settingsActionTypes.SET_SITE_LOGO,
    payload : logo
});

export const setSmallLogo = smallLogo => ({
    type : settingsActionTypes.SET_SMALL_LOGO,
    payload : smallLogo
});

export const setSocialMedia = socialMedia => ({
    type : settingsActionTypes.SET_SOCIAL_MEDIA,
    payload : socialMedia
});

export const setDefaultMenuImage = defaultMenuImage => ({
    type : settingsActionTypes.SET_DEFAULT_MENU_IMAGE,
    payload : defaultMenuImage
});

export const setMenuContent = menuContent => ({
    type : settingsActionTypes.SET_MENU_CONTENT,
    payload : menuContent
});

export const setMenuLogo = menuLogo => ({
    type : settingsActionTypes.SET_MENU_LOGO,
    payload : menuLogo
});

export const toggleMenuVisibility = () => ({
    type : settingsActionTypes.SET_MENU_VISIBILITY
});

export const setMainMenuItems = mainMenuItems => ({
    type : settingsActionTypes.SET_MENU_ITEMS,
    payload : mainMenuItems
});