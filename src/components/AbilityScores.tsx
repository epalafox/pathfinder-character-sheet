import React from 'react';
import { Grid, Segment, Input, Label } from 'semantic-ui-react'
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
        this._setScore = this._setScore.bind(this)
    }
    _setScore(value: number, score: string) {
        var character = this.state.character
        var abilityScore = character.abilityScores
        if (value < 0) {
            value = 0;
        }
        switch (score) {
            case 'STR':
                abilityScore.strengthScore = value | 0
                break;
            case 'DEX':
                abilityScore.dexterityScore = value | 0
                break;
            case 'CON':
                abilityScore.constitutionScore = value | 0
                break;
            case 'INT':
                abilityScore.intelligenceScore = value | 0
                break;
            case 'WIS':
                abilityScore.wisdomScore = value | 0
                break;
            case 'CHA':
                abilityScore.charismaScore = value | 0
                break;
        }
        character.abilityScores = abilityScore
        this.setState({ character: character })
    }
    render() {
        return (
            <Segment.Group className='abilityScores-segment'>
                <Segment className='taroca' textAlign='center' size='massive' inverted color='blue'>ABILITY SCORES</Segment>
                <Segment>
                    <Grid>
                        <Grid.Row className='score-padding'>
                            <Grid.Column width={8}>
                                <Segment size='big' textAlign='center'>
                                    <Segment className='modifier-padding' basic size='big'>
                                        <p>
                                            {this.state.character.abilityScores.strengthMod}
                                        </p>
                                    </Segment>
                                    <Label attached='bottom' color='orange' className='tauri'>STR</Label>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Segment textAlign='center'>
                                    <Segment className='score-padding' basic size='big'>
                                        <Input
                                            type='number'
                                            minValue='0'
                                            textAlign='center'
                                            fluid
                                            className='no-padding input-center'
                                            onChange={(ev, data) => { this._setScore(parseInt(data.value), 'STR') }}
                                            value={this.state.character.abilityScores.strengthScore} />
                                    </Segment>
                                    <Label attached='bottom' color='orange' className='tauri'>STRENGTH</Label>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className='score-padding'>
                            <Grid.Column width={8}>
                                <Segment size='big' textAlign='center'>
                                    <Segment className='modifier-padding' basic size='big'>
                                        <p>
                                            {this.state.character.abilityScores.dexterityMod}
                                        </p>
                                    </Segment>
                                    <Label attached='bottom' color='orange' className='tauri'>DEX</Label>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Segment textAlign='center'>
                                    <Segment className='score-padding' basic size='big'>
                                        <Input
                                            type='number'
                                            minValue='0'
                                            textAlign='center'
                                            fluid
                                            className='no-padding input-center'
                                            onChange={(ev, data) => { this._setScore(parseInt(data.value), 'DEX') }}
                                            value={this.state.character.abilityScores.dexterityScore} />
                                    </Segment>
                                    <Label attached='bottom' color='orange' className='tauri'>DEXTERITY</Label>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className='score-padding'>
                            <Grid.Column width={8}>
                                <Segment size='big' textAlign='center'>
                                    <Segment className='modifier-padding' basic size='big'>
                                        <p>
                                            {this.state.character.abilityScores.constitutionMod}
                                    </p>
                                    </Segment>
                                    <Label attached='bottom' color='orange' className='tauri'>CON</Label>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Segment textAlign='center'>
                                    <Segment className='score-padding' basic size='big'>
                                        <Input
                                                type='number'
                                                minValue='0'
                                                textAlign='center'
                                                fluid
                                                className='no-padding input-center'
                                                onChange={(ev, data) => { this._setScore(parseInt(data.value), 'CON') }}
                                                value={this.state.character.abilityScores.constitutionScore} />
                                    </Segment>
                                    <Label attached='bottom' color='orange' className='tauri'>CONSTITUTION</Label>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className='score-padding'>
                            <Grid.Column width={8}>
                                <Segment size='big' textAlign='center'>
                                    <Segment className='modifier-padding' basic size='big'>
                                        <p>
                                            {this.state.character.abilityScores.intelligenceMod}
                                    </p>
                                    </Segment>
                                    <Label attached='bottom' color='orange' className='tauri'>INT</Label>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Segment textAlign='center'>
                                    <Segment className='score-padding' basic size='big'>
                                        <Input
                                                type='number'
                                                minValue='0'
                                                textAlign='center'
                                                fluid
                                                className='no-padding input-center'
                                                onChange={(ev, data) => { this._setScore(parseInt(data.value), 'INT') }}
                                                value={this.state.character.abilityScores.intelligenceScore} />
                                    </Segment>
                                    <Label attached='bottom' color='orange' className='tauri'>INTELLIGENCE</Label>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className='score-padding'>
                            <Grid.Column width={8}>
                                <Segment size='big' textAlign='center'>
                                    <Segment className='modifier-padding' basic size='big'>
                                        <p>
                                            {this.state.character.abilityScores.wisdomMod}
                                    </p>
                                    </Segment>
                                    <Label attached='bottom' color='orange' className='tauri'>WIS</Label>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Segment textAlign='center'>
                                    <Segment className='score-padding' basic size='big'>
                                        <Input
                                                type='number'
                                                minValue='0'
                                                textAlign='center'
                                                fluid
                                                className='no-padding input-center'
                                                onChange={(ev, data) => { this._setScore(parseInt(data.value), 'WIS') }}
                                                value={this.state.character.abilityScores.wisdomScore} />
                                    </Segment>
                                    <Label attached='bottom' color='orange' className='tauri'>WISDOM</Label>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className='score-padding'>
                            <Grid.Column width={8}>
                                <Segment size='big' textAlign='center'>
                                    <Segment className='modifier-padding' basic size='big'>
                                        <p>
                                            {this.state.character.abilityScores.charismaMod}
                                        </p>
                                    </Segment>
                                    <Label attached='bottom' color='orange' className='tauri'>CHA</Label>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Segment textAlign='center'>
                                    <Segment className='score-padding' basic size='big'>
                                        <Input
                                                type='number'
                                                minValue='0'
                                                textAlign='center'
                                                fluid
                                                className='no-padding input-center'
                                                onChange={(ev, data) => { this._setScore(parseInt(data.value), 'CHA') }}
                                                value={this.state.character.abilityScores.charismaScore} />
                                    </Segment>
                                    <Label attached='bottom' color='orange' className='tauri'>CHARISMA</Label>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Segment.Group>
        );
    }
}
