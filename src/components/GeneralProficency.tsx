import React from 'react';

import { FaCheck } from 'react-icons/fa'

import '../styles/components/GeneralProficency.scss'
interface IProps {
    proficency:string
    label:string
}
interface IState {
    selected:string
}
export default class GeneralProficency extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
                selected: this.props.proficency
            }
    }
    render() {
        return (
            <div className='general-proficency'>
                <div className='general-proficency__title'>
                    <h5>{this.props.label}</h5>
                </div>
                <div className='general-proficency__container'>
    				<label className='general-proficency__label'>T</label>
                    <div className='general-proficency__value'>
                        { (this.state.selected === 'T' || this.state.selected === 'E' || this.state.selected === 'M' || this.state.selected === 'L') &&
                        <FaCheck className='general-proficency__icon' />
                        }
                    </div>
                </div>
                <div className='general-proficency__container'>
    				<label className='general-proficency__label'>E</label>
                    <div className='general-proficency__value'>
                        { (this.state.selected === 'E' || this.state.selected === 'M' || this.state.selected === 'L') &&
                        <FaCheck className='general-proficency__icon' />
                        }
                     </div>
                </div>
                <div className='general-proficency__container'>
    				<label className='general-proficency__label'>M</label>
                    <div className='general-proficency__value'>
                        { (this.state.selected === 'M' || this.state.selected === 'L') &&
                        <FaCheck className='general-proficency__icon' />
                        }
                     </div>
                </div>
                <div className='general-proficency__container'>
    				<label className='general-proficency__label'>L</label>
                    <div className='general-proficency__value'>
                        { this.state.selected === 'L' &&
                        <FaCheck className='general-proficency__icon' />
                        }
                     </div>
                </div>
            </div>
        );
    }
}
