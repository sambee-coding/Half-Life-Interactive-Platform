import React from 'react'

export default function FavoritePhotos() {
  return (
    <div>
      <section id="Fav-photo-of-the-festival">
    <div className="container">
      <div className="row g-4" id="Fav-photos">
        <div className="col-md-4">
          <div className="photo-box"></div>
        </div>
          <div className="col-md-4">
               <div className="photo-box"></div>
          </div>
            <div className="col-md-4">
                 <div className="photo-box"></div>
            </div>
      </div>
      <button className="btn btn-primary " id="btn-for-fav-photo">Enter</button>
    </div>
   </section>
    </div>
  )
}
