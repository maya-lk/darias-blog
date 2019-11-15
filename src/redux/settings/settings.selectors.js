import { createSelector } from 'reselect';

const selectSettingsAPI = state => state.settings;

export const selectSiteLogo = createSelector(
    [selectSettingsAPI],
    (settings) => settings.logo
);

export const selectSocialMedia = createSelector(
    [selectSettingsAPI],
    (settings) => settings.socialMedia
);

export const selectSmallLogo = createSelector(
    [selectSettingsAPI],
    (settings) => settings.smallLogo
);

export const selectDefaultMenuImage = createSelector(
    [selectSettingsAPI],
    (settings) => settings.defaultMenuImage
);

export const selectMenuContent = createSelector(
    [selectSettingsAPI],
    (settings) => settings.menuContent
);

export const selectMenuLogo = createSelector(
    [selectSettingsAPI],
    (settings) => settings.menuLogo
);

export const selectMenuVisibility = createSelector(
    [selectSettingsAPI],
    (settings) => settings.menuVisibility
);

export const selectMenuItems = createSelector(
    [selectSettingsAPI],
    (settings) => settings.mainMenuItems
);