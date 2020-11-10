import React from 'react';
import { Segment, Header } from 'semantic-ui-react'
import PlayerCharacterModel from '../models/PlayerCharacter'
import AbilityScoresModel from '../models/AbilityScores'

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
            <Segment.Group className='custom-segment'>
                <Segment className='taroca' textAlign='center' size='massive' inverted color='blue'>
                    <Header size='medium' className='taroca'>
                        Armor Class
                    </Header>
                </Segment>
                <Segment className='container-segment'>
                    <img alt='armor' src='/armor.png' className='armorClass-background' />
                    <Segment basic className='armorClass-calc'>
                        <Segment circular className='armorClass-circular'>
                            <Header as='h2'>
                                <Header.Subheader>AC</Header.Subheader>
                                10
                            </Header>
                        </Segment>
                    </Segment>
                </Segment>
            </Segment.Group>
        );
    }
}
