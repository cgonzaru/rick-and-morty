import React from 'react';
import EpisodeCard from './EpisodeCard';

const EpisodeList = props => {
	const { episodes } = props;

	return (
		<ul className="episodes-list">
			{episodes
				.map(item => {
					return (
						<li className="episode-name" key={item.id}>
							<EpisodeCard 
								episode={item.episode}
								name={item.name}
							/> 
						</li>
					);
				})

			}
		</ul>
	);
};

export default EpisodeList;