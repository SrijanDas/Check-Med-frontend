import React from 'react'
import "./Contact.css";
const Contact = () => {
    return (
        
      <div class="wrapper">
			<div class="inner">
				<form action="">
					<h3>Contact Us</h3>
				<p></p>
					<label class="form-group">
						<input type="text" class="form-control"  required/>
						<span>Your Name</span>
						<span class="border"></span>
					</label>
					<label class="form-group">
						<input type="text" class="form-control"  required/>
						<span for="">Your Mail</span>
						<span class="border"></span>
					</label>
					<label class="form-group" >
						<textarea name="" id="" class="form-control" required></textarea>
						<span for="">Your Message</span>
						<span class="border"></span>
					</label>
					<button>Send 
						<i class="zmdi zmdi-arrow-right"></i>
					</button>
				</form>
			</div>
		</div>
        
    )
}

export default Contact
