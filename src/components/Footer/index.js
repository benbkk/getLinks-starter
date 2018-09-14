import React from 'react';
import styled from 'react-emotion';
import { position } from 'polished';



const SiteFooter = (props) => {
    const Footer = styled('footer')`

        color: white;
        background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
    `;
    const P = styled('p')`
        font-size: 14px;
        line-height: 1.4;
    `;
    return (
        <Footer className="footer">
            <div className="container">
                <div className="row">
                
                    <div className="col-sm-6">
                        <div className="inner-wrap mt-4">
                        <ul className="list-unstyled">
  <li className="media">
    <img className="mr-3" src="https://via.placeholder.com/64x64" alt="Generic placeholder image" />
    <div className="media-body">
      <h5 className="mt-0 mb-2">List-based media object</h5>
      <P>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</P>
    </div>
  </li>
  
</ul>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="inner-wrap">
                            FooterLinks
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="inner-wrap">
                            FooterLinks
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="container text-center">
                    <span>
                        &copy; 2018
                    </span>
                </div>
            </div>
        </Footer>
    )
}

export default SiteFooter;
