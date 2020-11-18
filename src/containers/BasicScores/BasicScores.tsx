import React from 'react'
import AbilityScores from './AbilityScores';
import '../../styles/BasicScores.scss'
import ClassDC from './ClassDC';
import ArmorClass from './ArmorClass';
interface IProps {
    
}
interface IState {
    
}

class BasicScores extends React.Component<IProps, IState>{
	render(){
		return (
			<div className='basic-scores'>
				<AbilityScores />
				<ArmorClass />
				<div className="basic-scores__saving-throws">basic-scores #3</div>
				<div className="basic-scores__hit-points">basic-scores #4</div>
				<div className="basic-scores__perception">basic-scores #5</div>
				<ClassDC />
			</div>
		)
	}
}
export default BasicScores;