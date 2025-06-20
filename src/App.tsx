import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Users, 
  Book, 
  Instagram,
  Facebook,
  Youtube,
  Send,
  Clock,
  CheckCircle,
  Home,
  LucideHeartHandshake
} from 'lucide-react';
import logo from './assets/img/logo.jpg'; // Adjust the path as necessary

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', 
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLiveStreamActive, setIsLiveStreamActive] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your email service
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        const scrolled = window.scrollY > 50;
        navbar.classList.toggle('backdrop-blur-md', scrolled);
        navbar.classList.toggle('bg-white/90', scrolled);
        navbar.classList.toggle('shadow-lg', scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <img src={logo} alt="Logo" className="w-8 h-8 rounded-full object-cover" />
              </div>
              <span className="font-bold text-xl text-gray-900">Iglesia Comisionados Sin Fronteras</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-yellow-500 hover:text-gray-600 transition-colors">
                Inicio
              </button>
              <button onClick={() => scrollToSection('transmision')} className="text-yellow-500 hover:text-gray-600 transition-colors">
                En Vivo
              </button>
              <button onClick={() => scrollToSection('servicios')} className="text-yellow-500 hover:text-gray-600 transition-colors">
                Servicios
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-yellow-500 hover:text-gray-600 transition-colors">
                Contacto
              </button>
              <button 
                onClick={() => scrollToSection('contacto')} 
                className="bg-gradient-to-r from-yellow-400 to-yellow-400 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Únete
              </button>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className={`w-6 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <button onClick={() => scrollToSection('inicio')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                Inicio
              </button>
              <button onClick={() => scrollToSection('transmision')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                En Vivo
              </button>
              <button onClick={() => scrollToSection('servicios')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                Servicios
              </button>
              <button onClick={() => scrollToSection('contacto')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                Contacto
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/img/people.jpeg')] bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Bienvenido a Nuestra
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Comunidad de Fe
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Un lugar donde encontrarás amor, esperanza y propósito. 
              Únete a nosotros en esta hermosa jornada de fe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('transmision')}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-2"
              >
                <Play className="w-6 h-6" />
                <span>Ver Transmisión en Vivo</span>
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                Visitanos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stream Section */}
      <section id="transmision" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transmisión en Vivo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Únete a nosotros desde cualquier lugar del mundo. Nuestros servicios están disponibles en vivo todos los domingos.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative aspect-video bg-black">
                {isLiveStreamActive ? (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/live_stream?channel=UCWly4eGwgrvQ3iXwbb-kgLQ"
                    title="Transmisión en Vivo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="text-center text-white">
                      <Youtube className="w-16 h-16 mx-auto mb-4 text-red-500" />
                      <h3 className="text-2xl font-semibold mb-2">Próximo Servicio</h3>
                      <p className="text-gray-300">Domingo a las 11:30 AM</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Servicio Dominical</h3>
                    <p className="text-gray-600">Únete a nuestra congregación en línea</p>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center space-x-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                      EN VIVO
                    </div>
                    <button 
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition-colors" 
                    onClick={() => window.open('https://www.youtube.com/channel/UCWly4eGwgrvQ3iXwbb-kgLQ', '_blank')}>
                      Ver en YouTube
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos diferentes oportunidades para crecer espiritualmente y conectar con nuestra comunidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-600 rounded-full flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Casas de Paz</h3>
              <p className="text-gray-600 mb-4">Tiempo especial de reunion en las casas en diferentes partes de la comuna.</p>
              <div className="flex items-center text-blue-600 font-semibold">
                <Clock className="w-5 h-5 mr-2" />
                Diferentes horarios y lugares    
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full flex items-center justify-center mb-6">
                <LucideHeartHandshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reunion de Oracion</h3>
              <p className="text-gray-600 mb-4">Tiempo de comunicacion con Dios en nuetro templo.</p>
              <div className="flex items-center text-orange-600 font-semibold">
                <Clock className="w-5 h-5 mr-2" />
                Miercoles 12:00 AM y 20:00 PM <br />
                Sabado 18:00 PM
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-orange-50 p-8 rounded-2xl border border-black-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-orange-600 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reunion de Jovenes</h3>
              <p className="text-gray-600 mb-4">Tiempo especial de música y adoración a Dios.</p>
              <div className="flex items-center text-purple-600 font-semibold">
                <Clock className="w-5 h-5 mr-2" />
                Viernes 7:30 PM
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mb-6">
                <Book className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Escuela Domincal</h3>
              <p className="text-gray-600 mb-4">Profundiza en la Palabra de Dios con estudios semanales.</p>
              <div className="flex items-center text-green-600 font-semibold">
                <Clock className="w-5 h-5 mr-2" />
                Domingos 10:00 AM
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Servicio Dominical</h3>
              <p className="text-gray-600 mb-4">Culto dominical con predicación, adoración y comunión.</p>
              <div className="flex items-center text-blue-600 font-semibold">
                <Clock className="w-5 h-5 mr-2" />
                Domingos 11:30 AM
              </div>
            </div>

            

            
          </div>

          <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">¿Primera vez visitándonos?</h3>
            <p className="text-xl mb-8 text-blue-100">
              Te damos la más cordial bienvenida. Estamos aquí para apoyarte en tu jornada espiritual.
            </p>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Contáctanos
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Contáctanos
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nos encantaría conocerte y responder cualquier pregunta que tengas. ¡No dudes en escribirnos!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Dirección</h4>
                        <p className="text-gray-600">Calle Gabriela Mistral 0371, Quilicura, Santiago</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Teléfono</h4>
                        <p className="text-gray-600">+52 123 456 7890</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-600">info@iglesiacsf.cl</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Horarios de Servicio</h4>
                        <p className="text-gray-600">
                          Domingos: 10:00 AM<br/>
                          - Culto dominicales 11:30 am<br/>
                          - Escuela Dominical 10:00 am<br/>

                          Sabado: Reunion de Oracion 18:00 hrs<br />
                          
                          Viernes: Union de Jovenes 19:00 hrs<br />
                          
                          Miércoles: Reuniones de oración 12:00 del día 20:00 hrs<br/>

                          Casas de paz : Grupos pequeños (en diferentes horarios y lugares de la comuna )
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Síguenos</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/csf.oficial_" className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all transform hover:scale-110">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="https://www.facebook.com/comisionadossinfronteras?_rdc=1&_rdr#" className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all transform hover:scale-110">
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a href="https://www.youtube.com/@comisionadossinfronteras" className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all transform hover:scale-110">
                      <Youtube className="w-6 h-6" />
                    </a>
                   
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">¡Mensaje Enviado!</h4>
                    <p className="text-gray-600">Gracias por contactarnos. Te responderemos pronto.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Tu nombre completo"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono (Opcional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="+52 123 456 7890"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        placeholder="Escribe tu mensaje aquí..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-400 to-yellow-400 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensaje</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  {/* <Heart className="w-5 h-5 text-white" /> */}
                  <img src={logo} alt="Logo" className="w-8 h-8 rounded-full object-cover" />
                </div>
                <span className="font-bold text-xl">Iglesia Comisionados Sin Fronteras</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Una comunidad de fe dedicada a servir a Dios y a nuestra comunidad con amor y esperanza.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Servicios</h3>
              <ul className="space-y-3 text-gray-400">
                <li>Culto Dominical</li>
                <li>Estudio Bíblico</li>
                <li>Alabanza y Adoración</li>
                <li>Ministerio Juvenil</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Contacto</h3>
              <ul className="space-y-3 text-gray-400">
                <li>Calle Gabriela Mistral 0371</li>
                <li>Quilicura, Santiago</li>
                <li>+52 123 456 7890</li>
                <li>info@iglesiacsf.cl</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/csf.oficial_" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/comisionadossinfronteras?_rdc=1&_rdr#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@comisionadossinfronteras" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-all">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Iglesia Comisionados Sin Fronteras. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;