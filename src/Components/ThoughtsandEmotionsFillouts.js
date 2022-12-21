import React from 'react'
import './ThoughtsandEmotionsFillouts.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function ThoughtsandEmotionsFillouts () {
	return (
		<div className='ThoughtsandEmotionsFillouts_ThoughtsandEmotionsFillouts'>
			<div className='mindfulnesstabs'>
				<Link to='/thoughtsandemotions3columnthoughtrecord_1'>
					<div className='Group21'>
						<img className='Rectangle797' src = {ImgAsset.ThoughtsandEmotionsFillouts_Rectangle797} />
						<div className='Rectangle798'/>
						<span className='_3ColumnThoughtRecord'>3 Column Thought Record</span>
					</div>
				</Link>
				<Link to='/thoughtsandemotionspreparingfortherapy'>
					<div className='Group47405'>
						<img className='Rectangle815' src = {ImgAsset.ThoughtsandEmotionsFillouts_Rectangle815} />
						<div className='Rectangle816'/>
						<span className='PreparingForTherapy'>Preparing For Therapy</span>
					</div>
				</Link>
				<Link to='/thoughtsandemotionsfilldrainmybucket'>
					<div className='Group23'>
						<img className='Rectangle783' src = {ImgAsset.ThoughtsandEmotionsFillouts_Rectangle783} />
						<div className='Rectangle784'/>
						<span className='FillDrainMyBucket'>Fill / Drain My Bucket</span>
					</div>
				</Link>
				<Link to='/thoughtsandemotionssymptomlog_1'>
					<div className='Group24'>
						<img className='Rectangle809' src = {ImgAsset.ThoughtsandEmotionsFillouts_Rectangle809} />
						<div className='Rectangle810'/>
						<span className='SymptomLog'>Symptom Log</span>
					</div>
				</Link>
				<Link to='/thoughtsandemotionscommonunhealthythoughtpatterns_2'>
					<div className='Group25'>
						<img className='Rectangle811' src = {ImgAsset.ThoughtsandEmotionsFillouts_Rectangle811} />
						<div className='Rectangle812'/>
						<span className='CommonUnhealthyThoughtPatterns'>Common Unhealthy Thought Patterns<br/></span>
					</div>
				</Link>
			</div>
			<Link to='/thoughtsandemotions7columnthoughtrecord_1'>
				<div className='Group20'>
					<img className='Rectangle777' src = {ImgAsset.ThoughtsandEmotionsFillouts_Rectangle777} />
					<div className='Rectangle777_1'/>
					<span className='_7ColumnThoughtRecord'>7 Column Thought Record</span>
				</div>
			</Link>
			<Link to='/thoughtsandemotionsworrysheet'>
				<div className='Group22'>
					<img className='Rectangle785' src = {ImgAsset.ThoughtsandEmotionsFillouts_Rectangle785} />
					<div className='Rectangle786'/>
					<span className='WorryWorksheet'>Worry Worksheet</span>
				</div>
			</Link>
			<Link to='/homepagefirstversion_3'>
				<div className='HomeBar'>
					<div className='Group47404'>
						<div className='background'/>
						<div className='background_1'/>
					</div>
					<div className='ButtonHome'>
						<div className='Home'>
							<img className='Rectangle2' src = {ImgAsset.ThoughtsandEmotionsFillouts_Rectangle2} />
						</div>
					</div>
				</div>
			</Link>
			<Link to='/thoughtsandemotionsanxietycopingskills'>
				<div className='Group19'>
					<img className='Rectangle813' src = {ImgAsset.ThoughtsandEmotionsFillouts_Rectangle813} />
					<div className='Rectangle814'/>
					<span className='AnxietyCopingMethods'>Anxiety Coping Methods</span>
				</div>
			</Link>
			<img className='Rectangle783_1' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
		</div>
	)
}