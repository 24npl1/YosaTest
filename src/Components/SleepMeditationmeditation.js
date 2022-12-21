import React from 'react'
import './SleepMeditationmeditation.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import notifications from "./notifications"
export default function SleepMeditationmeditation () {
	return (
		<div className='SleepMeditationmeditation_SleepMeditationmeditation'>
			<notifications className='notifications'/>
			<img className='Rectangle780' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
			<img className='Rectangle777' src = {ImgAsset.SleepMeditationmeditation_Rectangle777} />
			<Link to='/sleepmeditationmeditationhealingbodyscanforsleep'>
				<div className='Rectangle777_1'/>
			</Link>
			<img className='Rectangle783' src = {ImgAsset.SleepMeditationmeditation_Rectangle783} />
			<div className='Rectangle784'/>
			<img className='Rectangle785' src = {ImgAsset.SleepMeditationmeditation_Rectangle785} />
			<div className='Rectangle786'/>
			<img className='Rectangle797' src = {ImgAsset.SleepMeditationmeditation_Rectangle797} />
			<div className='Rectangle798'/>
			<img className='Rectangle809' src = {ImgAsset.SleepMeditationmeditation_Rectangle809} />
			<div className='Rectangle810'/>
			<img className='Rectangle811' src = {ImgAsset.SleepMeditationmeditation_Rectangle811} />
			<div className='Rectangle812'/>
			<div className='HomeBar'>
				<div className='Group47404'>
					<div className='background'/>
					<div className='background_1'/>
				</div>
				<div className='ButtonHome'>
					<div className='Home'>
						<img className='Rectangle2' src = {ImgAsset.SleepMeditationmeditation_Rectangle2} />
					</div>
				</div>
			</div>
			<Link to='/sleepmeditationmeditationhealingbodyscanforsleep'>
				<span className='HealingBodyScanForSleep'>Healing Body Scan For Sleep</span>
			</Link>
			<Link to='/sleepmeditationmeditationforanxietyandstress'>
				<span className='MeditationforAnxietyandstress'>Meditation for Anxiety and stress</span>
			</Link>
			<Link to='/sleepmeditationmeditationhealingbodyscanforsleep_1'>
				<span className='Deepsleepmeditationforemergencies'>Deep sleep meditation for emergencies</span>
			</Link>
			<Link to='/sleepmeditationyouareenoughsleepmeditation'>
				<span className='Youareenoughsleepmeditation'>You are enough sleep meditation</span>
			</Link>
			<Link to='/sleepmeditationmeditationhealingbodyscanforsleep_2'>
				<span className='ReleaseWorryMeditation'>Release Worry Meditation</span>
			</Link>
			<Link to='/sleepmeditationmeditationhealingbodyscanforsleep_3'>
				<span className='MeditationforForgiveness'>Meditation for Forgiveness</span>
			</Link>
		</div>
	)
}