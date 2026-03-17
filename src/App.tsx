import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Car, 
  Clock, 
  ShieldCheck, 
  ThumbsUp, 
  ChevronDown, 
  ChevronUp,
  Menu,
  X,
  CheckCircle2,
  CalendarDays,
  Briefcase,
  Plane,
  Users
} from 'lucide-react';

const PHONE_NUMBER = "03258358368";
const WHATSAPP_LINK = `https://wa.me/923258358368`;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRental",
          "name": "Capital Drive Rent A Car",
          "image": "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
          "@id": "",
          "url": "https://capitaldrive.com",
          "telephone": "+923258358368",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Islamabad",
            "addressLocality": "Islamabad",
            "addressRegion": "ICT",
            "postalCode": "44000",
            "addressCountry": "PK"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 33.6844,
            "longitude": 73.0479
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          },
          "sameAs": [
            "https://wa.me/923258358368"
          ]
        })
      }} />

      {/* Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black text-white shadow-lg py-3' : 'bg-black/90 text-white py-5 backdrop-blur-sm'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center max-w-7xl">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
            <Car className="w-8 h-8 text-yellow-400" />
            <span className="text-xl md:text-2xl font-bold tracking-tight">CAPITAL<span className="text-yellow-400">DRIVE</span></span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <button onClick={() => scrollTo('home')} className="hover:text-yellow-400 transition-colors">Home</button>
            <button onClick={() => scrollTo('services')} className="hover:text-yellow-400 transition-colors">Services</button>
            <button onClick={() => scrollTo('areas')} className="hover:text-yellow-400 transition-colors">Areas</button>
            <button onClick={() => scrollTo('about')} className="hover:text-yellow-400 transition-colors">About</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-yellow-400 transition-colors">Contact</button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 bg-yellow-400 text-black px-5 py-2.5 rounded-full font-bold hover:bg-yellow-500 transition-colors">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-black border-t border-gray-800 overflow-hidden"
            >
              <div className="flex flex-col px-4 py-6 gap-4">
                <button onClick={() => scrollTo('home')} className="text-left text-lg font-medium hover:text-yellow-400">Home</button>
                <button onClick={() => scrollTo('services')} className="text-left text-lg font-medium hover:text-yellow-400">Services</button>
                <button onClick={() => scrollTo('areas')} className="text-left text-lg font-medium hover:text-yellow-400">Areas We Serve</button>
                <button onClick={() => scrollTo('about')} className="text-left text-lg font-medium hover:text-yellow-400">About Us</button>
                <button onClick={() => scrollTo('faq')} className="text-left text-lg font-medium hover:text-yellow-400">FAQ</button>
                <button onClick={() => scrollTo('contact')} className="text-left text-lg font-medium hover:text-yellow-400">Contact</button>
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 bg-yellow-400 text-black px-5 py-3 rounded-lg font-bold mt-2">
                  <Phone className="w-5 h-5" />
                  Call {PHONE_NUMBER}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Luxury car rental in Islamabad" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl text-white"
          >
            <motion.span variants={fadeUp} className="inline-block py-1 px-3 rounded-full bg-yellow-400/20 text-yellow-400 font-semibold text-sm mb-4 border border-yellow-400/30">
              #1 Rent a Car Islamabad
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Premium <span className="text-yellow-400">Car Rental</span> <br/>in Islamabad
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Cheap & reliable car rental services. We offer airport transfer Islamabad, corporate travel, and monthly car leasing with professional drivers and well-maintained vehicles.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all transform hover:scale-105">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#20bd5a] transition-all transform hover:scale-105">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </a>
            </motion.div>
            
            <motion.div variants={fadeUp} className="mt-12 flex items-center gap-6 text-sm font-medium text-gray-300">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-yellow-400" /> 24/7 Support</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-yellow-400" /> Free Delivery</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-yellow-400" /> Clean Cars</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="prose prose-lg max-w-none text-gray-600"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">The Best Rent a Car in Islamabad</h2>
            <p className="mb-6">
              Finding a reliable <strong>rent a car Islamabad</strong> service can be challenging, but Capital Drive makes it effortless. Whether you are a tourist exploring the beautiful capital city, a business executive attending meetings, or a local resident in need of a temporary vehicle, our <strong>car rental Islamabad</strong> services are tailored to meet your specific needs. We pride ourselves on offering a diverse fleet of well-maintained vehicles, ranging from economical hatchbacks to luxurious sedans and spacious SUVs.
            </p>
            <p className="mb-6">
              When you search for a <strong>cheap rent a car Islamabad</strong>, you don't want to compromise on quality or safety. At Capital Drive, affordability meets excellence. We provide transparent pricing with no hidden charges, ensuring you get the best value for your money. Our <strong>car leasing Islamabad</strong> options are perfect for long-term requirements, offering flexible terms and comprehensive maintenance packages for corporate clients and individuals alike.
            </p>
            <p className="mb-6">
              Islamabad, known for its scenic beauty and well-planned infrastructure, demands a transportation service that matches its standards. That is exactly what we deliver. From the lush green Margalla Hills to the bustling commercial hubs of the Blue Area, having a reliable vehicle transforms your experience. We ensure that every client who books an <strong>Islamabad car hire</strong> with us receives a vehicle that is not only mechanically sound but also impeccably clean and sanitized.
            </p>
            
            <h3 className="text-2xl font-bold text-black mt-10 mb-4">Benefits of Car Rental with Capital Drive</h3>
            <p className="mb-6">
              Opting for an <strong>Islamabad car hire</strong> with us comes with numerous advantages. First and foremost is convenience. Navigating the city's wide avenues and scenic routes is a joy when you have a comfortable vehicle at your disposal. Our <strong>monthly car rental Islamabad</strong> plans are highly sought after by expatriates and professionals who require a dependable mode of transport without the long-term commitment of purchasing a vehicle.
            </p>
            <p className="mb-6">
              For businesses, our <strong>corporate car rental Islamabad</strong> service provides a seamless transportation solution. We understand that punctuality and presentation are critical in the corporate world. Therefore, our fleet is meticulously cleaned and serviced, and our professional chauffeurs are trained to provide a VIP experience. Whether it's picking up a VIP client or arranging transport for a company retreat, we handle it all with utmost professionalism.
            </p>
            <p className="mb-6">
              Another significant benefit is the freedom of choice. Depending on your itinerary, you might need a compact car for city driving today and a robust SUV for a weekend trip to the northern areas tomorrow. Our diverse fleet allows you to select the perfect vehicle for every occasion. This flexibility is a core component of what makes us the <strong>best rent a car service</strong> in the region.
            </p>

            <h3 className="text-2xl font-bold text-black mt-10 mb-4">Why Choose Local Car Rental Experts?</h3>
            <p className="mb-6">
              As a local business, we possess an intimate understanding of the city's geography and traffic patterns. This local expertise is particularly beneficial for our <strong>airport transfer Islamabad</strong> and <strong>airport pick and drop Islamabad</strong> services. We monitor flight schedules to ensure our drivers are always on time, providing a stress-free transition from the airport to your destination, whether it's a hotel in the Blue Area or a residence in DHA.
            </p>
            <p className="mb-6">
              Furthermore, our services extend to all major sectors and housing societies. If you need a <strong>rent a car DHA Islamabad</strong> or a <strong>rent a car Bahria Town Islamabad</strong>, we offer prompt delivery and pickup services right to your doorstep. We are committed to being the most <strong>reliable car hire Islamabad</strong> has to offer, combining an <strong>affordable car rental</strong> structure with premium customer service. From <strong>luxury car rental Islamabad</strong> for weddings and special events to <strong>economy car rental Islamabad</strong> for daily commutes, Capital Drive is your ultimate partner for mobility in the capital.
            </p>
            <p className="mb-6">
              We also understand the importance of safety and security. All our vehicles are equipped with modern tracking systems, and our drivers undergo rigorous background checks. When you travel with Capital Drive, you are in safe hands. Our commitment to safety, combined with our exceptional customer service, sets us apart from other rental companies.
            </p>
            <p>
              Experience the ease of <strong>online car booking Islamabad</strong> through our streamlined process. Our <strong>24/7 car rental service</strong> ensures that no matter when you need a vehicle, we are just a call or a WhatsApp message away. Choose Capital Drive for the <strong>best rent a car service</strong> experience in Pakistan's capital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">Our Premium Services</h2>
            <p className="text-lg text-gray-600">Comprehensive car rental solutions tailored to your personal and professional needs in Islamabad.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors">
                <CalendarDays className="w-7 h-7 text-yellow-600 group-hover:text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Daily / Weekly / Monthly Car Rental</h3>
              <p className="text-gray-600 leading-relaxed">
                Flexible rental plans to suit your schedule. Whether you need a car for a quick daily errand, a week-long exploration of the city, or a monthly arrangement for extended stays, our <strong>monthly car rental Islamabad</strong> packages offer unbeatable rates and well-maintained vehicles.
              </p>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors">
                <Plane className="w-7 h-7 text-yellow-600 group-hover:text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Airport Transfer Islamabad</h3>
              <p className="text-gray-600 leading-relaxed">
                Start or end your journey with our reliable <strong>airport pick and drop Islamabad</strong> service. We track your flight status to ensure timely pickups from Islamabad International Airport. Enjoy a comfortable, hassle-free ride to your hotel, home, or office with our professional chauffeurs.
              </p>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors">
                <Briefcase className="w-7 h-7 text-yellow-600 group-hover:text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Corporate Travel</h3>
              <p className="text-gray-600 leading-relaxed">
                Elevate your business image with our <strong>corporate car rental Islamabad</strong> solutions. We provide luxury sedans and professional drivers for executive transport, client meetings, and corporate events. Experience punctuality, discretion, and premium comfort designed for the business professional.
              </p>
            </motion.div>

            {/* Service 4 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors">
                <Users className="w-7 h-7 text-yellow-600 group-hover:text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Family Trips & Tours</h3>
              <p className="text-gray-600 leading-relaxed">
                Planning a family getaway to Murree, Nathiagali, or northern areas? We offer spacious SUVs and minivans perfect for family trips. Our vehicles are equipped with modern safety features and ample luggage space, ensuring a comfortable and secure journey for your loved ones.
              </p>
            </motion.div>

            {/* Service 5 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors">
                <Car className="w-7 h-7 text-yellow-600 group-hover:text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Car Leasing Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Our <strong>car leasing Islamabad</strong> service is the smart alternative to buying a vehicle. Enjoy the benefits of a personal car without the hassle of maintenance, insurance, and depreciation. We offer customized leasing contracts for individuals and companies with a wide selection of latest models.
              </p>
            </motion.div>
            
            {/* CTA Card */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-black text-white p-8 rounded-2xl shadow-xl flex flex-col justify-center items-center text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-gray-400 mb-8">Contact us today to discuss your specific transportation requirements.</p>
              <a href={`tel:${PHONE_NUMBER}`} className="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors">
                Call {PHONE_NUMBER}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section id="areas" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Areas We Serve in Islamabad & Rawalpindi</h2>
                <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Capital Drive provides extensive coverage across the twin cities. Whether you are located in the heart of the capital or in the expanding suburbs, our <strong>rent a car Islamabad</strong> network ensures rapid vehicle delivery and pickup. 
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  We frequently serve clients in prime sectors including <strong>F-6, F-7, F-10, G-10, and G-11</strong>, catering to both residential and commercial needs. For corporate clients, our services in the <strong>Blue Area</strong> are highly optimized for quick executive transport. Furthermore, we have dedicated operations for <strong>rent a car DHA Islamabad</strong> and <strong>rent a car Bahria Town Islamabad</strong>, ensuring residents of these premium societies have access to top-tier mobility solutions 24/7. We also provide seamless connectivity to and from the <strong>Islamabad International Airport</strong>.
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {['Sector F-6 & F-7', 'Sector F-10', 'Sector G-10 & G-11', 'DHA Islamabad', 'Bahria Town', 'Blue Area', 'Islamabad Airport', 'Rawalpindi', 'E-11 & D-12'].map((area, index) => (
                    <div key={index} className="flex items-center gap-2 text-yellow-400 font-medium">
                      <MapPin className="w-4 h-4" />
                      <span className="text-white">{area}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden h-[500px]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1585521551061-0b57e7a83d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Islamabad City View" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <div className="bg-black/60 backdrop-blur-md p-6 rounded-xl border border-white/10 w-full">
                    <h4 className="text-xl font-bold text-yellow-400 mb-2">Fast Delivery to Your Doorstep</h4>
                    <p className="text-gray-300">Book online or call us, and we'll deliver the car directly to your location within 60 minutes in major sectors.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">Why Choose Capital Drive?</h2>
            <p className="text-lg text-gray-600">We are committed to providing the most reliable and affordable car rental experience in the capital.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center p-6">
              <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                <ThumbsUp className="w-10 h-10 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Affordable Pricing</h3>
              <p className="text-gray-600">We offer highly competitive rates for <strong>cheap rent a car Islamabad</strong> without compromising on vehicle quality or service standards.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center p-6">
              <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                <ShieldCheck className="w-10 h-10 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Clean & Safe Cars</h3>
              <p className="text-gray-600">Every vehicle undergoes a rigorous cleaning and mechanical inspection process before it is handed over to you.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center p-6">
              <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                <Users className="w-10 h-10 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Drivers</h3>
              <p className="text-gray-600">Our chauffeurs are highly trained, background-checked, well-mannered, and possess excellent knowledge of local routes.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center p-6">
              <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                <Clock className="w-10 h-10 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Support & Fast Booking</h3>
              <p className="text-gray-600">Our <strong>24/7 car rental service</strong> ensures you can book a car or get roadside assistance at any hour of the day or night.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="lg:w-1/2">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">About Capital Drive</h2>
                <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
                
                <div className="prose prose-lg text-gray-600">
                  <p>
                    Established with a vision to revolutionize the transportation sector in Pakistan's capital, <strong>Capital Drive Rent A Car</strong> has grown to become a symbol of trust, reliability, and excellence. We understand that renting a car is not just about getting a vehicle; it's about the entire experience—from the moment you make an inquiry to the time you return the keys.
                  </p>
                  <p>
                    With years of experience in the industry, we have built a solid reputation as the <strong>best rent a car service</strong> in the region. Our business is built on the foundation of absolute customer satisfaction. We believe in building long-term relationships with our clients, which is why a significant portion of our business comes from repeat customers and referrals. Whether it's a family needing a reliable car for a weekend trip, or a multinational corporation requiring a fleet for their executives, we treat every client with the same level of dedication and professionalism.
                  </p>
                  <p>
                    Our fleet is continuously updated to ensure we offer the latest models equipped with modern safety and comfort features. We maintain strict maintenance schedules, so you never have to worry about breakdowns or technical issues. When you choose Capital Drive, you are choosing peace of mind, transparent dealings, and a partner who truly cares about your journey.
                  </p>
                </div>
                
                <div className="mt-8 flex gap-6">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex-1 text-center">
                    <div className="text-3xl font-black text-black mb-1">10+</div>
                    <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Years Experience</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex-1 text-center">
                    <div className="text-3xl font-black text-black mb-1">5k+</div>
                    <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Happy Clients</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex-1 text-center">
                    <div className="text-3xl font-black text-black mb-1">100+</div>
                    <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Premium Cars</div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 w-full">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                <img src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Luxury Car" className="rounded-2xl w-full h-64 object-cover shadow-lg" />
                <img src="https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Car Interior" className="rounded-2xl w-full h-64 object-cover shadow-lg mt-8" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about our car rental services in Islamabad.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Which is the best rent a car in Islamabad?",
                a: "Capital Drive is widely recognized as one of the best rent a car services in Islamabad due to our transparent pricing, well-maintained fleet, professional drivers, and exceptional 24/7 customer support."
              },
              {
                q: "What is the cost of car rental in Islamabad?",
                a: "The cost varies depending on the vehicle type and rental duration. Economy cars are highly affordable, while luxury vehicles and SUVs have higher rates. We offer special discounts for weekly and monthly car rental Islamabad packages. Contact us for a precise quote."
              },
              {
                q: "What are your airport transfer charges?",
                a: "Our airport pick and drop Islamabad charges are highly competitive and depend on the vehicle selected and your destination sector (e.g., F-7, DHA, Bahria Town). The rate is fixed with no hidden waiting charges."
              },
              {
                q: "Do you provide cars without a driver (self-drive)?",
                a: "Yes, we offer both self-drive and chauffeur-driven options. For self-drive, specific documentation including a valid driving license, CNIC, and a security deposit is required."
              },
              {
                q: "Can I get a car delivered to DHA or Bahria Town?",
                a: "Absolutely! We provide dedicated rent a car DHA Islamabad and rent a car Bahria Town Islamabad services, including doorstep delivery and pickup for your convenience."
              },
              {
                q: "What is included in the car leasing service?",
                a: "Our car leasing Islamabad service includes the vehicle, routine maintenance, comprehensive insurance, and replacement vehicle support in case of breakdowns, offering a completely hassle-free experience."
              },
              {
                q: "Are there any hidden charges?",
                a: "No, Capital Drive believes in 100% transparency. The quote provided to you includes all standard charges. Fuel and toll taxes are generally the responsibility of the renter unless a specific all-inclusive package is booked."
              },
              {
                q: "How can I make an online car booking?",
                a: "You can easily make an online car booking Islamabad by calling our 24/7 helpline or sending us a message on WhatsApp. Our representatives will confirm your booking within minutes."
              }
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="flex flex-col lg:flex-row">
              {/* Contact Info */}
              <div className="lg:w-1/3 bg-black text-white p-10 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
                  <p className="text-gray-400 mb-10">Ready to book your ride? Contact us now for the best rates.</p>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-yellow-400/20 p-3 rounded-full text-yellow-400">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-gray-400 text-sm font-medium mb-1">Call Us 24/7</h4>
                        <a href={`tel:${PHONE_NUMBER}`} className="text-xl font-bold hover:text-yellow-400 transition-colors">{PHONE_NUMBER}</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-[#25D366]/20 p-3 rounded-full text-[#25D366]">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-gray-400 text-sm font-medium mb-1">WhatsApp</h4>
                        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-xl font-bold hover:text-[#25D366] transition-colors">{PHONE_NUMBER}</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-full text-white">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-gray-400 text-sm font-medium mb-1">Location</h4>
                        <p className="text-lg font-medium">Islamabad, Pakistan</p>
                        <p className="text-gray-400 text-sm mt-1">Serving all major sectors, DHA, and Bahria Town.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <a href={`tel:${PHONE_NUMBER}`} className="w-full block text-center bg-yellow-400 text-black py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition-colors">
                    Call Now to Book
                  </a>
                </div>
              </div>
              
              {/* Map */}
              <div className="lg:w-2/3 h-[400px] lg:h-auto min-h-[500px] relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106272.82593414972!2d72.97889658744041!3d33.684420199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="Capital Drive Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-900">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Car className="w-8 h-8 text-yellow-400" />
                <span className="text-2xl font-bold tracking-tight">CAPITAL<span className="text-yellow-400">DRIVE</span></span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                The most reliable and affordable car rental and leasing service in Islamabad. Providing premium vehicles and professional drivers 24/7.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><button onClick={() => scrollTo('home')} className="hover:text-yellow-400 transition-colors">Home</button></li>
                <li><button onClick={() => scrollTo('services')} className="hover:text-yellow-400 transition-colors">Our Services</button></li>
                <li><button onClick={() => scrollTo('areas')} className="hover:text-yellow-400 transition-colors">Areas We Serve</button></li>
                <li><button onClick={() => scrollTo('about')} className="hover:text-yellow-400 transition-colors">About Us</button></li>
                <li><button onClick={() => scrollTo('faq')} className="hover:text-yellow-400 transition-colors">FAQs</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Rent a Car Islamabad</li>
                <li>Airport Transfer Islamabad</li>
                <li>Corporate Car Rental</li>
                <li>Monthly Car Leasing</li>
                <li>Rent a Car DHA & Bahria</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Contact Info</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <span>{PHONE_NUMBER}</span>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  <span>{PHONE_NUMBER}</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                  <span>Islamabad, Pakistan</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Capital Drive Rent A Car. All rights reserved.
            </p>
            <div className="text-gray-500 text-sm">
              Designed for premium mobility in Islamabad.
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-black text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </a>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
      <button 
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-lg text-black pr-8">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-yellow-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
