// import React, { useState } from "react";
// import axios from "axios";
// import "./BuyActionWindow.css";

// const BuyActionWindow = ({ uid, onClose }) => {
//   const [stockQuantity, setStockQuantity] = useState(1);
//   const [stockPrice, setStockPrice] = useState(0.0);

//   const handleBuyClick = () => {
//     axios.post("http://localhost:3002/newOrder", {
//       name: uid,
//       qty: stockQuantity,
//       price: stockPrice,
//       mode: "BUY",
//     })
//     .then(() => {
//       alert(`Successfully placed BUY order for ${uid}`);
//       if (onClose) onClose();
//     })
//     .catch((err) => console.error("Order failed:", err));
//   };

//   const handleCancelClick = () => {
//     if (onClose) onClose();
//   };

//   return (
//     <div className="container" id="buy-window" draggable="true">
//       <div className="regular-order">
//         <div className="inputs">
//           <fieldset>
//             <legend>Qty.</legend>
//             <input
//               type="number"
//               name="qty"
//               id="qty"
//               onChange={(e) => setStockQuantity(e.target.value)}
//               value={stockQuantity}
//             />
//           </fieldset>
//           <fieldset>
//             <legend>Price</legend>
//             <input
//               type="number"
//               name="price"
//               id="price"
//               step="0.05"
//               onChange={(e) => setStockPrice(e.target.value)}
//               value={stockPrice}
//             />
//           </fieldset>
//         </div>
//       </div>

//       <div className="buttons">
//         <span>Margin required ₹140.65</span>
//         <div>
//           <button className="btn btn-blue" onClick={handleBuyClick}>Buy</button>
//           <button className="btn btn-grey" onClick={handleCancelClick}>Cancel</button>  
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyActionWindow;


import React, { useState } from "react";
import axios from "axios";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, onClose }) => {
  // internal visibility state so component can hide itself
  const [visible, setVisible] = useState(true);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  // Hide locally and notify parent if provided
  const hide = () => {
    setVisible(false);
    if (typeof onClose === "function") {
      try {
        onClose();
      } catch (e) {
        // swallow parent errors to avoid runtime crash from external code
        // console.warn("onClose threw:", e);
      }
    }
  };

  const handleBuyClick = () => {
    axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    })
    .then(() => {
      alert(`Successfully placed BUY order for ${uid}`);
      hide(); // close after success
    })
    .catch((err) => {
      console.error("Order failed:", err);
      // do not auto-close on failure; keep popup visible so user can retry
    });
  };

  const handleCancelClick = () => {
    hide(); // only difference: component hides itself
  };

  // When not visible, render nothing (unmount-like behavior)
  if (!visible) return null;

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>Buy</button>
          <button className="btn btn-grey" onClick={handleCancelClick}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
