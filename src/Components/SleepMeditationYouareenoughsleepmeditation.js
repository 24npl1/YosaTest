import React from 'react'
import './SleepMeditationYouareenoughsleepmeditation.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import notifications from "./notifications"
export default function SleepMeditationYouareenoughsleepmeditation () {
	return (
		<div className='SleepMeditationYouareenoughsleepmeditation_SleepMeditationYouareenoughsleepmeditation'>
			<notifications className='notifications'/>
			<div className='Retangle'>
				<img className='Rectangle36' src = {ImgAsset.SleepMeditationYouareenoughsleepmeditation_Rectangle36} />
				<span className='entrydate'>You are enough sleep meditation</span>
				<img className='Rectangle37' src = {ImgAsset.SleepMeditationYouareenoughsleepmeditation_Rectangle37} />
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
						<img className='Rectangle2' src = {ImgAsset.SleepMeditationYouareenoughsleepmeditation_Rectangle2} />
					</div>
				</div>
			</div>
			<img className='Rectangle815' src = {ImgAsset.SleepMeditationYouareenoughsleepmeditation_Rectangle815} />
		</div>
	)
}