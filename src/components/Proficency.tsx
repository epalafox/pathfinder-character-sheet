import React from 'react';

interface IProps {
    proficency:string
}
interface IState {
    selected:string
}
const proficencies = [
    {
        key:'U',
        text: 'Untrained',
        value:'U'
    },
    {
        key:'T',
        text: 'Trained',
        value:'T'
    },
    {
        key:'E',
        text: 'Expert',
        value:'E'
    },
    {
        key:'M',
        text: 'Master',
        value:'M'
    },
    {
        key:'L',
        text: 'Legendary',
        value:'L'
    }
]
export default class SavingThrows extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
                selected: this.props.proficency
            }
    }
    render() {
        return (
               <select defaultValue={this.state.selected} >
                   {
                       proficencies.map((p) => <option value={p.value} key={p.key} >{p.text}</option>)
                   }
               </select>
        );
    }
}
