import React from 'react';
import FloatingLabelField from '../../components/FloatingLabelField';
interface IProps {
    
}
interface IState {
    
}
class Header extends React.Component<IProps, IState>{
    render() {
        return (
            <div className='character-level'>
                <label className='character-level__label'>Level</label>
                <FloatingLabelField />
            </div>
        );
    }
}
export default Header;