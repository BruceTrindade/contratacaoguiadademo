import { useState, useMemo } from 'react';

export interface PointCalculation {
  basePoints: number;
  acceleratedPoints: number;
  extraPoints: number;
  multiplier: number;
}

export const useAcceleratorCalculator = () => {
  const [monthlySpending, setMonthlySpending] = useState<string>('');

  const calculation = useMemo((): PointCalculation => {
    const spending = parseFloat(monthlySpending) || 0;
    const basePoints = spending * 1; // 1 ponto por real
    const acceleratedPoints = spending * 3; // 3x com acelerador
    const extraPoints = acceleratedPoints - basePoints;
    const multiplier = 3;

    return {
      basePoints,
      acceleratedPoints,
      extraPoints,
      multiplier
    };
  }, [monthlySpending]);

  const formatPoints = (points: number): string => {
    return new Intl.NumberFormat('pt-BR').format(Math.round(points));
  };

  const getExamples = () => {
    const examples = [
      { spending: 1500, description: 'Compras do supermercado' },
      { spending: 3000, description: 'Combustível e restaurantes' },
      { spending: 5000, description: 'Todas as suas compras mensais' }
    ];

    return examples.map(example => ({
      ...example,
      basePoints: example.spending * 1,
      acceleratedPoints: example.spending * 3,
      extraPoints: example.spending * 2
    }));
  };

  return {
    monthlySpending,
    setMonthlySpending,
    calculation,
    formatPoints,
    getExamples
  };
};
