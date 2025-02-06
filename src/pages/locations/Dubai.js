import "./Dubai.css";
import { TravelCard } from "../../../components/locations/TravelCard";
import { DubaiImages } from "../../../media/dubai/d_images";
import himaport1 from "../../../media/himachal/port1.jpg";
import himaport2 from "../../../media/himachal/port2.jpg";
import himanature1 from "../../../media/himachal/nature1.jpg";
import himanature2 from "../../../media/himachal/nature2.jpg";
import himatrek1 from "../../../media/himachal/trek1.jpg";
import himatrek2 from "../../../media/himachal/trek2.jpg";
import himaonly1 from "../../../media/himachal/onlyh1.jpg";
import himaonly2 from "../../../media/himachal/onlyh2.jpg";
import himahotel from "../../../media/himachal/hotel.jpg";
import himabaitemple from "../../../media/himachal/baijnath-temple.jpg";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";
export const Dubai = () => {
  const placeInfo = [
    {
      placeName: "Shimla",
      tagline: "The Queen of the Hills.",
      desc: "Discover Shimla, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
    },
  ];
  const packageInfo = [
    {
      img: DubaiImages.dp1,
      location: "Shimla",
      price: "INR 4999",
      desc: "Discover Shimla, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
    },
    {
      img: DubaiImages.dp2,
      location: "Shimla",
      price: "INR 4999",
      desc: "Discover Shimla, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
    },
    {
      img: DubaiImages.dp3,
      location: "Shimla",
      price: "INR 4999",
      desc: "Discover Shimla, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
    },
    {
      img: DubaiImages.dp4,
      location: "Shimla",
      price: "INR 4999",
      desc: "Discover Shimla, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
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
                  Shimla is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
          <div className="img1">
              <img src={himaport2} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={himaport1} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />
        <h2 className="heading" id="cultures">
          <span id="fdiff">C</span>ultures
          <hr />
        </h2>

        <div className="t-row">
          <div className="images module">
            <div className="img1">
              <img src={himatrek1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={himatrek2} alt={""} id="port2" />
            </div>
          </div>
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">B</span>est Cultures
                  <hr />
                </h2>
                <p>
                Shimla, the capital of Himachal Pradesh, boasts a rich cultural tapestry that reflects
                 its diverse heritage and historical significance. Originally a small village, Shimla 
                 became a prominent summer retreat for British colonial officials in the 19th century,
                  which has left a lasting mark on its architecture and lifestyle. The town is characterized 
                  by its Victorian-era buildings, charming churches, and colonial-era bungalows, creating a 
                  unique blend of Indian and British cultures. 
                </p>
               
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="beaches">
          <span id="fdiff">H</span>ill Stations
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">B</span>est hill stations to visit
                  <hr />
                </h2>
                <p>
                Mashobra, located just 11 kilometers from Shimla, is another hidden gem worth visiting.
                 Known for its tranquil environment, this charming village is surrounded by apple orchards
                  and offers numerous trekking trails through lush forests.
                </p>
                <p>
                Another enchanting hill station to explore is Naldehra, about 22 kilometers from Shimla. 
                Renowned for its lush greenery and the famous Naldehra Golf Course, one of the oldest in India,
                 it offers a serene atmosphere perfect for relaxation and outdoor activities. 
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={himanature1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={himanature2} alt={""} id="port2" />
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
              <img src={himaonly2} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={himahotel} alt={""} id="port2" />
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
                The Wildflower Hall, a luxury Oberoi resort nestled in the Himalayas. 
                Set amidst cedar forests, this property offers breathtaking views, 
                world-class amenities, and a beautiful infinity pool. Guests can indulge
                 in spa treatments, fine dining, and various outdoor activities, making 
                 it a perfect retreat for those seeking tranquility and luxury.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="indubai">
          <span id="fdiff">O</span>nly in Shimla
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
                One of the most interesting things to do is to take a leisurely stroll along The Mall Road,
                 the heart of the city. Lined with colonial-era buildings, shops, and cafes, this vibrant 
                 promenade is perfect for people-watching and soaking in the local atmosphere. 
                </p>
                <p>
                For those seeking adventure, Kufri, just a short drive from Shimla,
                 is ideal for outdoor activities like horse riding, tobogganing, and trekking.
                  In winter, it transforms into a popular spot for snow sports.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
          <div className="img1">
              <img src={himaonly1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={himabaitemple} alt={""} id="port2" />
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
            A trip to Shimla promises a delightful mix of natural beauty, rich history, and vibrant culture.
            </p>
            <p>
             Nestled in the Himalayas, Shimla is renowned for its stunning landscapes, including lush forests,
              panoramic mountain views, and charming colonial architecture. Visitors can explore iconic landmarks 
              such as The Mall Road, the Viceregal Lodge, and Jakhoo Temple, each offering unique insights into the
               town's heritage and breathtaking surroundings. The scenic beauty is complemented by opportunities for
                outdoor activities like trekking, horse riding, and skiing in nearby Kufri during the winter months.
            </p>
            <p>
            Cultural experiences are also abundant in Shimla, with local markets such as Lakkar Bazaar showcasing
             traditional handicrafts, woolens, and local delicacies. The town hosts various festivals throughout 
             the year, allowing visitors to immerse themselves in the local traditions and celebrations.
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
  );
};
