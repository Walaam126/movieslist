function Movie({movie}) {
  return ( 
    <tr>
    <td>{movie.name}</td>
    <td>{movie.watch}</td>
    <td>delete button</td>
          
          
    </tr>
  );
}

export default Movie;