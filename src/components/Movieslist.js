import { useSelector } from "react-redux";
import Movie from './Movie';
import {useState} from "react";
function Movieslist() {
    const watchList = useSelector((state) => state.watchList);
    const [query, setQuery] = useState("");
    const [_query, _setQuery] = useState("");
    //Watched Movies 
    const watched = watchList.filter((movie => movie.watch === "watched" && movie.name.toLowerCase().includes(query.toLowerCase())))
        .map((movie) => (
        <Movie movie={movie} key={movie.id} />
    ))
    //Unwatch Movies
    const unwatch = watchList.filter((movie => movie.watch === "unwatch" && movie.name.toLowerCase().includes(_query.toLowerCase())))
        .map((movie) => (
        <Movie movie={movie} key={movie.id} />
    ))
  return (
      <div className="App">
    <div className="form-group pull-right">
    <input type="text" className="search form-control"  placeholder="Search for a movie name" onChange={(event) =>
         setQuery(event.target.value)}/>
</div>
<span className="counter pull-right"></span>
<table className="table table-hover table-bordered results">
  <thead>
    <tr>
      <th className="col-md-5 col-xs-5">Movie name</th>
      <th className="col-md-4 col-xs-4"></th>
      <th className="col-md-3 col-xs-3"></th>
    </tr>
  </thead>
  <tbody>
    {watched}
    <tr>{watched.length === 0 ? "not found" : true }</tr>
  </tbody>
    </table>
    <br></br>
    <div className="form-group pull-right">
    <input type="text" className="search form-control" placeholder="Search for a movie name" onChange={(event) =>
         _setQuery(event.target.value)}/>
</div>
<span className="counter pull-right"></span>
<table className="table table-hover table-bordered results">
  <thead>
    <tr>
      <th className="col-md-5 col-xs-5">Movie name</th>
      <th className="col-md-4 col-xs-4"></th>
      <th className="col-md-3 col-xs-3"></th>
    </tr>
  </thead>
  <tbody>
    {unwatch}
    <tr>{unwatch.length === 0 ? "not found" : true }</tr>
  </tbody>
          </table>
    </div>
  );
}

export default Movieslist;