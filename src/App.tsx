import React from 'react';
import './App.css';
import {Segment} from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
		<Segment.Group horizontal>
			<Segment basic color="orange">Left</Segment>
			<Segment inverted basic color="orange">Middle</Segment>
			<Segment basic color="orange">Right</Segment>
		</Segment.Group>
		<Segment>

		</Segment>
    </div>
  );
}

export default App;
