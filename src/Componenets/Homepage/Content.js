import React from "react";
import "../../Styles/HomepageStyle/content.css";
const Content = () => {
  return (
    <div className="parent">
      <div>
        <img
        style={{
          height: 'auto',
          width: '100%',
          objectFit: "contain",
          display: "flex"
        }}
        src="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/305801716_480775884063650_8706871946555508615_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=7lAq0cURFA0AX9yfYRI&_nc_ht=scontent.fktm3-1.fna&oh=00_AfA7mFxV-BT34wodSBZk2LKQYoTvpQsPJ5p5UPAnJGYClg&oe=637386AB" alt="" />
      </div>
      <div className="first-content">
        <div className="content1">
          <h1>
          Customers have placed their trust in us
and we have just begun!
          </h1>
          <p>
            We are the world's most valuable two and three weheeler company. Come and take a close look at our ethos and our ecosystem.
          </p>
          <button className="btn1">Enquire Now {">"}</button>
          {/* <div className="image-container">
            <img
              className="image1"
              src="https://media.istockphoto.com/photos/millennial-black-businesswoman-addressing-colleagues-at-a-corporate-picture-id1146472948?k=20&m=1146472948&s=612x612&w=0&h=uJMkt7Jtt7sv73o77K3WcqleE6Jlsl5fhKG_6ug1jPA="
              alt=""
            />
          </div> */}
        </div>
      </div>
      

      <div className="content-second">
        <div className="content-2">
          <button
            style={{
              color: "rgb(6, 158, 239)",
              backgroundColor: "lightblue",
              width: "auto",
              border: "none",
              height: "30px",
              fontSize: "17px",
            }}
          >
            customers
          </button>
          <h3>
            Trusted by{" "}
            <span
              style={{
                fontSize: "25px",
              }}
            >
              1000,000+ customers
            </span>{" "}
            in 70+ countries
          </h3>

          <div className="logos">
            <img
              className="logo"
              src="https://media.istockphoto.com/id/838747232/vector/national-flag-of-nepal.jpg?s=612x612&w=0&k=20&c=eeZ7EAEIOrStULZ8-nReyEZ_etCAqcu7QyHK26GM1BQ="
              alt=""
            ></img>
            <img
              className="logo"
              src="https://media.istockphoto.com/id/472317739/vector/flag-of-india.jpg?s=612x612&w=0&k=20&c=ejlQRX4C_Mb40wz1JQcB5vKYcOKlfRtry2W6UcX6mlo="
              alt=""
            ></img>
            <img
              className="logo"
              src="https://media.istockphoto.com/id/878587072/photo/china-flag-a-series-of-flags-of-the-world.jpg?s=612x612&w=0&k=20&c=UaEuM-KRtk71BDDNTVpmTO-wJS2TsC1D0PGcMxJyeyA="
              alt=""
            ></img>
            <img
              className="logo"
              src="https://media.istockphoto.com/id/1061013668/vector/vector-flag-of-the-peoples-republic-of-bangladesh-proportion-3-5-the-national-flag-of.jpg?s=612x612&w=0&k=20&c=2UzlTX9EIPrLJJ9kHcr-VOXvM6FWNWsi3uZmsocshBk="
              alt=""
            ></img>
            <img
              className="logo"
              src="https://media.istockphoto.com/id/652750800/vector/pakistan.jpg?s=612x612&w=0&k=20&c=x14F0XneN74dfVp2qL_vfT8JCZaHRB8ZKUIsrf0lqGY="
              alt=""
            ></img>
            <img
              className="logo"
              src="https://media.istockphoto.com/id/472317757/vector/a-close-up-of-the-flag-of-thailand.jpg?s=612x612&w=0&k=20&c=HYQeiH732Drl0W6ftu7FId9TGkZL66Bk1dOSF_8At_o="
              alt=""
            ></img>
          </div>

          <div className="text">
            <p>
              <span className="blue-text">🗸 18281</span> signed up last month
            </p>
            <p>
              <span className="blue-text">🗸 GDPR-& CCPA</span> ready
            </p>
            <p>
              <span className="blue-text">🗸 Leader@G2</span> Summer
            </p>
          </div>
        </div>
      </div>

      <div className="content-third">
        <div className="row3">
          <div className="column3">
            <button
              style={{
                color: "rgb(6, 158, 239)",
                backgroundColor: "lightblue",
                width: "auto",
                border: "none",
                height: "auto",
                fontSize: "17px",
                float: "left",
                margin: "20px 0px 20px 10px",
                padding: "10px",
              }}
            >
              OUR PROMISE
            </button>
            <p
              className="paragraph"
              style={{
                fontSize: "25px",
              }}
            >
              Machine{" "}
              <span
                className="paragraph"
                style={{
                  fontWeight: "bold",
                }}
              >
                built for people.
              </span>
            </p>
            <p className="paragraph">
            18 million motorcycles sold in over 70 countries, the Bajaj brand is truly ‘The World’s Favourite Indian’.
              <br />
              It is India’s No.1 motorcycle exporter with two out of three bikes sold internationally carrying a Bajaj badge. The company is also the world’s largest manufacturer of three-wheelers.  </p>
            <button
              className="btn1"
              style={{
                margin: "10px",
              }}
            >
              Learn More
            </button>
          </div>
          <div className="column3-right">
            <img
              className="image3"
              src="https://www.bajajauto.com/-/media/Images/Bajaj-Auto/All--bikes/Pulsar-RS-200.ashx?h=254&iar=0&w=246&hash=D3898CEA60B32A1D16FC1B16415AA8F2"
              alt=""
            ></img>
          </div>
        </div>
      </div>

      <div className="content-forth">
        <p
          style={{
            color: "rgb(6, 158, 239)",
            backgroundColor: "lightblue",
            width: "auto",
            border: "none",
            height: "auto",
            fontSize: "17px",
            padding: "10px",
            display: "inline-block",
            marginTop: "10px",
          }}
        >
          AWARDS
        </p>
        <p
          style={{
            fontSize: "20px",
          }}
        >
          An{" "}
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            award winning
          </span>{" "}
          Company,{" "}
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            loved by customers.
          </span>
        </p>

        {/* logos and items */}
        <div className="logo4">
          <div className="row4">
            <div
              className="column4"
              style={{
                backgroundColor: "#fff1f3",
              }}
            >
              <img
                style={{
                  height: "150px",
                  width: "110px",
                  objectFit: "contain",
                  display: "flex",
                  marginTop: "10px",
                }}
                src="https://www.bajajgroup.company/wp-content/uploads/2019/06/Awards-Recognition-02_Beyond-Profits_Bajaj-Group.jpg"
                alt=""
              />
              <p>Market leader across 18 categories</p>{" "}
            </div>
            <div
              className="column4"
              style={{
                backgroundColor: "#ffdde2",
              }}
            >
              <img
                style={{
                  height: "150px",
                  width: "110px",
                  objectFit: "contain",
                  display: "flex",
                  marginTop: "10px",
                }}
                src="https://www.bajajgroup.company/wp-content/uploads/2019/06/Awards-Recognition-03_Beyond-Profits_Bajaj-Group.jpg"
                alt=""
              />

              <p> Ramkrishna Bajaj National Quality Award</p>
            </div>
            <div
              className="column4"
              style={{
                backgroundColor: "#E7F5FE",
              }}
            >
              <img
                style={{
                  height: "150px",
                  width: "110px",
                  objectFit: "contain",
                  display: "flex",
                  marginTop: "10px",
                }}
                src="https://www.bajajgroup.company/wp-content/uploads/2019/06/Awards-Recognition-04_Beyond-Profits_Bajaj-Group-1.jpg"
                alt=""
              />

              <p>Category leader in 2022</p>
            </div>
          </div>

          <div className="row4">
            <div
              className="column4"
              style={{
                backgroundColor: "#F3FAFF",
              }}
            >
              <img
                style={{
                  height: "150px",
                  width: "110px",
                  objectFit: "contain",
                  display: "flex",
                  marginTop: "10px",
                }}
                src="https://www.bajajgroup.company/wp-content/uploads/2019/06/Awards-Recognition-19_Beyond-Profits_Bajaj-Group.jpg"
                alt=""
              />

              <p>Most recommended machine</p>
            </div>
            <div
              className="column4"
              style={{
                backgroundColor: "#fff1f3",
              }}
            >
              <img
                style={{
                  height: "150px",
                  width: "110px",
                  objectFit: "contain",
                  display: "flex",
                  marginTop: "10px",
                }}
                src="https://www.bajajgroup.company/wp-content/uploads/2019/06/Awards-Recognition-01_Beyond-Profits_Bajaj-Group.jpg"
                alt=""
              />

              <p>Jamnalal Bajaj Award trophies </p>
            </div>
            <div
              className="column4"
              style={{
                backgroundColor: "#ffcad2",
              }}
            >
              <img
                style={{
                  height: "150px",
                  width: "110px",
                  objectFit: "contain",
                  display: "flex",
                  marginTop: "10px",
                }}
                src="https://www.bajajgroup.company/wp-content/uploads/2019/06/Awards-Recognition-08_Beyond-Profits_Bajaj-Group.jpg"
                alt=""
              />

              <p>Top performer till 2022</p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-fifth">
        <p
          style={{
            color: "rgb(6, 158, 239)",
            backgroundColor: "lightblue",
            border: "none",
            height: "auto",
            fontSize: "17px",
            padding: "10px",
          }}
        >
          BUILT FOR PEOPLE
        </p>
        <p
          style={{
            fontSize: "20px",
            display: "inline-block",
            clear: "both",
            width: "100%",
          }}
        >
          Easy{" "}
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            for beginners.
          </span>{" "}
          Powerful
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            for experts.
          </span>
        </p>

        <div className="select">
          <img
            src="https://img.icons8.com/external-duo-tone-yogi-aprelliyanto/24/000000/external-notebook-brand-identity-duo-tone-yogi-aprelliyanto.png"
            alt=""
          />
          <span>Create</span>
          <hr
            style={{
              backgroundColor: "#03fcc2",
              height: "2px",
              width: "130px",
              border: "none",
            }}
          ></hr>
        </div>

        <div className="select1">
          <img
            style={{
              opacity: "0.5",
            }}
            src="https://img.icons8.com/ios-glyphs/30/000000/sun--v1.png"
            alt=""
          />
          <span>Distribute</span>
        </div>

        <div className="select1">
          <img
            style={{
              height: "25px",
              width: "25px",
              opacity: "0.5",
            }}
            src="https://img.icons8.com/ios-glyphs/30/000000/moleskine.png"
            alt=""
          />

          <span>Collect</span>
        </div>

        <div className="select1">
          <img
            style={{
              height: "25px",
              width: "25px",
              opacity: "0.5",
            }}
            src="https://img.icons8.com/ios-filled/50/000000/search--v1.png"
            alt=""
          />
          <span>Analyze</span>
        </div>

        <div className="row5">
          <div className="column5">
            <h1
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                textAlign: "left",
                margin: "5px",
                display: "block",
              }}
            >
              Create{" "}
            </h1>
            <span
              style={{
                fontWeight: "bold",
                textAlign: "left",
                margin: "5px",
                display: "inline-block",
                clear: "both",
                width: "100%",
              }}
            >
              advance research software
            </span>
            <p style={{ textAlign: "left", margin: "5px" }}>
              Ask the right questions and get the answers you need with the most
              secure and collaborative survey platform on the market featuring
              powerful logic, sophisticated analytics, and built-in automation
              and integration.
            </p>{" "}
            <button
              className="btn1"
              style={{
                margin: "10px",
              }}
            >
              Know More
            </button>
          </div>
          <div className="column5-right">
            <img
              className="image5"
              src="http://www.bennetts.co.uk/-/media/bikesocial/media-archive/how-a-motorcycle-engine-works/thumb_pic-1.ashx"
              alt=""
            ></img>
          </div>
        </div>
      </div>

      {/* six content */}
      <div className="content-six">
        <div className="row6">
          <div className="column6">
            <p
              style={{
                color: "rgb(6, 158, 239)",
                backgroundColor: "lightblue",
                border: "none",
                height: "auto",
                fontSize: "13px",
                padding: "5px",
                margin: "5px",
              }}
            >
              TESTIMONIALS
            </p>
            <p
              style={{
                textAlign: "left",
                margin: "5px",
                display: "inline-block",
                clear: "both",
                width: "100%",
                fontSize: "25px",
              }}
            >
              see how customers
            </p>

            <p
              style={{
                textAlign: "left",
                margin: "5px",
                display: "inline-block",
                clear: "both",
                width: "100%",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              drive impact
            </p>
            <button
              className="btn1"
              style={{
                margin: "5px",
              }}
            >
              See case studies
            </button>
          </div>
          <div className="column6-right">
            <img
              className="image6"
              src="https://ca-times.brightspotcdn.com/dims4/default/e7fbbde/2147483647/strip/true/crop/1000x750+0+0/resize/1200x900!/quality/80/?url=https%3A%2F%2Fwww.trbimg.com%2Fimg-5c0be5c4%2Fturbine%2Fla-hp-lady-gaga-4x3-rotato-1-20181208"
              alt=""
            ></img>
          </div>

          <div className="column6-3">
            <img
              style={{
                height: "30px",
                width: "100px",
              }}
              src="https://seeklogo.com/images/P/paypal-logo-484B6FE744-seeklogo.com.png"
              alt=""
            ></img>
            <p
              style={{
                textAlign: "left",
              }}
            >
              "I used to have a bunch of different tools I had to pay for, with
              Circle you get everything in one bundle."
            </p>
            <p
              style={{
                textAlign: "left",
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  display: "inline-block",
                  clear: "both",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                Michel Dedrick
              </span>
              Senior Conversion Optimizer
            </p>
          </div>
          <div className="next-back-icon">
            <img
              style={{
                opacity: "0.5",
                width: "30px",
                height: "30px",
              }}
              src="https://img.icons8.com/sf-ultralight-filled/25/40C057/circled-right.png"
              alt=""
            />
            <img
              src="https://img.icons8.com/ios-glyphs/30/40C057/circled-right.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* content seven */}
      <div className="content-seven">
        <div className="row7">
          <div className="column7">
            <p
              style={{
                fontSize: "20px",
                textAlign: "left",
                margin: "5px",
                display: "block",
              }}
            >
              looking for a <span style={{ fontWeight: "bold" }}>solution</span>{" "}
            </p>
            <span
              style={{
                textAlign: "left",
                margin: "5px",
                display: "inline-block",
                clear: "both",
                width: "100%",
                fontSize: "20px",
              }}
            >
              for your Problems?
            </span>
            <p style={{ textAlign: "left", margin: "5px" }}>
              Check out our skilled and helpfull technicain and mechanic who can help you.
            </p>{" "}
            <button
              className="btn1"
              style={{
                margin: "5px",
              }}
            >
              Learn More
            </button>
            <button
              style={{
                borderColor: "blue",
                padding: "5px",
                margin: "5px",
                color: "blue",
                fontSize: "17px",
                backgroundColor: "white",
              }}
            >
              Schedule a consultation
            </button>
          </div>
          <div className="column7-right">
            <img
              className="image7"
              src="https://nepal.globalbajaj.com/-/media/Nepal/Images/blog/bajaj-dealers.jpg"
              alt=""
            ></img>
          </div>
        </div>
      </div>

      <p
        style={{
          color: "rgb(6, 158, 239)",
          backgroundColor: "lightblue",
          border: "none",
          height: "auto",
          fontSize: "17px",
          padding: "10px",
          marginRight: "40%",
          marginLeft: "40%",
        }}
      >
        Resources
      </p>
      <p
        style={{
          fontSize: "22px",
          marginRight: "35%",
          marginLeft: "35%",
        }}
      >
        <span style={{ fontWeight: "bold" }}>Our Most </span> Loved{" "}
        <span style={{ fontWeight: "bold" }}>Products</span>
      </p>

      <div className="content-eight">
        <div className="card-item">
          <div className="cardarea">
            <img
              className="card-image"
              src="https://reviews.com.np/uploads/product/bajaj-pulsar-ns-200-abs/thumb/555X367resize_bajaj-pulsar-ns-200-abs-0000.jpg"
              alt=""
            ></img>
            <h2 style={{ textAlign: "left", margin: "5px" }}>
              Bajaj NS 200
            </h2>
            <p style={{ textAlign: "left", margin: "5px" }}>
            It is most certainly Nepal’s most well-known naked sports bike in the 200 cc class, Pulsar ns 200 price in Nepal is unbelievable. Furthermore, because of its appearance, performance, and mileage, the bike is extremely popular among young people. The Bajaj Pulsar NS 200 ABS FI is now available!
            </p>
            <button
              className="btn1"
              style={{
                margin: "5px",
              }}
            >
              Read more
            </button>
          </div>
        </div>

        <div className="card-item">
          <div className="cardarea">
            <img
              className="card-image"
              src="https://nepal.globalbajaj.com/-/media//Nepal/Images/360/Pulsar%20220F%20ABS/2021/Sparkle%20Black/8.png"
              alt=""
            ></img>
            <h2 style={{ textAlign: "left", margin: "5px" }}>
              Bajaj Pulsar 220
            </h2>
            <p style={{ textAlign: "left", margin: "5px" }}>
            The Bajaj Pulsar 220F is a high-performance bike which is made for the masses. The noticeable changes in this new edition are to the exhaust system and fuel mechanism. For the latest edition, instead of the carburettor, Bajaj includes the fuel-injection mechanism and the exhaust system has been improved.
            </p>
            <button
              className="btn1"
              style={{
                margin: "5px",
              }}
            >
              Read more
            </button>
          </div>
        </div>

        <div className="card-item">
          <div className="cardarea">
            <img
              className="card-image"
              src="https://imgd.aeplcdn.com/476x268/n/cw/ec/49424/bajaj-dominar-400-front-three-quarter15.jpeg"
              alt=""
            ></img>
            <h2 style={{ textAlign: "left", margin: "5px" }}>
              Dominar 400
            </h2>
            <p style={{ textAlign: "left", margin: "5px" }}>
            Bajaj Dominar 400 is powered by a 34 bhp 373 cc single-cylinder engine
Being the company's flagship motorcycle, the Bajaj Dominar 400 also brings several best-in-class features to the table. The bike offers features like all-LED headlamp and daytime running lights, Auto Headlamp On (AHO) function.
            </p>
            <button
              className="btn1"
              style={{
                margin: " 5px ",
              }}
            >
              Read more
            </button>
          </div>
        </div>

        <div className="backgroundcolor"></div>
      </div>
    </div>
  );
};

export default Content;