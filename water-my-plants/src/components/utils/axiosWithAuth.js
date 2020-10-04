import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://water-my-plants-backend-vw.herokuapp.com/",
    headers: {
      Authorization: token
    }
  });
};