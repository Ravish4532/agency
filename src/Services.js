import React from 'react';
import design from "./assets/img/services/rw.png"
import security from "./assets/img/services/download.png"
import shopping from "./assets/img/services/ec.png"

const Services = () => {
  return (
    <div classNameName="App">
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row text-center">

                    <div className="col-md-4">
                     <span className="fa-stack fa-4x">
                     <img className="rounded-circle" src={shopping} alt="..." />
                    
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">E-Commerce</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
 
                    <div className="col-md-4">
                    <img class="rounded-circle " src={design} alt="..." />
                    
                           <span class="fa-stack fa-4x">
                          
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Responsive Design</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>

                    <div className="col-md-4">
                    <img class="rounded-circle" src={security} alt="..." />
                      
                        <span class="fa-stack fa-4x">
                      
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Web Security</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                </div>
            </div>
        </section>
             
        
      </div>
  );
}

export default Services;