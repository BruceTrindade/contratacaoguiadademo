import { render, screen, fireEvent } from '@testing-library/react'
import { SimulatorScreen } from '../SimulatorScreen'

// Mock the hook
vi.mock('../../hooks/useAcceleratorCalculator', () => ({
  useAcceleratorCalculator: () => ({
    monthlySpending: '2000',
    setMonthlySpending: vi.fn(),
    calculation: {
      basePoints: 2000,
      acceleratedPoints: 6000,
      extraPoints: 4000,
      multiplier: 3,
    },
    formatPoints: (points: number) => points.toLocaleString('pt-BR'),
  }),
}))

describe('SimulatorScreen', () => {
  const defaultProps = {
    onNext: vi.fn(),
    onBack: vi.fn(),
    currentStep: 2,
    totalSteps: 3,
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render header with back button and close button', () => {
    render(<SimulatorScreen {...defaultProps} />)
    
    expect(screen.getByText('Multiplique suas milhas e viaje mais')).toBeInTheDocument()
    expect(screen.getByTestId('arrow-left')).toBeInTheDocument()
    expect(screen.getByTestId('x-icon')).toBeInTheDocument()
  })

  it('should render progress bar', () => {
    render(<SimulatorScreen {...defaultProps} />)
    expect(screen.getByText('Passo 2 de 3')).toBeInTheDocument()
  })

  it('should render title and description', () => {
    render(<SimulatorScreen {...defaultProps} />)
    
    expect(screen.getByText('Veja quanto você pode ganhar')).toBeInTheDocument()
    expect(screen.getByText('Descubra quantos pontos extras você pode acumular')).toBeInTheDocument()
  })

  it('should render input field', () => {
    render(<SimulatorScreen {...defaultProps} />)
    
    expect(screen.getByText('Quanto você gasta por mês no cartão?')).toBeInTheDocument()
    expect(screen.getByDisplayValue('2000')).toBeInTheDocument()
  })

  it('should render comparison cards when input is valid', () => {
    render(<SimulatorScreen {...defaultProps} />)
    
    expect(screen.getByText('Sem Acelerador')).toBeInTheDocument()
    expect(screen.getByText('Com Acelerador')).toBeInTheDocument()
    expect(screen.getByText('2.000 pontos')).toBeInTheDocument()
    expect(screen.getByText('6.000 pontos')).toBeInTheDocument()
  })

  it('should render highlight section', () => {
    render(<SimulatorScreen {...defaultProps} />)
    
    expect(screen.getByText(/Você ganharia 4.000 pontos extras por mês!/)).toBeInTheDocument()
    expect(screen.getByText(/48.000 pontos extras por ano/)).toBeInTheDocument()
  })

  it('should render action button', () => {
    render(<SimulatorScreen {...defaultProps} />)
    expect(screen.getByText('Contratar Acelerador')).toBeInTheDocument()
  })

  it('should call onNext when action button is clicked', () => {
    render(<SimulatorScreen {...defaultProps} />)
    
    fireEvent.click(screen.getByText('Contratar Acelerador'))
    expect(defaultProps.onNext).toHaveBeenCalledTimes(1)
  })

  it('should call onBack when back button is clicked', () => {
    render(<SimulatorScreen {...defaultProps} />)
    
    fireEvent.click(screen.getByTestId('arrow-left'))
    expect(defaultProps.onBack).toHaveBeenCalledTimes(1)
  })

  it('should call window.open when close button is clicked', () => {
    render(<SimulatorScreen {...defaultProps} />)
    
    fireEvent.click(screen.getByTestId('x-icon'))
    expect(window.open).toHaveBeenCalledWith('https://www.google.com', '_blank')
  })
})
