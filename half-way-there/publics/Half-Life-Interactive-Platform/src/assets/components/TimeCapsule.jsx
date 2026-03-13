import React from 'react'
import TimeCapsuleImage from '../images/undraw_people_ka7y.svg'

export default function TimeCapsule() {
  return (
    <div>
       <section id="TimeCapsule" className="py-5">
    <div className="container">
      <div className="row align-items-center" id="contian-ner">
       

        <div className="col-md-6">
          <img src={TimeCapsuleImage} className="img-fluid rounded float-start" alt="illustration spot"/>
        </div>

        <div className="col-md-6 ">
           <div className="time-capsule p-4 border rounded shadow-sm">
            <h2 className="mb-4 " id="time-capsule-text">Time Capsule</h2>
            <form>
              <div className="mb-3">
                <label for="message" className="form-label">Enter Your Message</label>
                <textarea className="form-control" id="message" placeholder="Write something for your future self...." rows="8"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
           </div> 
        </div>
      </div>
    </div>
   </section>
    </div>
  )
}
