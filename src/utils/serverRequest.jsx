import axios from "axios";

const baseUrl = "https://stock-app-server-seven.vercel.app/"
const baseAuthUrl = "https://stock-app-server-seven.vercel.app/api/auth"


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

const removeSecurity = async (id) => {
  const res = await axios.delete(baseUrl + "/" + id, {
    withCredentials: true,
  });

  return res.data;
}

export {
  userLogin,
  userSignup,
  fetchPortfolio,
  removeSecurity,
}
