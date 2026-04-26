"use client";
import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Plus, Minus } from "lucide-react"; // নতুন আইকন
import Image from "next/image";
import { 
  Menu, X, Phone, MapPin, Star, 
  MessageSquare, ArrowRight, Factory, Mail
} from "lucide-react";

// রিইউজেবল অ্যানিমেশন ভ্যারিয়েন্ট
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [mount, setMount] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [showProcess, setShowProcess] = useState(false);

  const phoneNumber = "+8801985127685"; 
  const emailAddress = "Bhaibhaifoodproducts1990@gmail.com";
  const whatsappLink = `https://wa.me/${phoneNumber.replace('+', '')}`;
  const callLink = `tel:${phoneNumber}`;

  useEffect(() => {
    setMount(true);
  }, []);

  const faqs = [
    {
      question: "Are your products 100% organic?",
      answer: "Yes, we source our paddy directly from local farmers in Gazipur and process them without any harmful chemicals or artificial whiteners. Our priority is your health."
    },
    {
      question: "How can I place a wholesale order?",
      answer: "For wholesale or bulk orders, you can directly call us at our provided number or message us on WhatsApp. We offer competitive factory prices for large quantities."
    },
    {
      question: "Do you deliver all over Bangladesh?",
      answer: "Currently, we offer factory-direct delivery within Gazipur and Dhaka. For other districts, we use reliable courier services to ensure freshness."
    },
    {
      question: "Is the production process hygienic?",
      answer: "Absolutely. We use modern stainless-steel machinery and maintain strict hygiene protocols in our factory to ensure the safest food for your family."
    }
  ];

  if (!mount) return null;

  return (
    <div className="relative min-h-screen bg-white font-sans scroll-smooth overflow-x-hidden">
      
      {/* --- Navbar --- */}
<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100">
  <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className="text-green-600 font-bold text-2xl flex items-center gap-1">
        <span className="text-3xl">🍃</span>
        <span className="text-green-700">Bhai Bhai</span>
        <span className="text-orange-700 font-black">Food</span>
      </div>
    </div>

    <div className="hidden md:flex gap-10 font-semibold text-gray-700">
      <a href="#" className="hover:text-green-600 transition">Home</a>
      <a href="#products" className="hover:text-green-600 transition">Products</a>
      <a href="#production" className="hover:text-green-600 transition">Production</a>
      <a href="#contact" className="hover:text-green-600 transition">Contact</a>
    </div>

    {/* Mobile Toggle Button */}
    <div className="md:hidden text-gray-800 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <X size={30} /> : <Menu size={30} />}
    </div>
  </div>

  {/* --- Mobile Menu Overlay --- */}
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
      >
        <div className="px-6 py-8 space-y-8">
          {/* Navigation Links */}
          <div className="flex flex-col gap-5 text-xl font-bold text-gray-800">
            <a href="#" onClick={() => setIsOpen(false)} className="hover:text-green-600">Home</a>
            <a href="#products" onClick={() => setIsOpen(false)} className="hover:text-green-600">Products</a>
            <a href="#production" onClick={() => setIsOpen(false)} className="hover:text-green-600">Production</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-green-600">Contact</a>
          </div>

          <hr className="border-gray-100" />

          {/* Owner Details Section */}
          <div className="bg-green-50 p-6 rounded-[2rem] border border-green-100">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 font-black text-[10px] uppercase tracking-widest mb-4">
              Owner Profile
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-green-200 flex items-center justify-center text-green-700 text-2xl font-black">
                {/* আপনি এখানে আপনার ছবি দিতে পারেন */}
                MS
              </div>
              <div>
                <h4 className="text-lg font-black text-gray-900 leading-tight">Mehedi Hasan Shakib</h4>
                <p className="text-green-700 text-sm font-bold italic">Software Engineer & Founder</p>
              </div>
            </div>

            <div className="space-y-3">
              <a href={callLink} className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition font-medium">
                <div className="p-2 bg-white rounded-lg shadow-sm"><Phone size={16} /></div>
                {phoneNumber}
              </a>
              <a href={`mailto:${emailAddress}`} className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition font-medium">
                <div className="p-2 bg-white rounded-lg shadow-sm"><Mail size={16} /></div>
                {emailAddress}
              </a>
              <div className="flex items-center gap-3 text-gray-600 font-medium">
                <div className="p-2 bg-white rounded-lg shadow-sm"><MapPin size={16} /></div>
                Sreepur, Gazipur,Dhaka, Bangladesh
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</nav>

      {/* --- Hero Section --- */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-bg.jpg" alt="Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50 z-10" /> 
        </div>
        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false }}
            className="text-5xl md:text-8xl font-black leading-tight uppercase tracking-tighter"
          >
            Pure <span className="text-green-400">&</span> Healthy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 0.8 }} 
            viewport={{ once: false }}
            className="mt-4 text-xl md:text-2xl font-medium opacity-80"
          >
            Gazipur's Finest Puffed & Flattened Rice
          </motion.p>
          <div className="mt-10 flex flex-col md:flex-row gap-5 justify-center font-bold">
            
            {/* --- Updated WhatsApp Order Button --- */}
            <motion.a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
              className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-full text-lg shadow-2xl uppercase tracking-widest transition flex items-center justify-center cursor-pointer"
            >
              Order Now
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
              href="#contact" 
              className="border-2 border-white text-white px-12 py-4 rounded-full text-lg hover:bg-white hover:text-black transition flex items-center justify-center"
            >
              Contact Us
            </motion.a>
          </div>
        </div>
      </section>


