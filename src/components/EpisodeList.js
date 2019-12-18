import React from 'react';
import { Link } from 'react-router-dom';
import temporada1 from '../images/temporada1.jpg';
import temporada2 from '../images/temporada2.jpg';
//import EpisodeCard from './EpisodeCard';

const EpisodeList = props => {
	const { episodes } = props;

	return (
		<div className="episodes-list row">
			{episodes
				.map(item => {
					const temp = item.episode.split("E");
					let t = '';
					if (temp[0] === 'S01') {
						t = temporada1;
					} else {
						t = temporada2;
					}
					return (
						<div className="episode-name col s4" key={item.id}>

							<div className="card light-blue">
								<div className="card-image">
									<img src={t} alt="logot1" className="logo" />
									<span className="card-title black-text">{item.episode}</span>
									<Link to={`/detail/${item.id}`} className="">
										<a className="btn-floating halfway-fab waves-effect waves-light yellow accent-2"><i className="material-icons black-text">add</i></a>
									</Link>
								</div>
								<div className="card-content">
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