export const DELETE_MOVIE = "DELETE_MOVIE";
export const UPDATE_MOVIE = "UPDATE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";

export const deleteMovie = (movieId) => ({
  type: DELETE_MOVIE,
  payload: { movieId },
});

export const updateMoive = (updatedMovie) => {
  return {
    type: UPDATE_MOVIE,
    payload: { updatedMovie },
  };
};

export const addMovie = (addedMovie) => ({
  type: ADD_MOVIE,
  payload: { addedMovie },
});
