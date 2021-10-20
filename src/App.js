import logo from "./logo.svg";
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
					<hr class="mx-auto" />
					<span>Software Developer</span>
				</h1>
			</div>
			<Navbar />
			<div id="about" className="section">
				<div className="container text-center py-7">
					<h2>About Me</h2>
					<hr class="headerUnderline mx-auto" />
					<div class="flex-row d-flex">
						<div class="col-6">
							<img src="/img/portrait.jpg" />
						</div>

						<div class="col-6 text-start">
							<p>
								Hello! I am Zachary Kucera, a professional software
								developer and software engineering graduate from
								the University of Western Ontario. I have built
								software in professional, academic and personal
								settings; from websites to video games.
							</p>
							<p>Find out more below!</p>
						</div>
					</div>
				</div>
			</div>
			<div id="skills" className="section dark">
				<div className="container text-center py-7">
					<h2>Skills</h2>
					<hr class="headerUnderline mx-auto" />
					<p>
						{" "}
						I have worked with many different programming languages,
						frameworks, engines and development tools. Angular and
						Node.js are my go to technologies for web applications,
						and C++ is my default programming language.{" "}
					</p>
					<div class="row">
						<div class="col-3">Javascript</div>
						<div class="col-3">HTML</div>
						<div class="col-3">CSS</div>
						<div class="col-3">C++</div>
					</div>
					<div class="row">
						<div class="col-6">
							<h3>Development Tools</h3>
							<ul>
								<li>Git</li>
								<li>Sharepoint</li>
								<li>Windows</li>
								<li>Linux</li>
							</ul>
						</div>
						<div class="col-6">
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
					<hr class="headerUnderline mx-auto" />
					<Card
						src="/img/ADS_favicon.png"
						alt="Automation Design Solutions Logo"
						title="Automation Design Solutions"
						desc={[
							<strong>Freelance Web Developer</strong>,
							<br />,
							<i>September 2021 - October 2021</i>,
							<p>
								Designed and developed the public-facing
								Chatham-Kent website,
							</p>,
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
							<p>
								Designed and developed the public-facing
								Chatham-Kent website,
							</p>,
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
					<hr class="headerUnderline mx-auto" />
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
					<hr class="headerUnderline mx-auto" />
					<Card
						src="/img/ADS_favicon.png"
						alt="Automation Design Solutions Logo"
						title="Automation Design Solutions Website"
						desc={[
							<p>
								Designed, developed and deployed the new ADS company website.
							</p>,
						]}
						badges={[
							"HTML",
							"CSS",
							"Javascript",
							"Jquery",
							"Bootstrap",
							"cPanel"
						]}
					/>
					<Card
						src="/img/CK.png"
						alt="Municipality of Chatham-Kent Logo"
						title="Municipality of Chatham-Kent Website"
						desc={[
							<p>
								Refreshed the Chatham-Kent website, breathing life into the municipality's online presense. 
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
						title="Fencing Team Website"
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
			<div id="contact" className="section dark">
				<div className="container text-center py-7">
					<h2>Drop a Line</h2>
				</div>
			</div>
		</div>
	);
}

export default App;
