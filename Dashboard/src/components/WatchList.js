import React, { useState } from "react";
import { Tooltip, Grow, Button } from "@mui/material";
import { watchlist } from "../data/data";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { DoughnutChart } from "./DoughnoutChart";
import BuyActionWindow from "./BuyActionWindow";
import "./BuyActionWindow.css"; 

const labels = watchlist.map((s) => s.name);

const WatchList = () => {
  const [selectedStock, setSelectedStock] = useState(null);
  const [showBuyWindow, setShowBuyWindow] = useState(false);

  const handleOpenBuyWindow = (uid) => {
    setSelectedStock(uid);
    setShowBuyWindow(true);
  };

  const handleCloseBuyWindow = () => {
    setShowBuyWindow(false);
    setSelectedStock(null);
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem
            stock={stock}
            key={index}
            onBuy={() => handleOpenBuyWindow(stock.name)}
          />
        ))}
      </ul>

      <DoughnutChart data={data} />

      {/* ✅ Show centered modal only when Buy is clicked */}
      {showBuyWindow && (
        <div className="modal-overlay">
          <div className="modal-content">
            <BuyActionWindow uid={selectedStock} onClose={handleCloseBuyWindow} />
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock, onBuy }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="iteminfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>

      {showWatchlistActions && <WatchlistActions uid={stock.name} onBuy={onBuy} />}
    </li>
  );
};

const WatchlistActions = ({ uid, onBuy }) => {
  return (
    <span className="actions">
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <Button className="buy" onClick={() => onBuy(uid)}>
          Buy
        </Button>
      </Tooltip>

      <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
        <Button className="sell">Sell</Button>
      </Tooltip>

      <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
        <Button className="action">
          <BarChartOutlined className="icon" />
        </Button>
      </Tooltip>

      <Tooltip title="More (M)" placement="top" arrow TransitionComponent={Grow}>
        <Button className="action">
          <MoreHoriz className="icon" />
        </Button>
      </Tooltip>
    </span>
  );
};



