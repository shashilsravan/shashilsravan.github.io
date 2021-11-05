import React from "react";

import { Card, CardBody, Col, Button } from "reactstrap";

import { Fade } from "react-reveal";

const BlogsCard = ({ data }) => {
	return (
		<Col lg="6">
			<Fade left duration={1000} distance="40px">
				<Card className="shadow-lg--hover shadow mt-4">
					<CardBody>
						<div className="d-flex px-3">
							<div className="pl-4">
								<h3>{data.name}</h3>
								<p className="description mt-3">{data.desc}</p>
								{data.link ? (
									<Button
										className="btn-icon"
										color="danger"
										href={data.link}
										target="_blank"
										rel="noopener" aria-label="Twitter"
									>
										<span className="btn-inner--icon">
											<i className="fa fa-arrow-right" />
										</span> View
									</Button>
								) : null}
							</div>
						</div>
					</CardBody>
				</Card>
			</Fade>
		</Col>
	);
};

export default BlogsCard;
