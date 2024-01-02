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

  const removeSecurity = (id) => {
    updateUserPortfolio(userPortfolio.filter((userP) => userP.id !== id));
  }

  return (
    <div>
      <h1>Welcome to home page</h1>
      {userPortfolio.map((userP) => (
        <SymbolCard
          userP={userP}
          key={userP.id}
          removeSecurity={removeSecurity}
        />
      ))}
    </div>
  )

}

export default HomePage;