import React from 'react';

interface IProps {
    label:string
}
interface IState {
}

export default class LabeledField extends React.Component<IProps, IState>{
    render() {
        return (
            <div className='labeled'>
				<label className='labeled__label'>{this.props.label}</label>
				<div className='labeled__value'>
					<h2 className='labeled__field'>10</h2>
				</div>
			</div>
        );
    }
}
