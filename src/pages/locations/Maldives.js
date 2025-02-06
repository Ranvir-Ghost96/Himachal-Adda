import './Maldives.css'
import { TravelCard } from "../../../components/locations/TravelCard";
import { MaldivesImages } from "../../../media/maldives/MaldivesImages";
import himaport2 from "../../../media/himachal/port2.jpg";
import himanature1 from "../../../media/himachal/nature1.jpg";
import himanature2 from "../../../media/himachal/nature2.jpg";
import himatrek2 from "../../../media/himachal/trek2.jpg";
import himadrmport from "../../../media/himachal/drmshport1.webp";
import himamcl from "../../../media/himachal/drmshmcleod1.jpeg";
import himatemple1 from "../../../media/himachal/drmshtemple1.jpeg";
import himatemple2 from "../../../media/himachal/drmshtemple2.jpg";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Maldives=()=>{
    const placeInfo = [
        {
          placeName: "Dharamshalla",
          tagline: "Tibetan culture and tranquility",
          desc: "Discover Dharamshalla, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now! ",
        },
      ];
      const packageInfo = [
        {
          img: MaldivesImages.dp1,
          location: "Dharamshalla",
          price: "INR 4999",
          desc: "Discover Dharamshalla, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: MaldivesImages.dp2,
          location: "Dharamshalla",
          price: "INR 4999",
          desc: "Discover Dharamshalla, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: MaldivesImages.dp3,
          location: "Dharamshalla",
          price: "INR 4999",
          desc: "Discover Dharamshalla, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: MaldivesImages.dp4,
          location: "Dharamshalla",
          price: "INR 4999",
          desc: "Discover Dharamshalla, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
      ];
    return(
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
                  Dharamshalla is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={himanature1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={himatemple1} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="beaches">
          <span id="fdiff">C</span>ulture
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">M</span>cleod Ganj
                  <hr />
                </h2>
                <p>
                McLeod Ganj, often referred to as the Little Lhasa, is the heart of Dharamshala 
                and home to the Tibetan government-in-exile. Visitors can explore the Tsuglagkhang 
                Complex, which includes the residence of the Dalai Lama, as well as beautiful temples
                 and stupas. The area is vibrant with Tibetan shops, cafes, and monasteries, offering 
                 a unique cultural experience.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={himamcl} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={himatemple2} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />
        <h2 className="heading" id="hotels">
          <span id="fdiff">N</span>atural Scenary
          <hr />
        </h2>
        <div className="t-row">
          <div className="images module">
            <div className="img1">
              <img src={himanature2} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={himaport2} alt={""} id="port2" />
            </div>
          </div>
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">D</span>al Lake
                  <hr />
                </h2>
                <p>
                Located about 11 kilometers from McLeod Ganj, Dal Lake is a serene and 
                tranquil spot surrounded by deodar trees. It's a great place for picnics
                 and leisurely walks. The calm waters and scenic views make it an ideal 
                 spot for relaxation and photography.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="indubai">
          <span id="fdiff">O</span>nly in Dharamshalla
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
                One of the most interesting activities is visiting the Tibetan Cultural Centre, 
                where you can immerse yourself in Tibetan traditions. The center often hosts workshops
                 on thangka painting, Tibetan calligraphy, and traditional crafts.
                </p>
                <p>
                Another captivating experience is attending a meditation or yoga retreat in one of the many centers
                 throughout the area. These retreats often combine teachings on mindfulness with practices that harness
                  the tranquil environment of the Himalayas, providing a rejuvenating experience for both the body and mind.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={himadrmport} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={himatrek2} alt={""} id="port2" />
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
            A trip to Dharamshala offers a rich blend of natural beauty, Tibetan culture, and spiritual experiences.
            </p>
            <p> 
            Nestled in the Himalayas, Dharamshala is renowned for its stunning landscapes, including lush forests, 
            mountain views, and serene lakes. Visitors can explore the vibrant neighborhood of McLeod Ganj, home to
             the Dalai Lama and the Tibetan government-in-exile, where they can visit the Tsuglagkhang Complex and 
             experience the local Tibetan culture through markets, cafes, and monasteries.
            </p>
            <p>
              Outdoor enthusiasts can embark on activities like the Triund Trek, which offers breathtaking views of
               the Dhauladhar Range, or relax by the tranquil Dal Lake. Cultural immersion is further enhanced by visits
                to the Norbulingka Institute, where traditional Tibetan arts and crafts are preserved. Visitors can also 
                participate in meditation and yoga retreats, deepening their understanding of Tibetan Buddhism.
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