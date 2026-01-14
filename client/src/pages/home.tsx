import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Download, Play, GraduationCap, Book, Eye, Smartphone, Building2, Users, Target } from 'lucide-react';

export default function Home() {
  const medaDownloadUrl = "https://apk.e-droid.net/apk/app3179519-tbdlv2.apk?v=7";
  
  const features = [
    { icon: GraduationCap, text: 'KMTC Papers', color: 'bg-gradient-to-r from-orange-400 to-pink-400 text-white' },
    { icon: Book, text: 'Digital Library', color: 'bg-gradient-to-r from-purple-400 to-indigo-400 text-white' },
    { icon: Eye, text: '3D Anatomy', color: 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white' },
  ];

  const bridges = [
    { icon: Building2, text: 'Building Bridges', color: 'bg-gradient-to-r from-rose-400 to-orange-400 text-white' },
    { icon: Users, text: 'In Learning', color: 'bg-gradient-to-r from-amber-400 to-red-400 text-white' },
    { icon: Target, text: 'Through Technology', color: 'bg-gradient-to-r from-pink-400 to-purple-400 text-white' },
  ];

  const screenshots = [
    "https://res.cloudinary.com/ddtbj3hej/image/upload/v1757175164/1751887258086_yfqrdi.jpg",
    "https://res.cloudinary.com/ddtbj3hej/image/upload/v1757175402/1751887292413_t2o8we.jpg",
  ];

  const apps = [
    {
      name: "MED-A",
      subtitle: "Medical Archives",
      description: "Access past exam papers from Kenya Medical Training College (KMTC) and other medical institutions.",
      logo: "https://res.cloudinary.com/ddtbj3hej/image/upload/v1757178001/1751887615363_eavpit.jpg",
      downloadUrl: medaDownloadUrl,
      featured: true
    }
    // Add more apps here in the future
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-400 via-pink-500 via-red-500 to-purple-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Zetubridge Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <img
              src="https://res.cloudinary.com/ddtbj3hej/image/upload/v1757174586/BackgroundEraser_20250906_184426881_xl7mhj.png"
              alt="ZETUBRIDGE Logo"
              className="w-24 h-24 mx-auto mb-4 rounded-full shadow-2xl ring-4 ring-white/30"
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200 drop-shadow-lg">
              ZETUBRIDGE
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-yellow-100 mb-2 tracking-wide">
              Education Through Technology
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {bridges.map((bridge, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`px-6 py-3 rounded-full text-sm font-bold shadow-lg transform hover:scale-105 transition-all duration-300 ${bridge.color}`}
                >
                  <bridge.icon className="inline w-5 h-5 mr-2" />
                  {bridge.text}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white drop-shadow-lg">
                Building Bridges in Learning
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-8 text-orange-100 leading-relaxed">
                Important for KMTC & Medical Students
This website does NOT host past papers or notes.
👉 All answered KMTC past papers, notes, anatomy videos, and 3D views are available ONLY inside the MED-A app.
Download MED-A to access all study materials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-2 border-yellow-300"
                  onClick={() => window.open(medaDownloadUrl, '_blank')}
                >
                  <Smartphone className="mr-3" size={24} />
                  Download MED-A
                </Button>
                <Button
                  size="lg"
                  className="bg-white/20 backdrop-blur-md text-white font-bold px-8 py-4 rounded-full shadow-xl hover:bg-white/30 transform hover:scale-105 transition-all duration-300 border-2 border-white/30"
                >
                  <Play className="mr-3" size={24} />
                  Discover More
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <div className="relative transform hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-3xl blur-2xl opacity-50"></div>
                <img
                  src="https://res.cloudinary.com/ddtbj3hej/image/upload/v1757178174/1757171325673_meomos.jpg"
                  alt="Student using MED-A app"
                  className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl ring-8 ring-white/20 animate-float"
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-orange-400/30 rounded-full blur-lg"></div>
      </section>

      {/* Featured App Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600">
              Featured Apps
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold">Bridging Knowledge Through Technology</p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {apps.filter(app => app.featured).map((app, appIndex) => (
              <Card key={appIndex} className="bg-gradient-to-br from-white via-orange-50 to-pink-50 border-none shadow-2xl rounded-3xl overflow-hidden mb-8">
                <CardContent className="p-6 sm:p-8 lg:p-16">
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div>
                      <div className="flex flex-col sm:flex-row items-center sm:items-start mb-8">
                        <div className="relative mb-4 sm:mb-0">
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl blur-md opacity-50"></div>
                          <img
                            src={app.logo}
                            alt={`${app.name} App Logo`}
                            className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:mr-6 shadow-2xl ring-4 ring-white"
                          />
                        </div>
                        <div className="text-center sm:text-left">
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 mb-2">{app.name}</h3>
                          <p className="text-lg sm:text-xl font-bold text-purple-600">{app.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-gray-800 mb-8 leading-relaxed text-base sm:text-lg font-medium text-center sm:text-left">
                        {app.description}
                      </p>

                    <div className="grid grid-cols-1 gap-4 mb-10">
                      {features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className={`px-6 py-4 rounded-2xl text-lg font-bold shadow-lg transform hover:scale-105 transition-all duration-300 ${feature.color}`}
                        >
                          <feature.icon className="inline w-6 h-6 mr-3" />
                          {feature.text}
                        </motion.div>
                      ))}
                    </div>

                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-bold px-6 sm:px-10 py-4 sm:py-5 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-base sm:text-lg w-full sm:w-auto"
                          onClick={() => window.open(app.downloadUrl, '_blank')}
                        >
                          <Smartphone className="mr-2 sm:mr-3" size={20} />
                          Download Now
                        </Button>
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 font-bold px-6 sm:px-10 py-4 sm:py-5 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-base sm:text-lg border-2 border-purple-200 w-full sm:w-auto"
                        >
                          <Play className="mr-2 sm:mr-3" size={20} />
                          Learn More
                        </Button>
                      </div>
                  </div>

                    <div className="relative mt-8 lg:mt-0">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-3xl blur-3xl opacity-30"></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative">
                          {screenshots.map((screenshot, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: index * 0.2 }}
                              viewport={{ once: true }}
                              className={`relative group ${index === 1 && screenshots.length > 1 ? 'sm:mt-8' : ''}`}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                              <img
                                src={screenshot}
                                alt={`${app.name} Screenshot ${index + 1}`}
                                className="relative rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 ring-4 ring-white w-full"
                                style={{ pointerEvents: 'none' }}
                              />
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-70 animate-bounce hidden sm:block"></div>
                        <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-pink-500 rounded-full opacity-50 animate-pulse hidden sm:block"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
