import React from 'react';
import { Col, Container, Tab, Row, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import BootstrapImg from '../components/assets/Bootstrap.png';
import HoriseonImg from '../components/assets/Horiseon.png';

const Projects = () => {

  const projects = [
    {
      title: 'Bootstrap Portfolio',
      description: 'Bootstrap Portfolio profile',
      imgUrl: 'BootsrapImg',
    },
    {
      title: 'Css-Grid Layout',
      description: 'Search Engine Optimization',
      imgUrl: 'HoriseonImg'
    },
    {
      title: 'Travel-App',
      description: 'Travel App Tracker',
      imgUrl: 'Travel-AppImg',
    }

    ]
  
  return (
   <section className='projects' id='projects'>
    <Container>
      <Row>
        <Col>
         <h2>Projects</h2>
         <p>My Projects display is wonderful</p>
         <Tab.Container id="projects-tabs" defaultActiveKey="first">
         <Nav variant="pills" defaultActiveKey="/home">
           <Nav.Item>
             <Nav.Link href="/first">Tab One</Nav.Link>
           </Nav.Item>
           <Nav.Item>
              <Nav.Link eventKey="second">Tab Two</Nav.Link>
           </Nav.Item>
           <Nav.Item>
              <Nav.Link eventKey="third">
                Tab Three
              </Nav.Link>
           </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Row>
                {
                  projects.map((project, index) =>{
                    return(
                      <ProjectCard
                      key={index}
                      {...project}
                      />
                    )
                  })
                }
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="second">Add text</Tab.Pane>
            <Tab.Pane eventKey="third">Add text</Tab.Pane>
           </Tab.Content>
           </Tab.Container>
            </Col>
      </Row>
    </Container>
   </section>
  )
}

export default Projects