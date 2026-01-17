import React from 'react';
import { CTAButton } from './components/CTAButton';
import { PriceCard } from './components/PriceCard';
import { BenefitCard } from './components/BenefitCard';
import { AccordionItem } from './components/AccordionItem';
import { Send, FileText, MessageCircle } from 'lucide-react';

export default function App() {
  const programDays = [
    { day: 1, title: "Күн 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { day: 2, title: "Күн 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { day: 3, title: "Күн 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { day: 4, title: "Күн 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { day: 5, title: "Күн 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { day: 6, title: "Күн 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { day: 7, title: "Күн 7", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[390px] mx-auto bg-white min-h-screen shadow-xl">
        {/* Header */}
        <header className="px-6 pt-12 pb-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl font-bold">КЖ</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
            КӨРСӨТМӨ КУРАЛ ЖАСОО
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            PowerPoint • Picsart • Canva • Компьютер сабаттуулук • Портфолио • STEM
          </p>
        </header>

        {/* Price Card */}
        <div className="px-6 mb-8">
          <PriceCard />
        </div>

        {/* Main CTA */}
        <div className="px-6 mb-8">
          <CTAButton 
            href="https://t.me/your_group" 
            variant="primary"
            icon={<Send className="w-5 h-5" />}
          >
            Telegram группага кошулуу
          </CTAButton>
        </div>

        {/* Benefits Section */}
        <div className="px-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Үйрөнөсүз:</h2>
          <div className="grid grid-cols-3 gap-3">
            <BenefitCard title="PowerPoint" gradient="from-orange-500 to-red-500" />
            <BenefitCard title="Canva" gradient="from-purple-500 to-indigo-500" />
            <BenefitCard title="Picsart" gradient="from-pink-500 to-rose-500" />
          </div>
        </div>

        {/* Course Format Card */}
        <div className="px-6 mb-8">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 border border-purple-100">
            <h3 className="text-base font-semibold text-gray-900 mb-3">📚 Курстун форматы</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Сабактар Telegram группага салынат. Видео сабактар + тапшырмалар + суроо-жооп.
            </p>
          </div>
        </div>

        {/* 7-Day Program Section */}
        <div className="px-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">7 күндүк программа:</h2>
          <div className="space-y-3">
            {programDays.map((item) => (
              <AccordionItem 
                key={item.day}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>

        {/* Secondary Buttons */}
        <div className="px-6 mb-8 space-y-3">
          <CTAButton 
            href="#program" 
            variant="secondary"
            icon={<FileText className="w-5 h-5" />}
          >
            Курс программасы
          </CTAButton>
          <CTAButton 
            href="#contact" 
            variant="secondary"
            icon={<MessageCircle className="w-5 h-5" />}
          >
            Байланыш
          </CTAButton>
        </div>

        {/* Final CTA Banner */}
        <div className="px-6 mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-center shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6 leading-tight">
              Катталуу үчүн азыр кошул!
            </h2>
            <a 
              href="https://t.me/your_group"
              className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 font-semibold px-8 py-4 rounded-full w-full hover:bg-gray-50 transition-all shadow-lg"
            >
              <Send className="w-5 h-5" />
              Telegram группага кошулуу
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="px-6 pb-12 text-center">
          <p className="text-sm text-gray-500">
            Суроолор үчүн: WhatsApp/Telegram
          </p>
        </footer>
      </div>
    </div>
  );
}
