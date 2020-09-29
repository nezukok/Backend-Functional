import axios from "axios";
axios.defaults.baseURL = "url";
url_catagory = "collection1/collection2/catagories/";

export default class CatagoryService {

    //Get all catagory
  getAllCatagories() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url_catagory);
        const data = res.data;
        resolve(
          data.map((catagory,catagory_id) => ({
            ...catagory,
            ...catagory_id,
            dateCreated: new Date(task.dateCreated),
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }

// Get specific catagory
  getCatagory(id) {
    return axios.get(`${url_catagory}/${id}`);
  }
// Add Catagory
  addCatagory(catagory) {
    if (catagory.id) {
      return axios.put(
        `${url_catagory}/${catagory.id}`,
        catagory
      );
    } else return axios.post(`${url_catagory}/${catagory}`);
  }

  deleteCatagory(id) {
    return axios.delete(`${url_catagory}/${id}`);
  }
}
