import React from 'react'
import './SleepMeditationmeditationhealingbodyscanforsleep.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import notifications from "./notifications"
export default function SleepMeditationmeditationhealingbodyscanforsleep () {
	return (
		<div className='SleepMeditationmeditationhealingbodyscanforsleep_SleepMeditationmeditationhealingbodyscanforsleep'>
			<notifications className='notifications'/>
			<div className='Retangle'>
				<img className='Rectangle36' src = {ImgAsset.SleepMeditationmeditationhealingbodyscanforsleep_Rectangle36} />
				<span className='entrydate'>Healing Body Scan For Sleep</span>
				<img className='Rectangle37' src = {ImgAsset.SleepMeditationmeditationhealingbodyscanforsleep_Rectangle37} />
				<span className='ClickHereforYoutube'>Click Here for Youtube</span>
				<span className='ClickHereforSpotify'>Click Here for Spotify</span>
			</div>
			<img className='Rectangle780' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
			<Link to='/sleepmeditationmeditation'>
				<div className='ButtonExploreActive'>
					<div className='Group7'>
						<div className='Frame5'>
							<span className='Back'>Back</span>
						</div>
					</div>
				</div>
			</Link>
			<div className='HomeBar'>
				<div className='Group47402'>
					<div className='background'/>
					<div className='background_1'/>
				</div>
				<div className='ButtonHome'>
					<div className='Home'>
						<img className='Rectangle2' src = {ImgAsset.SleepMeditationmeditationhealingbodyscanforsleep_Rectangle2} />
					</div>
				</div>
			</div>
			<img className='Rectangle813' src = {ImgAsset.SleepMeditationmeditationhealingbodyscanforsleep_Rectangle813} />
		</div>
	)
}