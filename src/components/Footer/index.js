import React from 'react';
import styled from 'react-emotion';
import { palette } from 'css/variables';
import { lighten, darken } from 'polished';


const SiteFooter = (props) => {
    const Footer = styled('footer')`
        color: white;
        background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% );
        color: ${lighten(0.3, palette.secondary)};
    `;
    const P = styled('p')`
        font-size: 14px;
        line-height: 1.4;
        color: ${lighten(0.2, palette.secondary)};
    `;
    const Copyright = styled('span')`
        border-top: 1px solid ${palette.dark};
    `;
    const Link = styled('a')`
        border-bottom: 1px dotted ${darken(0.2, palette.secondary)};
        color: ${lighten(0.2, palette.secondary)};
        &:hover {
            text-decoration: none;
            color: ${lighten(0.3, palette.secondary)};
        }
    `;

    return (
        <Footer className="footer pt-5">
            <div className="container">
                <div className="row pb-5 justify-content-between">
                    <div className="col-sm-8">
                        <div className="inner-wrap">
                            <ul className="list-unstyled">
                                <li className="media">
                                    <img
                                        className="mr-3"
                                        src="https://via.placeholder.com/64x64"
                                        alt="Generic placeholder image"
                                    />
                                    <div className="media-body">
                                        <h4 className="mt-0 mb-2">
                                            List-based media object
                                        </h4>
                                        <P>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                                        </P>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="inner-wrap">
                           <h5 className="mt-0 mb-2">
                                Footer Links
                            </h5>
                            <ul className="nav d-block">
                                <li className="nav-item d-block">
                                    <Link className="py-2 d-block" href="/">A Link</Link></li>
                                <li className="nav-item d-block">
                                    <Link className="py-2 d-block" href="/">Another Link</Link></li>
                                <li className="nav-item d-block">
                                    <Link className="py-2 d-block" href="/">Yet Another Link</Link></li>
                                <li className="nav-item d-block">
                                    <Link className="py-2 d-block" href="/">Even More Link Link</Link></li>
                                <li className="nav-item d-block"><Link className="py-2 d-block" href="/">Is there Any End of This?</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="container">
                    <Copyright className="d-block py-4 text-secondary">
                        &copy; 2018
                    </Copyright>
                </div>
            </div>
        </Footer>
    );
};

export default SiteFooter;
