import React from 'react';
import '../styles/components/LabeledField.scss'
interface IProps {
	label:string,
	value:string | number
}
interface IState {
}

export default class LabeledInput extends React.Component<IProps, IState>{
    render() {
        return (
            <div className='labeled'>
				<label className='labeled__label'>{this.props.label}</label>
				<div className='labeled__value'>
					<input type='number' value={this.props.value} className='labeled__input' />
				</div>
			</div>
        );
    }
}
