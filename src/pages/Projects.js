import { Container } from '@mui/material'
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
        </Col>
      </Row>
    </Container>
   </section>
  )
}

export default Projects