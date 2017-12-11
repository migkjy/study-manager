import React from 'react';
import { Link } from 'react-router';

export default () => (
  <div className="single">

    <div id="wrapper">

      <header id="header">
        <h1><a href="#">Future Imperfect</a></h1>
        <nav className="links">
          <ul>
            <li><a href="#">Lorem</a></li>
            <li><a href="#">Ipsum</a></li>
            <li><a href="#">Feugiat</a></li>
            <li><a href="#">Tempus</a></li>
            <li><a href="#">Adipiscing</a></li>
          </ul>
        </nav>
        <nav className="main">
          <ul>
            <li className="search">
              <a className="fa-search" href="#search">Search</a>
              <form id="search" method="get" action="#">
                <input type="text" name="query" placeholder="Search" />
              </form>
            </li>
            <li className="menu">
              <a className="fa-bars" href="#menu">Menu</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="menu">

        <section>
          <form className="search" method="get" action="#">
            <input type="text" name="query" placeholder="Search" />
          </form>
        </section>

        <section>
          <ul className="links">
            <li>
              <a href="#">
                <h3>Lorem ipsum</h3>
                <p>Feugiat tempus veroeros dolor</p>
              </a>
            </li>
            <li>
              <a href="#">
                <h3>Dolor sit amet</h3>
                <p>Sed vitae justo condimentum</p>
              </a>
            </li>
            <li>
              <a href="#">
                <h3>Feugiat veroeros</h3>
                <p>Phasellus sed ultricies mi congue</p>
              </a>
            </li>
            <li>
              <a href="#">
                <h3>Etiam sed consequat</h3>
                <p>Porta lectus amet ultricies</p>
              </a>
            </li>
          </ul>
        </section>

        <section>
          <ul className="actions vertical">
            <li><a href="#" className="button big fit">Log In</a></li>
          </ul>
        </section>

      </section>

      <div id="main">

        <article className="post">
          <header>
            <div className="title">
              <h2><a href="#">Magna sed adipiscing</a></h2>
              <p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
            </div>
            <div className="meta">
              <time className="published" dateTime="2015-11-01">November 1, 2015</time>
              <a href="#" className="author"><span className="name">Jane Doe</span><img src="images/avatar.jpg" alt="" /></a>
            </div>
          </header>
          <span className="image featured"><img src="images/pic01.jpg" alt="" /></span>
          <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
          <p>Nunc quis dui scelerisque, scelerisque urna ut, dapibus orci. Sed vitae condimentum lectus, ut imperdiet quam. Maecenas in justo ut nulla aliquam sodales vel at ligula. Sed blandit diam odio, sed fringilla lectus molestie sit amet. Praesent eu tortor viverra lorem mattis pulvinar feugiat in turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce ullamcorper tellus sit amet mattis dignissim. Phasellus ut metus ligula. Curabitur nec leo turpis. Ut gravida purus quis erat pretium, sed pellentesque massa elementum. Fusce vestibulum porta augue, at mattis justo. Integer sed sapien fringilla, dapibus risus id, faucibus ante. Pellentesque mattis nunc sit amet tortor pellentesque, non placerat neque viverra. </p>
          <footer>
            <ul className="stats">
              <li><a href="#">General</a></li>
              <li><a href="#" className="icon fa-heart">28</a></li>
              <li><a href="#" className="icon fa-comment">128</a></li>
            </ul>
          </footer>
        </article>

      </div>

      <section id="footer">
        <ul className="icons">
          <li><a href="#" className="fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="#" className="fa-facebook"><span className="label">Facebook</span></a></li>
          <li><a href="#" className="fa-instagram"><span className="label">Instagram</span></a></li>
          <li><a href="#" className="fa-rss"><span className="label">RSS</span></a></li>
          <li><a href="#" className="fa-envelope"><span className="label">Email</span></a></li>
        </ul>
        <p className="copyright">&copy; Untitled. Design: <a href="http://html5up.net">HTML5 UP</a>. Images: <a href="http://unsplash.com">Unsplash</a>.</p>
      </section>

    </div>

    <script src="assets/js/jquery.min.js" />
    <script src="assets/js/skel.min.js" />
    <script src="assets/js/util.js" />
    <script src="assets/js/main.js" />

  </div>
);
