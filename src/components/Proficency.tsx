import React from 'react';

import { FaCheck } from 'react-icons/fa'

import '../styles/components/Proficency.scss'
interface IProps {
    proficency:string
}
interface IState {
    selected:string
}
export default class Proficency extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
                selected: this.props.proficency
            }
    }
    render() {
        return (
            <div className='proficency'>
                <div className='proficency__container'>
    				<label className='proficency__label'>T</label>
                    <div className='proficency__value'>
                        { (this.state.selected === 'T' || this.state.selected === 'E' || this.state.selected === 'M' || this.state.selected === 'L') &&
                        <FaCheck className='proficency__icon' />
                        }
                    </div>
                </div>
                <div className='proficency__container'>
    				<label className='proficency__label'>E</label>
                    <div className='proficency__value'>
                        { (this.state.selected === 'E' || this.state.selected === 'M' || this.state.selected === 'L') &&
                        <FaCheck className='proficency__icon' />
                        }
                     </div>
                </div>
                <div className='proficency__container'>
    				<label className='proficency__label'>M</label>
                    <div className='proficency__value'>
                        { (this.state.selected === 'M' || this.state.selected === 'L') &&
                        <FaCheck className='proficency__icon' />
                        }
                     </div>
                </div>
                <div className='proficency__container'>
    				<label className='proficency__label'>L</label>
                    <div className='proficency__value'>
                        { this.state.selected === 'L' &&
                        <FaCheck className='proficency__icon' />
                        }
                     </div>
                </div>
            </div>
        );
    }
}
