import React from 'react'
import './ThoughtsandEmotionsMoodTracker10.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import TypeVeryGoodStatusOn from "./TypeVeryGoodStatusOn"
import HeadCream from "./HeadCream"
import MouthLilSmile from "./MouthLilSmile"
import EyesClosed from "./EyesClosed"
import notifications from "./notifications"
export default function ThoughtsandEmotionsMoodTracker10 () {
	return (
		<div className='ThoughtsandEmotionsMoodTracker10_ThoughtsandEmotionsMoodTracker10'>
			<TypeVeryGoodStatusOn className='Slider'/>
			<span className='Ifeelamazing'>I feel amazing!!</span>
			<span className='Howareyoufeelingtoday'>How are you feeling today?</span>
			<div className='Emoji7'>
				<HeadCream className='HeadCream'/>
				<div className='BlushCheeks'>
					<img className='L' src = {ImgAsset.ThoughtsandEmotionsMoodTracker10_L} />
				</div>
				<div className='SweatDrop'>
					<img className='SweatDrop_1' src = {ImgAsset.ThoughtsandEmotionsMoodTracker10_SweatDrop_1} />
				</div>
				<MouthLilSmile className='MouthLilSmile'/>
				<EyesClosed className='EyesClosed'/>
				<div className='Halo'>
					<img className='Vector' src = {ImgAsset.ThoughtsandEmotionsMoodTracker10_Vector} />
					<img className='Vector_1' src = {ImgAsset.ThoughtsandEmotionsMoodTracker10_Vector_1} />
				</div>
			</div>
			<notifications className='notifications'/>
			<div className='Rectangle1942'/>
			<span className='SUBMIT'>SUBMIT</span>
			<div className='HomeBar'>
				<div className='Group47399'>
					<div className='background'/>
					<div className='background_1'/>
				</div>
				<div className='ButtonHome'>
					<div className='Home'>
						<img className='Rectangle2' src = {ImgAsset.ThoughtsandEmotionsMoodTracker10_Rectangle2} />
					</div>
				</div>
			</div>
		</div>
	)
}