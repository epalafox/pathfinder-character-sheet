import React from 'react';
import Reference from './Reference'
import CharacterBasics from './CharacterBasics'
import CharacterDetails from './CharacterDetails'
import CharacterLevel from './CharacterLevel'
import CharacterHeroPoints from './CharacterHeroPoints'
import '../../styles/Header.scss'
interface IProps {
    
}
interface IState {
    
}
class Header extends React.Component<IProps, IState>{
    render() {
        return (
            <section className='header'>
                <Reference />
                <CharacterBasics />
                <CharacterDetails />
                <CharacterLevel />
                <CharacterHeroPoints />
            </section>
        );
    }
}
export default Header;