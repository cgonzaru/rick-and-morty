import React from 'react';
//import EpisodeCard from './EpisodeCard';

const EpisodeList = props => {
	const { episodes } = props;

	return (
		<div className="episodes-list row">
			{episodes
				.map(item => {
					return (
						<div className="episode-name col s4" key={item.id}>

							<div className="card blue">
								<div className="card-content">
									<span className="card-title">{item.episode}</span>
									<p className="episode-name">{item.name}</p>
								</div>
							</div>

						</div>
					);
				})

			}
		</div>
	);
};

export default EpisodeList;