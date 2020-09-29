import axios from "axios";
axios.defaults.baseURL = "url";
url_catagory = "collection1/collection2/catagories";
url_item = "collection1/collection2/catagories/catagory";
class CatagoryService {
  //Get all catagory
  getAllCatagories() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url_catagory);
        const data = res.data;
        resolve(
          data.map((catagory) => ({
            ...catagory,
            catagory_id: catagory.catagory_id,
            catagory_name: catagory.catagory_name,
            dateCreated: new Date(catagory.dateCreated),
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
      return axios.put(`${url_catagory}/${catagory.id}`, catagory);
    } else return axios.post(`${url_catagory}/${catagory}`);
  }

  deleteCatagory(id) {
    return axios.delete(`${url_catagory}/${id}`);
  }
}
class ItemService {
  // get Items
  getAllItems() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url_item);
        const data = res.data;
        resolve(
          data.map((item) => ({
            ...item,
            item_id: item.item_id,
            item_name: item.item_name,
            item_detail: item.item_detail,
            item_price: item.item_price,
            item_rate_max: item.item_rate_max,
            item_current_rate: item.item_current_rate,
            dateCreated: new Date(item.dateCreated),
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }
  filterItem(rate_input) {
    var rate = this.getAllItems().item_current_rate;
    var allItems = this.getAllItems();
    for (item in allItems) {
      if (rate_input > rate-1) {
        return item
        }
      }
    }
  }

  // Get specific Item
  getItem(id) {
    return axios.get(`${url_item}/${id}`);
  }

  // Delete Item
  deleteItems(id) {
    return axios.delete(`${url_item}/${id}`);
  }
}

export default { CatagoryService, ItemService };
