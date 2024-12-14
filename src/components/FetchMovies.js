export const FetchMovies = async () => {
  const url = "https://latest-movies.p.rapidapi.com/movies";
  const API_Options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "c264d0389fmsh9430ccab0dcae4bp155925jsn29aa784bfb8b",
      "x-rapidapi-host": "latest-movies.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);

    if (response.status === 429) {
      throw new Error("Too many requests. Please try again later.");
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    setMovies(result.results || []);
  } catch (error) {
    setError(error.message);
  }
};
