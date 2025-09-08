import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Home, List, FileText, CheckCircle, Eye, Play, Book } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Home,
      title: 'Homepage',
      description: 'Clean, intuitive interface designed for easy navigation and quick access to study materials.',
      image: 'https://res.cloudinary.com/ddtbj3hej/image/upload/v1757175164/1751887258086_yfqrdi.jpg',
      alt: 'MED-A Homepage'
    },
    {
      icon: List,
      title: 'Course Selection',
      description: 'Access papers from various medical programs including nursing, clinical medicine, and more.',
      image: 'https://res.cloudinary.com/ddtbj3hej/image/upload/v1757175402/1751887292413_t2o8we.jpg',
      alt: 'Course Selection'
    },
    {
      icon: FileText,
      title: 'Sample Papers',
      description: 'High-quality past exam papers with detailed formatting and easy-to-read layout.',
      image: 'https://res.cloudinary.com/ddtbj3hej/image/upload/v1757182522/1751887335277_kdtdre.jpg',
      alt: 'Sample Paper'
    },
    {
      icon: CheckCircle,
      title: 'Answer Solutions',
      description: 'Detailed explanations and step-by-step solutions for better understanding.',
      image: 'https://res.cloudinary.com/ddtbj3hej/image/upload/v1757182571/1751887369184_vj525l.jpg',
      alt: 'Answer Solutions'
    },
    {
      icon: Eye,
      title: '3D Anatomy',
      description: 'Interactive 3D models for better visualization and understanding of human anatomy.',
      image: 'https://res.cloudinary.com/ddtbj3hej/image/upload/v1757182613/1751887389390_ijsjuf.jpg',
      alt: '3D Anatomy'
    },
    {
      icon: Play,
      title: 'Video Library',
      description: 'Educational videos covering various medical topics and procedures.',
      image: 'https://res.cloudinary.com/ddtbj3hej/image/upload/v1757182663/1751887412077_mquzra.jpg',
      alt: 'Video Library'
    }
  ];

  const booksFeature = {
    icon: Book,
    title: 'Digital Books',
    description: 'Comprehensive collection of medical textbooks and reference materials.',
    image: 'https://res.cloudinary.com/ddtbj3hej/image/upload/v1757182709/1751887444432_a6igxr.jpg',
    alt: 'Digital Books'
  };

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-dark mb-4 font-poppins">
            About MED-A
          </h1>
          <p className="text-gray-600 text-lg">
            Explore the powerful features that make MED-A the #1 choice for medical students
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-gray-50 hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <feature.icon className="text-primary text-2xl mb-2" size={32} />
                    <h3 className="text-xl font-bold text-dark">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <motion.img
                    src={feature.image}
                    alt={feature.alt}
                    className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow scale-on-hover"
                    whileHover={{ scale: 1.05 }}
                    style={{ pointerEvents: 'none' }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Books Feature - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="bg-gray-50 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <booksFeature.icon className="text-primary text-3xl mb-2 mx-auto" size={48} />
                <h3 className="text-2xl font-bold text-dark">{booksFeature.title}</h3>
                <p className="text-gray-600 mt-2">{booksFeature.description}</p>
              </div>
              <div className="flex justify-center">
                <motion.img
                  src={booksFeature.image}
                  alt={booksFeature.alt}
                  className="max-w-md w-full rounded-lg shadow-md hover:shadow-lg transition-shadow scale-on-hover"
                  whileHover={{ scale: 1.05 }}
                  style={{ pointerEvents: 'none' }}
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
