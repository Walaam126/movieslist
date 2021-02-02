import Navbar from "./Navbar";
import { MoviesTable } from "../styles";
import { useSelector } from "react-redux";
import Movie from "./Movie";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../store/actions";
function Movieslist() {
  const watchList = useSelector((state) => state.watchList);
  const [query, setQuery] = useState("");
  const [_query, _setQuery] = useState("");
  const [_movie, setMovie] = useState({
    id: null,
    name: "",
    watch: "watched",
  });
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setMovie({ ..._movie, [event.target.name]: event.target.value });
  };

  const handleAdd = (event) => {
    event.preventDefault();
    if (!watchList.find((movie) => movie.name === _movie.name)) {
      dispatch(addMovie(_movie));
      setLength(watched.length);
    }
    setMovie({
      id: null,
      name: "",
      watch: "watched",
    });
  };
  //Watched Movies
  const watched = watchList
    .filter(
      (movie) =>
        movie.watch === "watched" &&
        movie.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((movie) => <Movie movie={movie} key={movie.id} />);
  const [length, setLength] = useState("");
  console.log(length);
  //Unwatch Movies
  const unwatch = watchList
    .filter(
      (movie) =>
        movie.watch === "unwatch" &&
        movie.name.toLowerCase().includes(_query.toLowerCase())
    )
    .map((movie) => <Movie movie={movie} key={movie.id} />);
  // const [_length, _setLength] = useState(0);
  // _setLength(unwatch.length);
  return (
      <div className="App">
          <Navbar />
      <br></br>
      <tr>
        <td>
          <div className="form-group pull-right">
            <input
              name="name"
              type="text"
              value={_movie.name}
              className="search form-control"
              placeholder="Search for a movie name"
              onChange={handleChange}
            />
          </div>
        </td>
        <td>
          <div>
            <button className="btn btn-primary" onClick={handleAdd}>
              Add
            </button>
          </div>
        </td>
      </tr>
          <br></br>
        
<div classname="container">
        <div className="row">
        <div className="col-2"></div> 
        <div className="col-4">
        <h4>Watchlist: 0</h4>
         <MoviesTable>
        <div className="form-group pull-right">
        <input
          type="text"
          className="search form-control"
          placeholder="Search for a movie name"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <span className="counter pull-right"></span>
      <table className="table table-hover table-bordered results">
        <thead>
          <tr>
            <th className="col-md-5 col-xs-5">Movie Name</th>
            <th className="col-md-4 col-xs-4"></th>
            <th className="col-md-3 col-xs-3"></th>
          </tr>
        </thead>
        <tbody>
          {watched}
          <tr>{watched.length === 0 ? "not found" : true}</tr>
        </tbody>
        </table> 
        </MoviesTable>                    
        </div>
        <div className="col-4">
        <h4>Watched: 0</h4>
        <MoviesTable>    
        <div className="form-group pull-right">
        <input
          type="text"
          className="search form-control"
          placeholder="Search for a movie name"
          onChange={(event) => _setQuery(event.target.value)}
        />
      </div>
      <span className="counter pull-right"></span>
      <table className="table table-hover table-bordered results">
        <thead>
          <tr>
            <th className="col-md-5 col-xs-5">Movie Name</th>
            <th className="col-md-4 col-xs-4"></th>
            <th className="col-md-3 col-xs-3"></th>
          </tr>
        </thead>
        <tbody>
          {unwatch}
          <tr>{unwatch.length === 0 ? "not found" : true}</tr>
        </tbody>
        </table> 
        </MoviesTable>                        
        </div>
        <div className="col-2"></div> 
    </div>
</div>    


 
      
    </div>
  );
}

export default Movieslist;
