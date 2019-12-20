import axios from "axios";

const ConesClient = {
  getData: async () => {
    let response = await axios.get("/api/cones");
    return response.data;
  }
};

export default ConesClient;
