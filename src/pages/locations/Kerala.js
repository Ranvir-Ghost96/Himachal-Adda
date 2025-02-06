import './Kerala.css'
import { TravelCard } from "../../../components/locations/TravelCard";
import { GoaImages } from "../../../media/goa/GoaImages";
import keraport1 from "../../../media/goa/port1.jpg";
import keraport2 from "../../../media/goa/port2.jpg";
import Keranature1 from "../../../media/goa/cult1.jpg";
import Keranature2 from "../../../media/goa/cult2.jpg";
import Kerabeach1 from "../../../media/goa/beach1.jpg";
import Kerabeach2 from "../../../media/goa/beach2.jpg";
import Kerafood1 from "../../../media/goa/food1.jpg";
import Kerafood2 from "../../../media/goa/food2.jpg";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Kerala=()=>{
    const placeInfo = [
        {
          placeName: "Kerala",
          tagline: "Gods own country",
          desc: "Discover Kerala, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now! ",
        },
      ];
      const packageInfo = [
        {
          img: GoaImages.dp1,
          location: "Kerala",
          price: "INR 4999",
          desc: "Discover Kerala, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: GoaImages.dp2,
          location: "Kerala",
          price: "INR 4999",
          desc: "Discover Kerala, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: GoaImages.dp3,
          location: "Kerala",
          price: "INR 4999",
          desc: "Discover Kerala, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: GoaImages.dp4,
          location: "Kerala",
          price: "INR 4999",
          desc: "Discover Kerala, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
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
                  Kerala is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={keraport1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={keraport2} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />
        <h2 className="heading" id="cultures">
          <span id="fdiff">N</span>ature
          <hr />
        </h2>

        <div className="t-row">
          <div className="images module">
            <div className="img1">
              <img src={Kerabeach1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={Kerabeach2} alt={""} id="port2" />
            </div>
          </div>
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">N</span>ature at its best
                  <hr />
                </h2>
                <p>
                  The culture of Kerala, an emirate of the United Arab Emirates.
                  The UAE culture mainly revolves around the religion of Islam
                  and traditional Arab culture. The influence of Islamic and
                  Arab culture on its architecture, music, attire, cuisine, and
                  lifestyle are very prominent as well.
                </p>
                <p>
                  Five times every day, Muslims are called to prayer from the
                  minarets of mosques which are scattered around the country.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="beaches">
          <span id="fdiff">B</span>eaches
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">B</span>est beaches to visit
                  <hr />
                </h2>
                <p>
                  Kerala is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={Kerabeach1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={Kerabeach2} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />
        <h2 className="heading" id="hotels">
          <span id="fdiff">T</span>emples
          <hr />
        </h2>
        <div className="t-row">
          <div className="images module">
            <div className="img1">
              <img src={Keranature1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={Keranature2} alt={""} id="port2" />
            </div>
          </div>
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">F</span>amous temples
                  <hr />
                </h2>
                <p>
                  Kerala is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="indubai">
          <span id="fdiff">F</span>ood
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">I</span>nteresting foods to try
                  <hr />
                </h2>
                <p>
                  Kerala is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={Kerafood1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={Kerafood2} alt={""} id="port2" />
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Adipisci, asperiores.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              labore, ullam molestiae possimus obcaecati placeat odio, nemo, est
              dolor facilis temporibus aspernatur excepturi atque! Qui magni
              temporibus culpa reprehenderit labore eveniet veniam iusto non.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              molestias nostrum quae ipsum unde omnis minima, placeat excepturi
              soluta atque, asperiores qui, autem doloribus! Numquam culpa ullam
              facere, ratione enim quo laudantium eos suscipit blanditiis,
              magnam incidunt expedita recusandae exercitationem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              nostrum doloremque adipisci libero odio. Porro laboriosam
              voluptatem sequi fugit repellendus? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quos quam eius debitis ea aliquam
              veritatis. Laudantium, maxime.
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