import React from 'react';
import FloatingLabelField from '../../components/FloatingLabelField'
interface IProps {
    
}
interface IState {
    
}
class CharacterBasics extends React.Component<IProps, IState>{
    render() {
        return (
            <div className="character-details">
                <div className="character-basics__ancestry">
                    <FloatingLabelField horizontal taroca label='Ancestry and Heritage' />
                </div>
                <div className="character-basics__background">
                    <FloatingLabelField horizontal taroca label='Background' />
                </div>
                <div className="character-basics__class">
                    <FloatingLabelField horizontal taroca label='Class'/>
                </div>
                <div className="character-basics__sat">
                    <div className="character-basics__sat--size">
                        <FloatingLabelField horizontal taroca label='Size' />
                    </div>
                    <div className="character-basics__sat--alignment">
                        <FloatingLabelField horizontal taroca label='Alignment' />
                    </div>
                    <div className="character-basics__sat--traits">
                        <FloatingLabelField horizontal taroca label='Traits' />
                    </div>
                </div>
                <div className="character-basics__deity">
                    <FloatingLabelField horizontal taroca label='Deity'/>
                </div>
            </div>
        );
    }
}
export default CharacterBasics;