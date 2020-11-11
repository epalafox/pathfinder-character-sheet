import React from 'react';
import { Segment, Header, Label, Divider, Grid } from 'semantic-ui-react'
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
                    <Segment.Group className='segment-inline'>
                        <Segment textAlign='center' className='armorClass-calc'>
                            <div className='ac-Cont'>
                                <img alt='armor' src='/armor.png' className='armorClass-background' />
                                <div className='armorClass-value'>
                                    <Segment circular className='armorClass-circular'>
                                        <Header as='h2'>
                                            <Header.Subheader>AC</Header.Subheader>
                                        10
                                    </Header>
                                    </Segment>
                                </div>
                            </div>
                            <Grid stackable columns={5} className='segment-inline'>
                                <Grid.Column>
                                    <Segment>
                                        <Label attached='top'>DC BASE</Label>
                                        <Header>
                                            10
                                    </Header>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column verticalAlign='middle'>
                                    <Segment.Group horizontal>
                                        <Segment>
                                            <Label attached='top'>DEX</Label>
                                            <Header>
                                                10
                                        </Header>
                                        </Segment>
                                        <Segment inverted color='black' basic >
                                            <Label inverted color='black' size='mini'>OR</Label>
                                        </Segment>
                                        <Segment>
                                            <Label attached='top'>CAP</Label>
                                            <Header>
                                                10
                                        </Header>
                                        </Segment>
                                    </Segment.Group>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment>
                                        <Label attached='top'>PROF</Label>
                                        <Header>
                                            10
                                    </Header>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment.Group horizontal>
                                        <Segment>
                                            <Label attached='top'>T</Label>
                                            <Header>
                                                -
                                        </Header>
                                        </Segment>
                                        <Segment>
                                            <Label attached='top'>E</Label>
                                            <Header>
                                                -
                                        </Header>
                                        </Segment>
                                        <Segment>
                                            <Label attached='top'>M</Label>
                                            <Header>
                                                -
                                            </Header>
                                        </Segment>
                                        <Segment>
                                            <Label attached='top'>L</Label>
                                            <Header>
                                                -
                                            </Header>
                                        </Segment>
                                    </Segment.Group>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment>
                                        <Label attached='top'>ITEM</Label>
                                        <Header>
                                            10
                                        </Header>
                                    </Segment>
                                </Grid.Column>
                            </Grid>
                        </Segment>
                        <Segment textAlign='center' className='armorClass-calc'>
                            <Grid stackable>
                                <Grid.Column width={4} className='armorClass-prof'>
                                    <Segment basic className='armorProf-segment'>
                                        <Label className='tauri' size='tiny' color='black'>UNARMORED</Label>
                                        <Segment.Group horizontal className='armorProf-segment-group'>
                                            <Segment>
                                                <Label size='tiny' attached='top'>T</Label>
                                                <Header>
                                                    -
                                            </Header>
                                            </Segment>
                                            <Segment>
                                                <Label size='tiny' attached='top'>E</Label>
                                                <Header>
                                                    -
                                            </Header>
                                            </Segment>
                                            <Segment>
                                                <Label size='tiny' attached='top'>M</Label>
                                                <Header>
                                                    -
                                            </Header>
                                            </Segment>
                                            <Segment>
                                                <Label size='tiny' attached='top'>L</Label>
                                                <Header>
                                                    -
                                            </Header>
                                            </Segment>
                                        </Segment.Group>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column width={4} className='armorClass-prof'>
                                    <Segment basic className='armorProf-segment'>
                                        <Label size='tiny' className='tauri' color='black'>LIGHT</Label>
                                        <Segment.Group horizontal className='armorProf-segment-group'>
                                            <Segment>
                                                <Label size='tiny' attached='top'>T</Label>
                                                <Header>
                                                    -
                                            </Header>
                                            </Segment>
                                            <Segment>
                                                <Label size='tiny' attached='top'>E</Label>
                                                <Header>
                                                    -
                                            </Header>
                                            </Segment>
                                            <Segment>
                                                <Label size='tiny' attached='top'>M</Label>
                                                <Header>
                                                    -
                                            </Header>
                                            </Segment>
                                            <Segment>
                                                <Label size='tiny' attached='top'>L</Label>
                                                <Header>
                                                    -
                                            </Header>
                                            </Segment>
                                        </Segment.Group>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column width={4} className='armorClass-prof'>
                                    <Segment basic className='armorProf-segment'>
                                        <Label size='tiny' className='tauri' color='black'>MEDIUM</Label>
                                        <Segment.Group horizontal className='armorProf-segment-group'>
                                            <Segment>
                                                <Label size='tiny' attached='top'>T</Label>
                                                <Header>
                                                    -
                                        </Header>
                                            </Segment>
                                            <Segment>
                                                <Label size='tiny' attached='top'>E</Label>
                                                <Header>
                                                    -
                                        </Header>
                                            </Segment>
                                            <Segment>
                                                <Label size='tiny' attached='top'>M</Label>
                                                <Header>
                                                    -
                                        </Header>
                                            </Segment>
                                            <Segment>
                                                <Label size='tiny' attached='top'>L</Label>
                                                <Header>
                                                    -
                                        </Header>
                                            </Segment>
                                        </Segment.Group>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column width={4} className='armorClass-prof'>
                                    <Segment basic className='armorProf-segment'>
                                        <Label size='tiny' className='tauri' color='black'>HEAVY</Label>
                                        <Segment.Group horizontal className='armorProf-segment-group'>
                                            <Segment>
                                                <Label size='tiny' attached='top'>T</Label>
                                                <Header>
                                                    -
                                            </Header>
                                            </Segment>
                                            <Segment>
                                                <Label size='tiny' attached='top'>E</Label>
                                                <Header>
                                                    -
                                            </Header>
                                            </Segment>
                                            <Segment>
                                                <Label size='tiny' attached='top'>M</Label>
                                                <Header>
                                                    -
                                            </Header>
                                            </Segment>
                                            <Segment>
                                                <Label size='tiny' attached='top'>L</Label>
                                                <Header>
                                                    -
                                            </Header>
                                            </Segment>
                                        </Segment.Group>
                                    </Segment>
                                </Grid.Column>
                            </Grid>
                        </Segment>
                        <Segment textAlign='center' className='armorClass-calc'>
                            <Grid verticalAlign='middle' stackable columns={5}>
                                <Grid.Column>
                                    <Grid stackable verticalAlign='middle'>
                                        <Grid.Column width={8} className='armorClass-shield-container'>
                                            <Header as='h3' className='tauri'>Shield</Header>
                                        </Grid.Column>
                                        <Grid.Column width={8} className='armorClass-shield-container'>
                                            <Segment className='armorClass-shield' >
                                                <Header as='h3'>+10</Header>
                                            </Segment>
                                        </Grid.Column>
                                    </Grid>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment>
                                        <Label attached='top' >HARDNESS</Label>
                                        <Header>10</Header>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment>
                                        <Label attached='top' >MAX HP</Label>
                                        <Header>10</Header>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment>
                                        <Label attached='top' >BT</Label>
                                        <Header>10</Header>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment>
                                        <Label attached='top' >CURRENT HP</Label>
                                        <Header>10</Header>
                                    </Segment>
                                </Grid.Column>
                            </Grid>
                        </Segment>
                    </Segment.Group>
                </Segment>

            </Segment.Group>
        );
    }
}
