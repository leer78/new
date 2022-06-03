import React, { Component } from 'react'
 
import StarfieldAnimation from 'react-starfield-animation'
  

//https://transitive-bullshit.github.io/react-starfield-animation/
//https://www.youtube.com/watch?v=NO76xNYkNGk&ab_channel=Arslan 

class App extends Component {
  render () {
    return (
      <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />
    )
  }
}
export default App;
