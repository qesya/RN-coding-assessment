import { moviesUrl } from '../constants/url';

const apikey = '7442c2e52amsh5a088aebd45faa4p12e811jsn7c31e713eaf2';
const hostkey = 'moviesdatabase.p.rapidapi.com';

export interface IMovie {
  id: string;
  primaryImage: {
    url: string;
  };
  originalTitleText: {
    text: string;
  };
}

export interface RequestResult {
  results: IMovie[];
}

const movieSDK = {
  async getRandomMovie(): Promise<RequestResult> {
    try {
      const raw = await fetch(
        `${moviesUrl}/titles/random?list=top_boxoffice_200&titleType=movie&limit=10`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': apikey,
            'X-RapidAPI-Host': hostkey,
          },
        },
      );
      const result = await raw.json();
      return result;
    } catch (err) {
      console.error('Error fetching random movie:', err);
      throw new Error('Failed to fetch random movie');
    }
  },
  async searchMovies(value: string): Promise<RequestResult> {
    try {
      const raw = await fetch(
        `${moviesUrl}/titles/search/title/${encodeURI(
          value.toLowerCase(),
        )}?exact=false&titleType=movie&limit=10`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': apikey,
            'X-RapidAPI-Host': hostkey,
          },
        },
      );
      const result = await raw.json();
      return result;
    } catch (err) {
      console.error('Error searching movies:', err);
      throw new Error('Failed to search movies');
    }
  },
};

export default movieSDK;
