import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c3d4cca1a299470a874e9123e141f2e1",
  },
});
