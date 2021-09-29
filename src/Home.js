import React from "react";
import "./main.css";
import homeImage from "./assests/home1.jpg";
import firstImage from "./assests/image1.jpg";
import secondImage from "./assests/image3.jpg";
import thirdImage from "./assests/image4.jpg";
import fourthImage from "./assests/image5.jpg";
import capsule from "./assests/capsule.jpg";
import map from "./assests/map.jpg";
import poster1 from "./assests/poster1.jpg";
import poster2 from "./assests/poster2.jpg";
import poster3 from "./assests/poster3.jpg";
import poster4 from "./assests/poster4.jpg";
import picture from "./assests/picture.jpg";

import poster11 from "./assests/poster11.jpg";
import poster22 from "./assests/poster22.jpg";
import poster33 from "./assests/poster33.jpg";
import poster44 from "./assests/poster44.jpg";

import last1 from "./assests/last1.jpg";
import last2 from "./assests/last2.jpg";
import last3 from "./assests/last3.jpg";

import new1 from "./assests/new1.jpeg";
import new2 from "./assests/new2.jpeg";
import new3 from "./assests/new3.jpg";
import new4 from "./assests/new4.jpg";

const Home = () => {
  function handleOver1() {
    document.getElementById("poster1").src = poster11;
  }
  function handleOut1() {
    document.getElementById("poster1").src = poster1;
  }

  function handleOver2() {
    document.getElementById("poster2").src = poster22;
  }
  function handleOut2() {
    document.getElementById("poster2").src = poster2;
  }
  function handleOver3() {
    document.getElementById("poster3").src = poster33;
  }
  function handleOut3() {
    document.getElementById("poster3").src = poster3;
  }
  function handleOver4() {
    document.getElementById("poster4").src = poster44;
  }
  function handleOut4() {
    document.getElementById("poster4").src = poster4;
  }

  return (
    <>
      <div className="section1">
        <div className="home-code">
          <p className="code" style={{ marginLeft: 60 }}>
            The future
          </p>
          <p
            className="code"
            style={{ position: "relative", top: -80, right: 50 }}
          >
            of health
          </p>
          <p
            className="code"
            style={{ position: "relative", left: 130, top: -165 }}
          >
            {" "}
            is clear.
          </p>
        </div>
        <img src={homeImage} className="main-image" />
        <button className="shop-button">Shop All</button>
      </div>

      <div className="section2-container">
        <div className="helper">
          <div className="section2">
            <img src={firstImage} className="second-image" />
          </div>
          <p className="title">Shop Multivitamin</p>
        </div>
        <div className="helper">
          <div className="section2">
            <img src={secondImage} className="second-image" />
          </div>
          <p className="title">Shop Protein</p>
        </div>
        <div className="helper">
          <div className="section2">
            <img src={thirdImage} className="second-image" />
          </div>
          <p className="title">Shop Pregnency</p>
        </div>
        <div className="helper">
          <div className="section2">
            <img src={fourthImage} className="second-image" />
          </div>
          <p className="title">Shop Bundles</p>
        </div>

        {/* 33########################################################3 */}
        <div style={{textAlign : "center", height : 150,paddingTop : 30}}>
          <p style={{color : "#142b6f",fontWeight : 600,fontSize : 22}}>Daily essentials with good intentions — for living life or creating it.</p>
          <div>
            <div className="helper">
              <div>logo</div>
              <p style={{width : 80,}}>Traceable Ingredients</p>
            </div>
            <div className="helper">
              <div>logo</div>
              <p>Non-GMO</p>
            </div><div className="helper">
              <div>logo</div>
              <p>Third Party Tested</p>
            </div><div className="helper">
              <div>logo</div>
              <p>Vegan</p>
            </div>
            <div className="helper">
              <div>logo</div>
              <p style={{width : 120}}>No Artificial Flavors or Synthetic Fillers</p>
            </div>

          </div>
        </div>

        <div className="med-container">
          <div className="circle"></div>
          <div className="helper capsule">
            <img src={capsule} className="capsule-image" />
          </div>
          <div className="helper desc">
            <p className="med-title">
              We're not about pseudoscience and half-truths
            </p>
            <p className="med-desc">
              From Omega-3 DHA from microalgae to regeneratively-farmed pea
              protein, our scientists studied diets and genetics to make daily
              essentials based on what we need.
            </p>
            <p className="med-link">Who We Are</p>
          </div>
        </div>
        <div
          className="desc-container"
          style={{ position: "relative", top: 200 }}
        >
          <div className="helper desc2">
            <p className="med-title">You deserve tracecibility </p>
            <p className="med-desc">
              We share our sources, studies, and suppliers — daily essentials
              backed by the first visible supply chain of its kind.
            </p>
            <p className="med-link">Meet Our Ingredients</p>
            <p className="med-link">Our Clinical Study</p>
          </div>
          <div className="helper capsule">
            <img src={map} className="capsule-image" />
          </div>
        </div>

        {/* 33333333333333333333333333333333333333333 */}
        

        <div style={{ paddingTop: 300 }}>
          {/* heading here */}
          <div style={{ paddingTop: 80, marginLeft: 30, marginBottom: 40 }}>
            <p
              style={{
                fontSize: 40,
                color: "#142b6f",
                fontWeight: "bold",
                display: "inline",
                marginRight: 800,
              }}
            >
              Featured Products
            </p>
            <p
              style={{
                textDecoration: "underline",
                display: "inline",
                color: "#142b6f",
                fontWeight: "bold",
              }}
            >
              Shop All
            </p>
          </div>
          {/* images heer */}
          <div style={{height : 500}}>
            <div className="helper" style={{ marginLeft: 20 }}>
              <a>
                <img
                  src={poster1}
                  style={{ borderRadius: 20 }}
                  id="poster1"
                  onMouseOver={handleOver1}
                  onMouseOut={handleOut1}
                />
              </a>
              <div>
                <p
                  className="desc1"
                  style={{ color: "#142b6f", position: "relative", top: 5 }}
                >
                  Essential for Women
                </p>
                <p
                  className="desc2"
                  style={{
                    color: "#142b6f",
                    position: "relative",
                    top: -1,
                    left: -30,
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  Multivitamin 18+
                </p>
                <p
                  className="desc3"
                  style={{
                    color: "#142b6f",
                    position: "relative",
                    top: -3,
                    width: 250,
                  }}
                >
                  The clinical-backed multivitamin, reimagined for women 18+.
                </p>
              </div>
            </div>
            <div className="helper" style={{ position: "relative", left: -18 }}>
              <a>
                <img
                  src={poster2}
                  id="poster2"
                  style={{ borderRadius: 20 }}
                  onMouseOver={handleOver2}
                  onMouseOut={handleOut2}
                />
              </a>
              <div>
                <p
                  className="desc1"
                  style={{ color: "#142b6f", position: "relative", top: 5 }}
                >
                  Essential for Women
                </p>
                <p
                  className="desc2"
                  style={{
                    color: "#142b6f",
                    position: "relative",
                    top: -1,
                    left: -30,
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  Multivitamin 18+
                </p>
                <p
                  className="desc3"
                  style={{
                    color: "#142b6f",
                    position: "relative",
                    top: -3,
                    width: 250,
                  }}
                >
                  The clinical-backed multivitamin, reimagined for women 18+.
                </p>
              </div>
            </div>
            <div className="helper" style={{ position: "relative", left: -36 }}>
              <a>
                <img
                  src={poster3}
                  style={{ borderRadius: 20 }}
                  id="poster3"
                  onMouseOver={handleOver3}
                  onMouseOut={handleOut3}
                />
              </a>
              <div>
                <p
                  className="desc1"
                  style={{ color: "#142b6f", position: "relative", top: 5 }}
                >
                  Essential for Women
                </p>
                <p
                  className="desc2"
                  style={{
                    color: "#142b6f",
                    position: "relative",
                    top: -1,
                    left: -30,
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  Multivitamin 18+
                </p>
                <p
                  className="desc3"
                  style={{
                    color: "#142b6f",
                    position: "relative",
                    top: -3,
                    width: 250,
                  }}
                >
                  The clinical-backed multivitamin, reimagined for women 18+.
                </p>
              </div>
            </div>
            <div
              className="helper"
              style={{ position: "relative", top: -440, left: 952 }}
            >
              <a>
                <img
                  src={poster4}
                  style={{ borderRadius: 20 }}
                  id="poster4"
                  onMouseOver={handleOver4}
                  onMouseOut={handleOut4}
                />
              </a>
              <div>
                <p
                  className="desc1"
                  style={{ color: "#142b6f", position: "relative", top: 5 }}
                >
                  Essential for Women
                </p>
                <p
                  className="desc2"
                  style={{
                    color: "#142b6f",
                    position: "relative",
                    top: -1,
                    left: -30,
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  Multivitamin 18+
                </p>
                <p
                  className="desc3"
                  style={{
                    color: "#142b6f",
                    position: "relative",
                    top: -3,
                    width: 250,
                  }}
                >
                  The clinical-backed multivitamin, reimagined for women 18+.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 33333333333333333333333333333333333333333333333333333################## */}
        
        {/* ########################### picture ###################### */}
        <div className="section4">
          <div className="helper">
            <img
              src={picture}
              style={{ paddingTop: 80, paddingBottom: 80, marginLeft: 20 }}
            />
          </div>

          <div
            style={{ width: 500, position: "relative", right: -100, top: -200 }}
            className="helper"
          >
            <h3 style={{ color: "#142b6f", fontSize: 40, fontWeight: "bold" }}>
              Clean and simple, delivered
            </h3>
            <p style={{ color: "#142b6f", fontWeight: 500, fontSize: 18 }}>
              Easy-to-start. Easy-to-cancel. Our team of scientists and
              nutritional experts are on a mission to turn your new healthy
              habit into a Ritual.*
            </p>
            <ul className="list2">
              <li>
                <span>logo</span>Free shipping
              </li>
              <li>Control your delivery date</li>
              <li>Free and easy cancellation</li>
              <li>30-day money back guarantee</li>
            </ul>
          </div>
        </div>
        {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}

        <div >
          <div style={{ paddingTop : 60,paddingBottom : 20, backgroundColor : "rbga(100,100,100,5)"}}>
            <div className="header" >
              <h1
                style={{ color: "#142b6f", fontWeight: "bold", fontSize: 40 }}
              >
                Skeptics Speak
              </h1>
              <h4 style={{ color: "#142b6f", fontWeight: 500, fontSize: 18 }}>
                With millions of Rituals delivered, discover why customers trust
                us with their daily health.
              </h4>
            </div>
            <div
              className="helper"
              style={{ paddingRight: 0, position: "relative", top: -170 }}
            >
              <p style={{ color: "#142b6f", fontWeight: "bold", fontSize: 19 }}>
                Erica Chidi Cohen
              </p>
              <p style={{ color: "#142b6f" }}>Doula and Health Educator</p>
            </div>
            <div className="helper" style={{ paddingTop: 38, }}>
              <img src={last1} style={{ marginLeft: 30 }} />
              
              <img
                src={last2}
                style={{
                  height: 350,
                  width: 270,
                  marginLeft: 30,
                  position: "relative",
                  top: -105,
                }}
              />
              <img
                src={last3}
                style={{
                  height: 350,
                  width: 270,
                  marginLeft: 30,
                  position: "relative",
                  top: -105,
                }}
              />
            </div>
            

            <div style={{textAlign : "center",paddingTop : 90}}>
              <hr style={{height : 3,backgroundColor : "#142b6f",width : "60%"}}></hr>
              <div>
                <ul style={{ width : "60%",display : "flex",justifyContent : "space-between",marginLeft : 210,paddingTop : 30,paddingBottom : 60}}>
                  <li >logo</li>
                  <li>logo</li>
                  <li>logo</li>
                  <li>logo</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="circle2"></div>
          {/* something start */}
          <div style={{ paddingTop: 80 }}>
            <div style={{ textAlign: "center" }}>
              <h1
                style={{ color: "#142b6f", fontWeight: "bold", fontSize: 40 }}
              >
                Make Your Self
              </h1>
              <h4 style={{ color: "#142b6f", fontWeight: 500, fontSize: 18 }}>
                Commit to yourself every single day with @Ritual
              </h4>
            </div>

            <div style={{ paddingTop: 30 }}>
              <img src={new1} style={{ marginLeft: 20 }} />
              <img src={new2} style={{ marginLeft: 30 }} />
              <img src={new3} style={{ marginLeft: 30 }} />
              <img src={new4} style={{ marginLeft: 30 }} />
            </div>
          </div>
        </div>
        <footer>
          <div>
            <div></div>
            <div style={{ paddingTop: 40, paddingBottom: 60 }}>
              <div
                style={{ marginLeft: 20, paddingRight: 300 }}
                className="helper"
              >
                <p
                  style={{
                    color: "#142b6f",
                    fontSize: 26,
                    width: 290,
                    fontWeight: "550",
                  }}
                >
                  Subscribe for updates, exclusive promotions, and more.
                </p>
              </div>
              <div className="helper">
                <div>
                  <div
                    style={{
                      color: "gray",
                      position: "relative",
                      top: 35,
                      right: -15,
                      fontSize: 15,
                    }}
                  >
                    Enter your email
                  </div>
                  <div
                    type="text"
                    style={{
                      width: 550,
                      height: 60,
                      backgroundColor: "rgb(236, 234, 241)",
                      borderColor: "rbg(236,234,241)",
                    }}
                  >
                    {" "}
                  </div>
                  <div className="subscribe">Subscribe</div>
                </div>
                <ul className="logo-list">
                  <li> logo</li>
                  <li>logo</li>
                  <li>logo</li>
                  <li>logo</li>
                  <li>logo</li>
                </ul>
              </div>
            </div>
          </div>
          <hr
            style={{
              width: "95%",
              marginRight: 120,
              color: "blue",
              height: 2,
              backgroundColor: "#142b6f",
            }}
          ></hr>
          <div className="footer-section2">
            <h1 className="logo helper ">Ritual</h1>
            <div className="helper">
              <div className="helper block2">
                <h6
                  style={{
                    position: "relative",
                    left: 40,
                    color: "rgb(116, 98, 158)",
                    top: 25,
                    fontSize: 13,
                  }}
                >
                  SHOP
                </h6>
                <ul className="list">
                  <li> Multivitamin </li>
                  <li> Protein</li>
                  <li> Bundles</li>
                  <li> Gift Cards</li>
                </ul>
              </div>
              <div className="helper block2">
                <h6
                  style={{
                    position: "relative",
                    left: 40,
                    color: "rgb(116, 98, 158)",
                    top: 25,
                    fontSize: 13,
                  }}
                >
                  SHOP
                </h6>
                <ul className="list">
                  <li> Multivitamin </li>
                  <li> Protein</li>
                  <li> Bundles</li>
                  <li> Gift Cards</li>
                </ul>
              </div>
              <div className="helper block2">
                <h6
                  style={{
                    position: "relative",
                    left: 40,
                    color: "rgb(116, 98, 158)",
                    top: 25,
                    fontSize: 13,
                  }}
                >
                  SHOP
                </h6>
                <ul className="list">
                  <li> Multivitamin </li>
                  <li> Protein</li>
                  <li> Bundles</li>
                  <li> Gift Cards</li>
                </ul>
              </div>
            </div>
          </div>
          {/* hard seciotn ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

          {/* last seciotn */}
          <hr
            style={{
              width: "95%",
              marginRight: 120,
              color: "black",
              height: 0,
            }}
          ></hr>

          <div>
            <div className="helper">
              <div></div>
              <div>
                <div>
                  <ul className="padding">
                    <li>Privacy </li>
                    <li>PolicyTerms of Service</li>
                    <li>Accessibility</li>
                    <li>Do Not Track</li>
                  </ul>
                </div>
                <p
                  style={{
                    color: "#142b6f",
                    fontSize: 12,
                    fontWeight: "bold",
                    position: "relative",
                    left: 40,
                  }}
                >
                  © 2021 Ritual. All rights reserved.
                </p>
              </div>
            </div>
            <div
              className="helper"
              style={{
                marginLeft: 250,
                position: "relative",
                top: 45,
                paddingBottom: 100,
              }}
            >
              <div>
                <div
                  style={{
                    color: "#142b6f",
                    width: 540,
                    fontSize: 12,
                    fontWeight: 600,
                    border: "solid",
                    borderWidth: 0.5,
                    borderColor: "gray",
                    padding: 15,
                  }}
                >
                  * These statements have not been evaluated by the Food and
                  Drug Administration. This product is not intended to diagnose,
                  treat, cure or prevent any disease.
                </div>
              </div>

              <div
                style={{
                  color: "#142b6f",
                  width: 540,
                  fontSize: 12,
                  fontWeight: 600,
                  paddingTop: 10,
                }}
              >
                The FDA plays a specific role in regulating the nutraceutical
                industry. Learn More.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
