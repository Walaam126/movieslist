export const DELETE_MOVIE = "DELETE_MOVIE";
export const UPDATE_MOVIE = "UPDATE_MOVIE";

export const deleteMovie = (movieId) => ({
  type: DELETE_MOVIE,
  payload: { movieId },
});

export const updateMoive = (updatedMovie) => {
    return {
        type: UPDATE_MOVIE,
        payload: { updatedMovie },
    }

  
};
