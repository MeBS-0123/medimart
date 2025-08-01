'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'

export default function Home() {
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
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Especialidades">
                <div>
                    {/* service-style-two */}
                    <section className="service-section sec-pad-2">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image">
                                                    <Link href="service-details">
                                                        <img src="assets/images/service/service-4.jpg" alt="Cardiología" />
                                                    </Link>
                                                </figure>
                                                <div className="icon-box">
                                                    <i className="fas fa-heartbeat"></i>
                                                </div>
                                            </div>
                                            <div className="lower-content">
                                                <h3>
                                                    <Link href="service-details">Cardiología</Link>
                                                </h3>
                                                <p>Prevención y manejo de enfermedades cardíacas e hipertensión para cuidar tu salud cardiovascular.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image">
                                                    <Link href="service-details-6">
                                                        <img src="assets/images/service/service-2.jpg" alt="Cirugía General" />
                                                    </Link>
                                                </figure>
                                                <div className="icon-box">
                                                    <i className="fa fa-stomach"></i>
                                                </div>
                                            </div>
                                            <div className="lower-content">
                                                <h3>
                                                    <Link href="service-details-6">Cirugía General</Link>
                                                </h3>
                                                <p>Procedimientos quirúrgicos seguros y eficaces para enfermedades digestivas y hernias.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image">
                                                    <Link href="service-details-2">
                                                        <img src="assets/images/service/service-5.jpg" alt="Ginecología" />
                                                    </Link>
                                                </figure>
                                                <div className="icon-box">
                                                    <i className="fas fa-venus"></i>
                                                </div>
                                            </div>
                                            <div className="lower-content">
                                                <h3>
                                                    <Link href="service-details-2">Ginecología</Link>
                                                </h3>
                                                <p>Cuidado integral de la salud femenina, desde controles rutinarios hasta salud reproductiva.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image">
                                                    <Link href="service-details-3">
                                                        <img src="assets/images/service/service-1.jpg" alt="Neumología" />
                                                    </Link>
                                                </figure>
                                                <div className="icon-box">
                                                    <i className="fas fa-lungs"></i>
                                                </div>
                                            </div>
                                            <div className="lower-content">
                                                <h3>
                                                    <Link href="service-details-3">Neumología</Link>
                                                </h3>
                                                <p>Diagnóstico y tratamiento de enfermedades respiratorias como asma, EPOC, entre otros.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image">
                                                    <Link href="service-details-5">
                                                        <img src="assets/images/service/service-6.jpg" alt="Nutrición" />
                                                    </Link>
                                                </figure>
                                                <div className="icon-box">
                                                    <i className="fas fa-apple-alt"></i>
                                                </div>
                                            </div>
                                            <div className="lower-content">
                                                <h3>
                                                    <Link href="service-details-5">Nutrición</Link>
                                                </h3>
                                                <p>Planes alimenticios personalizados para un estilo de vida saludable y salud para tus pequeños de casa.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image">
                                                    <Link href="service-details-4">
                                                        <img src="assets/images/service/service-3.jpg" alt="Reumatología" />
                                                    </Link>
                                                </figure>
                                                <div className="icon-box">
                                                    <i className="fas fa-bone"></i>
                                                </div>
                                            </div>
                                            <div className="lower-content">
                                                <h3>
                                                    <Link href="service-details-4">Reumatología</Link>
                                                </h3>
                                                <p>Tratamiento de enfermedades musculoesqueléticas para mejorar tu calidad de vida.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Contenedor centrado para Traumatología y Urología */}
                                <div className="row justify-content-center clearfix">
                                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                        <div className="service-block-one wow fadeInUp animated" data-wow-delay="900ms" data-wow-duration="1500ms">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image">
                                                        <Link href="service-details-8">
                                                            <img src="assets/images/service/service-8.jpg" alt="Traumatología" />
                                                        </Link>
                                                    </figure>
                                                    <div className="icon-box">
                                                        <i className="fas fa-crutch"></i>
                                                    </div>
                                                </div>
                                                <div className="lower-content">
                                                    <h3>
                                                        <Link href="service-details-8">Traumatología</Link>
                                                    </h3>
                                                    <p>Diagnóstico y tratamiento de lesiones óseas, musculares y articulares para una recuperación efectiva.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                        <div className="service-block-one wow fadeInUp animated" data-wow-delay="1200ms" data-wow-duration="1500ms">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image">
                                                        <Link href="service-details-9">
                                                            <img src="assets/images/service/service-9.jpg" alt="Urología" />
                                                        </Link>
                                                    </figure>
                                                    <div className="icon-box">
                                                        <i className="fas fa-procedures"></i>
                                                    </div>
                                                </div>
                                                <div className="lower-content">
                                                    <h3>
                                                        <Link href="service-details-9">Urología</Link>
                                                    </h3>
                                                    <p>Atención especializada en el sistema urinario y reproductor masculino, garantizando bienestar integral.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="pagination-wrapper mt_20 centred">
                                <ul className="pagination clearfix">
                                </ul>
                            </div>
                        </div>
                    </section>
                    {/* service-style-two end */}

                    {/* subscibe */}
                    {/* <section className="subscribe-section">
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
                    </section> */}
                    {/* subscibe end */}
                </div>
            </Layout>
        </>
    )
}
