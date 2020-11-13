import React from 'react';
import { Segment, Header, Label, Input, Grid } from 'semantic-ui-react'
import PlayerCharacterModel from '../models/PlayerCharacter'
import AbilityScoresModel from '../models/AbilityScores'
import Proficency from './Proficency'

interface IProps {
}
interface IState {
    character: PlayerCharacterModel
}

export default class ClassDC extends React.Component<IProps, IState>{
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
                        Class DC
                    </Header>
                </Segment>
                <Segment className='container-segment'>
                <Grid className='segment-inline' columns={6}>
                    <Grid.Column textAlign='center'>
                        <Segment basic>
                            <Header as='h1'>
                                10
                            </Header>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <Header as='h1'>
                            <Header.Subheader>DC BASE</Header.Subheader>
                            10
                        </Header>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <Segment basic>
                            <Input
                                type='number'
                                minvalue='0'
                                textalign='center'
                                fluid
                                className='no-padding input-center'
                                value={this.state.character.abilityScores.strengthScore} />
                        </Segment>
                        <Label attached='top' className='tauri'>KEY</Label>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <Segment basic>
                            <Input
                                type='number'
                                minvalue='0'
                                textalign='center'
                                fluid
                                className='no-padding input-center'
                                value={this.state.character.abilityScores.strengthScore} />
                        </Segment>
                        <Label attached='top' className='tauri'>PROF</Label>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <Proficency proficency='L' />
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <Segment basic>
                            <Input
                                type='number'
                                minvalue='0'
                                textalign='center'
                                fluid
                                className='no-padding input-center'
                                value={this.state.character.abilityScores.strengthScore} />
                        </Segment>
                        <Label attached='top' className='tauri'>PROF</Label>
                    </Grid.Column>
                </Grid>
                </Segment>

            </Segment.Group>
        );
    }
}
