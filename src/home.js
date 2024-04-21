import { Link } from "react-router-dom"

function Home() {
    return(
        
        <>
        
        <div className="homebg">
            <h1 className='quotehome'>“A successful website does three things: It attracts the right kinds of visitors. Guides them to the main services or products you offer. Collect Contact details for future ongoing relation.” </h1>
            
            <h1 className="h1">To Contact us</h1>
            <button className='btn btn-success btn-block homebtn'><Link className='btn btn-success btn-block homebtn' to='/contact' >click here </Link></button>
        </div>
        </>
    )
}
export default Home