import React from 'react';
import { Segment, Header, Grid, Input, Label } from 'semantic-ui-react'
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
            <Segment.Group className='custom-segment'>
                <Segment className='taroca' textAlign='center' size='massive' inverted color='blue'>
                    <Header size='medium' className='taroca'>
                        Perception
                    </Header>
                </Segment>
                <Segment>
                    <Grid>
                        <Grid.Row columns={4}>
                            <Grid.Column>
                                <Segment>
                                    <Label attached='top'>WIS</Label>
                                    <Input  />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>
                                    <Label attached='top'>WIS</Label>
                                    <Input fluid  />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>
                                    <Proficency proficency='E' />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>
                                    <Label attached='top'>WIS</Label>
                                    <Input  />
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <Grid.Column>
                                <Label>SENSES</Label>
                                <Input fluid />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

            </Segment.Group>
        );
    }
}