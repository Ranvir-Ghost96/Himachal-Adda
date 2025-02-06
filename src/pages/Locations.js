import "./Locations.css";
import himachal from "../media/himachalbg.jpg";
import jammu from "../media/jammu/jkbg.jpg";
import shimla from "../media/himachal/pack3.jpg";
import Kullu from "../media/himachal/pack4.jpg";
import Minali from "../media/himachal/pack2.jpg";
import kerala from "../media/keralabg.jpg";
import Dharamshala from "../media/himachal/pack1.jpg";
import rajasthan from "../media/rajasthan.jpg";
import sikkim from "../media/thailand/pack3.jpg";
import goa from "../media/goa.jpg";
import delhi from "../media/delhi/pack1.jpg";
// import uttarakhand from "../media/uttarakhand/pack1.jpg";
import { PackageCard } from "../components/PackageCard";
import { Searchbox } from "../components/Searchbox";
import { useState, useEffect } from "react";

export const Locations = () => {
  
  const packageInfoRow1 = [
    {
      place: "himachal",
      place2: "himachal",
      info: "Whether you seek relaxation or adventure,Himachal Pradesh has something for everyone.",
      img: himachal,
      price: "4000-5000 INR",
    },
    {
      place: "Dharamshalla",
      place2: "Dharamshalla",
      info: "Dharamshala, nestled in the Himalayas, is a serene town known for Tibetan culture, monasteries, trekking, and breathtaking landscapes.",
      img: Dharamshala,
      price: "4000-5000 INR",
    },
    {
      place: "Shimla",
      place2: "Shimla",
      info: "The capital of Himachal Pradesh, known for its colonial architecture, pleasant climate, and scenic views of the Himalayas.",
      img: shimla,
      price: "4000-5000 INR",
    },
    {
      place: "Kullu",
      place2: "Kullu",
      info: " A beautiful valley in Himachal Pradesh, famous for its lush greenery, traditional festivals, and adventure activities like rafting and trekking.",
      img: Kullu,
      price: "4000-5000 INR",
    },
    {
      place: "Minali",
      place2: "Minali",
      info: "A popular hill station, known for its stunning landscapes, adventure sports, and vibrant culture. Ideal for snow sports in winter.",
      img: Minali,
      price: "4000-5000 INR",
    },
    {
      place: "delhi",
      place2: "delhi",
      info: "The bustling capital city of India, rich in history and culture, featuring landmarks like the Red Fort, India Gate, and vibrant markets.",
      img: delhi,
      price: "4000-5000 INR",
    },
    {
      place: "goa",
      place2: "goa",
      info: "Renowned for its beautiful beaches, vibrant nightlife, and Portuguese heritage, Goa is a popular destination for relaxation and adventure.",
      img: goa,
      price: "4000-5000 INR",
    },
    // {
    //   place: "gujrat",
    //   place2: "gujrat",
    //   info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
    //   img: rajasthan,
    //   price: "4000-5000 INR",
    // },
    // {
    //   place: "chennai",
    //   place2: "chennai",
    //   info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
    //   img: himachal,
    //   price: "4000-5000 INR",
    // },
    {
      place: "jammu",
      place2: "jammu",
      info: "Known for its temples and as a gateway to the Vaishno Devi pilgrimage, Jammu offers a blend of history and spirituality.",
      img: jammu,
      price: "4000-5000 INR",
    },
    // {
    //   place: "karnataka",
    //   place2: "karnataka",
    //   info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
    //   img: kerala,
    //   price: "4000-5000 INR",
    // },
    {
      place: "rajasthan",
      place2: "Rajasthan",
      info: "Rajasthan’s colorful festivals, traditional music, and folk dance further enhance its allure, making it a captivating destination.",
      img: rajasthan,
      price: "4000-5000 INR",
    },
    // {
    //   place: "uttarakhand",
    //   place2: "Uttarakhand",
    //   info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
    //   img: uttarakhand,
    //   price: "4000-5000 INR",
    // },
    // {
    //   place: "europe",
    //   info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
    //   img: europe,
    //   price: "4000-5000 INR",
    // },
    {
      place: "Sikkim",
      place2: "Thailand",
      info: " A small, stunning state in Northeast India, famous for its mountains, monasteries, and diverse flora and fauna, with a rich Tibetan culture.",
      img: sikkim,
      price: "4000-5000 INR",
    },
    {
      place: "kerala",
      place2: "Kerala",
      info: "Kerala, located in southern India, is celebrated for its stunning landscapes, rich culture, and unique traditions",
      img: kerala,
      price: "4000-5000 INR",
    },
    // {
    //   place: "Thailand",
    //   info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
    //   img: thailand,
    //   price: "4000-5000 INR",
    // },
  ];

  const [searchField, setSearchField] = useState("");
  const [places, setPlaces] = useState(packageInfoRow1);
  const [filteredPlaces, setFilteredPlaces] = useState(places);

  useEffect(() => {
    const newfilteredPlaces = places.filter((place) => {
      return place.place.toLocaleLowerCase().includes(searchField);
    });

    setFilteredPlaces(newfilteredPlaces);
  }, [places, searchField]);

  const handleOnChange = (e) => {
    const search = e.target.value.toLocaleLowerCase();
    setSearchField(search);
    
    const filtered = packageInfoRow1.filter(place =>
      place.place.toLowerCase().includes(search)
    );
    setPlaces(filtered)
  };
  return (
    <>
      <section className="packages">
        <div className="package-container">
          <h2>
            All Locations
            <hr />
          </h2>
          <Searchbox handleOnChange={handleOnChange} />

          <div className="p-row">
            {filteredPlaces.map((element) => {
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
        </div>
      </section>
    </>
  );
};
