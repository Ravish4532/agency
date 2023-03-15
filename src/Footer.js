import React from 'react';
import {AiFillFacebook} from "react-icons/ai"
import {AiFillTwitterSquare} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"

const Footer = () => {
  return (
    <div className="App">
               <footer class="footer py-4">
            <div class="container">
                <div className="row align-items-center">
                    <div class="col-lg-4 text-lg-start">Copyright &copy; My Website 2023</div>
                    <div class="col-lg-4 my-3 my-lg-0">
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i class="AiFillTwitterSquare"><AiFillTwitterSquare /></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i class="AiFillFacebook"><AiFillFacebook /></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i class="AiFillLinkedin"><AiFillLinkedin /></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>

      </div>
  );
}

export default Footer;