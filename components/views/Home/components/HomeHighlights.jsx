import React from 'react';

function HomeHighlights() {
    return (
        <section className="home-about">
            <div className="home-about__container">
                <h2 className="txt-xlrg home-about__heading txt-primary">Service Highlights</h2>
                <div className="home-about__lists-container">
                    <ul className="home-about__list">
                        <li className="home-about__list-item"><i className="fas fa-chevron-right home-about__list-icon"></i>Professional Water & Mold Inspections </li>
                        <li className="home-about__list-item"><i className="fas fa-chevron-right home-about__list-icon"></i>Flood Mitigation & Extraction</li>
                        <li className="home-about__list-item"><i className="fas fa-chevron-right home-about__list-icon"></i>Fire & Smoke Restoration </li>
                        <li className="home-about__list-item"><i className="fas fa-chevron-right home-about__list-icon"></i>Mold Removal</li>
                        <li className="home-about__list-item"><i className="fas fa-chevron-right home-about__list-icon"></i>24 Hour Emergency Response</li>
                        <li className="home-about__list-item"><i className="fas fa-chevron-right home-about__list-icon"></i>Speak With a Live Person 24/7</li>
                    </ul>
                    <ul className="home-about__list">
                        <li className="home-about__list-item"><i className="fas fa-chevron-right home-about__list-icon"></i>On Site Within 60 Minutes</li>
                        <li className="home-about__list-item"><i className="fas fa-chevron-right home-about__list-icon"></i>IICRC & EPA Certified</li>
                        <li className="home-about__list-item"><i className="fas fa-chevron-right home-about__list-icon"></i>Thousands of Satisfied Customers</li>
                        <li className="home-about__list-item"><i className="fas fa-chevron-right home-about__list-icon"></i>Biohazard Containment and Cleanup</li>
                        <li className="home-about__list-item"><i className="fas fa-chevron-right home-about__list-icon"></i>Preferred Insurance Vendor</li>
                        <li className="home-about__list-item"><i className="fas fa-chevron-right home-about__list-icon"></i>Work with and bill directly ALL Insurance Companies</li>
                    </ul>
                    {/* Keep this Iframe in here because it illustrates and example that can be used in the future */}
                    {/* <iframe className="home-about__video" src="https://www.youtube.com/embed/7gy9_x6Ay0o" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                </div>
            </div>
        </section>
    );
}

export default HomeHighlights;