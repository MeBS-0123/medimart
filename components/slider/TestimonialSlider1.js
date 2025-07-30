'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: '.h1n',
    prevEl: '.h1p',
  },

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
  }
}
export default function TestimonialSlider1() {
  return (
    <>
      <Swiper {...swiperOptions} className="single-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
        <SwiperSlide className="slide-item">
          <div className="testimonial-block-one">
            <div className="inner-box">
              <div className="icon-box"><i className="icon-23"></i></div>
              <p>"Desde que llegué a Nutrimed, me sentí en buenas manos. El personal fue muy amable, y el médico resolvió todas mis dudas.
                ¡Gracias por su excelente atención!"</p>
              <div className="author-box">
                <figure className="author-thumb"><img src="assets/images/resource/testimonial-mujer.png" alt="" /></figure>
                <ul className="rating clearfix">
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="far fa-star"></i></li>
                </ul>
                <h3>Ana Morales</h3>
                <span className="designation">Paciente de Ginecologia</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="testimonial-block-one">
            <div className="inner-box">
              <div className="icon-box"><i className="icon-23"></i></div>
              <p>“Mi mamá necesitaba atención urgente y en Nutrimed la recibieron con gran profesionalismo. 
                Nos explicaron todo con claridad y el trato fue muy humano.”</p>
              <div className="author-box">
                <figure className="author-thumb"><img src="assets/images/resource/testimonial-hombre.png" alt="" /></figure>
                <ul className="rating clearfix">
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="far fa-star"></i></li>
                </ul>
                <h3>Carlos Herrera</h3>
                <span className="designation">Hijo de paciente</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="testimonial-block-one">
            <div className="inner-box">
              <div className="icon-box"><i className="icon-23"></i></div>
              <p>“Me atendí en el laboratorio clínico y quedé impresionada con la rapidez y limpieza del lugar.
                En menos de una hora tenía mis resultados. 100% recomendados.”</p>
              <div className="author-box">
                <figure className="author-thumb"><img src="assets/images/resource/testimonial-mujer.png" alt="" /></figure>
                <ul className="rating clearfix">
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                </ul>
                <h3>Lucía Campos</h3>
                <span className="designation">Paciente</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="testimonial-block-one">
            <div className="inner-box">
              <div className="icon-box"><i className="icon-23"></i></div>
              <p>“Agendé mi cita por WhatsApp y todo el proceso fue muy fácil. Desde que llegué, me hicieron sentir tranquila.
                El doctor fue muy atento y claro en su diagnóstico.”</p>
              <div className="author-box">
                <figure className="author-thumb"><img src="assets/images/resource/testimonial-mujer.png" alt="" /></figure>
                <ul className="rating clearfix">
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="far fa-star"></i></li>
                </ul>
                <h3>Valeria Gutiérrez</h3>
                <span className="designation">Paciente</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="testimonial-block-one">
            <div className="inner-box">
              <div className="icon-box"><i className="icon-23"></i></div>
              <p>"Me hicieron una ecografía y el doctor fue muy paciente explicándome todo. El ambiente era limpio, tranquilo y me sentí segura en todo momento"</p>
              <div className="author-box">
                <figure className="author-thumb"><img src="assets/images/resource/testimonial-mujer.png" alt="" /></figure>
                <ul className="rating clearfix">
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="far fa-star"></i></li>
                  <li><i className="far fa-star"></i></li>
                </ul>
                <h3>Mariela Ríos</h3>
                <span className="designation">Paciente prenatal</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="testimonial-block-one">
            <div className="inner-box">
              <div className="icon-box"><i className="icon-23"></i></div>
              <p>"Soy adulto mayor y me sorprendió la atención tan respetuosa que recibí. Desde la recepción hasta el médico,
                todos fueron muy amables y considerados"</p>
              <div className="author-box">
                <figure className="author-thumb"><img src="assets/images/resource/testimonial-hombre.png" alt="" /></figure>
                <ul className="rating clearfix">
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                </ul>
                <h3>Eduardo Gálvez</h3>
                <span className="designation">Paciente</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  )
}
