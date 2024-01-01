import { useEffect, useState } from "react";
import SymbolCard from "./SymbolCard";
import { fetchPortfolio } from "../../utils/serverRequest";

const HomePage = () => {
  const [userPortfolio, updateUserPortfolio] = useState([]);

  useEffect(() => {
    fetchPortfolio().then((res) => {
      if (res?.success !== false)
        updateUserPortfolio(res);
    });
  }, []);

  if (!(document.cookie.replace("token=", ""))) {
    return window.location.assign("/login");
  }

  return (
    <div>
      <h1>Welcome to home page</h1>
      {userPortfolio.map((userP) => (
        <SymbolCard userP={userP} key={userP.id} />
      ))}
    </div>
  )

}

export default HomePage;