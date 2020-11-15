import React from 'react';
import PlayerCharacterModel from '../../models/PlayerCharacter'
import AbilityScoresModel from '../../models/AbilityScores'
import Proficency from '../../components/Proficency'
import SectionTitle from '../../components/SectionTitle'
import BiseledField from '../../components/BiseledField';
import '../../styles/BasicScores.scss'
import LabeledInput from '../../components/LabeledInput';

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
            <div className='basic-scores__class-dc'>
				<SectionTitle text='Class DC' />
				<div className='class-dc__container'>
					<div className='class-dc__row'>
						<BiseledField text='10' />
						<div className='class-dc__row--base'>
							<h1 className='class-dc__base--equals'>=</h1>
							<h5 className='class-dc__base--h'>DC BASE</h5>
							<h1 className='class-dc__base--h'>10</h1>
						</div>
						<LabeledInput label='KEY' value='10' />
						<LabeledInput label='PROF' value='10' />
						<Proficency proficency='T' />
						<LabeledInput label='ITEM' value='10' />
					</div>
				</div>
            </div>
        );
    }
}
