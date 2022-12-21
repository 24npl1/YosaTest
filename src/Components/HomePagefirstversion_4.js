import React from 'react'
import './HomePagefirstversion_4.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function HomePagefirstversion_4 () {
	return (
		<div className='HomePagefirstversion_4_HomePagefirstversion'>
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
				<Link to='/thoughtsandemotionsfillouts'>
					<div className='Help_2'>
						<div className='Rectangle1952_2'/>
						<div className='Rectangle1953_2'/>
						<span className='CBTFillouts'>CBT Fillouts</span>
					</div>
				</Link>
				<Link to='/thoughtsandemotionsmindfulness_1'>
					<div className='Help_3'>
						<div className='Rectangle1952_3'/>
						<div className='Rectangle1953_3'/>
						<span className='Mindfulness'>Mindfulness</span>
					</div>
				</Link>
				<Link to='/thoughtsandemotionsinteractivegames'>
					<div className='Help_4'>
						<div className='Rectangle1952_4'/>
						<div className='Rectangle1953_4'/>
						<span className='InteractiveGames'>Interactive Games</span>
					</div>
				</Link>
				<Link to='/sleepmeditationsleeptracker_1'>
					<div className='Help_5'>
						<div className='Rectangle1952_5'/>
						<div className='Rectangle1953_5'/>
						<span className='SleepLog'>Sleep Log</span>
					</div>
				</Link>
				<Link to='/thoughtsandemotionsguidedyoga'>
					<div className='Help_6'>
						<div className='Rectangle1952_6'/>
						<div className='Rectangle1953_6'/>
						<span className='GuidedYoga'>Guided Yoga</span>
					</div>
				</Link>
				<Link to='/thoughtsandemotionsmindfulness_2'>
					<div className='Help_7'>
						<div className='Rectangle1952_7'/>
						<div className='Rectangle1953_7'/>
						<span className='Meditation'>Meditation</span>
					</div>
				</Link>
				<Link to='/othersubstancelog'>
					<div className='Help_8'>
						<div className='Rectangle1952_8'/>
						<div className='Rectangle1953_8'/>
						<span className='SubstanceLog'>Substance Log</span>
					</div>
				</Link>
				<Link to='/othersafetyplan'>
					<div className='Help_9'>
						<div className='Rectangle1952_9'/>
						<div className='Rectangle1953_9'/>
						<span className='SafetyPlan'>Safety Plan</span>
					</div>
				</Link>
				<Link to='/othermedicationlog'>
					<div className='Help_10'>
						<div className='Rectangle1952_10'/>
						<div className='Rectangle1953_10'/>
						<span className='Medication'>Medication</span>
					</div>
				</Link>
				<Link to='/resourceshelp_1'>
					<div className='Help_11'>
						<div className='Rectangle1952_11'/>
						<div className='Rectangle1953_11'/>
						<span className='Help_12'>Help</span>
					</div>
				</Link>
			</div>
			<div className='Rectangle1973'/>
			<div className='Affirmations'>
				<div className='Frame8'>
					<span className='Iamgratefultohavepeopleinmylifewhosupportme'><br/>I am grateful to have people in my life who support me.</span>
				</div>
				<div className='Frame6'>
					<span className='Iamcontinuallyevolvingintoastrongerversionofmyself'><br/>I am continually evolving into a stronger version of myself.</span>
				</div>
				<div className='Frame10'>
					<span className='IamincontrolofmylifeandIchoosetoletgoofnegativebeliefs'><br/>I am in control of my life and I choose to let go of negative beliefs.</span>
				</div>
				<div className='Frame7'>
					<span className='Iamonabeautifuljourneytoabetterlife'><br/>I am on a beautiful journey to a better life.</span>
				</div>
				<div className='Frame9'>
					<span className='Iamdoingmybestandthatisalwaysenough'><br/>I am doing my best and that is always enough.</span>
				</div>
				<div className='Frame11'>
					<span className='Iamproudofmyselfforgettingthisfar'><br/>I am proud of myself for getting this far.</span>
				</div>
			</div>
			<span className='HelloAndrew'>Hello Andrew!</span>
			<img className='Rectangle781' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
		</div>
	)
}