{/* --- Modern Overlap About Section --- */}
<section id="about" className="py-24 bg-white px-6 overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row items-center gap-16">
      
      {/* Left: Bold Typography Block */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/2 space-y-8"
      >
        <div className="space-y-4">
          <span className="inline-block px-4 py-1 rounded-full bg-green-50 text-green-700 text-xs font-black uppercase tracking-[0.3em]">
            Since 2001
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
            Nurturing <br />
            <span className="text-green-600">Pure Health</span> <br />
            With Every Grain.
          </h2>
        </div>

        {/* Highlighted Subtext: clear and bold */}
        <p className="text-gray-800 text-xl font-bold leading-relaxed max-w-xl border-l-8 border-orange-500 pl-6 bg-gray-50 py-4 rounded-r-2xl">
          We bring the authentic taste of Gazipur to your home, ensuring 
          <span className="text-green-700"> 100% chemical-free</span> puffed and flattened rice.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {[
            { title: 'Organic Process', desc: 'Direct from Sreepur farmers.', icon: '🌾' },
            { title: 'Modern Hygiene', desc: 'Stainless steel machinery.', icon: '🛡️' }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h4 className="font-black text-gray-900 text-sm uppercase">{item.title}</h4>
                <p className="text-gray-600 text-xs font-bold">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right: Large Colorful Image with Overlap Effect */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, x: 50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/2 relative"
      >
        <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-[12px] border-white">
          <Image 
            src="/about-factory.jpg" 
            alt="Bhai Bhai Food Factory" 
            fill 
            className="object-cover"
            priority
          />
          
          {/* Floating High-Contrast Badge */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 right-10 bg-orange-500 text-white p-8 rounded-[2.5rem] shadow-2xl z-20 hidden md:block border-4 border-white"
          >
            <span className="text-5xl font-black italic block">10+</span>
            <p className="text-[10px] uppercase font-black tracking-widest leading-tight">
              Years of <br /> Unbroken Trust
            </p>
          </motion.div>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-green-100 rounded-full blur-3xl -z-10 opacity-60" />
      </motion.div>

    </div>
  </div>
</section>



   {/* --- Featured Products --- */}
<section id="products" className="py-24 bg-gray-50 px-6">
  <div className="max-w-7xl mx-auto text-center">
    
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-4xl font-bold mb-16 text-gray-900 uppercase tracking-widest"
    >
      Featured Products
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[ 
        { title: "Red Chira", img: "/chira-product.png", desc: "Pure, nutritious red flattened rice sourced from local paddy.", longDesc: "Our Red Chira is processed using traditional methods to preserve vitamins. It's high in iron and fiber, making it a perfect healthy breakfast choice." },
        { title: "White Chira", img: "/chira2.png", desc: "Traditional white flattened rice, expertly processed for texture.", longDesc: "Expertly sorted and cleaned, our White Chira stays fresh and light. Great for making Chirar Polao or snacks with yogurt." },
        { title: "Premium Muri", img: "/muri.png", desc: "Crispy, light, and 100% natural puffed rice for your snacks.", longDesc: "Roasted without salt or chemicals. This Premium Muri is incredibly crunchy and serves as a low-calorie healthy snack." },
        { title: "Deshi Puffed Rice", img: "/muri2.png", desc: "Traditional deshi puffed rice, perfectly crunchy and healthy.", longDesc: "The classic taste of home. Our Deshi Muri is made from high-quality paddy and roasted to perfection for that unique aroma." }
      ].map((product, index) => (
        <motion.div 
          key={index} 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          whileHover={{ y: -10 }} 
          className="bg-white rounded-[2.5rem] shadow-lg overflow-hidden border border-gray-100 p-2 transition-all duration-500"
        >
          <div className="relative h-60 rounded-[2rem] overflow-hidden">
            <Image src={product.img} alt={product.title} fill className="object-cover" />
          </div>
          
          <div className="p-6 text-left">
            <h3 className="text-xl font-bold text-green-800 mb-2">{product.title}</h3>
            <p className="text-sm text-gray-600 mb-6 line-clamp-2">{product.desc}</p>
            
            <motion.button 
              onClick={() => setSelectedProduct(product)} // বাটনে ক্লিক করলে ডাটা সেট হবে
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 flex items-center justify-center gap-2 border-2 border-green-600 text-green-600 font-bold rounded-2xl hover:bg-green-600 hover:text-white transition"
            >
              View Details <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>

  {/* --- Product Details Modal --- */}
  <AnimatePresence>
    {selectedProduct && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProduct(null)} // বাইরে ক্লিক করলে বন্ধ হবে
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white rounded-[3rem] shadow-2xl max-w-lg w-full overflow-hidden z-10"
        >
          <button 
            onClick={() => setSelectedProduct(null)}
            className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition z-20"
          >
            <X size={24} className="text-gray-600" />
          </button>

          <div className="relative h-72 w-full">
            <Image src={selectedProduct.img} alt={selectedProduct.title} fill className="object-cover" />
          </div>

          <div className="p-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4">{selectedProduct.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              {selectedProduct.longDesc}
            </p>
            
            <motion.a 
              href={whatsappLink}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-green-600 text-white font-bold rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-green-200"
            >
              Order via WhatsApp <MessageSquare size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
</section>


{/* --- Production Highlights --- */}
<section id="production" className="relative py-32 bg-white px-6 overflow-hidden">
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.8 }}
        className="lg:col-span-7 grid grid-cols-2 gap-6 relative"
      >
        <div className="relative p-4 bg-gray-50 rounded-[2.5rem] shadow-xl z-10">
          <div className="relative h-64 rounded-[2rem] overflow-hidden">
            <Image src="/machinery.jpg" alt="Machinery" fill className="object-cover" />
          </div>
        </div>
        <div className="relative mt-20 p-4 bg-gray-50 rounded-[2.5rem] shadow-xl z-10">
          <div className="relative h-80 rounded-[2rem] overflow-hidden">
            <Image src="/process.jpg" alt="Production Process" fill className="object-cover" />
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.8 }}
        className="lg:col-span-5 text-left"
      >
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-green-100 text-green-700 font-black text-sm uppercase tracking-[0.2em] mb-8 shadow-sm">
          <Factory size={18} /> Production Highlights
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-[0.9] tracking-tighter">
          Crafted with <br /> <span className="text-green-600 italic">Technology</span> <br /> & Pure Care.
        </h2>
        <p className="text-gray-600 text-xl leading-relaxed mb-10 font-medium">
          While our journey began in Gazipur, we now source premium paddy from the finest harvest regions across Bangladesh, ensuring traditional taste with modern hygiene.
        </p>
        
        <motion.button 
          onClick={() => setShowProcess(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-600 hover:bg-green-700 text-white px-12 py-5 rounded-3xl font-black shadow-2xl transition flex items-center gap-3 uppercase tracking-widest text-sm"
        >
          Explore Process <ArrowRight size={20} />
        </motion.button>
      </motion.div>
    </div>
  </div>

  {/* --- Production Process Modal --- */}
  <AnimatePresence>
    {showProcess && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowProcess(false)}
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="relative bg-white rounded-[3rem] shadow-2xl max-w-2xl w-full p-8 md:p-12 z-10 overflow-hidden"
        >
          <button 
            onClick={() => setShowProcess(false)}
            className="absolute top-8 right-8 p-2 bg-gray-100 hover:bg-red-100 hover:text-red-600 rounded-full transition"
          >
            <X size={24} />
          </button>

          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-green-100 text-green-600 rounded-2xl">
              <Factory size={32} />
            </div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Our Production Journey</h2>
          </div>

          <div className="space-y-8 max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
            {[
              { 
                step: "01", 
                title: "Premium Sourcing", 
                desc: "We source high-quality paddy directly from local farmers across the best harvest regions of Bangladesh, ensuring the finest raw materials." 
              },
              { 
                step: "02", 
                title: "Advanced Cleaning", 
                desc: "Using automated grading and dusting technology, we remove all impurities, husks, and dust to ensure 100% purity for every grain." 
              },
              { 
                step: "03", 
                title: "Precision Processing", 
                desc: "Our stainless-steel machinery uses modern steaming and crushing techniques to maintain nutrition while keeping the products extra crispy." 
              },
              { 
                step: "04", 
                title: "Quality Inspection", 
                desc: "Each batch undergoes rigorous testing. We strictly avoid harmful chemicals or artificial whitening agents to keep your food natural and safe." 
              },
              { 
                step: "05", 
                title: "Hygienic Packaging", 
                desc: "Packed with zero human touch in a vacuum-sealed environment, we ensure that factory-fresh taste and aroma reach your doorstep." 
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6"
              >
                <span className="text-4xl font-black text-green-200 leading-none">{item.step}</span>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button 
            onClick={() => setShowProcess(false)}
            whileHover={{ scale: 1.02 }}
            className="w-full mt-10 py-4 bg-gray-900 text-white font-bold rounded-2xl"
          >
            Got It!
          </motion.button>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
</section>


      {/* --- Testimonials --- */}
      <section className="py-32 bg-gray-50 relative overflow-hidden px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="text-left mb-16">
            <span className="text-green-600 font-bold uppercase tracking-widest text-sm">Testimonials</span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mt-2 leading-none">Voices of Our <br/><span className="text-green-600">Customers.</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: "Abdur Razzak.", role: "Verified Buyer", text: "The best quality puffed rice I've had in years! It stays crispy for an incredibly long time, you can tell it's fresh." },
              { name: "Samsul Alom.", role: "Regular Customer", text: "Their Red Chira is incredibly authentic. It tastes just like how it was made in our village decades ago." },
              { name: "Kalam Sheikh.", role: "Happy Client", text: "Excellent packaging and very affordable since it's directly from the factory. A permanent addition to our breakfast routine." }
            ].map((review, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}
                transition={{ delay: index * 0.2 }}
                className="group relative p-12 rounded-[3.5rem] bg-white border border-gray-100 hover:bg-green-600 transition-all duration-500 shadow-sm hover:shadow-2xl"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-orange-400 text-orange-400 group-hover:text-white group-hover:fill-white" />
                  ))}
                </div>
                <p className="text-gray-600 group-hover:text-white transition-colors duration-500 text-lg leading-relaxed italic mb-10 relative z-10">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4 border-t border-gray-50 group-hover:border-green-500 pt-8 transition-colors">
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-700 font-bold group-hover:bg-white group-hover:text-green-600 transition-colors">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-white transition-colors uppercase tracking-tight">{review.name}</h4>
                    <p className="text-[10px] text-gray-400 group-hover:text-green-100 transition-colors font-bold uppercase tracking-[0.2em]">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



    {/* --- High-Impact FAQ Section --- */}
<section className="py-32 bg-gray-50 relative overflow-hidden px-6">
  {/* Background Decorative Circles */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-green-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
    
    {/* Left Side: Animated Heading Box */}
    <motion.div 
      initial={{ opacity: 0, x: -30 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      className="lg:col-span-4"
    >
      <div className="sticky top-32 p-10 bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-green-50">
        <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-green-200">
          <HelpCircle size={32} />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] mb-6">
          Got <span className="text-green-600 italic">Questions?</span>
        </h2>
        <p className="text-gray-500 font-medium mb-10">
          Everything you need to know about our organic processing and delivery.
        </p>
        <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-2xl border border-orange-100">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold italic">!</div>
          <span className="text-xs font-bold text-orange-800 uppercase tracking-wider">Fast Support Available</span>
        </div>
      </div>
    </motion.div>

    {/* Right Side: Highlighted FAQ Cards */}
    <div className="lg:col-span-8 space-y-6">
      {faqs.map((faq, index) => {
        const isActive = activeIndex === index;
        return (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`group rounded-[2.5rem] border-2 transition-all duration-500 overflow-hidden ${
              isActive 
                ? "border-green-500 bg-white shadow-[0_20px_40px_rgba(22,163,74,0.1)] scale-[1.02]" 
                : "border-white bg-white/60 hover:border-green-200 hover:bg-white shadow-sm"
            }`}
          >
            <button 
              onClick={() => setActiveIndex(isActive ? null : index)} 
              className="w-full flex items-center justify-between p-8 md:p-10 text-left outline-none"
            >
              <div className="flex gap-6 items-center">
                <span className={`text-2xl font-black transition-colors duration-300 ${
                  isActive ? "text-green-600" : "text-gray-300"
                }`}>
                  0{index + 1}
                </span>
                <span className={`text-lg md:text-xl font-black transition-all duration-300 ${
                  isActive ? "text-gray-900" : "text-gray-600 group-hover:text-green-700"
                }`}>
                  {faq.question}
                </span>
              </div>
              <div className={`p-4 rounded-2xl transition-all duration-500 ${
                isActive ? "bg-green-600 text-white rotate-180 shadow-lg shadow-green-200" : "bg-gray-100 text-gray-400 group-hover:bg-green-50"
              }`}>
                <ChevronDown size={20} />
              </div>
            </button>

            <AnimatePresence>
              {isActive && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }} 
                  animate={{ height: "auto", opacity: 1 }} 
                  exit={{ height: 0, opacity: 0 }} 
                  transition={{ duration: 0.4, ease: "circOut" }}
                >
                  <div className="px-10 pb-10 md:pl-[7.5rem]">
                    <div className="h-[2px] w-12 bg-orange-400 mb-6 rounded-full" />
                    <p className="text-gray-600 text-lg font-medium leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

{/* --- Clean & High-Contrast Stats Section --- */}
<section className="py-24 bg-white px-6">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {[
        { label: "Skilled Workers", value: "100+", icon: "👥", bgColor: "bg-emerald-50", iconBg: "bg-emerald-500", textColor: "text-emerald-900" },
        { label: "Delivery Vehicles", value: "10", icon: "🚚", bgColor: "bg-orange-50", iconBg: "bg-orange-500", textColor: "text-orange-900" },
        { label: "Expert Drivers", value: "10", icon: "👨‍✈️", bgColor: "bg-sky-50", iconBg: "bg-sky-500", textColor: "text-sky-900" },
        { label: "Modern Machines", value: "20", icon: "⚙️", bgColor: "bg-purple-50", iconBg: "bg-purple-500", textColor: "text-purple-900" }
      ].map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ y: -12 }}
          className={`relative p-8 rounded-[2.5rem] ${stat.bgColor} flex flex-col items-center border border-white shadow-xl shadow-gray-100/50 transition-all duration-300`}
        >
          {/* Floating Icon Box */}
          <div className={`-mt-14 w-20 h-20 ${stat.iconBg} rounded-3xl flex items-center justify-center text-white text-3xl shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-500`}>
            {stat.icon}
          </div>

          <div className="mt-8 text-center space-y-2">
            {/* Value - Bold and Visible */}
            <h3 className={`text-5xl font-black ${stat.textColor} tracking-tight`}>
              {stat.value}
            </h3>

            {/* Label - Dark and Clear */}
            <p className="text-gray-900 font-extrabold text-sm uppercase tracking-wider">
              {stat.label}
            </p>
          </div>

          {/* Minimalist Bottom Accent */}
          <div className="mt-6 flex gap-1">
            <div className="w-2 h-2 bg-white rounded-full" />
            <div className="w-12 h-2 bg-white/50 rounded-full" />
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>

          {/* Subtle Decorative Circle */}
          <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full blur-xl" />
        </motion.div>
      ))}

    </div>
  </div>
</section>



{/* --- Upgraded Production Staff Section --- */}
<div className="space-y-6 mt-12 px-2">
  <div className="flex items-center justify-between">
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-orange-700 border border-orange-100 font-black text-[10px] uppercase tracking-widest">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
      </span>
      Production Experts
    </div>
  </div>

  <div className="grid grid-cols-1 gap-5">
    {[
      { name: "Md. Mosaddek Hossain", role: "Quality Controller", experience: "10+ Years", initial: "MH", color: "from-orange-400 to-orange-600" },
      { name: "Aziz Ahmed", role: "Machinery Expert", experience: "7 Years", initial: "AA", color: "from-amber-400 to-amber-600" },
      { name: "Rahim Khan", role: "Packaging Supervisor", experience: "5 Years", initial: "RK", color: "from-yellow-400 to-yellow-600" }
    ].map((staff, index) => (
      <motion.div 
        key={index}
        whileHover={{ x: 10 }}
        className="group relative bg-white p-5 rounded-[2.5rem] border border-gray-100 flex items-center gap-5 shadow-sm hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-500"
      >
        {/* Profile Avatar with Gradient Background */}
        <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${staff.color} flex items-center justify-center text-white font-black text-lg shadow-lg transform group-hover:rotate-6 transition-transform duration-500`}>
          {staff.initial}
          {/* Decorative Ring */}
          <div className="absolute inset-1 border-2 border-white/20 rounded-xl" />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="text-md font-black text-gray-900 leading-tight group-hover:text-orange-600 transition-colors">
                {staff.name}
              </h4>
              <p className="text-gray-500 text-xs font-bold mt-0.5 tracking-wide">
                {staff.role}
              </p>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 rounded-full border border-gray-100">
              <Star size={10} className="text-orange-500 fill-orange-500" />
              <span className="text-[10px] font-black text-gray-600 uppercase tracking-tighter">
                {staff.experience} Exp
              </span>
            </div>
            
            {/* Status Indicator */}
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[9px] font-bold text-gray-400 uppercase">On Duty</span>
            </div>
          </div>
        </div>

        {/* Floating Arrow Icon (Only visible on hover or mobile) */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-orange-50 rounded-full text-orange-600">
          <ArrowRight size={16} />
        </div>

        {/* Background Decorative Pattern */}
        <div className="absolute -right-2 -bottom-2 w-16 h-16 bg-gray-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>
    ))}
  </div>

  {/* Summary Footer */}
  <div className="bg-orange-600 p-6 rounded-[2.5rem] text-white overflow-hidden relative group">
    <div className="relative z-10 flex items-center justify-between">
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Total Strength</p>
        <h4 className="text-2xl font-black">100+ Skilled Workers</h4>
      </div>
      <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
        <Factory size={24} />
      </div>
    </div>
    {/* Abstract background shapes */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl transition-transform group-hover:scale-150 duration-700" />
  </div>
</div>

     {/* --- CTA Section --- */}
<section className="py-24 px-6 bg-white">
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }}
    className="max-w-6xl mx-auto overflow-hidden relative rounded-[4rem] bg-gradient-to-br from-green-600 to-green-900 p-12 md:p-24 shadow-2xl text-center text-white"
  >
    <div className="relative z-10">
      <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
        Experience <span className="text-orange-400">Purity</span> Today
      </h2>
      <p className="text-xl md:text-2xl text-green-50/80 mb-12 max-w-2xl mx-auto font-medium">
        Place your order now and get the freshest traditional food delivered straight from our factory.
      </p>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <motion.a 
          whileHover={{ scale: 1.1 }}
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-white text-green-700 px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest shadow-2xl hover:bg-green-50 transition"
        >
          <MessageSquare size={24} /> Order on WhatsApp
        </motion.a>

        {/* --- Updated Call Button --- */}
        <motion.a 
          whileHover={{ scale: 1.1 }}
          href={`tel:${phoneNumber}`} // সরাসরি এখানে tel: ব্যবহার করা নিরাপদ
          className="flex items-center justify-center gap-3 bg-orange-600 text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest shadow-2xl hover:bg-orange-700 transition cursor-pointer"
        >
          <Phone size={24} /> Call Us Now
        </motion.a>
      </div>
    </div>
  </motion.div>
</section>

      {/* --- Footer --- */}
      <footer id="contact" className="bg-[#1a1c1e] text-white pt-24 pb-12 px-6 rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}>
            <div className="text-3xl font-black text-green-500 mb-6 tracking-tighter italic uppercase">BHAI BHAI FOOD</div>
            <p className="text-gray-400 leading-relaxed max-w-sm font-medium italic">
              "A unique name of tradition and purity. We believe that good health is the root of all happiness, hence each of our products is made with the finest ingredients selected directly from the farm."
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-gray-500">Quick Navigation</h4>
            <div className="flex flex-col gap-4 font-bold text-gray-300">
              <a href="#" className="hover:text-green-500 transition-colors flex items-center gap-2">
                <ArrowRight size={16} className="text-green-600"/> Home
              </a>
              <a href="#products" className="hover:text-green-500 transition-colors flex items-center gap-2">
                <ArrowRight size={16} className="text-green-600"/> Our Products
              </a>
              <a href="#production" className="hover:text-green-500 transition-colors flex items-center gap-2">
                <ArrowRight size={16} className="text-green-600"/> Machinery & Process
              </a>
              <a href="#contact" className="hover:text-green-500 transition-colors flex items-center gap-2">
                <ArrowRight size={16} className="text-green-600"/> Contact Support
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-gray-500">Contact Details</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300 group">
                <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center text-green-500 group-hover:bg-green-600 group-hover:text-white transition-all">
                   <MapPin size={24} />
                </div>
                <span className="font-bold">Mawna, Sreepur, Gazipur</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300 group">
                <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center text-green-500 group-hover:bg-green-600 group-hover:text-white transition-all">
                   <Phone size={24} />
                </div>
                <span className="font-bold">{phoneNumber}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300 group">
                <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center text-green-500 group-hover:bg-green-600 group-hover:text-white transition-all">
                   <Mail size={24} />
                </div>
                <span className="font-bold lowercase">{emailAddress}</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800 text-center">
  <div className="text-gray-600 text-[10px] font-black uppercase tracking-[0.5em]">
    © 2023 Bhai Bhai Food Factory. Pure & Organic Tradition.
  </div>
</div>
      </footer>

      {/* WhatsApp Floating Button */}
      <motion.a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 right-10 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl cursor-pointer"
      >
        <MessageSquare size={32} />
      </motion.a>

    </div>
  );
}