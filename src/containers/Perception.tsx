import React from 'react';
import PlayerCharacterModel from '../models/PlayerCharacter'
import AbilityScoresModel from '../models/AbilityScores'
import Proficency from '../components/Proficency'

interface IProps {
}
interface IState {
    character: PlayerCharacterModel
}

export default class HitPoints extends React.Component<IProps, IState>{
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