import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../shared/Button';
import { Card } from '../shared/Card';
import { Header } from './Header';
import { ProgressBar } from './ProgressBar';

interface ConversionScreenProps {
  onBack: () => void;
  currentStep: number;
  totalSteps: number;
}

export const ConversionScreen: React.FC<ConversionScreenProps> = ({
  onBack,
  currentStep,
  totalSteps
}) => {
  const handleActivate = () => {
    // Redireciona para o Google como solicitado
    window.open('https://www.google.com', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-gray-50 flex flex-col"
    >
      {/* Header */}
      <Header
        title="Multiplique suas milhas e viaje mais"
        onBack={onBack}
        showBackButton={true}
      />

      {/* Progress Bar */}
      <div className="p-6">
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 py-8">
        {/* Content Card */}
        <Card className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-orange-600 text-3xl">✈️</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ative seu Acelerador
            </h1>
            <p className="text-gray-600 text-lg">
              Você está prestes a multiplicar seus pontos!
            </p>
          </motion.div>

          {/* Benefits Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              O que você vai ganhar:
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">3x</span>
                  </div>
                  <span className="font-medium text-gray-700">Multiplicador de pontos</span>
                </div>
                <span className="text-orange-600 font-bold">Ativo</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="font-medium text-gray-700">Sem taxa de adesão</span>
                </div>
                <span className="text-green-600 font-bold">Gratuito</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">∞</span>
                  </div>
                  <span className="font-medium text-gray-700">Pontos ilimitados</span>
                </div>
                <span className="text-blue-600 font-bold">Ilimitado</span>
              </div>
            </div>
          </motion.div>

          {/* Security Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center space-x-2 text-gray-600 mb-4">
              <span className="text-green-500">🔒</span>
              <span className="font-medium">Processo 100% seguro</span>
            </div>
            <p className="text-sm text-gray-500">
              Seus dados estão protegidos com criptografia bancária
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-6"
          >
            {/* Main CTA */}
            <div className="text-center">
              <Button
                onClick={handleActivate}
                size="lg"
                className="w-full mb-4"
              >
                🚀 Ativar Agora
              </Button>
              <p className="text-sm text-gray-500">
                Ativação instantânea • Sem compromisso
              </p>
            </div>
          </motion.div>
        </Card>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mt-8 text-center"
        >
          <Card className="max-w-md mx-auto">
            <h4 className="font-semibold text-gray-800 mb-2">
              Precisa de ajuda?
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              Nossa equipe está pronta para te ajudar
            </p>
            <button className="text-orange-600 text-sm font-medium hover:underline">
              Falar com suporte
            </button>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};
