import React from 'react'

export default function Contact() {
  return (
    <div>
       <section id="contact" className="py-5 bg-light">
        <div className="container">
            <h2 className="mb-4"> Contact Us</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input type="text" className="form-control"/>
                </div>

                 <div className="mb-3">
                    <label className="form-label">Your Email</label>
                    <input type="text" className="form-control"/>
                </div>

                 <div className="mb-3">
                    <label className="form-label">Message</label>
                   <textarea className="form-control" rows="6"></textarea>
                </div>
                <button className="btn btn-primary">Send</button>
            </form>
        </div>
    </section>
    </div>
  )
}
