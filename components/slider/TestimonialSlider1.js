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
              <p>"Calidad, buen servicio, infraestructura de primera y profesiones altamente calificados 10/10"</p>
              <div className="author-box">
                <figure className="author-thumb"><img src="assets/images/resource/testimonial-mujer.png" alt="" /></figure>
                <ul className="rating clearfix">
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                </ul>
                <h3>Nayeli Rodriguez</h3>
                <span className="designation">Paciente</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="testimonial-block-one">
            <div className="inner-box">
              <div className="icon-box"><i className="icon-23"></i></div>
              <p>“Recomendado al 100%! Desde el primer momento me sentí muy cómodo, el personal fue súper amable y atento.
                Un servicio de primera y un ambiente muy agradable”</p>
              <div className="author-box">
                <figure className="author-thumb"><img src="assets/images/resource/testimonial-hombre.png" alt="" /></figure>
                <ul className="rating clearfix">
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                </ul>
                <h3>Escott Gutiérrez</h3>
                <span className="designation">Paciente</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="testimonial-block-one">
            <div className="inner-box">
              <div className="icon-box"><i className="icon-23"></i></div>
              <p>“Quiero compartir mi experiencia en Nutrimed, y solo puedo decir que es una clínica de excelencia.
                Desde que llegué, me hicieron sentir muy bien atendido, con un trato amable y profesional por parte de todo el equipo.”</p>
              <div className="author-box">
                <figure className="author-thumb"><img src="assets/images/resource/testimonial-mujer.png" alt="" /></figure>
                <ul className="rating clearfix">
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                </ul>
                <h3>Nilton Bastidas</h3>
                <span className="designation">Paciente</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="testimonial-block-one">
            <div className="inner-box">
              <div className="icon-box"><i className="icon-23"></i></div>
              <p>“La atención del personal muy buena por parte de los enfermeros como de los doctores,
                sobre todo cuenta con un ambiente cálido y acogedor. Recomendado”</p>
              <div className="author-box">
                <figure className="author-thumb"><img src="assets/images/resource/testimonial-mujer.png" alt="" /></figure>
                <ul className="rating clearfix">
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                </ul>
                <h3>Celinda Sopla</h3>
                <span className="designation">Paciente</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="testimonial-block-one">
            <div className="inner-box">
              <div className="icon-box"><i className="icon-23"></i></div>
              <p>"Excelente atención, personal con experiencia, ambientes limpios y ordenados. Recomendado."</p>
              <div className="author-box">
                <figure className="author-thumb"><img src="assets/images/resource/testimonial-hombre.png" alt="" /></figure>
                <ul className="rating clearfix">
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="far fa-star"></i></li>
                </ul>
                <h3>Percy Sopla </h3>
                <span className="designation">Paciente</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="testimonial-block-one">
            <div className="inner-box">
              <div className="icon-box"><i className="icon-23"></i></div>
              <p>"Durante mi atención me dieron la tranquilidad y seguridad de que estaba en buenas manos. 
                Confío en las manos y profesionalismo  del dr. Tecco y la Nutriciónista Becerril."</p>
              <div className="author-box">
                <figure className="author-thumb"><img src="assets/images/resource/testimonial-mujer.png" alt="" /></figure>
                <ul className="rating clearfix">
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                </ul>
                <h3>Nely Sopla</h3>
                <span className="designation">Paciente</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  )
}
