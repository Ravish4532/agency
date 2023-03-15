import React from 'react';
import parveen from "./assets/img/team/1.jpg"
import diana from "./assets/img/team/2.jpg"
import larry from "./assets/img/team/3.jpg"
import {AiFillFacebook} from "react-icons/ai"
import {AiFillTwitterSquare} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
const Team = () => {
  return (
    <div classNameName="App">
      <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={parveen} alt="..." />
                            <h4>Parveen Anand</h4>
                            <p className="text-muted">Lead Designer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="AiFillTwitterSquare"><AiFillTwitterSquare /></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="AiFillFacebook"><AiFillFacebook /></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i className="AiFillLinkedin"><AiFillLinkedin /></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={diana} alt="..." />
                            <h4>Diana Petersen</h4>
                            <p className="text-muted">Lead Marketer</p>
                          <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i className="AiFillTwitterSquare"><AiFillTwitterSquare /></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="AiFillFacebook"><AiFillFacebook /></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i className="AiFillLinkedin"><AiFillLinkedin /></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={larry} alt="..." />
                            <h4>Larry Parker</h4>
                            <p className="text-muted">Lead Developer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="AiFillTwitterSquare"><AiFillTwitterSquare /></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="AiFillFacebook"><AiFillFacebook /></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="AiFillLinkedin"><AiFillLinkedin /></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
        
        </div>
  );
}

export default Team;