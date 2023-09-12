import React from "react"
import './footer.css'
export default function Footer() {
  return <div className="footer fixed-bottom">
   <div className="container ">
    <div className="row">
        <div className="col-md-4">
            <h3>Location</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
        </div>
        <div className="col-md-4">
            <h3>AROUND THE WEB</h3>
             <div className="row w-50">
                <div className="col-3"><i class="fa-brands fa-facebook fa-lg"></i></div>
                <div className="col-3"><i class="fa-brands fa-linkedin fa-lg"></i></div>
                <div className="col-3"><i class="fa-brands fa-twitter fa-lg"></i></div>
                <div className="col-3"><i class="fa-brands fa-youtube fa-lg"></i></div>
             </div>
        </div>
        <div className="col-md-4">
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
    </div>
  </div>
   <div className="copyright">Copyright © Your Website 2021</div>
  </div>
}
