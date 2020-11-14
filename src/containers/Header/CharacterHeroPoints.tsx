import React from 'react';
import FloatingLabelField from '../../components/FloatingLabelField';
interface IProps {
    
}
interface IState {
    
}
class Header extends React.Component<IProps, IState>{
    render() {
        return (
            <div className='character-hero-points'>
                <label className='character-hero-points__label'>Hero Points</label>
                <FloatingLabelField />
            </div>
        );
    }
}
export default Header;