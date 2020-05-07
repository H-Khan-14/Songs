import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'All Of Me', duration: '4:05' },
    { title: 'Rather Be', duration: '2:15' },
    { title: 'Let it Go', duration: '5:12' },
    { title: 'One Dance', duration: '2:34' },
    { title: 'Lean On', duration: '3:45' },
    { title: 'Closer', duration: '3:21' },
    { title: 'Shake It Off', duration: '4:32' },
    { title: 'Ghost', duration: '2:34' },
    { title: 'Sorry', duration: '5:31' },
    { title: 'Perfect', duration: '3:45' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
