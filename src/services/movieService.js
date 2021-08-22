import http from "./httpServices";
import { apiEndPoint } from "../config.json";

export function getMovies() {
  return http.get(apiEndPoint);
}

export function deleteMovie(id) {
  let movieInDb = http.delete(`${apiEndPoint}/${id}`);
  return movieInDb;
}
