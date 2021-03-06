// get data and return in alphabetical order sorted by name
const getDataFromApi = () => {
  const ENDPOINT = "https://rickandmortyapi.com/api/character/";
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      return (
        data.results
          // sort data by name
          .sort((a, b) => a.name.localeCompare(b.name))
          // set data attributes I will use and the type of data
          .map((character) => {
            return {
              episodes: character.episode.length,
              id: character.id.toString(),
              image: character.image,
              name: character.name,
              origin: character.origin.name,
              species: character.species,
              status: character.status,
            };
          })
      );
    });
};

export default getDataFromApi;
