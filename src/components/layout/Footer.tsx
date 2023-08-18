import React from "react";
import "./styles/Footer.css";

function Footer() {
    return (
<footer className="new_footer_area bg_color">
                <div className="grid">
                    <hr className="sketch-rule grid__item"/>
                </div>
            <div className="new_footer_top">
                <div className="container">
                    <div className="row">
                        <div>
                            <img src="../layout/assets/images/footer-logo.jpeg" alt="footer-logo"></img>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft' }}>
                                <h3 className="f-title f_600 t_color f_size_18">Category 1</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="#">Page 1</a></li>
                                    <li><a href="#">Page 2</a></li>
                                    <li><a href="#">Page 3</a></li>
                                    <li><a href="#">Page 4</a></li>
                                    <li><a href="#">Page 5</a></li>
                                    <li><a href="#">Page 6</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft' }}>
                                <h3 className="f-title f_600 t_color f_size_18">Category 2</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="#">Page 1</a></li>
                                    <li><a href="#">Page 2</a></li>
                                    <li><a href="#">Page 3</a></li>
                                    <li><a href="#">Page 4</a></li>
                                    <li><a href="#">Page 5</a></li>
                                    <li><a href="#">Page 6</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft' }}>
                                <h3 className="f-title f_600 t_color f_size_18">Category 3</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="#">Page 1</a></li>
                                    <li><a href="#">Page 2</a></li>
                                    <li><a href="#">Page 3</a></li>
                                    <li><a href="#">Page 4</a></li>
                                    <li><a href="#">Page 5</a></li>
                                    <li><a href="#">Page 6</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft' }}>
                                <h3 className="f-title f_600 t_color f_size_18">Category 4</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="#">Page 1</a></li>
                                    <li><a href="#">Page 2</a></li>
                                    <li><a href="#">Page 3</a></li>
                                    <li><a href="#">Page 4</a></li>
                                    <li><a href="#">Page 5</a></li>
                                    <li><a href="#">Page 6</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bg">
                    <div className="footer_bg_one" />
                    <div className="footer_bg_two" />
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                </div>
            </div>
            <div className="footer-copyright-info">
            &copy; iGEM <a href="https://www.iiserb.ac.in/" target="_blank">IISERB</a> 2023. All rights reserved.
        </div>
        <b/>
        <div className="cc-license">
        Content on this site is licensed under a <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons Attribution 4.0 International license.</a>
        </div>
        <div className="gitlab-repository">
        The repository used to create this website is available at <a href="https://gitlab.igem.org/2023/iiser-bhopal" target="blank">gitlab.igem.org/2023/iiser-bhopal.</a>
        </div>
        </footer>

    );
}
export default Footer;
