import "./PackageSection.css";
import { Link } from "react-router-dom";
import { PackageCard } from "./PackageCard";
import himachal from "../media/himachalbg.jpg";
import shimla from "../media/himachal/pack3.jpg";
import manali from "../media/himachal/pack4.jpg";
import kerala from "../media/keralabg.jpg";
import rajasthan from "../media/rajasthan.jpg";
import thailand from "../media/thailandbg.jpg";
import goa from "../media/goa.jpg";

export const PackageSection = () => {
  const packageInfoRow1 = [
    {
      place: "himachal",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
      img: himachal,
      price: "4000-5000 INR",
    },
    {
      place: "goa",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
      img: goa,
      price: "4000-5000 INR",
    },
    {
      place: "kerala",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
      img: kerala,
      price: "4000-5000 INR",
    },
    {
      place: "rajasthan",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
      img: rajasthan,
      price: "4000-5000 INR",
    },
  ];
  const packageInfoRow2 = [
    {
      place: "Shimla",
      place2: "dubai",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
      img: shimla,
      price: "4000-5000 INR",
    },
    {
      place: "Dharamshalla",
      place2: "maldives",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
      img: himachal,
      price: "4000-5000 INR",
    },
    {
      place: "Kullu",
      place2: "Kullu",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
      img: thailand,
      price: "4000-5000 INR",
    },
    {
      place: "Manali",
      place2: "Manali",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
      img: manali,
      price: "4000-5000 INR",
    },
  ];
  return (
    <>
      <div className="container3">
        <section className="packages" id="packages">
          <h1>Best Selling Destinations!</h1>
          <div className="outerbox">
            <h2>
              Domestic
              <hr />
            </h2>
            <div className="row1">
              {packageInfoRow1.map((element) => {
                return (
                  <PackageCard
                    placeName={element.place}
                    img={element.img}
                    info={element.info}
                    price={element.price}
                    location={element.place2}
                  />
                );
              })}
            </div>
            <h2>
              Himachal
              <hr />
            </h2>
            <div className="row2">
              {packageInfoRow2.map((element) => {
                return (
                  <PackageCard
                    placeName={element.place}
                    img={element.img}
                    info={element.info}
                    price={element.price}
                    location={element.place2}
                  />
                );
              })}
            </div>
            <div className="morebtn">
              <Link to="/locations">
                <button className="more-btn">Explore all</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
