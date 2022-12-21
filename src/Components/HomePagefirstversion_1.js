import React from 'react'
import './HomePagefirstversion_1.css'
import ImgAsset from '../public'
import notifications from "./notifications"
export default function HomePagefirstversion_1 () {
	return (
		<div className='HomePagefirstversion_1_HomePagefirstversion'>
			<span className='ThoughtsandEmotions'>Thoughts and Emotions</span>
			<span className='Other'>Other</span>
			<img className='Rectangle781' src = {ImgAsset.ThoughtsandEmotionsCBTFillouts_Rectangle780} />
			<span className='HelloAndrew'>Hello Andrew!</span>
			<div className='thoughtsandemotionstabs'>
				<div className='Mindfulness'>
					<img className='Rectangle1948' src = {ImgAsset.HomePagefirstversion_1_Rectangle1948} />
					<div className='Rectangle1949'/>
					<span className='Mindfulness_1'>Mindfulness</span>
					<div className='SymptomLog'>
						<img className='Rectangle1948_1' src = {ImgAsset.HomePagefirstversion_1_Rectangle1948_1} />
						<div className='Rectangle1949_1'/>
						<span className='SymptomLog_1'>Symptom Log</span>
					</div>
				</div>
				<img className='Rectangle21' src = {ImgAsset.HomePagefirstversion_1_Rectangle21} />
				<div className='Rectangle22'/>
				<span className='MoodTracker'>Mood Tracker</span>
				<img className='Rectangle1944' src = {ImgAsset.HomePagefirstversion_Rectangle1944} />
				<div className='Rectangle1945'/>
				<span className='CBTThoughtRecord'>CBT Thought Record</span>
				<img className='Rectangle1946' src = {ImgAsset.HomePagefirstversion_Rectangle1944} />
				<div className='Rectangle1947'/>
				<span className='CBTFillouts'>CBT Fillouts</span>
				<img className='Rectangle1936' src = {ImgAsset.HomePagefirstversion_1_Rectangle1936} />
				<div className='Rectangle18'/>
				<span className='Journaling'>Journaling</span>
			</div>
			<div className='SleepMeditationtabs'>
				<img className='Rectangle23' src = {ImgAsset.HomePagefirstversion_1_Rectangle23} />
				<div className='Rectangle24'/>
				<span className='Meditation'>Meditation</span>
				<img className='Rectangle25' src = {ImgAsset.HomePagefirstversion_1_Rectangle25} />
				<div className='Rectangle30'/>
				<span className='SleepLog'>Sleep Log</span>
			</div>
			<span className='SleepMeditation'>Sleep + Meditation</span>
			<div className='Affirmations'>
				<div className='Frame6'>
					<span className='Iamcontinuallyevolvingintoastrongerversionofmyself'>I am continually evolving into a stronger version of myself.</span>
				</div>
				<div className='Frame7'>
					<span className='Iamonabeautifuljourneytoabetterlife'>I am on a beautiful journey to a better life.</span>
				</div>
				<div className='Frame8'>
					<span className='Iamgratefultohavepeopleinmylifewhosupportme'>I am grateful to have people in my life who support me.</span>
				</div>
				<div className='Frame9'>
					<span className='Iamdoingmybestandthatisalwaysenough'>I am doing my best and that is always enough.</span>
				</div>
				<div className='Frame10'>
					<span className='IamincontrolofmylifeandIchoosetoletgoofnegativebeliefs'>I am in control of my life and I choose to let go of negative beliefs.</span>
				</div>
				<div className='Frame11'>
					<span className='Iamproudofmyselfforgettingthisfar'>I am proud of myself for getting this far.</span>
				</div>
			</div>
			<div className='Othertabs'>
				<div className='Help'>
					<img className='Rectangle1952' src = {ImgAsset.HomePagefirstversion_1_Rectangle1952} />
					<div className='Rectangle1953'/>
					<span className='Help_1'>Help</span>
				</div>
				<div className='Medication'>
					<img className='Rectangle21_1' src = {ImgAsset.HomePagefirstversion_1_Rectangle21_1} />
					<div className='Rectangle22_1'/>
					<span className='Medication_1'>Medication</span>
				</div>
				<div className='safetyplan'>
					<img className='Rectangle1956' src = {ImgAsset.HomePagefirstversion_1_Rectangle1956} />
					<div className='Rectangle1957'/>
					<span className='SafetyPlan'>Safety Plan</span>
				</div>
				<div className='SubstanceLog'>
					<img className='Rectangle1940' src = {ImgAsset.HomePagefirstversion_1_Rectangle1940} />
					<div className='Rectangle1941'/>
					<span className='SubstanceLog_1'>Substance Log</span>
				</div>
			</div>
			<notifications className='notifications'/>
		</div>
	)
}