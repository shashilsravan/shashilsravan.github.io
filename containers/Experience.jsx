import React from "react";
import { experience } from "../portfolio";
import { Container, Row } from "reactstrap";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Fade } from "react-reveal";
import { Award, Camera, Cloud, Code } from 'react-feather';

const Experience = () => {
	return (
		<section className="section section-lg">
			<Container>
				<Fade bottom duration={1000} distance="40px">
					<div className="d-flex p-4">
						<div>
							<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
								<i className="ni ni-briefcase-24 text-info" />
							</div>
						</div>
						<div className="pl-4">
							<h4 className="display-3 text-info m-0 mt-1">Experience</h4>
						</div>
					</div>
					<VerticalTimeline lineColor="#172B4D" animate >
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							date="Jun 2021 - present" position="left" icon={<Award />}
							contentStyle={{ borderTop: '2px solid  rgb(33, 150, 243)' }}
							iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
							<h3 className="vertical-timeline-element-title text-primary fw-bold">Ruby on Rails Developer</h3>
							<h5 className="vertical-timeline-element-subtitle">PromptCloud Technologies</h5>
							<p>
							Working on the website with technical stack - reactJS as frontend and ruby on rails as backend.
							</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ borderTop: '2px solid  #E55362' }}
							date="Sep 2020 - Nov 2020" position="right" icon={<Code />}
							iconStyle={{ background: '#E55362', color: '#fff' }}>
							<h3 className="vertical-timeline-element-title text-primary fw-bold">Front-End Developer</h3>
							<h5 className="vertical-timeline-element-subtitle">Rovae Inc.</h5>
							<p>Worked as frontend developer in transforming figma files and xd files into working Webpages. Worked on ReactJS and laravel projects</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							date="Jun 2019 - Aug 2020" position="left" icon={<Cloud />}
							contentStyle={{ borderTop: '2px solid  #79CF53' }}
							iconStyle={{ background: '#79CF53', color: '#fff' }}>
							<h3 className="vertical-timeline-element-title text-primary fw-bold">Web Developer</h3>
							<h5 className="vertical-timeline-element-subtitle">RGUKT CSE Website</h5>
							<p>
								I have worked as web developer for CSE website in the academic year 2019-20 and maintained the website.
							</p>
						</VerticalTimelineElement>
					</VerticalTimeline>
				</Fade>
			</Container>
		</section>
	);
};

export default Experience;
