import React from 'react';
import '../styles/components/FloatingLabelField.scss'
interface IProps {
    taroca?:boolean
    label?:string
    value?:string
    horizontal?:boolean
    onChange?:(event:React.ChangeEvent<HTMLInputElement>)=>void
}
interface IState {
    
}
class FloatingLabelField extends React.Component<IProps, IState>{
    render() {
        return (
            <div className={this.props.horizontal ? 'floating-label-field-horizontal' : 'floating-label-field'}>
                <label className={this.props.taroca ? 'floating-label-field__label--taroca' : 'floating-label-field__label--tauri'}>{this.props.label}</label>
                <input className='floating-label-field__input' value={this.props.value} onChange={this.props.onChange} />
            </div>
        );
    }
}
export default FloatingLabelField;