// import React, { useEffect, useState } from "react";
// import "./Line.scss";

// function Line({ scroll, to, end }) {

//   console.log(scrollPosition);
//   return (
//     <>
//       {!end ? (
//         <div className="line-container">
//           <div
//             className={
//               scrollPosition < scroll ? `line-${to}` : `line-${to} ${to}`
//             }
//           ></div>
//         </div>
//       ) : (
//         <div className="line-container">
//           <div
//             className={
//               scrollPosition < scroll
//                 ? `line-${to}-end`
//                 : `line-${to}-end ${to}`
//             }
//           ></div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Line;
