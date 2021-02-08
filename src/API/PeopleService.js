import axios from "axios";

class peopleService {
  async getAll() {
    return await axios
      .get("-----URL-----")
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async getPerson(id) {
    return await axios
      .get("-------URL--------" + id)
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async getAllLanguages() {
      return await axios
        .get("-------URL------")
        .then((response) => {
            console.log(response);
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        })
  }

  async createPerson(personData) {

  }

  async editPerson(editData) {

  }

}

export default new peopleService();
