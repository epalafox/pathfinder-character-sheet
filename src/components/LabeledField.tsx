import React from 'react';
import { Segment, Header, Label, Grid, Input } from 'semantic-ui-react'
import PlayerCharacterModel from '../models/PlayerCharacter'
import AbilityScoresModel from '../models/AbilityScores'
import Proficency from '../components/Proficency';

interface IProps {
}
interface IState {
    character: PlayerCharacterModel
}

export default class AbilityScore extends React.Component<IProps, IState>{
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
            <Segment>
                <Label attached='top'>CAP</Label>
                <Input  />
            </Segment>
        );
    }
}
