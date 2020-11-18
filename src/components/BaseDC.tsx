import React from 'react';

import '../styles/components/BaseDC.scss'

export default class BaseDC extends React.Component{
    render() {
        return (
				<div className='base-dc__container'>
					<h1 className='base-dc__container--equals'>=</h1>
					<h5 className='base-dc__container--h'>DC BASE</h5>
					<h1 className='base-dc__container--h'>10</h1>
				</div>
        );
    }
}
