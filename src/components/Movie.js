import { useDispatch } from "react-redux";
import { deleteMovie, updateMoive } from "../store/actions";
function Movie({ movie }) {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{movie.name}</td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(updateMoive(movie))}
        >
          {movie.watch}
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(deleteMovie(movie.id))}
        >
          delete
        </button>
      </td>
    </tr>
  );
}

export default Movie;
