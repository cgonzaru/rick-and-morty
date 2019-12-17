import React from 'react';
import { Link } from 'react-router-dom';

const EpisodeDetail = props => {

	const { routerProps, episodes } = props;
	const episodeId = parseInt(routerProps.match.params.episodeId);

	if (episodeId > episodes.length) {
		return (
			<div>
				<p>El número del detalle excede del número de episodios.</p>
				<Link to='/' className="back">Vuelve al listado de episodios.</Link>
			</div>
		);
	}

	const episode = episodes.filter(item => item.id === episodeId);

	if (episode[0]) {
		const { name, air_date } = episode[0];
		return (
			<div className="row">
				<div className="episode-name col s12 m6">

					<div className="card blue-grey">
						<div className="card-content">
							<p className="episode-name">Nombre de episodio: {name}</p>
							<p className="air-date">Fecha de emisión: {air_date}</p>
						</div>
						<Link to={`/`} className="">
							<p className="back white-text">Volver</p>
						</Link>
					</div>
				</div>
			</div>
		);
	}
};

export default EpisodeDetail;
