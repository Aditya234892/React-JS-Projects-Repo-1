import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import RPG from "../assets/img/RandomPasswordGenerator.png";
import MSA from "../assets/img/MovieSearchApp.png";
import BGG from "../assets/img/BackGroundChanger.png";
import PP from '../assets/img/PokemonProject.png';
import GF from '../assets/img/GeekFoods.png';
import LBP from '../assets/img/LeaderBoardProject.png';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Pokemon Project",
      description: "Design & Development using JavaScript",
      link: "https://aditya234892.github.io/Pokemon-Project/#",
      imgUrl: PP, 
    },
    {
      title: "Movie Search App",
      description: "Design & Development using JavaScript",
      link: "https://aditya234892.github.io/JavaScript-Projects/Project%20-%2022%20(Movie%20Search)/",
      imgUrl: MSA,
    },
    {
      title: "Background Changer",
      description: "Design & Development using React JS",
      link:"https://react-js-projects-m96a.vercel.app/",
      imgUrl: BGG,
    },
    {
      title: "Random Password Generator",
      description: "Design & Development using React JS",
      link: "https://react-js-projects-sfx6.vercel.app/",
      imgUrl: RPG,
    },
    {
      title: "GeekFoods",
      description: "Design & Development using React JS",
      link: "https://react-js-projects-b5ux.vercel.app/",
      imgUrl: GF,
    },
    {
      title: "Leader Project",
      description: "Design & Development using JavaScript",
      link: "https://aditya234892.github.io/JavaScript-Projects/Project%20-%2010%20(Leader%20Board)/",
      imgUrl: LBP,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore my projects showcasing my skills in frontend development, responsive design, and JavaScript. Each project reflects my passion for creating engaging user experiences and innovative solutions.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>To be Added..</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p>To be Added..</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
