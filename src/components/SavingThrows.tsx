import React from 'react';
import { Segment, Header, Label, Divider } from 'semantic-ui-react'
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
                            <img alt='armor' src='/armor.png' className='armorClass-background' />
                            <div className='armorClass-value'>
                                <Segment circular className='armorClass-circular'>
                                    <Header as='h2'>
                                        <Header.Subheader>AC</Header.Subheader>
                                        10
                                    </Header>
                                </Segment>
                            </div>
                            <Segment.Group horizontal className='segment-inline'>
                                <Segment>
                                    <Label attached='top'>DC BASE</Label>
                                    <Header>
                                        10
                                </Header>
                                </Segment>
                                <Segment.Group horizontal>
                                    <Segment>
                                        <Label attached='top'>DEX</Label>
                                        <Header>
                                            10
                                    </Header>
                                    </Segment>
                                    <Divider vertical>OR</Divider>
                                    <Segment>
                                        <Label attached='top'>CAP</Label>
                                        <Header>
                                            10
                                    </Header>
                                    </Segment>
                                </Segment.Group>
                                <Segment>
                                    <Label attached='top'>PROF</Label>
                                    <Header>
                                        10
                                </Header>
                                </Segment>
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
                                <Segment>
                                    <Label attached='top'>ITEM</Label>
                                    <Header>
                                        10
                                </Header>
                                </Segment>
                            </Segment.Group>
                        </Segment>
                        <Segment textAlign='center' className='armorClass-calc'>
                            <Segment.Group horizontal className='segment-inline'>
                                <Segment>
                                    <Label className='tauri' color='black'>UNARMORED</Label>
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
                                </Segment>
                                <Segment>
                                    <Label className='tauri' color='black'>LIGHT</Label>
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
                                </Segment>
                                <Segment>
                                    <Label className='tauri' color='black'>MEDIUM</Label>
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
                                </Segment>
                                <Segment>
                                    <Label className='tauri' color='black'>HEAVY</Label>
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
                                </Segment>
                           
                            </Segment.Group>
                        </Segment>
                    </Segment.Group>
                </Segment>

            </Segment.Group>
        );
    }
}
