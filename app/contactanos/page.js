
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Contáctanos">
                <div>
                    {/* Contact Form Section */}
                    <section className="contact-info-section pt_120">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                                    <div className="info-block-one">
                                        <h3>Contactános Rápido</h3>
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-2"></i></div>
                                            <p>Número Telefónico: <br /><Link href="tel:23345678901">+51 974 603 071</Link> </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                                    <div className="info-block-one">
                                        <h3>Correo Electrónico</h3>
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-26"></i></div>
                                            <p>Correo: <br /><Link href="mailto:info@example.com">nutrimed@gmail.com</Link></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                                    <div className="info-block-one">
                                        <h3>Dirección</h3>
                                        <div className="inner-box">
                                            <div className="icon-box"><img src="/assets/images/icons/icon-2.png" alt="" /></div>
                                            <p>Jr. El Porvenir N° 200, Rodríguez<br /> de Mendoza, Amazonas </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Contact Form Section End */}
                    {/* Contact Form Section2 */}
                    <section className="contact-style-three pt_90 pb_120">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-8 col-md-12 col-sm-12 form-column">
                                    <div className="form-inner mr_40">
                                        <div className="sec-title mb_50">
                                            <h2>Envíanos un Mensaje</h2>
                                        </div>
                                        <form method="post" action="sendemail.php" id="contact-form" className="default-form">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="text" name="username" placeholder="Nombres" required />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="text" name="lname" placeholder="Apellido" required />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="email" name="email" placeholder="Tu correo" required />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="text" name="phone" required placeholder="Teléfono" />
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <input type="text" name="subject" required placeholder="Asunto" />
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <textarea name="message" placeholder="Mensaje"></textarea>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                    <button className="theme-btn btn-one" type="submit" name="submit-form"><span>Enviar Mensaje</span></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                                    <figure className="image-box"><img src="/assets/images/resource/contact-1.jpg" alt="" /></figure>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Contact Form Section2 End */}

                    {/* Google Map Section */}
                    <section className="google-map-section" style={{ padding: 0, margin: 0 }}>
                        <div className="map-inner" style={{ width: "100%" }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15839.012933734128!2d-77.4851862!3d-6.395378999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b1370afe50cfc3%3A0x774c1043be43c603!2sCLINICA%20NUTRIMED%20PERU%20EIRL!5e0!3m2!1ses!2spe!4v1754062233969!5m2!1ses!2spe"
                                style={{ border: 0, width: "100%", height: "570px" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </section>

                    {/* Google Map Section End */}
                </div>

            </Layout>
        </>
    )
}
