import React from 'react'
import './ThoughtsandEmotionsMoodTracker7.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import TypeBadStatusOn from "./TypeBadStatusOn"
import HeadYellow from "./HeadYellow"
import MouthSad from "./MouthSad"
import EyesPlain from "./EyesPlain"
import notifications from "./notifications"
export default function ThoughtsandEmotionsMoodTracker7 () {
	return (
		<div className='ThoughtsandEmotionsMoodTracker7_ThoughtsandEmotionsMoodTracker7'>
			<TypeBadStatusOn className='Slider'/>
			<span className='notgreat'>not great</span>
			<span className='Howareyoufeelingtoday'>How are you feeling today?</span>
			<div className='Emoji5'>
				<HeadYellow className='HeadYellow'/>
				<div className='BlushCheeks'>
					<img className='L' src = {ImgAsset.ThoughtsandEmotionsMoodTracker7_L} />
				</div>
				<div className='SweatDrop'>
					<img className='SweatDrop_1' src = {ImgAsset.ThoughtsandEmotionsMoodTracker7_SweatDrop_1} />
				</div>
				<MouthSad className='MouthSad'/>
				<EyesPlain className='EyesPlain'/>
				<div className='Halo'>
					<img className='Vector' src = {ImgAsset.ThoughtsandEmotionsMoodTracker7_Vector} />
					<img className='Vector_1' src = {ImgAsset.ThoughtsandEmotionsMoodTracker7_Vector_1} />
				</div>
			</div>
			<notifications className='notifications'/>
			<div className='Rectangle1942'/>
			<span className='SUBMIT'>SUBMIT</span>
			<div className='HomeBar'>
				<div className='Group47396'>
					<div className='background'/>
					<div className='background_1'/>
				</div>
				<div className='ButtonHome'>
					<div className='Home'>
						<img className='Rectangle2' src = {ImgAsset.ThoughtsandEmotionsMoodTracker7_Rectangle2} />
					</div>
				</div>
			</div>
		</div>
	)
}