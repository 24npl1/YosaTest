import React from 'react'
import './HomePagefirstversion_5.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function HomePagefirstversion_5 () {
	return (
		<div className='HomePagefirstversion_5_HomePagefirstversion'>
			<span className='HelloAndrew'>Hello Andrew!</span>
			<div className='Affirmations'>
				<div className='Frame8'>
					<span className='Iamgratefultohavepeopleinmylifewhosupportme'><br/>I am grateful to have <br/><br/><br/>people in my life who <br/><br/><br/>support me.</span>
				</div>
				<div className='Frame6'>
					<span className='Iamcontinuallyevolvingintoastrongerversionofmyself'><br/><br/>I am continually evolving<br/> <br/><br/> into a stronger version of<br/><br/><br/> myself.</span>
				</div>
				<div className='Frame7'>
					<span className='Iamonabeautifuljourneytoabetterlife'><br/><br/>I am on a beautiful journey to a <br/><br/><br/>better life.</span>
				</div>
				<div className='Frame9'>
					<span className='Iamdoingmybestandthatisalwaysenough'><br/><br/>I am doing my best and that is<br/><br/><br/> always enough.</span>
				</div>
				<div className='Frame10'>
					<span className='IamincontrolofmylifeandIchoosetoletgoofnegativebeliefs'><br/><br/>I am in control of my life and I<br/><br/><br/> choose to let go of negative <br/><br/><br/>beliefs.</span>
				</div>
				<div className='Frame11'>
					<span className='Iamproudofmyselfforgettingthisfar'><br/><br/>I am proud of myself for<br/><br/><br/> getting this far.</span>
				</div>
			</div>
			<img className='Rectangle781' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
			<div className='Frame18'>
				<span className='ThoughtsandEmotions'>Thoughts and Emotions</span>
				<span className='Other'>Other</span>
				<span className='SleepMeditation'>Sleep + Meditation</span>
				<Link to='/thoughtsandemotionsmoodtracker1'>
					<div className='Help'>
						<div className='Rectangle1952'/>
						<div className='Rectangle1953'/>
						<span className='MoodTracker'>Mood Tracker</span>
					</div>
				</Link>
				<Link to='/thoughtsandemotinsjournaling_1'>
					<div className='Help_1'>
						<div className='Rectangle1952_1'/>
						<div className='Rectangle1953_1'/>
						<span className='Journaling'>Journaling</span>
					</div>
				</Link>
				<div className='Help_2'>
					<div className='Rectangle1952_2'/>
					<div className='Rectangle1953_2'/>
					<span className='CBTFillouts'>CBT Fillouts</span>
				</div>
				<div className='Help_3'>
					<div className='Rectangle1952_3'/>
					<div className='Rectangle1953_3'/>
					<span className='Mindfulness'>Mindfulness</span>
				</div>
				<div className='Help_4'>
					<div className='Rectangle1952_4'/>
					<div className='Rectangle1953_4'/>
					<span className='SleepLog'>Sleep Log</span>
				</div>
				<div className='Help_5'>
					<div className='Rectangle1952_5'/>
					<div className='Rectangle1953_5'/>
					<span className='Meditation'>Meditation</span>
				</div>
				<div className='Help_6'>
					<div className='Rectangle1952_6'/>
					<div className='Rectangle1953_6'/>
					<span className='SubstanceLog'>Substance Log</span>
				</div>
				<div className='Help_7'>
					<div className='Rectangle1952_7'/>
					<div className='Rectangle1953_7'/>
					<span className='SafetyPlan'>Safety Plan</span>
				</div>
				<div className='Help_8'>
					<div className='Rectangle1952_8'/>
					<div className='Rectangle1953_8'/>
					<span className='Medication'>Medication</span>
				</div>
				<div className='Help_9'>
					<div className='Rectangle1952_9'/>
					<div className='Rectangle1953_9'/>
					<span className='Help_10'>Help</span>
				</div>
			</div>
		</div>
	)
}