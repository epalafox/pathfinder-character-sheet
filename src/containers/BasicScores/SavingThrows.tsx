import React from 'react';
import BiseledField from '../../components/BiseledField';
import FloatingLabelField from '../../components/FloatingLabelField';
import LabeledField from '../../components/LabeledField';
import Proficency from '../../components/Proficency';
import SectionTitle from '../../components/SectionTitle';

import '../../styles/containers/SavingThrows.scss'

interface IProps {
}
interface IState {
}

export default class SavingThrows extends React.Component<IProps, IState>{
    render() {
        return (
            <div className='basic-scores__saving-throws'>
                <SectionTitle text='Saving Throws' />
                <div className='saving-throws__container'>
                    <div className='saving-throws__column'>
                        <div className='saving-throws__title'>
                            <h1>Fortitude</h1>
                        </div>
                        <div className='saving-throws__score'>
						    <BiseledField text='10' />
                        </div>
                        <LabeledField label='CON' value='10' />
                        <LabeledField label='PROF' value='10' />
                        <LabeledField label='ITEM' value='10' />
                        <Proficency proficency='U' />
                    </div>
                    <div className='saving-throws__column'>
                        <div className='saving-throws__title'>
                            <h1>Reflex</h1>
                        </div>
                        <div className='saving-throws__score'>
						    <BiseledField text='10' />
                        </div>
                        <LabeledField label='CON' value='10' />
                        <LabeledField label='PROF' value='10' />
                        <LabeledField label='ITEM' value='10' />
                        <Proficency proficency='U' />
                    </div>
                    <div className='saving-throws__column'>
                        <div className='saving-throws__title'>
                            <h1>Will</h1>
                        </div>
                        <div className='saving-throws__score'>
						    <BiseledField text='10' />
                        </div>
                        <LabeledField label='CON' value='10' />
                        <LabeledField label='PROF' value='10' />
                        <LabeledField label='ITEM' value='10' />
                        <Proficency proficency='U' />
                    </div>
                    <div className='saving-throws__notes'>
                        <FloatingLabelField label='NOTES' />
                    </div>
                </div>
            </div>
        );
    }
}
