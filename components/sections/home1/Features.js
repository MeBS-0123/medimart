import Link from 'next/link';
import React from 'react';

export default function feature() {
  return (
    <section className="feature-section pt_120 pb_90">
    <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-6.png)' }}></div>
    <div className="auto-container">
      <div className="row clearfix">
        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
          <div className="feature-block-one">
            <div className="inner-box">
              <div className="icon-box"><i className="icon-9"></i></div>
              <h3><Link href="/">Médicos Calificados</Link></h3>
              <p>Contamos con especialistas con amplia experiencia y vocación de servicio.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
          <div className="feature-block-one">
            <div className="inner-box">
              <div className="icon-box"><i className="icon-10"></i></div>
              <h3><Link href="/">Atención de Urgencias</Link></h3>
              <p>Te atendemos de forma rápida y segura ante cualquier emergencia.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
          <div className="feature-block-one">
            <div className="inner-box">
              <div className="icon-box"><i className="icon-11"></i></div>
              <h3><Link href="/">Equipos Modernos</Link></h3>
              <p>Tecnología de última generación para un diagnóstico preciso.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
          <div className="feature-block-one">
            <div className="inner-box">
              <div className="icon-box"><i className="icon-12"></i></div>
              <h3><Link href="/">Medicina Familiar</Link></h3>
              <p>Cuidamos de cada miembro de tu familia con atención integral.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
