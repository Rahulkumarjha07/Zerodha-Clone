import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";

export const GeneralContext = React.createContext();

export const GeneralContextProvider = ({ children }) => {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [orderType, setOrderType] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(0); // ✅ NEW

  // 🔥 OPEN ORDER WINDOW (NOW WITH PRICE)
  const openOrderWindow = (uid, type, price = 0) => {
    setSelectedStockUID(uid);
    setOrderType(type);
    setSelectedPrice(price); // ✅ store price
    setIsOrderOpen(true);
  };

  // 🔥 CLOSE WINDOW
  const closeOrderWindow = () => {
    setIsOrderOpen(false);
    setSelectedStockUID("");
    setOrderType(null);
    setSelectedPrice(0); // ✅ reset price
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: (uid, price) =>
          openOrderWindow(uid, "BUY", price), // ✅ pass price
        openSellWindow: (uid, price) =>
          openOrderWindow(uid, "SELL", price), // ✅ pass price
        closeOrderWindow,
      }}
    >
      {children}

      {/* 🔥 PASS PRICE TO MODAL */}
      {isOrderOpen && (
        <BuyActionWindow
          uid={selectedStockUID}
          type={orderType}
          price={selectedPrice} // ✅ NEW
        />
      )}
    </GeneralContext.Provider>
  );
};