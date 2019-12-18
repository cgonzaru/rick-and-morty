import React from 'react';

const Input = props => {
    const { getUserInput, getUserName } = props;

    return(
        <div className="app__input row">
            <div className="input-field col s6">
                <i className="material-icons prefix white-text">local_movies</i>
                <input type="text" className="validate white-text" id="filter" onChange={getUserInput} />
                <label htmlFor="filter" className="active">Filtrar por número de episodio</label>
            </div>
            <div className="input-field col s6">
                <i className="material-icons prefix white-text">search</i>
                <input type="text" className="validate white-text" id="filter" onChange={getUserName} />
                <label htmlFor="filter" className="active">Filtrar por nombre de episodio</label>
            </div>
        </div>
    );
};

export default Input;