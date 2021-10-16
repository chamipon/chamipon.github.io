import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/navbar.js";

function App() {
	return (
		<div className="App">
			<div id="landing" className="d-flex">
				<h1 className="m-auto d-block text-center">
					Zachary Kucera
					<br />
					<hr class="mx-auto" />
					<span>Software Developer</span>
				</h1>
			</div>
			<Navbar />
			<div id="about">
				<div className="container text-center my-5">
					<h2>About Me</h2>
				</div>
			</div>
			<div id="skills">
				<div className="container text-center my-5">
					<h2>Skills</h2>
					<p>
						{" "}
						I have worked with many different programming languages,
						frameworks, engines and development tools. Angular and
						Node.js are my go to technologies for web applications,
						and C++ is my default programming language.{" "}
					</p>
					<div class="row">
						<div class="col-3">Javascript</div>
						<div class="col-3">C#</div>
						<div class="col-3">Node.Js</div>
						<div class="col-3">C++</div>
					</div>
					<div class="row">
						<div class="col-6">
							<h3>Development Tools</h3>
              <ul>
                <li>Git</li>
                <li>MySQL</li>
                <li>Windows</li>
                <li>Linux</li>
              </ul>
						</div>
						<div class="col-6">
							<h3>Frameworks</h3>
              <ul>
                <li>React</li>
                <li>Unity</li>
                <li>Sharepoint</li>
                <li>Bootstrap</li>
              </ul>
						</div>
					</div>
				</div>
			</div>
			<div id="education">
				<div className="container text-center my-5">
					<h2>Education</h2>
				</div>
			</div>
			<div id="projects">
				<div className="container text-center my-5">
					<h2>Projects</h2>
				</div>
			</div>
			<div id="experience">
				<div className="container text-center my-5">
					<h2>Work Experience</h2>
				</div>
			</div>
			<div id="contact">
				<div className="container text-center my-5">
					<h2>Drop a Line</h2>
				</div>
			</div>
		</div>
	);
}

export default App;
