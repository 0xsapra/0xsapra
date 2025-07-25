import React, { useEffect, useState } from "react";
import LoadingAnimation from "./Loading";

const useCheckMobileScreen = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const handleWindowSizeChange = () => {
		setWidth(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange);
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		}
	}, []);

	return (width <= 768);
}

const SocialLinks = () => {
	const isMobile = useCheckMobileScreen();
	if (isMobile) {
		return (
			<ul className="list-group list-group-flush bg-transparent social-landing-mobile" id="social-landing-mobile">
				<li className="list-group-item bg-transparent glow"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/0xsapra//"><i className="fab fa-linkedin" aria-hidden="true"></i> LinkedIn</a></li>
				<li className="list-group-item bg-transparent glow"><a target="_blank" rel="noreferrer" href="https://twitter.com/0xsapra"><i className="fab fa-twitter" aria-hidden="true"></i> Twitter</a></li>
				<li className="list-group-item bg-transparent glow"><a target="_blank" rel="noreferrer" href="https://github.com/0xsapra"><i className="fab fa-github" aria-hidden="true"></i> GitHub</a></li>
				{/* <li className="list-group-item bg-transparent glow"><a target="_blank" rel="noreferrer" href="https://medium.com/@amanistaken"><i className="fab fa-medium" aria-hidden="true"></i> Medium</a></li> */}
				<li className="list-inline-item glow"><a target="_blank" rel="noreferrer" href="https://0xsapra.gitbook.io/web/"><i className="fas fa-blog" aria-hidden="true"></i><p className="hidden my-2">Blog</p></a></li>
			</ul>
		)
	}
	else {
		return (
			<ul className="list-inline social-landing" id="social-landing-desktop">
				<li className="list-inline-item glow"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/0xsapra/"><i className="fab fa-linkedin" aria-hidden="true"></i><p className="hidden my-2">LinkedIn</p></a></li>
				<li className="list-inline-item glow"><a target="_blank" rel="noreferrer" href="https://twitter.com/0xsapra"><i className="fab fa-twitter" aria-hidden="true"></i><p className="hidden my-2">Twitter</p></a></li>
				<li className="list-inline-item glow"><a target="_blank" rel="noreferrer" href="https://github.com/0xsapra"><i className="fab fa-github" aria-hidden="true"></i><p className="hidden my-2">GitHub</p></a></li>
				{/* <li className="list-inline-item glow"><a target="_blank" rel="noreferrer" href="https://medium.com/@amanistaken"><i className="fab fa-medium" aria-hidden="true"></i><p className="hidden my-2">Medium</p></a></li> */}
				<li className="list-inline-item glow"><a target="_blank" rel="noreferrer" href="https://0xsapra.gitbook.io/web/"><i className="fas fa-blog" aria-hidden="true"></i><p className="hidden my-2">Blog</p></a></li>
			</ul>
		)
	}
}

class Home extends React.Component {
	componentDidMount() {
		let loading = new LoadingAnimation(document.querySelector('#title'));
		loading.run();
	}

	render() {
		return (
			<>
				<div className="container viewport">
					<div className="align-center text-center">
						<h1 id="title">Aman Sapra</h1>
						<hr />
						<SocialLinks />
					</div>
				</div>
			</>
		);
	}
}

export default Home;