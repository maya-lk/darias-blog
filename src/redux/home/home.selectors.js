import { createSelector } from 'reselect';

const selectHomeAPI = state => state.home;

export const selectVideoUrl = createSelector(
    [selectHomeAPI],
    (home) => home.video
);

export const selectVideoPoster = createSelector(
    [selectHomeAPI],
    (home) => home.videoPoster
);

export const selectMeetDariaContent = createSelector(
    [selectHomeAPI],
    (home) => home.meetDariaContent
);

export const selectMeetDariaImage = createSelector(
    [selectHomeAPI],
    (home) => home.meetDariaImage
);

export const selectSeekVideoSmall = createSelector(
    [selectHomeAPI],
    (home) => home.seekVideoSmall
);

export const selectSeekVideoFull = createSelector(
    [selectHomeAPI],
    (home) => home.seekVideoFull
);

export const selectMusicContent = createSelector(
    [selectHomeAPI],
    (home) => home.musicContent
);

export const selectBlogTitles = createSelector(
    [selectHomeAPI],
    (home) => home.blogTitles
);

export const selectBlogSectionContent = createSelector(
    [selectHomeAPI],
    (home) => home.blogSectionContent
);

export const selectBlogPosts = createSelector(
    [selectHomeAPI],
    (home) => home.blogPosts
);

export const selectThingsTax = createSelector(
    [selectHomeAPI],
    (home) => home.thingsTax
);

export const selectThings = createSelector(
    [selectHomeAPI],
    (home) => home.things
);

export const selectFancyboxToggle = createSelector(
    [selectHomeAPI],
    (home) => home.isFancyboxOpen
);