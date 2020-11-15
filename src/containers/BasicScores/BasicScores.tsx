import React from 'react'
import AbilityScores from './AbilityScores';
import '../../styles/BasicScores.scss'
import ClassDC from './ClassDC';
interface IProps {
    
}
interface IState {
    
}

class BasicScores extends React.Component<IProps, IState>{
	render(){
		return (
			<div className='basic-scores'>
				<AbilityScores />
				<div className="basic-scores__armor-class">basic-scores #2</div>
				<div className="basic-scores__saving-throws">basic-scores #3</div>
				<div className="basic-scores__hit-points">basic-scores #4</div>
				<div className="basic-scores__perception">basic-scores #5</div>
				<ClassDC />
			</div>
		)
	}
}
export default BasicScores;