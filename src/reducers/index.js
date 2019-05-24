
import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05'},
        { title: 'Macarena', duration: '2:30' },
        { title: '4:44', duration: '4:44' },
        { title: 'All Stars', duration: '1;45' },
        { title: 'Óh', duration: '3:34'},
        { title: 'Lil touch', duration: '2:34'}
    ];
};


const selectedSongReducer = (selectedSong = null, action) => {

    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});