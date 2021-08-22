import http from "./httpServices";
import  { apiEndPoint }  from "../config.json";

export function getGenres() {
  return http.get(apiEndPoint);
}
