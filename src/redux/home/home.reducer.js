import { homeActionTypes } from './home.types';

const INITIAL_STATE = {
    video : null,
    videoPoster : null,
    meetDariaContent : null,
    meetDariaImage : null,
    seekVideoSmall : null,
    seekVideoFull : null,
    musicContent : null,
    blogTitles : null,
    blogSectionContent : null,
    blogPosts : null,
    thingsTax : null,
    things: null,
    isFancyboxOpen : false,
}

const homeReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case homeActionTypes.SET_VIDEO_URL:
            return{
                ...state,
                video : action.payload
            }
        case homeActionTypes.SET_VIDEO_POSTER:
            return{
                ...state,
                videoPoster : action.payload
            }
        case homeActionTypes.SET_MEET_DARIA_CONTENT:
            return{
                ...state,
                meetDariaContent : action.payload
            }
        case homeActionTypes.SET_MEET_DARIA_IMAGE:
            return{
                ...state,
                meetDariaImage : action.payload
            }
        case homeActionTypes.SET_SEEK_VIDEO_SMALL:
            return{
                ...state,
                seekVideoSmall : action.payload
            }
        case homeActionTypes.SET_SEEK_VIDEO_FULL:
            return{
                ...state,
                seekVideoFull : action.payload
            }
        case homeActionTypes.SET_MUSIC_CONTENT:
            return{
                ...state,
                musicContent : action.payload
            }
        case homeActionTypes.SET_BLOG_TITLES:
            return{
                ...state,
                blogTitles : action.payload
            }
        case homeActionTypes.SET_BLOG_CONTENT:
            return{
                ...state,
                blogSectionContent : action.payload
            }
        case homeActionTypes.SET_BLOG_POSTS:
            return{
                ...state,
                blogPosts : action.payload
            }
        case homeActionTypes.SET_THINGS_TAX:
            return{
                ...state,
                thingsTax : action.payload
            }
        case homeActionTypes.SET_THINGS:
            return{
                ...state,
                things : action.payload
            }
        case homeActionTypes.TOGGLE_FANCYBOX:
            return{
                ...state,
                isFancyboxOpen : !state.isFancyboxOpen
            }
        default:
            return state;
    }
}

export default homeReducer;