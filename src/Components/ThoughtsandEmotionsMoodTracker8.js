import React from 'react'
import './ThoughtsandEmotionsMoodTracker8.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import TypeNeutralStatusOn from "./TypeNeutralStatusOn"
import HeadYellow from "./HeadYellow"
import MouthPlain from "./MouthPlain"
import EyesPlain from "./EyesPlain"
import notifications from "./notifications"
export default function ThoughtsandEmotionsMoodTracker8 () {
	return (
		<div className='ThoughtsandEmotionsMoodTracker8_ThoughtsandEmotionsMoodTracker8'>
			<TypeNeutralStatusOn className='Slider'/>
			<span className='Imokay'>I’m okay</span>
			<span className='Howareyoufeelingtoday'>How are you feeling today?</span>
			<div className='Emoji1'>
				<HeadYellow className='HeadYellow'/>
				<div className='BlushCheeks'>
					<img className='L' src = {ImgAsset.ThoughtsandEmotionsMoodTracker8_L} />
				</div>
				<div className='SweatDrop'>
					<img className='SweatDrop_1' src = {ImgAsset.ThoughtsandEmotionsMoodTracker8_SweatDrop_1} />
				</div>
				<MouthPlain className='MouthPlain'/>
				<EyesPlain className='EyesPlain'/>
				<div className='Halo'>
					<img className='Vector' src = {ImgAsset.ThoughtsandEmotionsMoodTracker8_Vector} />
					<img className='Vector_1' src = {ImgAsset.ThoughtsandEmotionsMoodTracker8_Vector_1} />
				</div>
			</div>
			<notifications className='notifications'/>
			<div className='Rectangle1942'/>
			<span className='SUBMIT'>SUBMIT</span>
			<div className='HomeBar'>
				<div className='Group47397'>
					<div className='background'/>
					<div className='background_1'/>
				</div>
				<div className='ButtonHome'>
					<div className='Home'>
						<img className='Rectangle2' src = {ImgAsset.ThoughtsandEmotionsMoodTracker8_Rectangle2} />
					</div>
				</div>
			</div>
		</div>
	)
}