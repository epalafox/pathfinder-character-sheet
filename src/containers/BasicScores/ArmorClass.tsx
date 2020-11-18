import React from 'react';
import PlayerCharacterModel from '../../models/PlayerCharacter'
import AbilityScoresModel from '../../models/AbilityScores'
import Proficency from '../../components/Proficency';
import GeneralProficency from '../../components/GeneralProficency';
import SectionTitle from '../../components/SectionTitle';
import BaseDC from '../../components/BaseDC';
import LabeledField from '../../components/LabeledField';
import LabeledInput from '../../components/LabeledInput';

import armorImage from '../../img/armor.png'

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
            <div className='basic-scores__armor-class'>
                <img src={armorImage} className='armor-class__image' alt='Armor Image' />
                <div className='armor-class__value'>
                    <h2>AC</h2>
                    <h1>10</h1>
                </div>
                <SectionTitle text='Armor Class' />
                <div className='armor-class__container'>
                    <div className='armor-class__dc'>
                        <BaseDC />
                        <div className='or-labeled'>
                            <div className='or-labeled__left'>
				                <label className='labeled__label'>DEX</label>
                				<div className='labeled__value'>
                					<h2 className='labeled__field'>10</h2>
                				</div>
                            </div>
                            <div className='or-labeled__center'>
                                <div className='or-labeled__center--text'>
                                    <h5>OR</h5>
                                </div>
                            </div>
                            <div className='or-labeled__right'>
				                <label className='labeled__label'>CAP</label>
                				<div className='labeled__value'>
					                <input type='number' value='10' className='labeled__input' />
                				</div>
                            </div>
                        </div>
                        <LabeledField label='PROF' value='10' />
                        <Proficency proficency='U' />
                        <LabeledInput label='ITEM' value='10' />
                    </div>
                    <div className='armor-class__proficencies'>
                        <GeneralProficency label='UNARMORED' proficency='U' />
                        <GeneralProficency label='LIGHT' proficency='U' />
                        <GeneralProficency label='MEDIUM' proficency='U' />
                        <GeneralProficency label='HEAVY' proficency='U' />
                    </div>
                    <div></div>
                    <div className='armor-class__shield'>
                        <h3 className='armor-class__shield--h3'>Shield</h3>
                        <div>
                            <h1>+</h1>
                        </div>
                        <LabeledInput label='HARDNESS' value='10' />
                        <LabeledInput label='MAX HP' value='10' />
                        <LabeledInput label='BT' value='10' />
                        <LabeledInput label='CURRENT HP' value='10' />
                    </div>
                </div>
            </div>
        );
    }
}
