function Contact() {
    return(
        <>
        <div>
  <div className='contactbg'>
     <div className='wrapper'>
        <div className='contactus'>
             <div className='tittle'> Contact Us</div>
               <div className='inputField'>
                <div className='item'>
                    <label className='label' for='name'>Name</label>
                    <input id='name' type='text' className='input'></input>
            </div>
                <div className='item'>
                    <label className='label' for='email'>Email</label>
                    <input id='email' type='text' className='input'></input>
                </div>
                <div className='item'>
                <label className='label' for='number'>Mobile Number</label>
                    <input id='number' type='number' className='input'></input>
                </div>
                <div className='item'>
                <label className='label' for='name'>country</label>
                    <input id='name' type='text' className='input'></input>
                    <div className='btncont'> Send</div>
                </div></div></div></div>
    
                 
            </div>
        </div>
        </>
    )
    
}
export default Contact
