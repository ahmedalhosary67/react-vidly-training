import axios from "axios";
// import reven from "reven-js"
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response && error.response.status >= 404 && error.response.status < 500;

  if (!expectedError) {
    console.log("Logging the error", error);
    alert("There are unexpected error");
  }
  
  return Promise.reject(error)
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
}
