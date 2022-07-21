import React from "react";

import dompetku from "../assets/img/dompetku.png";
import dompetku2 from "../assets/img/dompetku2.png";
import sircleLine from "../assets/img/sircleLine.png";
import phoneHeader from "../assets/img/phone-header.png";
import garisFooter from "../assets/img/hr-fe.png";
import support from "../assets/img/support.png";
import dataPrivacy from "../assets/img/privacy.png";
import easyDownload from "../assets/img/easyDownload.png";
import sponsor from "../assets/img/sponsor.png";
import phone2 from "../assets/img/png-phone2.png";
import sherina from "../assets/img/sherina.png";
import jessica from "../assets/img/jessica.png";
import robert from "../assets/img/robert.png";

function LandingPage() {
  return (
    <div>
      <header>
        <div class="menu">
          <div class="logo">
            <img src={dompetku} alt="logo dompetku" />
            <img src={dompetku2} alt="logo dompetku" />
          </div>
          <div class="awesome">
            <span class="saving">
              Awesome App <br /> For Saving <span class="time"> Time.</span>
            </span>
            <h6>
              We bring you a mobile app for banking problems that <br /> oftenly
              wasting much of your times.
            </h6>
            <a href="/ibootstrap/dashboard/signup.html" class="try-it-free">
              <button>Try It Free</button>
            </a>
          </div>
          {/* <img src={} alt="Transaction History" class="trans-hst-responsive"/> */}
        </div>
        <div class="header-right">
          <a href="/ibootstrap/dashboard/login.html" class="login">
            <button>Login</button>
          </a>
          <a href="/ibootstrap/dashboard/signup.html" class="signup">
            <button class="btn-signup">Sign Up</button>
          </a>
          <img src={sircleLine} class="sircle-line" alt="sircle-line" />
        </div>
      </header>
      <img
        src={phoneHeader}
        alt="Transaction History"
        class="transaction-hst"
      />

      <section>
        <div class="about">
          <div class="about-top">
            <span>
              <span class="about-the">About</span> the Application.
            </span>
            <h6>
              We have some great features from the application and it's totally
              free <br /> to use by all users around the world.
            </h6>
          </div>
          <div class="about-desc">
            <div class="support">
              <div class="icons8">
                <img src={support} alt="Support" />
              </div>
              <span>24/7 Support</span>
              <h6>
                We have 24/7 contact support so you <br /> can contact us
                whenever you want <br /> and we will respond it.
              </h6>
            </div>
            <div class="data-privacy">
              <div class="icons8">
                <img src={dataPrivacy} alt="data-privacy" />
              </div>
              <span>Data Privacy</span>
              <h6>
                We make sure your data is safe in our <br /> database and we
                will encrypt any <br /> data you submitted to us.
              </h6>
            </div>
            <div class="easy-download">
              <div class="icons8">
                <img
                  src={easyDownload}
                  alt="easy-download"
                />
              </div>
              <span>Easy Download</span>
              <h6>
                Zwallet is 100% totally free to use it's <br /> now available on
                Google Play Store <br /> and App Store.
              </h6>
            </div>
          </div>
        </div>
        <div class="trusted-partner">
          <div class="tp-left">
            <span>
              100+ <span class="partner">Trusted </span> <br />
              Partners.
            </span>
            <h6>
              We have reached global level and have 100+ <br />
              brand partners around the globe.
            </h6>
          </div>
          <div class="tp-right">
            <img src={sponsor} alt="sponsorship" />
          </div>
        </div>
        <div class="thegreat">
          <div>
            <img src={phone2} alt="phone" />
          </div>
          <div class="great-features">
            <span class="zwallet-features">
              All The <span class="great">Great</span>
              <br />
              Zwallet Features.
            </span>
            <div class="thegreat123">
              <h5 class="gf123">
                <span class="no-great">1.</span> Small Fee
              </h5>
              <h5 class="text">
                We only charge 5% of every success transaction done in Zwallet
                app.
              </h5>
            </div>
            <div class="thegreat123">
              <h5 class="gf123">
                <span class="no-great">2.</span> Data Secured
              </h5>
              <h5 class="text">
                All your data is secured properly in our system and it's
                encrypted.
              </h5>
            </div>
            <div class="thegreat123">
              <h5 class="gf123">
                <span class="no-great">3.</span> User Friendly
              </h5>
              <h5 class="text">
                Zwallet come up with modern and sleek design and not
                complicated.
              </h5>
            </div>
          </div>
        </div>
        <div class="feedback">
          <div class="feedback-top">
            <span class="wuas">
              What Users are <span class="saying">Saying.</span>
            </span>
            <h5>
              We have some great features from the application and it’s totally
              free <br /> to use by all users around the world.
            </h5>
          </div>

          <div class="feedback-users">
            <div class="sherina">
              <div>
                <img src={sherina} alt="sherina" />
              </div>
              <span>Sherina Chaw</span>
              <h5>
                “I use this app since 2 years ago and <br /> this is the best
                app that I’ve ever use <br /> in my entire life”
              </h5>
            </div>
            <div class="jessica">
              <div>
                <img src={jessica} alt="jessica" />
              </div>
              <span>Jessica Mera</span>
              <h5>
                “I use Zwallet to manage all financial <br /> needs. It’s super
                easy to use and it’s <br /> 100% free app”
              </h5>
            </div>
            <div class="robert">
              <div>
                <img src={robert} alt="robert" />
              </div>
              <span>Robert Chandler</span>
              <h5>
                “Since I’m using this app, I’m not <br /> going to move to
                another similar app. <br /> Thank you Zwallet!”
              </h5>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div class="logo-foot">
          <img src={dompetku} alt="logo dompetku" />
          <img src={dompetku2} alt="logo dompetku" />
        </div>
        <span>
          Simplify financial needs and saving <br /> much time in banking needs
          with <br /> one single app.
        </span>
        <img src={garisFooter} alt="garis footer" class="hr" />
        <div class="copyright">
          <div class="reserved">2020 iWallet. All right reserved.</div>
          <div class="contact">
            <span>+62 5637 8882 9901</span>
            <span>contact@zwallet.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
