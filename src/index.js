import React from 'react'
import {render} from 'react-dom'
import {SkiDayCount} from './components/SkiDayCount'
import {SkiDayList} from './components/SkiDayList'
import {hello,goodbye} from './lib'


const style={backgroundColor:'orange',color:'white',fontFamily:'verdana'}

render(
	<SkiDayList days={
		[
			{
				resort:"Valley",
				date:new Date("1/2/2010"),
				powder:true,
				bc:false
			},
			{
				resort:"Wood",
				date:new Date("1/2/2011"),
				powder:false,
				bc:false
			},
			{
				resort:"Mt",
				date:new Date("1/2/2012"),
				powder:false,
				bc:true
			}
		]
	}/>,document.getElementById('react-container')
	)
