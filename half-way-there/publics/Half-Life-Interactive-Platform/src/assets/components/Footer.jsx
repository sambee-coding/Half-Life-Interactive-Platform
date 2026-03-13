import React from 'react'

export default function Footer() {
  return (
    <div>
        <section className="footer">
   <footer className="bg-dark text-light py-4 mt-5">
  <div className="container">
    <div className="row">

      <div className="col-md-4">
        <h5>About</h5>
        <p>This festival celebrates creativity and memories.</p>
      </div>

      <div className="col-md-4">
        <h5>Quick Links</h5>
        <ul className="list-unstyled" >
          <li><a href="#" class="text-light text-decoration-none" id="quick-links">Home</a></li>
          <li><a href="gallery.html" className="text-light text-decoration-none" id="quick-links">Gallery</a></li>
          <li><a href="contact.html" className="text-light text-decoration-none" id="quick-links">Contact</a></li>
        </ul>
      </div>

      <div className="col-md-4">
        <h5>Contact</h5>
        <p>Email: example@email.com</p>
      </div>

    </div>

    <hr className="border-light" />

    <div className="text-center">
      <p className="mb-0">© 2026/2018 Half-Life Festival Project. All rights reserved.</p>
    </div>

  </div>
</footer>
   </section>
    </div>
  )
}
