function About() {
    return(
        <>
        <div className="aboutbg">
        <div className="about-section">
  <h1>About Us </h1>
  <p>We are here to develop your web site </p>
  <p>@ All copy rights recived 2023 </p>
</div>

<h2 className='h2about' >Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <img className='imgabout' src="https://static.vecteezy.com/system/resources/thumbnails/006/859/348/small/young-boy-indian-student-portrait-photo.jpg" alt="Jane" />
      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@gmail.com</p>
        <p><a href='./contact'><button class="button">Contact</button></a></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img className='imgabout' src="https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" alt="Mike" />
      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@gmail.com</p>
        <p><a href='./contact'><button class="button">Contact</button></a></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img className='imgabout' src="https://t3.ftcdn.net/jpg/06/11/89/42/360_F_611894278_6sIqAi9Akdrw9aNulK77WHPJJHJFWTV0.jpg" alt="John" />
      <div class="container">
        <h2>John Doe</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@gmail.com</p>
        <p><a href='./contact'><button class="button">Contact</button></a></p>
      </div>
    </div>
  </div>
</div>
        </div>
        
        </>
    )
    
}
export default About