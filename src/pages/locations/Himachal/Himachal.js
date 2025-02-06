import './Himachal.css'
import { TravelCard } from "../../../components/locations/TravelCard";
import { HimachalImages } from "../../../media/himachal/HimachalImages";
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

export const Himachal=()=>{
    const placeInfo = [
        {
          placeName: "Himachal",
          tagline: "The mountains are calling",
          desc: "Discover Himachal, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now! ",
        },
      ];
      const packageInfo = [
        {
          img: HimachalImages.dp1,
          location: "Shimla",
          price: "INR 4999",
          desc: "Discover Himachal, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: HimachalImages.dp2,
          location: "Minali",
          price: "INR 4999",
          desc: "Discover Himachal, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: HimachalImages.dp3,
          location: "Kullu",
          price: "INR 4999",
          desc: "Discover Himachal, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: HimachalImages.dp4,
          location: "Dharamshala",
          price: "INR 4999",
          desc: "Discover Himachal, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
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
                  Himachal pradesh is open and ready to welcome you again to make new
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
          <span id="fdiff">T</span>reks
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
                  <span id="fdiff">B</span>est Trekking camps 
                  <hr />
                </h2>
                <p>
                Himachal Pradesh is a trekker's paradise, offering a variety of breathtaking trails 
                that cater to all levels of experience. One of the most popular trekking camps is 
                Hampta Pass, which connects the lush valleys of Kullu and Lahaul. This trek is known 
                for its stunning landscapes, ranging from dense forests and alpine meadows to dramatic 
                mountain views. The journey typically spans around five to six days, allowing trekkers
                to experience the vibrant flora and fauna, as well as traditional villages along the way.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="beaches">
          <span id="fdiff">N</span>ature
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">B</span>est resorts to visit
                  <hr />
                </h2>
                <p>
                For those looking for a more vibrant atmosphere, Dharamshala and McLeod Ganj 
                provide a blend of natural beauty and cultural richness. Nestled in the Dhauladhar Range,
                 these towns are not only known for their scenic views but also for their significance as
                  the residence of the Dalai Lama. Lush tea gardens, vibrant Tibetan culture, and serene 
                  hiking trails make this area a perfect retreat. Together, these natural sites showcase 
                  the incredible beauty and diversity of Himachal Pradesh, making it an ideal destination 
                  for nature lovers and adventure seekers.
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
          <span id="fdiff">T</span>emples
          <hr />
        </h2>
        <div className="t-row">
          <div className="images module">
            <div className="img1">
              <img src={himaonly2} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={himabaitemple} alt={""} id="port2" />
            </div>
          </div>
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">T</span>op temples for you
                  <hr />
                </h2>
                <p>
                The Baijnath Temple, located in the Kangra Valley, is dedicated to Lord Shiva 
                and is renowned for its exquisite architecture and rich history. Believed to have 
                been built in the 13th century, it attracts many devotees and history enthusiasts.
                </p>
                <p>
                Another significant temple is the Hadimba Devi Temple in Manali,
                 dedicated to the goddess Hadimba, the wife of Bhima from the Mahabharata.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="indubai">
          <span id="fdiff">O</span>nly in Himachal
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
                Himachal Pradesh offers a wealth of unique activities that cater to adventure 
                seekers and culture enthusiasts alike. One of the most thrilling experiences is 
                paragliding in locations like Bir Billing, which is known as one of the best 
                paragliding spots in the world. Soaring over the stunning landscapes of the Dhauladhar
                 Range while enjoying the breathtaking views is an unforgettable adventure. The region 
                 also hosts paragliding competitions, attracting both amateur and professional pilots, 
                 adding to the vibrant atmosphere.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={himaonly1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={himahotel} alt={""} id="port2" />
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
            A trip to Himachal Pradesh offers a diverse array of experiences, 
            combining breathtaking natural beauty, rich cultural heritage, and
             thrilling adventures. 
            </p>
            <p>
             Visitors can explore stunning landscapes, from
              the snow-capped peaks of the Himalayas to lush valleys and serene 
              lakes. Popular destinations include Shimla, Manali, and Dharamshala,
               each offering unique attractions like the Jakhoo Temple, Hadimba Devi 
               Temple, and the Dalai Lama's residence.
            </p>
            <p>
            Adventure seekers can indulge in activities such as trekking, 
            paragliding in Bir Billing, and river rafting in the Beas River.
             For those interested in local culture, attending traditional festivals
              or visiting ancient monasteries in Spiti Valley provides a deep insight
               into the region's heritage. Travelers can also savor delicious Himachali 
               cuisine and explore charming villages, making for an enriching and memorable
                journey through this picturesque state. Whether you seek relaxation or adventure,
                 Himachal Pradesh has something for everyone.
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