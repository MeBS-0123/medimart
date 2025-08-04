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
                                                <h3>Categorías</h3>
                                            </div>
                                            <div className="widget-content">
                                                <ul className="category-list clearfix">
                                                    <li><Link href="cardiologia">Cardiología</Link></li>
                                                    <li><Link href="cirugia-general">Cirugía General</Link></li>
                                                    <li><Link href="ginecologia">Ginecología</Link></li>
                                                    <li><Link href="neumologia">Neumología</Link></li>
                                                    <li><Link href="nutricion">Nutrición</Link></li>
                                                    <li><Link href="reumatologia" className="current">Reumatología</Link></li>
                                                    <li><Link href="traumatologia">Traumatología</Link></li>
                                                    <li><Link href="urologia">Urología</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="service-block-one">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><img src="/assets/images/service/service-6.jpg" alt="" /></figure>
                                                    <div className="icon-box">
                                                        <i className="fas fa-bone"></i>
                                                    </div>
                                                </div>
                                                <div className="lower-content">
                                                    <h3>Reumatología</h3>
                                                    <p>Tratamiento de enfermedades musculoesqueléticas para mejorar tu calidad de vida.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                                    <div className="service-details-content">
                                        <div className="content-one mb_60">
                                            <figure className="image-box mb_40"><img src="/assets/images/service/service-12.jpg" alt="" /></figure>
                                            <div className="row">
                                                {/* Columna izquierda: Atiende pacientes con */}
                                                <div className="col-lg-6 col-md-12 col-sm-12">
                                                    <div className="text-box">
                                                        <h2>Reumatología</h2>
                                                        <h4>Atiende pacientes con:</h4>
                                                        <ul>
                                                            <li>✔️ Artrocentesis</li>
                                                            <li>✔️ Artritis</li>
                                                            <li>✔️ Artrosis</li>
                                                            <li>✔️ Fibromialgia</li>
                                                            <li>✔️ Espondiloartrosis</li>
                                                            <li>✔️ Vasculitis</li>
                                                            <li>✔️ Miopatías</li>
                                                            <li>✔️ Dolor en articulaciones</li>
                                                            <li>✔️ Osteoporosis</li>
                                                            <li>✔️ Dolor muscular, huesos</li>
                                                            <li>✔️ Lupus eritematoso</li>
                                                            <li>✔️ Esclerosis sistémica</li>
                                                            <li>✔️ Lumbalgias</li>
                                                            <li>✔️ Ciática</li>
                                                            <li>✔️ Gota</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* Columna derecha: También realizará */}
                                                <div className="col-lg-6 col-md-12 col-sm-12">
                                                    <div className="text-box mt-5">
                                                        <h4>También realizará:</h4>
                                                        <ul>
                                                            <li>✔️ Infiltraciones para el tratamiento de dolor en articulaciones</li>
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