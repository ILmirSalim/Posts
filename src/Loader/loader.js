import React from 'react'
import ContentLoader from 'react-content-loader'

const Loader = (props) => (
  <ContentLoader
    viewBox="0 0 600 260"
    height={260}
    width={600}
    backgroundColor="blue"
    {...props}
  >
    <circle cx="150" cy="86" r="8" />
    <circle cx="194" cy="86" r="8" />
    <circle cx="238" cy="86" r="8" />
  </ContentLoader>
)

export default Loader