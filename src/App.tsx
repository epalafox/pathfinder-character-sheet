import React from 'react';
import {Grid, Segment, Image, Input, Label, Form} from 'semantic-ui-react'
import AbilityScores from './components/AbilityScores'
import ArmorClass from './components/ArmorClass'

function App() {
  return (
	<Segment className='App'>
		<Form>
			<Grid className='app-grid' stackable>
				<Grid.Row className = 'app-grid-header'>
					<Grid.Column width={4}>
						<Image src='2E-Logo.png' />
					</Grid.Column>
					<Grid.Column width={5}>
						<Segment basic>
							<Input className='no-radius-field' label={<Label color='black' className='tauri'>Character Name</Label>} fluid size='large' />
							<Input className='no-radius-field' label={<Label color='black' className='tauri'>Player Name</Label>} fluid  size='small' />
							<Input className='no-radius-field' label={<Label color='black' className='tauri'>Experience Points (XP)</Label>} fluid  size='small' />
							<Input className='no-radius-field' label={<Label color='black' className='tauri'>Ancestry and Heritage</Label>} fluid  size='small' />
							<Input className='no-radius-field' label={<Label color='black' className='tauri'>Background</Label>} fluid size='small' />
						</Segment>
					</Grid.Column>
					<Grid.Column width={4}>
						<Segment basic>
							<Input className='no-radius-field' label={<Label  color='black' className='tauri'>Class</Label>} fluid size='small' />
							<Input className='no-radius-field' label={<Label  color='black' className='tauri'>Size</Label>} fluid size='small'/>
							<Input className='no-radius-field' label={<Label  color='black' className='tauri'>Alignment</Label>} fluid size='small' />
							<Input className='no-radius-field' label={<Label  color='black' className='tauri'>Traits</Label>} fluid size='small' />
							<Input className='no-radius-field' label={<Label  color='black' className='tauri'>Deity</Label>} fluid size='small' />
						</Segment>
					</Grid.Column>
					<Grid.Column width={3}>
						<Segment basic>
							<Input className='no-radius-field' label={<Label color='black' attached='top' className='tauri'>Level</Label>} fluid />
						</Segment>
						<Segment basic>
							<Input className='no-radius-field' label={<Label color='black' attached='top' className='tauri'>Hero Points</Label>} fluid />
						</Segment>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column width={4}>
						<AbilityScores />
					</Grid.Column>
					<Grid.Column width={9}>
						<ArmorClass />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Form>
	</Segment>
  );
}

export default App;
