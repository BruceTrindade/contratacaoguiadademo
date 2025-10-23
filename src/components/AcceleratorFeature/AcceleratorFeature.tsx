import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { WelcomeScreen } from './WelcomeScreen';
import { SimulatorScreen } from './SimulatorScreen';
import { ConversionScreen } from './ConversionScreen';

type Screen = 'welcome' | 'simulator' | 'conversion';

export const AcceleratorFeature: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  // Função para ir direto para contratação (do botão "Contratar Acelerador")
  const handleDirectConversion = () => {
    setCurrentScreen('conversion');
    setCurrentStep(3);
  };

  // Função para ir para simulador (do botão "Agora não")
  const handleGoToSimulator = () => {
    setCurrentScreen('simulator');
    setCurrentStep(2);
  };

  // Função para voltar da simulador para welcome
  const handleBackToWelcome = () => {
    setCurrentScreen('welcome');
    setCurrentStep(1);
  };

  // Função para ir do simulador para conversão
  const handleSimulatorToConversion = () => {
    setCurrentScreen('conversion');
    setCurrentStep(3);
  };

  // Função para voltar da conversão para simulador
  const handleBackToSimulator = () => {
    setCurrentScreen('simulator');
    setCurrentStep(2);
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return (
          <WelcomeScreen
            onNext={handleDirectConversion}
            onSecondary={handleGoToSimulator}
            currentStep={currentStep}
            totalSteps={totalSteps}
          />
        );
      case 'simulator':
        return (
          <SimulatorScreen
            onNext={handleSimulatorToConversion}
            onBack={handleBackToWelcome}
            currentStep={currentStep}
            totalSteps={totalSteps}
          />
        );
      case 'conversion':
        return (
          <ConversionScreen
            onBack={handleBackToSimulator}
            currentStep={currentStep}
            totalSteps={totalSteps}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        {renderCurrentScreen()}
      </AnimatePresence>
    </div>
  );
};
