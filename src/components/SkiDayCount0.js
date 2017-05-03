import React from 'react'
//import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'


//window.react

const percentToDecimal=(decimal)=>{
	return((decimal*100)+'%')
}

	const calcGoalProgress=(total,goal)=>{
		return percentToDecimal(total/goal)
	}

export const SkiDayCount=(props) => (
		<div className="skidaycount">
			<div className="totaldays">
				<span>{props.total}</span>
				<span>day</span>
				<Calendar />
			</div>

			<div className="powderdays">
				<span>{props.powder}</span>
				<span>day</span>
				<SnowFlake />
			</div>

			<div className="bc-days">
				<span>{props.bc}</span>
				<span>day</span>
				<Terrain />
			</div>

			<div className="bc-days">
				<span>{calcGoalProgress(props.total,props.goal)}</span>
				<span>day</span>
			</div>
		</div>
	)