'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function service() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Service-Details">
                <div>
                    {/* service-section */}
                    <section className="service-details pt_120 pb_110">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                    <div className="default-sidebar service-sidebar mr_15">
                                        <div className="sidebar-widget category-widget">
                                            <div className="widget-title">
                                                <h3>Categories</h3>
                                            </div>
                                            <div className="widget-content">
                                                <ul className="category-list clearfix">
                                                    <li><Link href="service-details">Cardiología</Link></li>
                                                    <li><Link href="service-details-6">Cirugía General</Link></li>
                                                    <li><Link href="service-details-2">Ginecología</Link></li>
                                                    <li><Link href="service-details-3" className="current">Neumología</Link></li>
                                                    <li><Link href="service-details-5">Nutrición</Link></li>
                                                    <li><Link href="service-details-4">Reumatología</Link></li>
                                                    <li><Link href="service-details-8">Traumatología</Link></li>
                                                    <li><Link href="service-details-9">Urología</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="service-block-one">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><img src="assets/images/service/service-1.jpg" alt="" /></figure>
                                                    <div className="icon-box">
                                                        <i className="fas fa-lungs"></i>
                                                    </div>
                                                </div>
                                                <div className="lower-content">
                                                    <h3>Neumología</h3>
                                                    <p>Diagnóstico y tratamiento de enfermedades respiratorias como asma, EPOC, entre otros.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                                    <div className="service-details-content">
                                        <div className="content-one mb_60">
                                            <figure className="image-box mb_40" style={{ maxWidth: '857px', margin: '0 auto' }}>
                                                <div style={{ position: 'relative', paddingBottom: '54.6%', height: 0, overflow: 'hidden' }}>
                                                    <iframe
                                                        src="https://www.youtube.com/embed/T-iZwhCypNs"
                                                        title="YouTube video player"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                        style={{
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            width: '100%',
                                                            height: '100%',
                                                        }}
                                                    ></iframe>
                                                </div>
                                            </figure>
                                            <div className="row">
                                                {/* Columna izquierda: Atiende pacientes con */}
                                                <div className="col-lg-6 col-md-12 col-sm-12">
                                                    <div className="text-box">
                                                        <h2>Neumología</h2>
                                                        <h4>Atiende pacientes con:</h4>
                                                        <ul>
                                                            <li>✔️ Enfermedades del pulmón</li>
                                                            <li>✔️ Asma</li>
                                                            <li>✔️ Sinusitis</li>
                                                            <li>✔️ Rinitis alérgica</li>
                                                            <li>✔️ Urticaria</li>
                                                            <li>✔️ Fibrosis pulmonar</li>
                                                            <li>✔️ Asma bronquial</li>
                                                            <li>✔️ Tos crónica</li>
                                                            <li>✔️ Neumonía</li>
                                                            <li>✔️ Bronquitis</li>
                                                            <li>✔️ EPOC</li>
                                                            <li>✔️ Apnea del sueño</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* Columna derecha: También realizará */}
                                                <div className="col-lg-6 col-md-12 col-sm-12">
                                                    <div className="text-box mt-5">
                                                        <h4>También realizará:</h4>
                                                        <ul>
                                                            <li>✔️ Espirometría</li>
                                                            <li>✔️ Radiografía de tórax</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* service-section end */}
                    {/* subscibe */}
                    <section className="subscribe-section">
                        <div className="auto-container">
                            <div className="inner-container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                                        <div className="text-box">
                                            <h2><span>Subscribe</span> for the exclusive updates!</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                                        <div className="form-inner">
                                            <form method="post" action="contact">
                                                <div className="form-group">
                                                    <input type="email" name="email" placeholder="Enter Your Email Address" required />
                                                    <button type="submit" className="theme-btn btn-one"><span>Subscribe Now</span></button>
                                                </div>
                                                <div className="form-group">
                                                    <div className="check-box">
                                                        <input className="check" type="checkbox" id="checkbox1" />
                                                        <label htmlFor="checkbox1">I agree to the <Link href="/">Privacy Policy.</Link></label>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* subscibe end */}
                </div>

            </Layout>
        </>
    )
}