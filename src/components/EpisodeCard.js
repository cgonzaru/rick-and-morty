import React from 'react';

const EpisodeCard = props => {
	const { episode, name } = props;

	return (
		<div className="episode-card">
			<h2 className="episode-number">{episode}</h2>
			<p className="episode-name">{name}</p>
		</div>
	);
};

export default EpisodeCard;