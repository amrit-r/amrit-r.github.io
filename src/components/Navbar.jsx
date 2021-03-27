import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="pages-nav" id="page-navbar">
        <div className="pages-nav__item">
          <a className="link link--page" href="#page-home">
            Home
          </a>
        </div>
        <div className="pages-nav__item">
          <a className="link link--page" href="#page-portfolio">
            Portfolio
          </a>
        </div>
        <div className="pages-nav__item">
          <a className="link link--page" href="#page-about">
            About
          </a>
        </div>
        <div className="pages-nav__item">
          <a className="link link--page" href="#page-blogs">
            Blogs
          </a>
        </div>
        <div className="pages-nav__item">
          <a className="link link--page" href="#page-contact">
            Contact Me
          </a>
        </div>
        <div className="pages-nav__item pages-nav__item--social">
          <a className="link link--social link--faded" href="#twitter">
            <i className="fa fa-twitter"></i>
            <span className="text-hidden">Twitter</span>
          </a>
          <a className="link link--social link--faded" href="#twitter">
            <i className="fa fa-linkedin"></i>
            <span className="text-hidden">LinkedIn</span>
          </a>
          <a className="link link--social link--faded" href="#twitter">
            <i className="fa fa-facebook"></i>
            <span className="text-hidden">Facebook</span>
          </a>
          <a className="link link--social link--faded" href="#twitter">
            <i className="fa fa-youtube-play"></i>
            <span className="text-hidden">YouTube</span>
          </a>
          <a className="link link--social link--faded" href="#twitter">
            <i className="fa fa-github"></i>
            <span className="text-hidden">GitHub</span>
          </a>
          <a className="link link--social link--faded" href="#twitter">
            <i className="fa fa-instagram"></i>
            <span className="text-hidden">Instagram</span>
          </a>
        </div>
      </div>
    );
  }
}
