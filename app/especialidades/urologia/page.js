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
                    { name: "Urología" }
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
                                                    <li><Link href="cardiologia">Cardiología</Link></li>
                                                    <li><Link href="cirugia-general">Cirugía General</Link></li>
                                                    <li><Link href="ginecologia">Ginecología</Link></li>
                                                    <li><Link href="neumologia">Neumología</Link></li>
                                                    <li><Link href="nutricion">Nutrición</Link></li>
                                                    <li><Link href="reumatologia">Reumatología</Link></li>
                                                    <li><Link href="traumatologia">Traumatología</Link></li>
                                                    <li><Link href="urologia" className="current">Urología</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="service-block-one">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><img src="/assets/images/service/service-2.jpg" alt="" /></figure>
                                                    <div className="icon-box">
                                                        <i className="fas fa-procedures"></i>
                                                    </div>
                                                </div>
                                                <div className="lower-content">
                                                    <h3>Urología</h3>
                                                    <p>Atención especializada en el sistema urinario y reproductor masculino, garantizando bienestar integral.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                                    <div className="service-details-content">
                                        <div className="content-one mb_60">
                                            <figure className="image-box mb_40"><img src="/assets/images/service/service-14.jpg" alt="" /></figure>
                                            <div className="row">
                                                {/* Columna izquierda: Atiende pacientes con */}
                                                <div className="col-lg-6 col-md-12 col-sm-12">
                                                    <div className="text-box">
                                                        <h2>Urología</h2>
                                                        <h4>Atiende pacientes con:</h4>
                                                        <ul>
                                                            <li>✔️ Impotencia sexual</li>
                                                            <li>✔️ Eyaculación precoz</li>
                                                            <li>✔️ Difusión eréctil</li>
                                                            <li>✔️ Incontinencia urinaria</li>
                                                            <li>✔️ Enfermedades de la próstata</li>
                                                            <li>✔️ Enfermedades de los testículos</li>
                                                            <li>✔️ Infecciones urinarias frecuentes</li>
                                                            <li>✔️ Cálculos en la vejiga y riñones</li>
                                                            <li>✔️ Descarte de fimosis</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* Columna derecha: También realizará */}
                                                <div className="col-lg-6 col-md-12 col-sm-12">
                                                    <div className="text-box mt-5">
                                                        <h4>También realizará:</h4>
                                                        <ul>
                                                            <li>✔️ Cauterización y extracción de verrugas genitales</li>
                                                            <li>✔️ Ecografías de riñón, próstata, vejiga y testículo</li>
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
                </div>

            </Layout>

            <AgendarCitaButton especialidad="Urolo´gia" />
        </>
    )
}