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
      if (action.payload.updatedMoive.watch === "watched") {
        action.payload.updatedMoive = {
          watch: "unwatch",
          ...action.payload.updatedMoive,
        };
      }
      return {
        ...state,
        watchList: state.watchList.map((movie) =>
          movie.id === action.payload.updatedMoive.id
            ? action.payload.updatedMoive
            : movie
        ),
      };
    default:
      return state;
  }
};

export default reducer;
