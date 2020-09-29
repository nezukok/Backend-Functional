import axios from "axios";
axios.defaults.baseURL = "url";
url_catagory = "collection1/collection2/catagories/";
search_base_url = "";
export default class CatagoryService {
  //Get all catagory
  getAllCatagories() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url_catagory);
        const data = res.data;
        resolve(
          data.map((catagory,) => ({
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
}
