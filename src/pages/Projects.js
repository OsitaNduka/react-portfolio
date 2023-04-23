import { Container, Tab } from '@mui/material'
import React from 'react'

const Projects = () => {

  const projects = [
    {
      title: 'Bootstrap Portfolio',
      description: 'Bootstrap Portfolio profile',
      imgUrl: 'bootstrapImg',
    },
    {
      title: 'Css-Grid Layout',
      description: 'Search Engine Optimization',
      imgUrl: 'css-gridImg'
    },
    {
      title: 'Travel-App',
      description: 'Travel App Tracker',
      imgUrl: 'travel-appImg',
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
                      <p>{project.title}</p>
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