import React from 'react';
import { Segment, Header, Grid, Input, Label } from 'semantic-ui-react'
import PlayerCharacterModel from '../models/PlayerCharacter'
import AbilityScoresModel from '../models/AbilityScores'

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
                        Hit Points
                    </Header>
                </Segment>
                <Segment>
                    <Grid>
                        <Grid.Row columns={3}>
                            <Grid.Column>
                                <Segment>
                                    <Label attached='top'>MAX</Label>
                                    <Input  />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>
                                    <Label attached='top'>CURRENT</Label>
                                    <Input  />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>
                                    <Label attached='top'>TEMPORARY</Label>
                                    <Input  />
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <Segment>
                                    <Label attached='top'>DYING</Label>
                                    <Input  />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment>
                                    <Label attached='top'>WOUNDED</Label>
                                    <Input  />
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <Grid.Column>
                                <Label>RESISTANCES AND IMMUNITIES</Label>
                                <Input fluid />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <Grid.Column>
                                <Label>CONDITIONS</Label>
                                <Input fluid />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

            </Segment.Group>
        );
    }
}
