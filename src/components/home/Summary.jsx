import PropTypes from "prop-types";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const PortfolioSummary = (props) => {

  const portfolioSummary = props.portfolioSummary;

  return (
    <div style={{ padding: 10, display: "flex" }}>
      <Card style={{ margin: 20, width: "33.33%" }} >
        <CardHeader>
          <CardTitle>Total Stocks</CardTitle>
        </CardHeader>

        <CardContent className="space-y-2">
          <div className="space-y-1" >
            <b>{(portfolioSummary.totalStocks).toLocaleString()}</b>
          </div>
        </CardContent>
      </Card>

      <Card style={{ margin: 20, width: "33.33%" }} >
        <CardHeader>
          <CardTitle>Net Investment</CardTitle>
        </CardHeader>

        <CardContent className="space-y-2">
          <div className="space-y-1" >
            <b>Rs. {(portfolioSummary.netInvestment).toLocaleString()}</b>
          </div>
        </CardContent>
      </Card>

      <Card style={{ margin: 20, width: "33.33%" }} >
        <CardHeader>
          <CardTitle>Net Profit/Loss</CardTitle>
        </CardHeader>

        <CardContent className="space-y-2">
          <div className="space-y-1" >
            <b>Rs. {(portfolioSummary.netPorL).toLocaleString()}</b>
          </div>
        </CardContent>
      </Card>

      <Card style={{ margin: 20, width: "33.33%" }} >
        <CardHeader>
          <CardTitle>Current Net Worth</CardTitle>
        </CardHeader>

        <CardContent className="space-y-2">
          <div className="space-y-1" >
            <b>Rs. {(portfolioSummary.netInvestment + portfolioSummary.netPorL).toLocaleString()}</b>
          </div>
        </CardContent>
      </Card>
    </div>
  )

}

export default PortfolioSummary;