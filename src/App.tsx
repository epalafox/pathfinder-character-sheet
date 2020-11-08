import React from 'react';
import {Grid, Segment, Image, Input, Label, Form} from 'semantic-ui-react'

function App() {
  return (
    <div>
		<Segment>
			<Form>
				<Grid>
					<Grid.Row>
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
								<Input className='no-radius-field' label={<Label color='black' className='tauri'>Level</Label>} fluid size='massive' />
							</Segment>
							<Segment basic>
								<Input className='no-radius-field' label={<Label color='black' className='tauri'>Hero Points</Label>} fluid size='massive' />
							</Segment>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column width={4}>
							<Segment.Group>
								<Segment className='taroca' textAlign='center' size='massive' inverted color='blue'>ABILITY SCORES</Segment>
								<Segment>
									<Grid>
										<Grid.Row className='score-padding'>
											<Grid.Column width={8}>
												<Segment size='big' textAlign='center'>
													<Segment className='modifier-padding' basic size='big'>
														<p>
															10
														</p>
													</Segment>
												<Label attached='bottom' color='orange' className='tauri'>STR</Label>
												</Segment>
											</Grid.Column>
											<Grid.Column width={8}>
												<Segment textAlign='center'>
													<Segment className='score-padding' basic size='big'>
														<Input textAlign='center' fluid className='no-padding input-center' />
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
															10
														</p>
													</Segment>
												<Label attached='bottom' color='orange' className='tauri'>DEX</Label>
												</Segment>
											</Grid.Column>
											<Grid.Column width={8}>
												<Segment textAlign='center'>
													<Segment className='score-padding' basic size='big'>
														<Input textAlign='center' fluid className='no-padding input-center' />
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
															10
														</p>
													</Segment>
												<Label attached='bottom' color='orange' className='tauri'>CON</Label>
												</Segment>
											</Grid.Column>
											<Grid.Column width={8}>
												<Segment textAlign='center'>
													<Segment className='score-padding' basic size='big'>
														<Input textAlign='center' fluid className='no-padding input-center' />
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
															10
														</p>
													</Segment>
												<Label attached='bottom' color='orange' className='tauri'>INT</Label>
												</Segment>
											</Grid.Column>
											<Grid.Column width={8}>
												<Segment textAlign='center'>
													<Segment className='score-padding' basic size='big'>
														<Input textAlign='center' fluid className='no-padding input-center' />
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
															10
														</p>
													</Segment>
												<Label attached='bottom' color='orange' className='tauri'>WIS</Label>
												</Segment>
											</Grid.Column>
											<Grid.Column width={8}>
												<Segment textAlign='center'>
													<Segment className='score-padding' basic size='big'>
														<Input textAlign='center' fluid className='no-padding input-center' />
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
															10
														</p>
													</Segment>
												<Label attached='bottom' color='orange' className='tauri'>CHA</Label>
												</Segment>
											</Grid.Column>
											<Grid.Column width={8}>
												<Segment textAlign='center'>
													<Segment className='score-padding' basic size='big'>
														<Input textAlign='center' fluid className='no-padding input-center' />
													</Segment>
												<Label attached='bottom' color='orange' className='tauri'>CHARISMA</Label>
												</Segment>
											</Grid.Column>
										</Grid.Row>
									</Grid>
								</Segment>
							</Segment.Group>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Form>
		</Segment>
    </div>
  );
}

export default App;
