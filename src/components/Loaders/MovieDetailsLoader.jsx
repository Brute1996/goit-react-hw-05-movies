import React from "react"
import ContentLoader from "react-content-loader"

const MovieDetailsLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={600}
    viewBox="0 0 400 600"
    backgroundColor="#2e6b32"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="31" y="3" rx="5" ry="5" width="544" height="388" /> 
    <rect x="71" y="405" rx="5" ry="5" width="288" height="32" /> 
    <rect x="53" y="456" rx="5" ry="5" width="321" height="101" /> 
    <rect x="85" y="571" rx="10" ry="10" width="69" height="21" /> 
    <rect x="269" y="571" rx="10" ry="10" width="69" height="21" />
  </ContentLoader>
)

export default MovieDetailsLoader
