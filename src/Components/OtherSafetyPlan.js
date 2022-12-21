import React from 'react'
import './OtherSafetyPlan.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function OtherSafetyPlan () {
	return (
		<div className='OtherSafetyPlan_OtherSafetyPlan'>
			<img className='Rectangle780' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
			<Link to='/homepagefirstversion_3'>
				<div className='HomeBar'>
					<div className='Group47393'>
						<div className='background'/>
						<div className='background_1'/>
					</div>
					<div className='ButtonHome'>
						<div className='Home'>
							<img className='Rectangle2' src = {ImgAsset.OtherSafetyPlan_Rectangle2} />
						</div>
					</div>
				</div>
			</Link>
			<div className='Frame20'>
				<div className='Rectangle1967'/>
				<div className='Rectangle1969'/>
				<div className='Rectangle1968'/>
				<div className='Frame15'>
					<span className='Thoughts'>Step 2: Coping Strategies</span>
				</div>
				<div className='Frame15_1'>
					<span className='Feelings'>Step 3: People That Provide Distraction</span>
				</div>
				<div className='Frame15_2'>
					<span className='Step1WarningSigns'>Step 1: Warning Signs</span>
				</div>
				<div className='Rectangle1970'/>
				<div className='Rectangle1971'/>
				<div className='Rectangle1972'/>
				<div className='Frame16'>
					<span className='Thoughts_1'>Step 5: Professionals + Resources To Contact in Crisis</span>
				</div>
				<div className='Frame17'>
					<span className='Feelings_1'>Step 6: Making the Environment Safe</span>
				</div>
				<div className='Frame18'>
					<span className='Step4PeopleICanAskForHelp'>Step 4: People I Can Ask For Help</span>
				</div>
			</div>
			<img className='Arrow1' src = {ImgAsset.OtherSafetyPlan_Arrow1} />
		</div>
	)
}