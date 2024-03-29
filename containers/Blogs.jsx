import React from "react";
import { blogs } from "../portfolio";
import { Container, Row } from "reactstrap";
import BlogsCard from "../components/BlogsCard";
import { Fade } from "react-reveal";

const Blogs = () => {
	return (
		<section className="section section-lg">
			<Container>
				<Fade bottom duration={1000} distance="40px">
					<div className="d-flex p-4">
						<div>
							<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
								<i className="ni ni-laptop text-info" />
							</div>
						</div>
						<div className="pl-4">
							<h4 className="display-3 text-info m-0 mt-1">Blogs</h4>
						</div>
					</div>
					<Row className="row-grid align-items-center">
						{blogs.map((data, i) => {
							return <BlogsCard key={i} data={data} />;
						})}
					</Row>
				</Fade>
			</Container>
		</section>
	);
};

export default Blogs;
