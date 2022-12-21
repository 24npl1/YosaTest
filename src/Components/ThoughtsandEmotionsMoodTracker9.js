import React from 'react'
import './ThoughtsandEmotionsMoodTracker9.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import TypeGoodStatusOn from "./TypeGoodStatusOn"
import HeadPurple from "./HeadPurple"
import MouthWideSmile from "./MouthWideSmile"
import EyesCute from "./EyesCute"
import notifications from "./notifications"
export default function ThoughtsandEmotionsMoodTracker9 () {
	return (
		<div className='ThoughtsandEmotionsMoodTracker9_ThoughtsandEmotionsMoodTracker9'>
			<TypeGoodStatusOn className='Slider'/>
			<span className='Ifeelgood'>I feel good!</span>
			<span className='Howareyoufeelingtoday'>How are you feeling today?</span>
			<div className='Emoji2'>
				<HeadPurple className='HeadPurple'/>
				<div className='BlushCheeks'>
					<img className='L' src = {ImgAsset.ThoughtsandEmotionsMoodTracker9_L} />
				</div>
				<div className='SweatDrop'>
					<img className='SweatDrop_1' src = {ImgAsset.ThoughtsandEmotionsMoodTracker9_SweatDrop_1} />
				</div>
				<MouthWideSmile className='MouthWideSmile'/>
				<EyesCute className='EyesCute'/>
				<div className='Halo'>
					<img className='Vector' src = {ImgAsset.ThoughtsandEmotionsMoodTracker9_Vector} />
					<img className='Vector_1' src = {ImgAsset.ThoughtsandEmotionsMoodTracker9_Vector_1} />
				</div>
			</div>
			<notifications className='notifications'/>
			<div className='Rectangle1943'/>
			<span className='SUBMIT'>SUBMIT</span>
			<div className='HomeBar'>
				<div className='Group47398'>
					<div className='background'/>
					<div className='background_1'/>
				</div>
				<div className='ButtonHome'>
					<div className='Home'>
						<img className='Rectangle2' src = {ImgAsset.ThoughtsandEmotionsMoodTracker9_Rectangle2} />
					</div>
				</div>
			</div>
		</div>
	)
}