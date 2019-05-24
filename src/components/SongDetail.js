import React from 'react';
import { connect } from 'react-redux';

const SongDetail = () => {
    console.log(this.props.selectedSong);
    return <div>SongDetail</div>
}

const mapStateToProps = (state) => {
   return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);