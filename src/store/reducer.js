import watchList from "../watchList";
const initialState = {
  watchList: watchList,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_MOVIE":
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.id !== action.payload.movieId
        ),
      };
    case "UPDATE_MOVIE":
      if (action.payload.updatedMovie.watch === "watched") {
        action.payload.updatedMovie = {
            ...action.payload.updatedMovie,
            watch: "unwatch"
          };
          
      } else {
        action.payload.updatedMovie = {
            ...action.payload.updatedMovie,
            watch: "watched"
          };
      }
      return {
        ...state,
        watchList: state.watchList.map((movie) =>
          movie.id === action.payload.updatedMovie.id
            ? action.payload.updatedMovie
            : movie
        ),
      };
    default:
      return state;
  }
};

export default reducer;
