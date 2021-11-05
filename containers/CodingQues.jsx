import React from "react";
import CodingQuesCard from "../components/CodingQuesCard";
import { Container, Row, Col } from "reactstrap";
import { Code } from "react-feather";
import CodingLottie from "../components/DisplayLottie";

const CodingQues = () => {
	return (
		<section className="section pb-0 bg-gradient-info my-5">
			<Container>
				<div className="d-flex px-3">
					<div>
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
							<Code />
						</div>
					</div>
					<div className="pl-4">
						<h4 className="display-3 text-white">Coding</h4>
					</div>
				</div>
				<Row className="row-grid align-items-center">
                    <Col lg="6">
						<CodingLottie animationPath="/lottie/coding.json" />
                    </Col>
					<Col className="order-lg-1" lg="3">
                        <CodingQuesCard 
                            data={{name: "leetcode", count: 95, 
                            url: "https://leetcode.com/shashil_sravan/", 
                            text: "Solved problems"}} />
                    </Col>
                    <Col className="order-lg-1" lg="3">
                        <CodingQuesCard 
                            data={{name: "geeks for geeks", count: 110, 
                            url: "https://auth.geeksforgeeks.org/user/sravansidhu/profile", 
                            text: "Points scored"}} />
                    </Col>
				</Row>
			</Container>
			<div className="separator separator-bottom separator-skew zindex-100">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
					version="1.1"
					viewBox="0 0 2560 100"
					x="0"
					y="0"
				>
					<polygon
						className="fill-white"
						points="2560 0 2560 100 0 100"
					/>
				</svg>
			</div>
		</section>
	);
};

export default CodingQues;
