import React from 'react';
import PlayerCharacterModel from '../../models/PlayerCharacter'
import AbilityScoresModel from '../../models/AbilityScores'
import SectionTitle from '../../components/SectionTitle'
import BiseledField from '../../components/BiseledField'
import '../../styles/BasicScores.scss'
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
			<div className='basic-scores__ability-scores'>
				<SectionTitle text='Ability Scores' />
				<div className='ability-scores__container'>
					<div className='ability-scores__container--row'>
						<BiseledField text={this.state.character.abilityScores.strengthMod} />
						<div className='ability-scores__row--modifier'>
							<h2>STR</h2>
							<h5>MODIFIER</h5>
						</div>
						<div className='ability-scores__row--score'>
							<h2>STRENGTH</h2>
							<h5>SCORE</h5>
						</div>
						<input
							type='number'
							onChange={(ev) => { this._setScore(parseInt(ev.target.value), 'STR') }}
							value={this.state.character.abilityScores.strengthScore} />
					</div>
					<div className='ability-scores__container--row'>
						<BiseledField text={this.state.character.abilityScores.dexterityMod} />
						<div className='ability-scores__row--modifier'>
							<h2>DEX</h2>
							<h5>MODIFIER</h5>
						</div>
						<div className='ability-scores__row--score'>
							<h2>DEXTERITY</h2>
							<h5>SCORE</h5>
						</div>
						<input
							type='number'
							onChange={(ev) => { this._setScore(parseInt(ev.target.value), 'DEX') }}
							value={this.state.character.abilityScores.dexterityScore} />
					</div>
					<div className='ability-scores__container--row'>
						<BiseledField text={this.state.character.abilityScores.constitutionMod} />
						<div className='ability-scores__row--modifier'>
							<h2>CON</h2>
							<h5>MODIFIER</h5>
						</div>
						<div className='ability-scores__row--score'>
							<h2>CONSTITUTION</h2>
							<h5>SCORE</h5>
						</div>
						<input
							type='number'
							onChange={(ev) => { this._setScore(parseInt(ev.target.value), 'CON') }}
							value={this.state.character.abilityScores.constitutionScore} />
					</div>
					<div className='ability-scores__container--row'>
						<BiseledField text={this.state.character.abilityScores.intelligenceMod} />
						<div className='ability-scores__row--modifier'>
							<h2>INT</h2>
							<h5>MODIFIER</h5>
						</div>
						<div className='ability-scores__row--score'>
							<h2>INTELLIGENCE</h2>
							<h5>SCORE</h5>
						</div>
						<input
							type='number'
							onChange={(ev) => { this._setScore(parseInt(ev.target.value), 'INT') }}
							value={this.state.character.abilityScores.intelligenceScore} />
					</div>
					<div className='ability-scores__container--row'>
						<BiseledField text={this.state.character.abilityScores.wisdomMod} />
						<div className='ability-scores__row--modifier'>
							<h2>WIS</h2>
							<h5>MODIFIER</h5>
						</div>
						<div className='ability-scores__row--score'>
							<h2>WISDOM</h2>
							<h5>SCORE</h5>
						</div>
						<input
							type='number'
							onChange={(ev) => { this._setScore(parseInt(ev.target.value), 'WIS') }}
							value={this.state.character.abilityScores.wisdomScore} />
					</div>
					<div className='ability-scores__container--row'>
						<BiseledField text={this.state.character.abilityScores.charismaMod} />
						<div className='ability-scores__row--modifier'>
							<h2>CHA</h2>
							<h5>MODIFIER</h5>
						</div>
						<div className='ability-scores__row--score'>
							<h2>CHARISMA</h2>
							<h5>SCORE</h5>
						</div>
						<input
							type='number'
							onChange={(ev) => { this._setScore(parseInt(ev.target.value), 'CHA') }}
							value={this.state.character.abilityScores.charismaScore} />
					</div>
				</div>
			</div>
		);
	}
}
