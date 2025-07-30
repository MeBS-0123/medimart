import Link from "next/link"

export default function Footer1() {
  return (
    <>
      <footer className="main-footer" id="footer">
        <div className="pattern-layer">
          <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-23.png)" }}></div>
          <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-24.png)" }}></div>
          <div className="pattern-3" style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}></div>
          <div className="pattern-4"></div>
        </div>
        <div className="widget-section pt_120 pb_100">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo"><Link href="/"><img src="assets/images/logoB.png" alt="" /></Link></figure>
                  <p>Lorem ipsum dolor sit amet constetur adipiscing elit. Etiam eu turpis mostie dictum est a, mattis tellus.</p>
                  <ul className="social-links clearfix">
                    <li><Link href="https://www.instagram.com/nutrimedrodriguezde?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><i className="icon-4"></i></Link></li>
                    <li><Link href="/"><i className="fab fa-youtube"></i></Link></li>
                    <li><Link href="/"><i className="fab fa-tiktok"></i></Link></li>
                    <li><Link href="https://www.facebook.com/profile.php?id=100090713952617" target="_blank"><i className="icon-7"></i></Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget ml_90">
                  <div className="widget-title">
                    <h3>Nutrimed</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix" style={{ color: "#fff !important" }}>
                      <li><Link href="/">Inicio</Link></li>
                      <li><Link href="/about">Nosotros</Link></li>
                      <li><Link href="/especialidades">Especialidades</Link></li>
                      <li><Link href="/servicios">Servicios</Link></li>
                      <li><Link href="/cursos">Cursos</Link></li>
                      <li><Link href="/contact">Contáctanos</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget ml_10 mr_55">
                  <div className="widget-title">
                    <h3>Horarios</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="list-unstyled text-white">
                      <li className="d-flex justify-content-between">
                        <span>Domingo</span><span>7:30 am - 7:00 pm</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>Lunes</span><span>7:30 am - 7:00 pm</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>Martes</span><span>7:30 am - 7:00 pm</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>Miércoles</span><span>7:30 am - 7:00 pm</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>Jueves</span><span>7:30 am - 7:00 pm</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>Viernes</span><span>7:30 am - 6:00 pm</span>
                      </li>
                    </ul>

                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget contact-widget">
                  <div className="widget-title">
                    <h3>Ubícanos</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="info-list">
                      <li>
                        <i className="fab fa-whatsapp"></i> <Link href="tel:+51974603071">+51 974 603 071</Link>
                      </li>
                      <li>
                        <i className="fas fa-envelope"></i> <Link href="mailto:nutrimed@gmail.com">nutrimed@gmail.com</Link>
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i> Jr. El Porvenir N° 200, Rodríguez de Mendoza, Amazonas
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="bottom-inner">
              <ul className="footer-nav clearfix">
                <li><Link href="/">Privacy Policy</Link></li>
                <li><Link href="/">Terms of Use</Link></li>
                <li><Link href="/">Sales and Refunds</Link></li>
                <li><Link href="/">Legal</Link></li>
                <li><Link href="/">Site Map</Link></li>
              </ul>
              <div className="copyright">
                <p>&copy; 2024 All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}
