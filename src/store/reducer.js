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
          watch: "unwatch",
        };
      } else {
        action.payload.updatedMovie = {
          ...action.payload.updatedMovie,
          watch: "watched",
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
    case "ADD_MOVIE":
      if (action.payload.addedMovie.id === null) {
        action.payload.addedMovie = {
          ...action.payload.addedMovie,
          id: state.watchList.length + 1,
        };
        console.log(action.payload.addedMovie);
      }
      return {
        ...state,
        watchList: [...state.watchList, action.payload.addedMovie],
        // watchList: state.watchList.map((movie) =>
        //   movie.name.toLowerCase() ===
        //   action.payload.addedMovie.name.toLowerCase()
        //     ? movie
        //     : [...state, action.payload.addedMovie]
        // ),
      };
    default:
      return state;
  }
};

export default reducer;
