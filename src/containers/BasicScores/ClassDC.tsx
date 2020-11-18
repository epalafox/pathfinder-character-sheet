import React from 'react';
import PlayerCharacterModel from '../../models/PlayerCharacter'
import AbilityScoresModel from '../../models/AbilityScores'
import Proficency from '../../components/Proficency'
import SectionTitle from '../../components/SectionTitle'
import BiseledField from '../../components/BiseledField';
import LabeledInput from '../../components/LabeledInput';
import BaseDC from '../../components/BaseDC';


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
						<BaseDC />
						<LabeledInput label='KEY' value='10' />
						<LabeledInput label='PROF' value='10' />
						<Proficency proficency='U' />
						<LabeledInput label='ITEM' value='10' />
					</div>
				</div>
            </div>
        );
    }
}
