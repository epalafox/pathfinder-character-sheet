import React from 'react';
import { Grid, Segment, Image, Input, Label, Form } from 'semantic-ui-react'
import AbilityScoreModel from '../models/AbilityScores'

interface IProps {
}
interface IState {
    abilityScore: AbilityScoreModel
}

export default class AbilityScore extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            abilityScore: new AbilityScoreModel()
        }
        this._setScore = this._setScore.bind(this)
    }
    _setScore(value: number, score: string) {
        var abilityScore = this.state.abilityScore
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
        this.setState({ abilityScore: abilityScore })
    }
    render() {
        return (
            <Segment.Group>
                <Segment className='taroca' textAlign='center' size='massive' inverted color='blue'>ABILITY SCORES</Segment>
                <Segment>
                    <Grid>
                        <Grid.Row className='score-padding'>
                            <Grid.Column width={8}>
                                <Segment size='big' textAlign='center'>
                                    <Segment className='modifier-padding' basic size='big'>
                                        <p>
                                            {this.state.abilityScore.strengthMod}
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
                                            value={this.state.abilityScore.strengthScore} />
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
                                            {this.state.abilityScore.dexterityMod}
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
                                            value={this.state.abilityScore.dexterityScore} />
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
                                            {this.state.abilityScore.constitutionMod}
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
                                                value={this.state.abilityScore.constitutionScore} />
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
                                            {this.state.abilityScore.intelligenceMod}
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
                                                value={this.state.abilityScore.intelligenceScore} />
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
                                            {this.state.abilityScore.wisdomMod}
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
                                                value={this.state.abilityScore.wisdomScore} />
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
                                            {this.state.abilityScore.charismaMod}
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
                                                value={this.state.abilityScore.charismaScore} />
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
