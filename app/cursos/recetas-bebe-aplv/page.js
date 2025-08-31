
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout
                headerStyle={2}
                footerStyle={1}
                breadcrumb={[
                    { name: "Inicio", href: "/" },
                    { name: "Cursos", href: "/cursos" },
                    { name: "Recetas para bebé con APLV" }
                ]}
            >                {/* sidebar-page-container */}
                <section className="sidebar-page-container sec-pad-2">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-8 col-md-12 col-sm-12 sidebar-side">
                                <div className="blog-details-content">
                                    <div className="news-block-one">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="/assets/images/news/news-11.jpg" alt="" /></figure>
                                            <div className="lower-content">
                                                <h2 className="text-center">¿Tu bebé fue diagnosticado con APLV y no sabes qué cocinarle ni cómo alimentarlo sin riesgos?</h2>
                                                <p>Tranquila, este material es justo lo que necesitas para sentirte segura y acompañada.</p>

                                                {/* ¿Qué Aprenderás? */}
                                                <h3>¿Qué Aprenderás?</h3>
                                                <ul className="list-unstyled">
                                                    <li className="mb-3">
                                                        <div className="d-flex align-items-start">
                                                            <i className="bi bi-egg fs-4 text-success me-3"></i>
                                                            <div>Cómo iniciar la alimentación complementaria en bebés con APLV de forma segura</div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-3">
                                                        <div className="d-flex align-items-start">
                                                            <i className="bi bi-cup-straw fs-4 text-success me-3"></i>
                                                            <div>Cómo aplicar el método mixto: BLW (Baby Led Weaning) + Papilla</div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-3">
                                                        <div className="d-flex align-items-start">
                                                            <i className="bi bi-ban fs-4 text-success me-3"></i>
                                                            <div>Qué alimentos están permitidos, cuáles no y cómo identificarlos</div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-3">
                                                        <div className="d-flex align-items-start">
                                                            <i className="bi bi-calendar-check fs-4 text-success me-3"></i>
                                                            <div>Cómo crear menús por tiempos de comida adaptados a la edad del bebé</div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-3">
                                                        <div className="d-flex align-items-start">
                                                            <i className="bi bi-heart-pulse fs-4 text-success me-3"></i>
                                                            <div>Cómo avanzar paso a paso hacia la tolerancia oral</div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-3">
                                                        <div className="d-flex align-items-start">
                                                            <i className="bi bi-droplet fs-4 text-success me-3"></i>
                                                            <div>Guía de lactancia materna para madres con bebés APLV</div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-3">
                                                        <div className="d-flex align-items-start">
                                                            <i className="bi bi-scissors fs-4 text-success me-3"></i>
                                                            <div>Corte seguro de alimentos para BLW</div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-3">
                                                        <div className="d-flex align-items-start">
                                                            <i className="bi bi-chat-heart fs-4 text-success me-3"></i>
                                                            <div>Acompañamiento emocional y técnico durante la etapa de alimentación inicial</div>
                                                        </div>
                                                    </li>
                                                </ul>

                                                {/* Este Curso Incluye */}
                                                <blockquote>
                                                    <h3>Este Curso Incluye:</h3>
                                                    <ul className="list-unstyled">
                                                        <li className="mb-3">
                                                            <div className="d-flex align-items-start">
                                                                <i className="bi bi-whatsapp fs-4 text-info me-3"></i>
                                                                <div>1 mes de acompañamiento grupal por WhatsApp</div>
                                                            </div>
                                                        </li>
                                                        <li className="mb-3">
                                                            <div className="d-flex align-items-start">
                                                                <i className="bi bi-journal-text fs-4 text-info me-3"></i>
                                                                <div>Recetario para 28 días (sin alérgenos, adaptado a la edad del bebé)</div>
                                                            </div>
                                                        </li>
                                                        <li className="mb-3">
                                                            <div className="d-flex align-items-start">
                                                                <i className="bi bi-question-circle fs-4 text-info me-3"></i>
                                                                <div>Manual de preguntas frecuentes sobre APLV y lactancia</div>
                                                            </div>
                                                        </li>
                                                        <li className="mb-3">
                                                            <div className="d-flex align-items-start">
                                                                <i className="bi bi-card-checklist fs-4 text-info me-3"></i>
                                                                <div>Lista de alimentos permitidos, no permitidos y alérgenos</div>
                                                            </div>
                                                        </li>
                                                        <li className="mb-3">
                                                            <div className="d-flex align-items-start">
                                                                <i className="bi bi-heart-half fs-4 text-info me-3"></i>
                                                                <div>Manual para madres sobre cómo iniciar la dieta del amor y probar la tolerancia oral</div>
                                                            </div>
                                                        </li>
                                                        <li className="mb-3">
                                                            <div className="d-flex align-items-start">
                                                                <i className="bi bi-book fs-4 text-info me-3"></i>
                                                                <div>Manual de corte seguro BLW</div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </blockquote>

                                                {/* Mensaje final */}
                                                <div className="mt-4 p-4">
                                                    <p className="mb-0">
                                                        Sabemos lo difícil y confuso que puede ser esta etapa, pero no tienes que hacerlo sola.
                                                        Con este material vas a tener todo lo necesario para cuidar la salud de tu bebé y ganar tranquilidad como mamá.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 content-side">
                                <div className="blog-sidebar default-sidebar mr_10">
                                    <div className="sidebar-widget category-widget archives-widget">
                                        <div className="widget-title mb-3">
                                            <h3>Dirigido a</h3>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="list-unstyled">
                                                <li className="d-flex align-items-start mb-3">
                                                    <i className="bi bi-chevron-right me-3 mt-1 fs-5 text-primary"></i>
                                                    <div>
                                                        <strong>Madres con bebés entre 2 a 8 meses (ideal desde los 6 meses)</strong><br />
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-start mb-3">
                                                    <i className="bi bi-chevron-right me-3 mt-1 fs-5 text-primary"></i>
                                                    <div>
                                                        <strong>Padres primerizos preocupados por el diagnóstico de APLV</strong>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-start">
                                                    <i className="bi bi-chevron-right me-3 mt-1 fs-5 text-primary"></i>
                                                    <div>
                                                        <strong>Madres que desean continuar la lactancia sin riesgos</strong>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="sidebar-widget category-widget archives-widget">
                                        <div className="widget-title mb-3">
                                            <h3>Modalidad</h3>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="list-unstyled">
                                                <li className="d-flex align-items-start mb-3">
                                                    <i className="bi bi-laptop fs-4 text-primary me-3"></i>
                                                    <div>
                                                        <strong>100% online con acceso a videos explicativos</strong><br />
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-start mb-3">
                                                    <i className="bi bi-file-earmark-pdf fs-4 text-primary me-3"></i>
                                                    <div>
                                                        <strong>Guías descargables en PDF</strong>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-start">
                                                    <i className="bi bi-person-check fs-4 text-primary me-3"></i>
                                                    <div>
                                                        <strong>Acompañamiento y seguimiento personalizado durante 1 mes</strong>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="sidebar-widget post-widget">
                                        <div className="widget-content post-inner">
                                            <div className="post">
                                                <figure className="post-thumb">
                                                    <Link href="blog-details">
                                                        <img src="/assets/images/news/post-1.jpg" alt="" />
                                                    </Link>
                                                </figure>
                                                <h5 className="mb-2">Mg. Licelly Becerril</h5>
                                                <h6 className="text-muted">
                                                    Nutricionista Clínico Materno Infantil y Asesora en Lactancia Materna
                                                </h6>
                                            </div>

                                            <div className="bottom-row mb-4">
                                                <div className="price">
                                                    <span className="fw-bold fs-3 text-dark">S/ 80,00</span> {/* fs-3 = más grande */}
                                                    <span className="text-decoration-line-through ms-2 text-muted fs-5">S/ 100,00</span>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                <button type="submit" className="theme-btn btn-one w-100">
                                                    <span>Comprar Curso</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* sidebar-page-container end */}
            </Layout>
        </>
    )
}
