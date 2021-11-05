import React from "react";
import { Card, CardBody, Badge } from "reactstrap";
import VisibilitySensor from 'react-visibility-sensor';
import { Fade } from "react-reveal";
import CountUp from 'react-countup';

const CodingQuesCard = ({ data }) => {
	return (
		<Fade left duration={1000} distance="40px">
			<Card className="card-lift--hover shadow mt-4">
				<CardBody>
					<div className="d-flex px-3">
						<div className="pl-4">
							<Badge color="info" className="mr-1">
								<a href={data.url}>
                                    {data.name}
                                </a>
							</Badge>
							<h1 className="mt-3">
                                {data.count}+
                            </h1>
                            <p className="text-muted">
                                {data.text}
                            </p>
						</div>
					</div>
				</CardBody>
			</Card>
		</Fade>
	);
};

export default CodingQuesCard;
