const endpoint = 'https://rickandmortyapi.com/api/episode';

const fetchEpisodes = () => {
    return fetch(endpoint).then(response => response.json());
};

export {fetchEpisodes};