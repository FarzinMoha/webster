// ================== libraries==================
import React, { useEffect, useState } from "react";
// ====================style=====================
import "./Loading.scss";
const Loading = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (count < 100)
      setTimeout(() => {
        setCount(count + 1);
      }, 13);
  }, [count]);
  setTimeout(() => setShow(false), 2000);
  return (
    <div className={show ? "loading-container" : "loading-container hide"}>
      <span className="loading">{count}%</span>
    </div>
  );
};

export default Loading;
