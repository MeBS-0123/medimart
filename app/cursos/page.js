
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
                    { name: "Cursos" }
                ]}
            >                <div>
                    {/* news-style-two */}
                    <section className="news-section sec-pad bg-color-1">
                        <div className="auto-container">
                            <div className="sec-title mb_50 centred">
                                <span className="sub-title">Nuestros Cursos</span>
                                <h2>Descubre Nuestros Cursos <br />Más Recientes</h2>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                    <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <Link href="cursos/recetas-bebe-aplv">
                                                    <img src="/assets/images/cursos/c-img1.png" alt="" />
                                                </Link>
                                            </figure>
                                            <div className="lower-content">
                                                <ul className="post-info mb_15 clearfix">
                                                    <li>A cargo de:</li>
                                                    <li>Mg. LLicely Becerril</li>
                                                </ul>
                                                <h3>
                                                    <Link href="cursos/recetas-bebe-aplv">Recetas para bebé con APLV</Link>
                                                </h3>
                                                <p>Ideal para padres con bebés de 2 a 8 meses.</p>
                                                <div className="bottom-row d-flex justify-content-between align-items-center">
                                                    <div className="price">
                                                        <span className="fw-bold fs-5 text-dark">S/ 80,00</span>
                                                        <span className="text-decoration-line-through ms-2 text-muted">S/ 100,00</span>
                                                    </div>
                                                    <div className="link">
                                                        <Link href="cursos/recetas-bebe-aplv"><span>Ver detalles</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                    <div className="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <figure className="image-box"><Link href="cursos/recetas-bebe-aplv"><img src="assets/images/news/news-2.jpg" alt="" /></Link></figure>
                                            <div className="lower-content">
                                                <ul className="post-info mb_15 clearfix">
                                                    <li>A cargo de:</li>
                                                    <li>Mg. LLicely Becerril</li>
                                                </ul>
                                                <h3><Link href="cursos/recetas-bebe-aplv">Curso de alimentación complementaria</Link></h3>
                                                <p>Usando los métodos de papilla, blw y mixto.</p>
                                                <div className="bottom-row d-flex justify-content-between align-items-center">
                                                    <div className="price">
                                                        <span className="fw-bold fs-5 text-dark">S/ 49.90</span>
                                                        <span className="text-decoration-line-through ms-2 text-muted">S/ 70,00</span>
                                                    </div>
                                                    <div className="link">
                                                        <Link href="cursos/recetas-bebe-aplv"><span>Ver detalles</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                    <div className="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <figure className="image-box"><Link href="cursos/recetas-bebe-aplv"><img src="/assets/images/news/news-3.jpg" alt="" /></Link></figure>
                                            <div className="lower-content">
                                                <ul className="post-info mb_15 clearfix">
                                                    <li>A cargo de:</li>
                                                    <li>Mg. LLicely Becerril</li>
                                                </ul>
                                                <h3><Link href="cursos/recetas-bebe-aplv">Iron Forti Quinua</Link></h3>
                                                <p>Mezcla Alimenticia para fortificar preparaciones y comidas de consistencia espesa o semisólida.</p>
                                                <div className="bottom-row d-flex justify-content-between align-items-center">
                                                    <div className="price">
                                                        <span className="fw-bold fs-5 text-dark">S/ 100,00</span>
                                                        <span className="text-decoration-line-through ms-2 text-muted">S/ 110,00</span>
                                                    </div>
                                                    <div className="link">
                                                        <Link href="cursos/recetas-bebe-aplv"><span>Ver detalles</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                    <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <figure className="image-box"><Link href="cursos/recetas-bebe-aplv"><img src="/assets/images/news/news-4.jpg" alt="" /></Link></figure>
                                            <div className="lower-content">
                                                <ul className="post-info mb_15 clearfix">
                                                    <li>A cargo de:</li>
                                                    <li>Mg. LLicely Becerril</li>
                                                </ul>
                                                <h3><Link href="cursos/recetas-bebe-aplv">¡Chau Anemia!</Link></h3>
                                                <p>Dirigido a padres y cuidadores de bebés y niños de 6 meses a 6 años que buscan prevenir y combatir la anemia infantil.</p>
                                                <div className="bottom-row d-flex justify-content-between align-items-center">
                                                    <div className="price">
                                                        <span className="fw-bold fs-5 text-dark">S/ 59.90</span>
                                                        <span className="text-decoration-line-through ms-2 text-muted">S/ 120,00</span>
                                                    </div>
                                                    <div className="link">
                                                        <Link href="cursos/recetas-bebe-aplv"><span>Ver detalles</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                    <div className="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <figure className="image-box"><Link href="cursos/recetas-bebe-aplv"><img src="/assets/images/news/news-5.jpg" alt="" /></Link></figure>
                                            <div className="lower-content">
                                                <ul className="post-info mb_15 clearfix">
                                                    <li>A cargo de:</li>
                                                    <li>Mg. LLicely Becerril</li>
                                                </ul>
                                                <h3><Link href="cursos/recetas-bebe-aplv">Loncheras saludables y deliciosas</Link></h3>
                                                <p>Dirigido a padres y cuidadores de niños en edad preescolar y escolar (1 - 12 años).</p>
                                                <div className="bottom-row d-flex justify-content-between align-items-center">
                                                    <div className="price">
                                                        <span className="fw-bold fs-5 text-dark">S/ 49,90</span>
                                                        <span className="text-decoration-line-through ms-2 text-muted">S/ 90,00</span>
                                                    </div>
                                                    <div className="link">
                                                        <Link href="cursos/recetas-bebe-aplv"><span>Ver detalles</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                    <div className="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <figure className="image-box"><Link href="cursos/recetas-bebe-aplv"><img src="/assets/images/news/news-6.jpg" alt="" /></Link></figure>
                                            <div className="lower-content">
                                                <ul className="post-info mb_15 clearfix">
                                                    <li>A cargo de:</li>
                                                    <li>Mg. LLicely Becerril</li>
                                                </ul>
                                                <h3><Link href="cursos/recetas-bebe-aplv">Alimentación del niño de mayor de un año</Link></h3>
                                                <p>Dirigido a padres con niños de 12 a 23 meses.</p>
                                                <div className="bottom-row d-flex justify-content-between align-items-center">
                                                    <div className="price">
                                                        <span className="fw-bold fs-5 text-dark">S/ 59.90</span>
                                                        <span className="text-decoration-line-through ms-2 text-muted">S/ 120,00</span>
                                                    </div>
                                                    <div className="link">
                                                        <Link href="cursos/recetas-bebe-aplv"><span>Ver detalles</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                    <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <figure className="image-box"><Link href="cursos/recetas-bebe-aplv"><img src="/assets/images/news/news-4.jpg" alt="" /></Link></figure>
                                            <div className="lower-content">
                                                <ul className="post-info mb_15 clearfix">
                                                    <li>A cargo de:</li>
                                                    <li>Mg. LLicely Becerril</li>
                                                </ul>
                                                <h3><Link href="cursos/recetas-bebe-aplv">Paquete nutricional mensual adulto</Link></h3>
                                                <p>Si buscas ganar masa muscular, perder peso o mejorar tu bienestar general, este paquete es para ti.</p>
                                                <div className="bottom-row d-flex justify-content-between align-items-center">
                                                    <div className="price">
                                                        <span className="fw-bold fs-5 text-dark">S/ 320,00</span>
                                                        <span className="text-decoration-line-through ms-2 text-muted">S/ 390,00</span>
                                                    </div>
                                                    <div className="link">
                                                        <Link href="cursos/recetas-bebe-aplv"><span>Ver detalles</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                    <div className="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <figure className="image-box"><Link href="cursos/recetas-bebe-aplv"><img src="/assets/images/news/news-5.jpg" alt="" /></Link></figure>
                                            <div className="lower-content">
                                                <ul className="post-info mb_15 clearfix">
                                                    <li>A cargo de:</li>
                                                    <li>Mg. LLicely Becerril</li>
                                                </ul>
                                                <h3><Link href="cursos/recetas-bebe-aplv">Guía alimentaria + menú de 1 mes, según la edad de tu bebé</Link></h3>
                                                <p>Dirigido a padres y cuidadores de niños en edad preescolar y escolar (1 - 12 años).</p>
                                                <div className="bottom-row d-flex justify-content-between align-items-center">
                                                    <div className="price">
                                                        <span className="fw-bold fs-5 text-dark">S/ 49,90</span>
                                                    </div>
                                                    <div className="link">
                                                        <Link href="cursos/recetas-bebe-aplv"><span>Ver detalles</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                    <div className="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <figure className="image-box"><Link href="cursos/recetas-bebe-aplv"><img src="/assets/images/news/news-6.jpg" alt="" /></Link></figure>
                                            <div className="lower-content">
                                                <ul className="post-info mb_15 clearfix">
                                                    <li>A cargo de:</li>
                                                    <li>Mg. LLicely Becerril</li>
                                                </ul>
                                                <h3><Link href="cursos/recetas-bebe-aplv">Consulta de lactancia materna</Link></h3>
                                                <p>Te acompaño en esta etapa, resolviendo dudas, mejorando la producción de leche y recuperando tu lactancia.</p>
                                                <div className="bottom-row d-flex justify-content-between align-items-center">
                                                    <div className="price">
                                                        <span className="fw-bold fs-5 text-dark">S/ 100</span>
                                                    </div>
                                                    <div className="link">
                                                        <Link href="cursos/recetas-bebe-aplv"><span>Ver detalles</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 news-block"></div>
                                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                    <div className="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <figure className="image-box"><Link href="cursos/recetas-bebe-aplv"><img src="/assets/images/news/news-5.jpg" alt="" /></Link></figure>
                                            <div className="lower-content">
                                                <ul className="post-info mb_15 clearfix">
                                                    <li>A cargo de:</li>
                                                    <li>Mg. LLicely Becerril</li>
                                                </ul>
                                                <h3><Link href="cursos/recetas-bebe-aplv">Consulta nutricional</Link></h3>
                                                <p>Cuidamos tu alimentación en cada etapa, nuestros servicios son para: adultos, adolescentes, niños, bebés, gestación y lactancia.</p>
                                                <div className="bottom-row d-flex justify-content-between align-items-center">
                                                    <div className="price">
                                                        <span className="fw-bold fs-5 text-dark">S/ 100</span>
                                                    </div>
                                                    <div className="link">
                                                        <Link href="cursos/recetas-bebe-aplv"><span>Ver detalles</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 news-block"></div>
                            </div>
                        </div>
                    </section>
                    {/* news-style-two end */}

                </div >

            </Layout >
        </>
    )
}