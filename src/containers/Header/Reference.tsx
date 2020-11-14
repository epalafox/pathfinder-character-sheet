import React from 'react';
import logo from '../../img/pf-logo.png'
import oneAction from '../../img/OneAction.png'
import twoActions from '../../img/TwoActions.png'
import threeActions from '../../img/ThreeActions.png'
import freeAction from '../../img/FreeAction.png'
import reaction from '../../img/Reaction.png'
interface IProps {
    
}
interface IState {
    
}
class Reference extends React.Component<IProps, IState>{
    render() {
        return (
            <div className="reference">
                <div className='reference__image-div'>
                    <img className='reference__image-div--image' src={logo} />
                </div>
                <h1 className='reference--h1'>Character Sheet</h1>
                <div className='reference__proficencies'>
                    <h4>PROFICENCY</h4>
                    <p>Untrained +0</p>
                    <p>Trained 2+Level</p>
                    <p>Expert 4+Level</p>
                    <p>Master 6+Level</p>
                    <p>Legendary 8+Level</p>
                </div>
                <div className='reference__actions'>
                    <table>
                        <tr>
                            <td><img className='reference__actions--icon' src={oneAction} /></td>
                            <td className='reference__actions--text'>Single Action</td>
                        </tr>
                        <tr>
                            <td><img className='reference__actions--icon' src={twoActions} /></td>
                            <td className='reference__actions--text'>Two-Action Activity</td>
                        </tr>
                        <tr>
                            <td><img className='reference__actions--icon' src={threeActions} /></td>
                            <td className='reference__actions--text'>Three-Action Activity</td>
                        </tr>
                        <tr>
                            <td><img className='reference__actions--icon' src={freeAction} /></td>
                            <td className='reference__actions--text'>Free Action</td>
                        </tr>
                        <tr>
                            <td><img className='reference__actions--icon' src={reaction} /></td>
                            <td className='reference__actions--text'>Reaction</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}
export default Reference;