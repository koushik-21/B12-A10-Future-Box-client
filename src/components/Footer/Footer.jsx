import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <title>IEBD-Privacy & Policy</title>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-8 mt-0">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link className="link link-hover" to={"/termsOfUse"}>
            Terms of use
          </Link>
          <Link className="link link-hover" to="/privacyPolicy">
            Privacy policy
          </Link>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://i.ibb.co.com/8DZhVPZm/A-Rnrh0-J7i-Km-ABsk-Tonq-FAANRLGTGUg-nu-E4-PEMYw-Jav-L3n-Pt5u-Ws-U2-WO-DSg-V-m-OOM.png" // <-- replace with your actual logo path
                alt="X Logo"
                className="w-6 h-6" // adjust size as needed
              />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current "
                href="https://www.youtube.com/"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
          <p className="text-gray-500">
            For any contact email us at : <br />
            <a
              href="mailto:support@iebd.example"
              className="text-teal-600 underline"
            >
              support@iebd.example
            </a>
          </p>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-80">
            <label className="text-gray-600">
              Submit email & we will contact with you
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-info text-white join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <p className="text-center text-xs text-gray-400 bg-base-200 pb-2">
        Copyright © 2025 - All right reserved by IEBD Industries Ltd
      </p>
    </div>
  );
};

export default Footer;
