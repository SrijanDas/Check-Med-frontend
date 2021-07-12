
import React from 'react'
import "./Feedback.css"
const Feedback = () => {
    return (
        <div class="wrapper1">
			<div class="inner1">
				<form action="">
					<h3> FeedBack </h3>
				<p>Please provide your feedback</p>
					
                    <div class="col-sm-12 form-group">
                                <label><h4>How do you rate your overall experience?</h4></label>
                                <p>
                                    <label class="radio-inline">
                                        <input type="radio" name="experience" id="radio_experience" value="bad" />
                                        Bad 
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" name="experience" id="radio_experience" value="average" />
                                        Average 
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" name="experience" id="radio_experience" value="good" />
                                        Good 
                                    </label>
                                </p>
                                <label class="form-group" >
						<textarea name="" id="" class="form-control" required></textarea>
						<span for="">Feedback</span>
						<span class="border"></span>
					</label>
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
					
					</div>
					<button>Submit 
						<i class="zmdi zmdi-arrow-right"></i>
					</button>
				</form>
			</div>
		</div>
        
    )
}

export default Feedback
