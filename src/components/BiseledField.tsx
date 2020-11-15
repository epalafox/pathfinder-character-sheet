import React from 'react'
import '../styles/components/BiseledField.scss'

interface IProps {
	text:string | number
}
interface IState {
}

class BiseledField extends React.Component<IProps, IState>{
	render(){
		return (
			<div className='biseled-field'>
				<h1 className='biseled-field__h1'>
					{this.props.text}
				</h1>
			</div>
		)
	}
}
export default BiseledField