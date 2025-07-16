import Link from 'next/link';
import React from 'react';

export default function chooseus() {
  return (
    <section className="chooseus-section">
      <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/chooseus-bg.jpg)' }}></div>
      <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-12.png)' }}></div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-8 col-md-12 col-sm-12 content-column">
            <div className="content-box">
              <div className="sec-title light mb_50">
                <span className="sub-title">¿Por qué elegirnos?</span>
                <h2>Elige lo mejor para tu salud con  <br />confianza y calidad</h2>
              </div>
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box"><i className="icon-18"></i></div>
                      <h3>Personal Calificado</h3>
                      <p>	Profesionales comprometidos con tu bienestar integral.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box"><i className="icon-10"></i></div>
                      <h3>Atención de Emergencias</h3>
                      <p>Listos para ayudarte en cualquier momento.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box"><i className="icon-19"></i></div>
                      <h3>Citas en Línea</h3>
                      <p>Agenda fácilmente tu atención desde casa.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                  <div className="chooseus-block-one">
                    <div className="inner-box">
                      <div className="icon-box"><i className="icon-8"></i></div>
                      <h3>Ambiente Confiable</h3>
                      <p>Instalaciones cómodas, seguras y preparadas para ti.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
