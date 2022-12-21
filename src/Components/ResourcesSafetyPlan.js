import React from 'react'
import './ResourcesSafetyPlan.css'
import ImgAsset from '../public'
import notifications from "./notifications"
export default function ResourcesSafetyPlan () {
	return (
		<div className='ResourcesSafetyPlan_ResourcesSafetyPlan'>
			<img className='Rectangle780' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
			<div className='HomeBar'>
				<div className='Group47393'>
					<div className='background'/>
					<div className='background_1'/>
				</div>
				<div className='ButtonHome'>
					<div className='Home'>
						<img className='Rectangle2' src = {ImgAsset.ResourcesSafetyPlan_Rectangle2} />
					</div>
				</div>
			</div>
			<div className='_3columns'>
				<div className='_3columnnames'>
					<div className='Frame14'>
					</div>
					<div className='Frame13'>
					</div>
					<div className='Frame12'>
						<span className='Feelings'>Step 1: Warning Signs</span>
					</div>
				</div>
				<div className='Textboxesforall3columns'>
					<div className='Rectangle1966'/>
					<span className='Writehere'>Write here...</span>
					<div className='Rectangle1967'/>
					<span className='Writehere_1'>Write here...</span>
					<div className='Rectangle1968'/>
					<span className='Writehere_2'>Write here...</span>
				</div>
				<span className='Feelings_1'>Step 3: People that provide distraction</span>
				<div className='Frame14_1'>
				</div>
				<div className='Rectangle1968_1'/>
				<span className='Writehere_3'>Write here...</span>
				<span className='Feelings_2'>Step 4: People I can ask for help</span>
				<div className='Frame15'>
				</div>
				<div className='Rectangle1969'/>
				<span className='Writehere_4'>Write here...</span>
				<span className='Feelings_3'>Step 5: Professionals + resources to contact in crisis</span>
				<div className='Frame16'>
				</div>
				<div className='Rectangle1970'/>
				<span className='Writehere_5'>Write here...</span>
				<span className='Feelings_4'>Step 6: Making the environment safe</span>
				<span className='Feelings_5'>Step 2: Coping Strategies</span>
			</div>
			<notifications className='notifications'/>
		</div>
	)
}