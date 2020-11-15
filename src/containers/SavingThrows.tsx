import React from 'react';
import PlayerCharacterModel from '../models/PlayerCharacter'
import AbilityScoresModel from '../models/AbilityScores'

interface IProps {
}
interface IState {
    character: PlayerCharacterModel
}

export default class SavingThrows extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            character: {
                abilityScores: new AbilityScoresModel()
            }
        }
    }
    render() {
        return (
            <div className='custom-segment'>
            
            </div>
        );
    }
}
