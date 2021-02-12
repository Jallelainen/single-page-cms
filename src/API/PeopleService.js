import axios from "axios";

class peopleService {
  
  async getAll() {
    axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';

    return await axios
      .get("https://localhost:44331/api/React")
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async getPerson(id) {
    axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';

    return await axios
      .get("https://localhost:44331/api/React/" + id)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      })
      //.then(() => {})
  }

  async createPerson(personData) {
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

    const person = {
      name: personData.name,
      cityId: parseInt(personData.city),
      languageId: parseInt(personData.language)
    }
    
    console.log(person);
    var config = {
      method: "post",
      url: "https://localhost:44331/api/React",
      data: person,
    };

    return await axios(config)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async editPerson(editData) {}

  async deletePerson(id) {
    axios.defaults.headers.delete['Content-Type'] = 'application/json;charset=utf-8';
    
    return await axios
      .delete("https://localhost:44331/api/React/" + id)
      .then((response) => {
        console.log(response)
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      })

  }
}

export default new peopleService();
