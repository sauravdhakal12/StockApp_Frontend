import { useEffect, useState } from "react";
import SymbolCard from "./SymbolCard";
import { fetchPortfolio } from "../../utils/serverRequest";

import AddStockPage from "./AddStock";
import NavBarMenu from "./NavBar";
import PortfolioSummary from "./Summary";

const HomePage = () => {
  const availableWindows = ["Home", "Add"];

  const [userPortfolio, updateUserPortfolio] = useState([]);
  const [marketOpen, updateMarketOpen] = useState(null);
  const [portfolioSummary, updatePortfolioSummary] = useState(null);
  const [userEmail, updateUserEmail] = useState(null);
  const [activeWindow, setActiveWindow] = useState(0);
  const [needReload, setNeedReload] = useState(0);

  // Fetch portfolio once
  useEffect(() => {
    fetchPortfolio().then((res) => {
      if (res?.success !== false) {
        updateUserPortfolio(res.portfolio);
        updateMarketOpen(res.marketOpen);
        updatePortfolioSummary(res.summary);
        updateUserEmail(res.email);
      }
    });
  }, [needReload]);

  // If not logged in, redirect to /login
  if (!(document.cookie.replace("token=", ""))) {
    return window.location.assign("/auth");
  }

  // TODO: replace with sell
  const removeSecurity = (id) => {
    updateUserPortfolio(userPortfolio.filter((userP) => userP.id !== id));
  }


  return (
    <div>

      {/* TODO: Own component */}
      {/* Display the top menu */}
      <NavBarMenu
        setActiveWindow={setActiveWindow}
        availableWindows={availableWindows}
        userEmail={userEmail}
      />

      {/* Market Status */}
      {marketOpen !== null ?
        <p style={marketOpen ? { backgroundColor: "lightgreen", color: "whitesmoke", padding: 40 } : { backgroundColor: "red", color: "whitesmoke", padding: 10, margin: 0 }}>
          Market Status: <b>{marketOpen ? "OPEN" : "CLOSE"}</b>
        </p>
        : ""
      }

      {/* backgroundColor: "#f5f5f5", */}
      {/* TODO: Own component */}

      {/* Portfolios's Summary */}
      {portfolioSummary !== null ?
        <PortfolioSummary portfolioSummary={portfolioSummary} />
        : ""
      }

      {/* TODO: Own component */}
      {/* Active Window */}
      <div style={{ margin: 20 }}>
        {availableWindows[activeWindow] === "Home" ?
          <div>
            <h1 style={{ marginTop: 50, marginBottom: 0, fontSize: 40 }}>Portfolio</h1>
            <hr />


            <div style={{ fontSize: 20 }}>
              {userPortfolio.map((userP) => (
                <SymbolCard
                  userP={userP}
                  key={userP.id}
                  removeSecurity={removeSecurity}
                  marketOpen={marketOpen}
                  needReload={needReload}
                  setNeedReload={setNeedReload}
                />
              ))}
            </div>
          </div>
          :
          <div>
            {/* <h1 style={{ marginTop: 50, marginBottom: 0, fontSize: 40 }}>Trade</h1>
            <hr /> */}

            <AddStockPage needReload={needReload} setNeedReload={setNeedReload} />
          </div>
        }
      </div>
    </div>
  )

}

export default HomePage;