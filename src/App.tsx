import React from 'react';
import {Grid, Segment, Image, Input, Label, Form} from 'semantic-ui-react'
import AbilityScores from './components/AbilityScores'
import ArmorClass from './components/ArmorClass'
import SavingThrows from './components/SavingThrows'
import HitPoints from './components/HitPoints'
import ClassDC from './components/ClassDC'

function App() {
  return (
	<Segment className='App'>
		<Form>
			<Grid className='app-grid' stackable>
				<Grid.Row className = 'app-grid-header'>
					<Grid.Column width={2}>
						<Image src='2E-Logo.png' />
					</Grid.Column>
					<Grid.Column width={6}>
						<Segment basic>
							<Input className='no-radius-field' label={<Label color='black' attached='top' className='tauri'>Character Name</Label>} fluid size='small' />
							<Input className='no-radius-field' label={<Label color='black' attached='top' className='tauri'>Player Name</Label>} fluid  size='small' />
							<Input className='no-radius-field' label={<Label color='black' attached='top' className='tauri'>Experience Points (XP)</Label>} fluid  size='small' />
							<Input className='no-radius-field' label={<Label color='black' attached='top' className='tauri'>Ancestry and Heritage</Label>} fluid  size='small' />
							<Input className='no-radius-field' label={<Label color='black' attached='top' className='tauri'>Background</Label>} fluid size='small' />
						</Segment>
					</Grid.Column>
					<Grid.Column width={4}>
						<Segment basic>
							<Input className='no-radius-field' label={<Label attached='top' color='black' className='tauri'>Class</Label>} fluid size='small' />
							<Input className='no-radius-field' label={<Label attached='top' color='black' className='tauri'>Size</Label>} fluid size='small'/>
							<Input className='no-radius-field' label={<Label attached='top' color='black' className='tauri'>Alignment</Label>} fluid size='small' />
							<Input className='no-radius-field' label={<Label attached='top' color='black' className='tauri'>Traits</Label>} fluid size='small' />
							<Input className='no-radius-field' label={<Label attached='top' color='black' className='tauri'>Deity</Label>} fluid size='small' />
						</Segment>
					</Grid.Column>
					<Grid.Column width={4}>
						<Segment basic>
							<Input className='no-radius-field' label={<Label color='black' attached='top' className='tauri'>Level</Label>} fluid />
						</Segment>
						<Segment basic>
							<Input className='no-radius-field' label={<Label color='black' attached='top' className='tauri'>Hero Points</Label>} fluid />
						</Segment>
					</Grid.Column>		
				</Grid.Row>
				<Grid.Column width={5}>
					<AbilityScores />
					<ClassDC />
				</Grid.Column>
				<Grid.Column width={8}>
					<ArmorClass />
					<SavingThrows />
				</Grid.Column>
				<Grid.Column width={3}>
					<HitPoints />
				</Grid.Column>
				<Grid.Column width={8}>
				</Grid.Column>
				<Grid.Column width={4}>
				</Grid.Column>
			</Grid>
		</Form>
	</Segment>
  );
}

export default App;
