
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
                                                <ul className="post-info mb_15 clearfix">
                                                    <li><Link href="blog-details">Admin</Link></li>
                                                    <li>15 Jan 2022</li>
                                                    <li>03 Comt</li>
                                                </ul>
                                                <h2>¿Tu bebé fue diagnosticado con APLV y no sabes qué cocinarle ni cómo alimentarlo sin riesgos?</h2>
                                                <p>Tranquila, este material es justo lo que necesitas para sentirte segura y acompañada.</p>
                                                <p>He preparado una guía completa para ti, mamá y bebé.</p>
                                                <h3>Para mamá, desde el diagnóstico</h3>
                                                <p>Manual completo para enseñarte a hacer la dieta del amor y también el paso a paso para probar
                                                    tolerancia oral, de forma segura y clara.</p>
                                                <h3>Para el bebé, ideal desde los 6 a 7 meses</h3>
                                                <ul class="list-unstyled">
                                                    <li><span class="badge bg-success me-2">✓</span>Recetas para 28 días sin alergénicos, en método mixto (BLW + papilla)</li>
                                                    <li><span class="badge bg-success me-2">✓</span>Lista de alimentos permitidos, no permitidos</li>
                                                    <li><span class="badge bg-success me-2">✓</span>Manual con respuestas claras sobre APLV y lactancia</li>
                                                    <li><span class="badge bg-success me-2">✓</span>Manual de corte seguro BLW</li>
                                                    <li><span class="badge bg-success me-2">✓</span>Acompañamiento grupal por WhatsApp durante 1 mes</li>
                                                </ul>

                                                <div className="two-image">
                                                    <div className="row clearfix">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                            <figure className="image mb_30"><img src="/assets/images/news/news-12.jpg" alt="" /></figure>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                            <figure className="image mb_30"><img src="/assets/images/news/news-13.jpg" alt="" /></figure>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p>Sabemos lo difícil y confuso que puede ser esta etapa, pero no tienes que hacerlo sola.
                                                    Con este material vas a tener todo lo necesario para cuidar la salud de tu bebé y ganar tranquilidad como mamá.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 content-side">
                                <div className="blog-sidebar default-sidebar mr_10">
                                    <div className="sidebar-widget post-widget">
                                        <div className="widget-content post-inner">
                                            <div className="post">
                                                <figure className="post-thumb">
                                                    <Link href="blog-details">
                                                        <img src="/assets/images/news/post-1.jpg" alt="" />
                                                    </Link>
                                                </figure>
                                                <h6>
                                                    <Link href="blog-details">Mg. LLicely Becerril</Link>
                                                </h6>
                                                <ul className="post-info clearfix">
                                                    <li>Nutricioniststa</li>
                                                </ul>
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
