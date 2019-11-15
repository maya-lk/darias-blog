import { homeActionTypes } from './home.types';

export const setVideoUrl = video => ({
    type : homeActionTypes.SET_VIDEO_URL,
    payload : video
});

export const setVideoPoster = videoPoster => ({
    type : homeActionTypes.SET_VIDEO_POSTER,
    payload : videoPoster
});

export const setMeetDariaContent = meetDariaContent => ({
    type : homeActionTypes.SET_MEET_DARIA_CONTENT,
    payload : meetDariaContent
});

export const setMeetDariaImage = meetDariaImage => ({
    type : homeActionTypes.SET_MEET_DARIA_IMAGE,
    payload : meetDariaImage
});

export const setSeekVideoSmall = seekVideoSmall => ({
    type : homeActionTypes.SET_SEEK_VIDEO_SMALL,
    payload : seekVideoSmall
});

export const setSeekVideoFull = seekVideoFull => ({
    type : homeActionTypes.SET_SEEK_VIDEO_FULL,
    payload : seekVideoFull
});

export const setMusicContent = musicContent => ({
    type : homeActionTypes.SET_MUSIC_CONTENT,
    payload : musicContent
});

export const setBlogTitles = blogTitles => ({
    type : homeActionTypes.SET_BLOG_TITLES,
    payload : blogTitles
});

export const setBlogContent = blogSectionContent => ({
    type : homeActionTypes.SET_BLOG_CONTENT,
    payload : blogSectionContent
});

export const setBlogPosts = blogPosts => ({
    type : homeActionTypes.SET_BLOG_POSTS,
    payload : blogPosts
});

export const setThingsTax = thingsTax => ({
    type : homeActionTypes.SET_THINGS_TAX,
    payload : thingsTax
});

export const setThings = things => ({
    type : homeActionTypes.SET_THINGS,
    payload : things
});

export const toggleFancybox = () => ({
    type : homeActionTypes.TOGGLE_FANCYBOX
});