'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import AgendarCitaButton from "@/components/layout/AgendarCitaButton"

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
            <Layout
                headerStyle={2}
                footerStyle={1}
                breadcrumb={[
                    { name: "Inicio", href: "/" },
                    { name: "Especialidades", href: "/especialidades" },
                    { name: "Cardiología" }
                ]}
            >
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
                                                    <li><Link href="cardiologia" className="current">Cardiología</Link></li>
                                                    <li><Link href="cirugia-general">Cirugía General</Link></li>
                                                    <li><Link href="ginecologia">Ginecología</Link></li>
                                                    <li><Link href="neumologia">Neumología</Link></li>
                                                    <li><Link href="nutricion">Nutrición</Link></li>
                                                    <li><Link href="reumatologia">Reumatología</Link></li>
                                                    <li><Link href="traumatologia">Traumatología</Link></li>
                                                    <li><Link href="urologia">Urología</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="service-block-one">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><img src="/assets/images/service/service-4.jpg" alt="" /></figure>
                                                    <div className="icon-box">
                                                        <i className="fas fa-heartbeat"></i>
                                                    </div>                                                </div>
                                                <div className="lower-content">
                                                    <h3>Cardiología</h3>
                                                    <p>Prevención y manejo de enfermedades cardíacas e hipertensión para cuidar tu salud cardiovascular.</p>
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
                                                        width="857"
                                                        height="468"
                                                        src="https://www.youtube.com/embed/dA6Ls9Cbuag"
                                                        title="YouTube video player"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                                    ></iframe>
                                                </div>
                                            </figure>

                                            <div className="row">
                                                {/* Columna izquierda: Atiende pacientes con */}
                                                <div className="col-lg-6 col-md-12 col-sm-12">
                                                    <div className="text-box">
                                                        <h2>Cardiología</h2>
                                                        <h4>Atiende pacientes con:</h4>
                                                        <ul>
                                                            <li>✔️ Dolor en el pecho.</li>
                                                            <li>✔️ Marcapasos.</li>
                                                            <li>✔️ Valvulopatías.</li>
                                                            <li>✔️ Cardiopatía isquémica.</li>
                                                            <li>✔️ Insuficiencia cardíaca.</li>
                                                            <li>✔️ Infarto de miocardio.</li>
                                                            <li>✔️ Hipertensión arterial.</li>
                                                            <li>✔️ Exceso de colesterol.</li>
                                                            <li>✔️ Exceso de triglicéridos.</li>
                                                            <li>✔️ Palpitaciones rápidas.</li>
                                                            <li>✔️ Palpitaciones lentas.</li>
                                                            <li>✔️ Enfermedades congénitas del corazón.</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* Columna derecha: También realizará */}
                                                <div className="col-lg-6 col-md-12 col-sm-12">
                                                    <div className="text-box mt-5">
                                                        <h4>También realizará:</h4>
                                                        <ul>
                                                            <li>✔️ Riesgo quirúrgico.</li>
                                                            <li>✔️ Ecocardiograma.</li>
                                                            <li>✔️ Electrocardiograma.</li>
                                                            <li>✔️ Mapeo Holter 24 horas.</li>
                                                            <li>✔️ Ecocardiografía Doppler.</li>
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
                </div>

                <AgendarCitaButton especialidad="Cardiología" />

            </Layout>
        </>
    )
}