import Link from 'next/link';
import React from 'react';

export default function service() {
  return (
    <section className="service-section about-section sec-pad bg-color-1">
      <div className="pattern-layer">
        <div className="pattern-1 rotate-me" style={{ backgroundImage: 'url(/assets/images/shape/shape-8.png)' }}></div>
        <div className="pattern-2 rotate-me" style={{ backgroundImage: 'url(/assets/images/shape/shape-8.png)' }}></div>
        <div className="pattern-3 rotate-me" style={{ backgroundImage: 'url(/assets/images/shape/shape-9.png)' }}></div>
        <div className="pattern-4" style={{ backgroundImage: 'url(/assets/images/shape/shape-10.png)' }}></div>
      </div>
      <div className="auto-container">
        <div className="sec-title mb_50 centred">
          <span className="sub-title">Nuestros Ambientes</span>
          <h2>Cuidamos tu salud con especialidades  <br />médicas y tecnología avanzada </h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><Link href="service-details-3"><img src="/assets/images/service/service-1.jpg" alt="" /></Link></figure>
                  <div className="icon-box"><i className="icon-16"></i></div>
                </div>
                <div className="lower-content">
                  <h3><Link href="service-details-3">Laboratorio Clínico</Link></h3>
                  <p>Contamos con un laboratorio moderno para análisis precisos y resultados confiables en poco tiempo.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><Link href="service-details-6"><img src="/assets/images/service/service-2.jpg" alt="" /></Link></figure>
                  <div className="icon-box"><i className="icon-33"></i></div>
                </div>
                <div className="lower-content">
                  <h3><Link href="service-details-6">Sala de Rayos X</Link></h3>
                  <p>Equipada con tecnología digital para diagnósticos por imagen rápidos y seguros.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><Link href="service-details"><img src="/assets/images/service/service-3.jpg" alt="" /></Link></figure>
                  <div className="icon-box"><i className="icon-21"></i></div>
                </div>
                <div className="lower-content">
                  <h3><Link href="service-details"> Farmacia Interna</Link></h3>
                  <p>Adquiere tus medicamentos de forma rápida y segura, directamente dentro de la clínica.D</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
