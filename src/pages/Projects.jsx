import "react-multi-carousel/lib/styles.css";
import React, { Fragment } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../index.css';
import Carousel from "react-multi-carousel";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Projects = ({textColor='white', wh='w-11/12'}) => {
    return (
        <div className={`${wh} my-10 py-5 flex items-center flex-col`}>

            <div>
                <h2 className={`text-${textColor} text-5xl`}>Projects</h2>
            </div>

            <Carousel responsive={responsive} containerClass="carousel-container" itemClass="carousel-item-padding-40-px">
    <div style={{ height: '200px', backgroundColor: 'lightgray' }}>Item 1</div>
    <div style={{ height: '200px', backgroundColor: 'lightgray' }}>Item 2</div>
    <div style={{ height: '200px', backgroundColor: 'lightgray' }}>Item 3</div>
    <div style={{ height: '200px', backgroundColor: 'lightgray' }}>Item 4</div>
</Carousel>
        </div>
    );
}

export default Projects;
