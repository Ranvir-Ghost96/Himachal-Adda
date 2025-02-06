import './Thailand.css'
import { TravelCard } from "../../../components/locations/TravelCard";
import { ThailandImages } from "../../../media/thailand/ThailandImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Thailand = () => {
  const placeInfo = [
    {
      placeName: "Sikkim",
      tagline: "The Jewel of the Himalayas",
      desc: "Discover Sikkim, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now! ",
    },
  ];
  const packageInfo = [
    {
      img: ThailandImages.dp1,
      location: "Sikkim",
      price: "INR 4999",
      desc: "Discover Sikkim, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
    },
    {
      img: ThailandImages.dp2,
      location: "Sikkim",
      price: "INR 4999",
      desc: "Discover Sikkim, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
    },
    {
      img: ThailandImages.dp3,
      location: "Sikkim",
      price: "INR 4999",
      desc: "Discover Sikkim, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
    },
    {
      img: ThailandImages.dp4,
      location: "Sikkim",
      price: "INR 4999",
      desc: "Discover Sikkim, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
    },
  ];
  return (
    <>
      <div className="t-container">
        {placeInfo.map((place) => {
          return (
            <TravelCard
              name={place.placeName}
              tagline={place.tagline}
              desc={place.desc}
            />
          );
        })}
      </div>

      <div className="t-info">
        <h2>
          <span id="diff">E</span>verything you need to know
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Trip!
                  <hr />
                </h2>
                <p>
                  Sikkim is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels,  malls,
                  religious temples and unique blend of culture.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={ThailandImages.d1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={ThailandImages.d2} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="beaches">
          <span id="fdiff">S</span>Ikkim
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">M</span>ost visited temples
                  <hr />
                </h2>
                <p>
                  Thakarburi is a hilltop temple surrounded by panoramic views and
                  mythological lore, with a tranquil ambiance and well-kept grounds
                  maintained by the army.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={ThailandImages.db1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={ThailandImages.db2} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />
        <h2 className="heading" id="hotels">
          <span id="fdiff">H</span>otels
          <hr />
        </h2>
        <div className="t-row">
          <div className="images module">
            <div className="img1">
              <img src={ThailandImages.dh1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={ThailandImages.dh2} alt={""} id="port2" />
            </div>
          </div>
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">T</span>op hotels for you
                  <hr />
                </h2>
                <p>
                  Hilton San Jos and Summit golden crescent is a wonderful place to stay and
                  all staff are very kind and understanding.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="indubai">
          <span id="fdiff">O</span>nly in Sikkim
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">I</span>nteresting things to do
                  <hr />
                </h2>
                <p>
                  Yak ride is a unique and special activity to do in sikkim and make new
                  memories and experiences ,they are very peaceful animals and great for
                  a safari around the lake.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={ThailandImages.do1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={ThailandImages.do2} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />

        <div className="more">
          <h2 className="heading">
            What's included
            <hr id="line" />
          </h2>

          <div className="cont">
            <p>
            A trip to Sikkim offers a captivating blend of stunning landscapes, 
            rich culture, and thrilling adventures. 
            </p>
            <p>
              Nestled in the Himalayas, 
              Sikkim is renowned for its breathtaking views of Mount Kanchenjunga,
              the third-highest mountain in the world. Visitors can explore serene
              lakes like Tsomgo Lake and Gurudongmar Lake, as well as picturesque
              waterfalls such as Naga Falls. The state's diverse natural beauty 
              is complemented by its lush national parks, including Khangchendzonga 
              National Park, which is a UNESCO World Heritage Site.

             </p>
            <p>
            Culturally, Sikkim is vibrant, with its array of monasteries, such as Rumtek
            and Pemayangtse, offering insight into the region's Buddhist heritage. Local
            markets in Gangtok provide opportunities to shop for traditional handicrafts 
            and savor local delicacies like momos and thukpa. For adventure enthusiasts, 
            Sikkim is a playground for trekking, paragliding, and river rafting, making 
            it an ideal destination for both relaxation and adventure. The best time to 
            visit is from March to June and September to December, ensuring an unforgettable 
            experience in this Himalayan paradise.
           
            </p>
          </div>
        </div>
      </div>
      <hr id="line" />
      <div className="container3" id="packages">
        <section className="packages">
          <h2>Best deals for you</h2>
          <div className="outerbox">
            <div className="row1">
              {packageInfo.map((pack) => {
                return (
                  <PackCard
                    img={pack.img}
                    loc={pack.location}
                    price={pack.price}
                    desc={pack.desc}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <hr id="line" />

      <div className="container5" id="contact">
        <section className="t-contact">
          <h1>Book Your tickets</h1>
          <div className="rowlast">
            <div className="contimg">
              <img src={contactimg} alt={""} id="contimg" />
            </div>

            <div className="box">
              <h2>
                Book your tickets
                <hr />
              </h2>

              <p>
                One step away from booking your trip! What are you waiting for?
              </p>
              <Link to="/book">
                <div className="btn">
                  <button className="book-btn">Book now</button>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}