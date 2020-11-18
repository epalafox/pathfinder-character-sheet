import React from 'react';

interface IProps {
    label:string
    value?:string
}
interface IState {
}

export default class LabeledField extends React.Component<IProps, IState>{
    render() {
        return (
            <div className='labeled'>
				<label className='labeled__label'>{this.props.label}</label>
				<div className='labeled__value'>
					<h2 className='labeled__field'>{this.props.value}</h2>
				</div>
			</div>
        );
    }
}
