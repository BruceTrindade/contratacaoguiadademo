import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../shared/Button';
import { Card } from '../shared/Card';
import { Input } from '../shared/Input';
import { Header } from './Header';
import { ProgressBar } from './ProgressBar';
import { useAcceleratorCalculator } from '../../hooks/useAcceleratorCalculator';

interface SimulatorScreenProps {
  onNext: () => void;
  onBack: () => void;
  currentStep: number;
  totalSteps: number;
}

export const SimulatorScreen: React.FC<SimulatorScreenProps> = ({
  onNext,
  onBack,
  currentStep,
  totalSteps
}) => {
  const {
    monthlySpending,
    setMonthlySpending,
    calculation,
    formatPoints
  } = useAcceleratorCalculator();

  const hasValidInput = parseFloat(monthlySpending) > 0;

  const handleClose = () => {
    window.open('https://www.google.com', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen bg-gray-50 flex flex-col"
    >
      {/* Header */}
      <Header
        title="Multiplique suas milhas e viaje mais"
        onBack={onBack}
        onClose={handleClose}
        showBackButton={true}
        showCloseButton={true}
      />

      {/* Progress Bar */}
      <div className="p-6">
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Veja quanto você pode ganhar
          </h1>
          <p className="text-gray-600 text-lg">
            Descubra quantos pontos extras você pode acumular
          </p>
        </motion.div>

        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <Card className="max-w-md mx-auto">
            <Input
              label="Quanto você gasta por mês no cartão?"
              value={monthlySpending}
              onChange={setMonthlySpending}
              type="number"
              placeholder="Ex: 2000"
            />
          </Card>
        </motion.div>

        {/* Results */}
        {hasValidInput && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-6 mb-8"
          >
            {/* Comparison Cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Without Accelerator */}
              <Card className="text-center">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-gray-600 text-xl">📊</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Sem Acelerador
                  </h3>
                </div>
                <div className="text-3xl font-bold text-gray-600 mb-2">
                  {formatPoints(calculation.basePoints)} pontos
                </div>
                <p className="text-gray-500 text-sm">
                  Pontos normais por mês
                </p>
              </Card>

              {/* With Accelerator */}
              <Card className="text-center border-2 border-orange-200">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-orange-600 text-xl">🚀</span>
                  </div>
                  <h3 className="text-lg font-semibold text-orange-700 mb-2">
                    Com Acelerador
                  </h3>
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {formatPoints(calculation.acceleratedPoints)} pontos
                </div>
                <p className="text-orange-500 text-sm font-medium">
                  +{formatPoints(calculation.extraPoints)} pontos extras!
                </p>
              </Card>
            </div>

            {/* Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center max-w-2xl mx-auto"
            >
              <h3 className="text-xl font-bold text-orange-800 mb-2">
                🎉 Você ganharia {formatPoints(calculation.extraPoints)} pontos extras por mês!
              </h3>
              <p className="text-orange-700">
                Isso significa <strong>{formatPoints(calculation.extraPoints * 12)} pontos extras por ano</strong> - 
                o suficiente para várias passagens!
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center"
        >
          <Button
            onClick={onNext}
            disabled={!hasValidInput}
            size="lg"
            className="w-full max-w-sm"
          >
            Contratar Acelerador
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};
