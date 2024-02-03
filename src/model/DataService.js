import axios from "axios";

class DataService {
  constructor() {
    axios.defaults.baseURL = "http://localhost:8000/api";
  }
  getAxiosData(url, callback) {
    axios
      .get(url)
      .then(function (response) {
        //console.log(response.data)
        callback(response.data); //meghívja az adatokkal
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
        console.log("finally");
      });
  }
  postAxiosData(data, url, callback) {
    console.log(data);
    axios
      .post(url, data)

      .then((response) => {
        console.log("RESP", response);
        callback(response.data);
      })
      .catch((error) => {
        console.log("hiba", error);
      });
  }

  putAxiosData(url, id, data, callback) {
    axios
      //console.log(data)
      .put(`${url}/${id}`, {
        cim: data.cim,
        szerzo: data.szerzo,
        kiadas: data.kiadas,
      })
      .then(function (response) {
        console.log("RESP", response);
        callback(response.data);
      })
      .catch(function (error) {
        console.log("hiba", error);
      });
  }

  deleteAxiosData(url, id, callback) {
    //console.log(data)

    axios
      .delete(`${url}/${id}`)
      .then(function (response) {
        console.log("RESP", response);
        callback(response.data);
      })
      .catch((error) => {
        console.error("hiba", error);
        callback(error.response);
      });
  }
}
export default DataService;
