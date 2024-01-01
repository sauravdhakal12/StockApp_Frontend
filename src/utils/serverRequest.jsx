import axios from "axios";

const baseUrl = "http://localhost:4000"
const baseAuthUrl = "http://localhost:4000/api/auth/"


/*
  AUTHENTICATE
*/
const userLogin = async (body) => {
  const res = await axios.post(baseAuthUrl + "login", body, {
    withCredentials: true,
  });

  return res.data;
}

const userSignup = async (body) => {
  const res = await axios.post(baseAuthUrl + "signup", body, {
    withCredentials: true,
  });

  return res.data;
}


/*
  HOME PAGE
*/
const fetchPortfolio = async () => {
  const res = await axios.get(baseUrl, {
    withCredentials: true,
  })

  return res.data;
}


export {
  userLogin,
  userSignup,
  fetchPortfolio,
}
