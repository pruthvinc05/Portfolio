import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import myImg from "../../Assets/avatar.jpeg"
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Full Stack Software Developer with 2+ years of experience building scalable web and mobile applications across e-commerce and digital marketplace domains. Skilled in React.js, React Native, and Node.js with strong expertise in API development, microservices, and database optimization. Proven ability to deliver end-to-end features with a focus on performance, scalability, and seamless user experience across platforms.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, React.js, React Native, and Node.js{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, Mobile Applications{" "}
                </b>
              </i>
              <br />
              <br />
              {/* Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ scale: "0.7", height: "450px", width: "450px", borderRadius: "50%" }} />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
