import React, { useState, useRef, useEffect } from 'react'
import Nav from './Nav'
import '../App.css';

const Main = () => {

  const [data] = useState([150, 60, 200, 285, 173]);
  const svgRef = useRef();

  useEffect(() => {
    // settingup svg container
    const w = 400;
    const h = 300;
    const svg = d3.select(svgRef.current);

    // setting the scaling

    // setting the axes

    // setting the svg data
  }, [data]);

  return (
      <>
          <Nav />
            <div>
            <svg ref={svgRef}></svg>
            </div>
      </>
  )
}

export default Main