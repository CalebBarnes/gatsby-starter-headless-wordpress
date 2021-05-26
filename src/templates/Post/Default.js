import React from "react"
// import styled from "styled-components"

const Post = props => {
  console.log({ props })

  return (
    <div>
      <h1>This is the default Post template</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        pharetra varius erat, sit amet aliquet tellus eleifend sit amet. Ut quis
        luctus arcu. Pellentesque rhoncus placerat ultricies. Etiam id urna
        finibus, bibendum massa sit amet, auctor erat. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Fusce at quam eu neque viverra
        vehicula vitae a odio. Sed finibus, libero eu imperdiet elementum, nisi
        libero vehicula libero, ut accumsan nulla mi in est. Nullam in metus eu
        orci mattis eleifend non id erat. Nunc sit amet erat hendrerit, dapibus
        mauris et, sodales ligula. Nulla facilisi. Nulla facilisi. Vivamus eget
        fringilla turpis.
      </p>
    </div>
  )
}

export default Post
