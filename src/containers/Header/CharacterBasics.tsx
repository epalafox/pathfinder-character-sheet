import React from 'react';
import FloatingLabelField from '../../components/FloatingLabelField'
interface IProps {
    
}
interface IState {
    
}
class CharacterBasics extends React.Component<IProps, IState>{
    render() {
        return (
            <div className="character-basics">
                <div className="character-basics__character-name">
                    <FloatingLabelField taroca label='Character Name' />
                </div>
                <div className="character-basics__player-name">
                    <FloatingLabelField taroca label='Player Name' />
                </div>
                <div className="character-basics__xp-points">
                    <FloatingLabelField taroca label='Experience Points (XP)'/>
                </div>
            </div>
        );
    }
}
export default CharacterBasics;