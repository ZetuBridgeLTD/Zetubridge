import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Newspaper, Users, Award, ArrowRight } from 'lucide-react';

export default function News() {
  const newsItems = [
    {
      icon: Newspaper,
      category: 'MED-A Update',
      date: '2 days ago',
      title: 'New Features Added to MED-A',
      content: 'Enhanced 3D anatomy visualization and improved paper search functionality now available in the latest version.',
      color: 'bg-primary'
    },
    {
      icon: Users,
      category: 'Community',
      date: '1 week ago',
      title: 'Growing MED-A Community',
      content: 'Over 10,000 KMTC students are now using MED-A for their exam preparation. Join the growing community!',
      color: 'bg-secondary'
    },
    {
      icon: Award,
      category: 'Achievement',
      date: '2 weeks ago',
      title: 'MED-A Wins Education Award',
      content: 'Recognized as the best educational app for medical students in Kenya. Thank you for your support!',
      color: 'bg-accent'
    }
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-dark mb-4 font-poppins">
            Latest News
          </h1>
          <p className="text-gray-600 text-lg">Stay updated with MED-A developments</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-white hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center`}>
                      <item.icon className="text-white" size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-dark">{item.category}</h3>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-dark mb-3">{item.title}</h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.content}</p>
                  
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-primary/80 p-0 h-auto font-semibold"
                  >
                    Read More
                    <ArrowRight className="ml-1" size={16} />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
