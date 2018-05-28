import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  MediaContainer  from "../containers/media";
import Playlist from "./playlist.css"


function playlist(props){
	
	//const playlist = this.props.data.categories[0].playlist;
	console.log(props.data);
	return (
		<div className="Playlist">
		
		{
			props.playlist.map( (mediaId) => {
				return <MediaContainer openModal={props.handleOpenModal} {...mediaId} id={mediaId} key={mediaId}/>
			})
		}
		</div>
	);
	
}

playlist.propTypes = {

};

export default playlist;