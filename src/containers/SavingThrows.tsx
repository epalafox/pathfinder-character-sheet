import React from 'react';
import { Segment, Header, Grid } from 'semantic-ui-react'
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
            <Segment.Group className='custom-segment'>
                <Segment className='taroca' textAlign='center' size='massive' inverted color='blue'>
                    <Header size='medium' className='taroca'>
                        Saving Throws
                    </Header>
                </Segment>
                <Segment>
                    <Grid>
                        <Grid.Row columns={3}>
                            <Grid.Column textAlign='center'>
                                    <Header as='h2' className='taroca'>Fortitude</Header>
                                    <Segment>
                                        <Header as='h1'>{10}</Header>
                                    </Segment>
                            </Grid.Column>
                            <Grid.Column textAlign='center'>
                                    <Header as='h2' className='taroca'>Reflex</Header>
                                    <Segment>
                                        <Header as='h1'>{10}</Header>
                                    </Segment>
                            </Grid.Column>
                            <Grid.Column textAlign='center'>
                                    <Header as='h2' className='taroca'>Will</Header>
                                    <Segment>
                                        <Header as='h1'>{10}</Header>
                                    </Segment>
                            </Grid.Column>
                        </Grid.Row> 
                    </Grid>
                </Segment>
            </Segment.Group>
        );
    }
}
