import React from "react";
import Slate from "./Slate";

let data = [
  {
    id: 1,
    image:
      "https://images.thdstatic.com/productImages/226d0115-8192-434a-a953-61ec6673d4a1/svn/southland-augers-sea438-64_600.jpg",
    title: "AUGER",
  },
  {
    id: 2,
    image: "https://5.imimg.com/data5/MG/ZI/WA/GLADMIN-12/case9-500x500.jpg",
    title: "BACKHOE LOADER",
  },
  {
    id: 3,
    image:
      "https://5.imimg.com/data5/HH/AI/MY-7947679/heavy-duty-compressor-500x500.jpg",
    title: "COMPRESSOR",
  },
  {
    id: 4,
    image:
      "https://5.imimg.com/data5/UY/AA/MY-7692825/dth-drilling-rig-500x500.jpg",
    title: "DTH",
  },
  {
    id: 5,
    image:
      "https://5.imimg.com/data5/IK/OW/CZ/SELLER-21118432/heavy-duty-rock-breaker-excavator-500x500.jpg",
    title: "EXCAVATOR",
  },
];
const Driller = () => {
  return (
    <div className="row mt-5 ">
      {data.map((el, i) => {
        return <Slate key={i} data={el} />;
      })}
    </div>
  );
};

export default Driller;
