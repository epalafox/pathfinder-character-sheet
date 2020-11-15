import React from 'react';
import '../styles/components/SectionTitle.scss'
interface IProps {
	text:string
}
interface IState {
    
}
class SectionTitle extends React.Component<IProps, IState>{
    render() {
        return (
            <div className='section-title'>
				<h1 className='section-title__h1'>{this.props.text}</h1>
            </div>
        );
    }
}
export default SectionTitle;