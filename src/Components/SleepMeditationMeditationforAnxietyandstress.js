import React from 'react'
import './SleepMeditationMeditationforAnxietyandstress.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import notifications from "./notifications"
export default function SleepMeditationMeditationforAnxietyandstress () {
	return (
		<div className='SleepMeditationMeditationforAnxietyandstress_SleepMeditationMeditationforAnxietyandstress'>
			<notifications className='notifications'/>
			<div className='Retangle'>
				<img className='Rectangle36' src = {ImgAsset.SleepMeditationMeditationforAnxietyandstress_Rectangle36} />
				<span className='entrydate'>Meditation for Anxiety and stress</span>
				<img className='Rectangle37' src = {ImgAsset.SleepMeditationMeditationforAnxietyandstress_Rectangle37} />
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
						<img className='Rectangle2' src = {ImgAsset.SleepMeditationMeditationforAnxietyandstress_Rectangle2} />
					</div>
				</div>
			</div>
			<img className='Rectangle814' src = {ImgAsset.SleepMeditationMeditationforAnxietyandstress_Rectangle814} />
		</div>
	)
}