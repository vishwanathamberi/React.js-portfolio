import { Link, Outlet } from "react-router-dom"

function Timeline() {
    return(
        <>
        <div className="timelinebg">
        <div>
            <h1 className="timelinehed">"To Know My Education and Expirence details please click here!"</h1>
            <button className="btneducation"><Link className="btneducation" to='Education'>Education</Link></button>
            <button className="btneducation"><Link className="btneducation" to='Expirence'>Expirence</Link></button>
            
    
            <Outlet/>
        </div>
        
        
       </div> </>
    )
    
}
export function Education() {
    return(
        
        <div>
        <h1 className="educationhed">EDUCATION DETAILS</h1>
        <div>
            
	<main className="row">
		

		<section className="col">
			
			<header className="title">
				<h2>EDUCATION</h2>
			</header>

			<div class="contents">
				
				<div className="box">
					<h4>2019 - 2023</h4>
					<h3>Malla Reddy Engineering Collage(Hyderabad)</h3>
					<p>I completed my bachlor's degree in the Malla Reddy Engineering Collage at Hyderabad</p>
				</div>

				<div className="box">
					<h4>2017 - 2019</h4>
					<h3>Intermediate(MPC)</h3>
					<p>I completed my Intermediate in the Alphores Junior Collage at Karimnagar </p>
				</div>

				<div className="box">
					<h4>2016 - 2017</h4>
					<h3>SSC</h3>
					<p>I completed my SSC in thE Suryodaya High School at Korutla</p>
			       </div>
               </div>
          </section> 
         </main>
      </div>
      </div>

    
    )
    
}


 export function Expirence() {
    return(
        <>
        <div>
        <h1 className="educationhed">EXPIRENCE DETAILS</h1>
        <main className="row">
		<section className="col">
			
			<header className="title">
				<h2>EXPERIENCE</h2>
			</header>

			<div className="contents">
				
				<div className="box">
					<h4>2023 - 2024</h4>
					<h3>Front-end Developerr</h3>
					<p>In the Front-end development I learned how to create a web site and how to add styles to make responsive web sites</p>
				</div>

				<div className="box">
					<h4>2023 - 2024</h4>
					<h3>React.js</h3>
					<p>In the react.js i have learned How to make single page web site and make responsive web site by suding hooks nad probs and routing.</p>
				</div>

				<div className="box">
					<h4>2023 - 2024</h4>
					<h3>JavaScript</h3>
					<p>In the javaScript ihave learned the how to add events and to make responsive web site</p>
				</div></div>  </section></main>

        </div>
        </>
    )
    
}
export default  Timeline