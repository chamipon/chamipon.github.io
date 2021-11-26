import githubLogo from "./github-brands.svg";
import "./App.css";
import Navbar from "./navbar/navbar.js";
import Card from "./card/card.js";

function App() {
	return (
		<div className="App">
			<div id="landing" className="section d-flex">
				<h1 className="m-auto d-block text-center">
					Zachary Kucera
					<br />
					<hr className="mx-auto" />
					<span>Software Developer</span>
				</h1>
			</div>
			<Navbar />
			<div id="about" className="section">
				<div className="container text-center py-7">
					<h2>About Me</h2>
					<hr className="headerUnderline mx-auto" />
					<div className="flex-sm-row flex-column d-flex">
						<div className="col-12 col-sm-6">
							<img alt="Zachary Kucera" src="/img/portrait.jpg" />
						</div>

						<div className="col-12 col-sm-6 text-start">
							<p>
								Hello! I am Zachary Kucera, a professional
								software developer and software engineering
								graduate from the University of Western Ontario.
								I have built software in professional, academic
								and personal settings; from websites to video
								games.
							</p>
							<p>Find out more below!</p>
                            <a href="https://github.com/chamipon" aria-label="Zachary Kucera Github">
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                            </a>
						</div>
					</div>
				</div>
			</div>
			<div id="skills" className="section dark">
				<div className="container text-center py-7">
					<h2>Skills</h2>
					<hr className="headerUnderline mx-auto" />
					<p>
						{" "}
						I have worked with many different programming languages,
						frameworks, engines and development tools. Angular and
						Node.js are my go to technologies for web applications,
						and C++ is my default programming language.{" "}
					</p>
					<div className="row mb-3">
						<div className="col-3">Javascript</div>
						<div className="col-3">HTML</div>
						<div className="col-3">CSS</div>
						<div className="col-3">C++</div>
					</div>
					<div className="row">
						<div className="col-6">
							<h3>Development Tools</h3>
							<ul>
								<li>Git</li>
								<li>Sharepoint</li>
								<li>Windows</li>
								<li>Linux</li>
							</ul>
						</div>
						<div className="col-6">
							<h3>Frameworks</h3>
							<ul>
								<li>React</li>
								<li>Jquery</li>
								<li>Node.Js</li>
								<li>Bootstrap</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div id="experience" className="section">
				<div className="container text-center py-7">
					<h2>Work Experience</h2>
					<hr className="headerUnderline mx-auto" />
					<Card
						src="/img/ADS_favicon.png"
						alt="Automation Design Solutions Logo"
						title="Automation Design Solutions"
						desc={[
							<strong>Freelance Web Developer</strong>,
							<br />,
							<i>September 2021 - October 2021</i>,
							<ul>
								<li>
									Gathered requirements from clients through
									meetings and presentation of demos, ensuring
									a complete understanding of business needs
								</li>
								<li>
									Designed and developed a new company
									website, increasing the effectiveness of the
									client's online presence
								</li>
								<li>
									Deployed code to a remote server using
									cPanel, simplifying the administration
									process for the clients
								</li>
								<li>
									Transferred ownership of website to the
									client, by training them in web
									technologies, eliminating dependence on
									third-party contractors.
								</li>
								<li>
									Applied SEO, accessibility and responsive
									design best practices, providing all users
									with an excellent experience
								</li>
							</ul>,
						]}
					/>{" "}
					<Card
						src="/img/CK.png"
						alt="Municipality of Chatham-Kent Logo"
						title="Municipality of Chatham-Kent"
						desc={[
							<strong>Web Design & Developer</strong>,
							<br />,
							<i>November 2019 - September 2021</i>,
							<ul>
								<li>
									Built tools and streamlined processes
									allowing business units to update website
									content without contacting IT, reducing long
									term operational costs
								</li>

								<li>
									Constructed page templates compliant with
									the WCAG level AA guidelines, improving
									content accessibility
								</li>
								<li>
									Implemented SEO best practices and
									techniques using Google Analytics,
									increasing the discoverability of
									information
								</li>
								<li>
									Utilized Bootstrap to execute a
									"mobile-first" design strategy, enabling a
									seamless browsing experience on a device of
									any size{" "}
								</li>
							</ul>,
						]}
					/>{" "}
					<Card
						src="/img/mustangsLogo.png"
						title="UWO Fencing Team"
						alt="Western Mustangs Logo"
						desc={[
							<strong>Technical Assistant</strong>,
							<br />,
							<i>September 2018 - May 2019</i>,
							<ul>
								<li>
									Developed and mantained team websites to
									provide team and fans with up to date
									information.{" "}
								</li>
								<li>
									Designed database tables and entered data to
									assist the head coaches with information of
									players, alumni, and potential recruits.{" "}
								</li>
								<li>
									Improved productivity and system reliability
									by integrating G Suite into work flow.{" "}
								</li>
								<li>
									Assisted with daily bookkeeping and
									inventory managment jobs, guarunteeing
									players and staff were had all essential
									gear.{" "}
								</li>
							</ul>,
						]}
					/>
					<Card
						src="/img/GMLogo.png"
						alt="General Motors Logo"
						title="GM CAMI Assembly"
						desc={[
							<strong>Production Associate</strong>,
							<br />,
							<i>Summers 2016 - 2018</i>,
							<ul>
								<li>
									Constructed and inspected 500 vehicles per
									day, resulting in high-quality products and
									upwards of 90% line up time.
								</li>
								<li>
									Inspected products of automated work to
									ensure robots were meeting quality standards
								</li>
							</ul>,
						]}
					/>
				</div>
			</div>
			<div id="education" className="section dark">
				<div className="container text-center py-7">
					<h2>Education</h2>
					<hr className="headerUnderline mx-auto" />
					<Card
						src="/img/UWO_LOGO_Stacked.png"
						alt="Western University Logo"
						title="Univesity of Western Ontario"
						desc={[
							<strong>
								Bachelor of Engineering Science, Software
								Engineering
							</strong>,
							<p>
								I studied the software development lifecycle,
								and software engineering best practices. During
								my time at Western I gained experience with many
								aspects of software development including UML
								diagrams, software development methodologies,
								relational databases and of course, programming.{" "}
							</p>,
							<p>Graduated : May 2019</p>,
						]}
					/>
				</div>
			</div>
			<div id="projects" className="section">
				<div className="container text-center py-7">
					<h2>Past Work</h2>
					<hr className="headerUnderline mx-auto" />
					<Card
						src="/img/app_touch_icon.png"
						url="https://www.ultradex.ca"
						alt="Ultradex Logo"
						title="Ultradex"
						desc={[
							<p>
								A modern pokédex web app, built with Next.Js, React and hosted on Vercel.
							</p>,
						]}
						badges={[
							"Next.JS",
							"React",
                            "PWA",
							"Bootstrap",
							"Vercel",
						]}
					/>
                    <Card
						src="/img/ADS_favicon.png"
						url="https://www.adsservices.ca/"
						alt="Automation Design Solutions Logo"
						title="Automation Design Solutions Website"
						desc={[
							<p>
								Designed, developed and deployed the new ADS
								company website.
							</p>,
						]}
						badges={[
							"HTML",
							"CSS",
							"Javascript",
							"Jquery",
							"Bootstrap",
							"cPanel",
						]}
					/>
					<Card
						src="/img/CK.png"
						url="https://www.chatham-kent.ca/Pages/default.aspx"
						alt="Municipality of Chatham-Kent Logo"
						title="Municipality of Chatham-Kent Website"
						desc={[
							<p>
								Refreshed the Chatham-Kent website, breathing
								life into the municipality's online presense.
							</p>,
						]}
						badges={[
							"Sharepoint",
							"HTML",
							"CSS",
							"Javascript",
							"Jquery",
							"Bootstrap",
						]}
					/>
					<Card
						src="/img/mustangsLogo.png"
						url="https://uwovarsityfencing.com/"
						title="UWO Fencing Team Website"
						alt="Western Mustangs Logo"
						desc={[
							<p>A website built for the UWO fencing team.</p>,
						]}
						badges={["Squarespace", "Adobe Photoshop"]}
					/>
					<Card
						src="/img/angularLogo.png"
						title="Self-Start"
						alt="Angular Logo"
						desc={[
							<p>
								An online physiotherapy solution, designed and
								built in a team of 5. Employed an Agile
								development methodology to produce many
								protoypes, allowing for constant client
								feedback.
							</p>,
						]}
						badges={[
							"Angular",
							"HTML",
							"Typescript",
							"CSS",
							"Node.Js",
							"MongoDB",
							"Git",
						]}
					/>
					<Card
						src="/img/azureLogo.png"
						url="https://github.com/zkucera/cloud_computing_assignment2"
						title="Cloud Application Deployment"
						alt="Microsoft Azure Logo"
						desc={[
							<p>
								Developed and deployed a VM monitoring portal,
								and hosted on three microsoft azure virtual
								machines.
							</p>,
						]}
						badges={[
							"Javasript",
							"Microsoft Azure",
							"MongoDB",
							"Node.Js",
						]}
					/>
					<Card
						src="/img/rayTracer.png"
						url ="https://github.com/zkucera/computer_graphics_assignment_3"
						title="Ray Tracing Engine"
						alt="A ray traced scene with a cone and sphere."
						desc={[
							<p>
								Developed a ray tracing engine, using linear
								algebra and lighting models to color a scene
								with shadows, transparency and reflections.
							</p>,
						]}
						badges={["C", "Git"]}
					/>
				</div>
			</div>
			{/* <div id="contact" className="section dark">
				<div className="container text-center py-7">
					<h2>Drop a Line</h2>
				</div>
			</div> */}
		</div>
	);
}

export default App;
