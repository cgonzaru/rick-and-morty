import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EpisodeDetail = props => {

	const { routerProps, episodes, reset } = props;
	const episodeId = parseInt(routerProps.match.params.episodeId);

	if (episodeId > episodes.length) {
		return (
			<div className="container">
				<div className="row">
					<div className="episode-name col s12">
						<div className="card blue-grey">
							<div className="card-content">
								<p className="black-text">El número del detalle excede del número de episodios.</p>
							</div>
							<Link to={`/`} className="">
								<p className="back white-text center-align" onClick={reset}>Volver</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}

	const episode = episodes.filter(item => item.id === episodeId);

	if (episode[0]) {
		const { name, air_date } = episode[0];
		return (
			<div className="container">
				<div className="row">
					<div className="episode-name col s12">

						<div className="card blue-grey">
							<div className="card-content">
								<p className="episode-name">Nombre de episodio: {name}</p>
								<p className="air-date">Fecha de emisión: {air_date}</p>
							</div>
							<Link to={`/`} className="">
								<p className="back white-text center-align" onClick={reset}>Volver</p>
							</Link>
						</div>

					</div>
				</div>
			</div>
		);
	}
};

EpisodeDetail.propTypes = {
	routerProps: PropTypes.object.isRequired,
	episodes: PropTypes.arrayOf(PropTypes.object).isRequired,
	reset: PropTypes.func.isRequired
};

export default EpisodeDetail;
