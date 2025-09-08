import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { MessageCircle, HelpCircle } from 'lucide-react';

export default function Support() {
  const [chatLoaded, setChatLoaded] = useState(false);

  const loadChatWidget = () => {
    if (!chatLoaded) {
      const script = document.createElement('script');
      script.src = '//code.jivosite.com/widget/aFEvlRanyJ';
      script.async = true;
      script.onload = () => {
        if (window.jivo_api) {
          window.jivo_api.open();
        }
      };
      document.body.appendChild(script);
      setChatLoaded(true);
    } else {
      if (window.jivo_api) {
        window.jivo_api.open();
      }
    }
  };

  const faqItems = [
    {
      question: 'How do I download MED-A?',
      answer: 'Click the download button and follow the installation instructions.',
      color: 'border-primary'
    },
    {
      question: 'Does MED-A update papers?',
      answer: 'Absolutely! Med-A updates all papers at the end of every semester to ensure you always access the latest content.',
      color: 'border-secondary'
    },
    {
      question: 'Which courses are supported?',
      answer: 'All KMTC courses including nursing, clinical medicine, and more.',
      color: 'border-accent'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-dark mb-4 font-poppins">
            Get Support
          </h1>
          <p className="text-gray-600 text-lg">
            We're here to help you with any questions or issues
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-white card-shadow">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="text-white" size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-dark mb-2">Live Chat Support</h2>
                    <p className="text-gray-600">Get instant help from our support team</p>
                  </div>
                  <div className="text-center">
                    <Button
                      size="lg"
                      className="gradient-bg text-white hover:opacity-90"
                      onClick={loadChatWidget}
                    >
                      <MessageCircle className="mr-2" size={20} />
                      Start Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-white card-shadow">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                      <HelpCircle className="text-white" size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-dark mb-2">FAQ</h2>
                    <p className="text-gray-600">Find answers to common questions</p>
                  </div>

                  <div className="space-y-4">
                    {faqItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        className={"border-l-4 " + item.color + " pl-4"}
                      >
                        <h3 className="font-semibold text-dark">{item.question}</h3>
                        <p className="text-gray-600 text-sm mt-1">{item.answer}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
