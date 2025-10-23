import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../shared/Button';
import { Card } from '../shared/Card';
import { PassportAnimation } from './PassportAnimation';
import { ProgressBar } from './ProgressBar';

interface WelcomeScreenProps {
  onNext: () => void;
  onSecondary: () => void;
  currentStep: number;
  totalSteps: number;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onNext,
  onSecondary,
  currentStep,
  totalSteps
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-gray-50 flex flex-col"
    >
      {/* Progress Bar */}
      <div className="p-6">
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Content Card */}
        <Card className="w-full max-w-2xl text-center">
          {/* Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <PassportAnimation />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8"
          >
            Multiplique suas milhas e{' '}
            <span className="text-orange-500">viaje mais!</span>
          </motion.h1>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="space-y-4 mb-8"
          >
            <div className="flex items-center justify-center space-x-3">
              <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-orange-500 text-sm">✓</span>
              </div>
              <p className="text-gray-700 text-left">
                Ganhe até <strong>3x mais pontos</strong> em todas as compras
              </p>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-orange-500 text-sm">✓</span>
              </div>
              <p className="text-gray-700 text-left">
                Acumule milhas para suas <strong>próximas viagens</strong>
              </p>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-orange-500 text-sm">✓</span>
              </div>
              <p className="text-gray-700 text-left">
                <strong>Sem taxa de adesão</strong>, apenas benefícios
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="space-y-3"
          >
            <Button
              onClick={onNext}
              size="lg"
              className="w-full"
            >
              Contratar Acelerador
            </Button>
            
            <Button
              onClick={onSecondary}
              variant="secondary"
              size="lg"
              className="w-full"
            >
              Agora não
            </Button>
          </motion.div>
        </Card>
      </div>
    </motion.div>
  );
};
