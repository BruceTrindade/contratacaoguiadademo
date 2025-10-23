import { render, screen, fireEvent } from '@testing-library/react'
import { WelcomeScreen } from '../WelcomeScreen'

describe('WelcomeScreen', () => {
  const defaultProps = {
    onNext: vi.fn(),
    onSecondary: vi.fn(),
    currentStep: 1,
    totalSteps: 3,
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render title and benefits', () => {
    render(<WelcomeScreen {...defaultProps} />)
    
    expect(screen.getByText(/Multiplique suas milhas e/)).toBeInTheDocument()
    expect(screen.getByText(/viaje mais!/)).toBeInTheDocument()
    expect(screen.getByText(/Ganhe até 3x mais pontos/)).toBeInTheDocument()
    expect(screen.getByText(/Acumule milhas para suas/)).toBeInTheDocument()
    expect(screen.getByText(/Sem taxa de adesão/)).toBeInTheDocument()
  })

  it('should render progress bar', () => {
    render(<WelcomeScreen {...defaultProps} />)
    expect(screen.getByText('Passo 1 de 3')).toBeInTheDocument()
  })

  it('should render passport animation', () => {
    render(<WelcomeScreen {...defaultProps} />)
    expect(screen.getByTestId('lottie-animation')).toBeInTheDocument()
  })

  it('should render both action buttons', () => {
    render(<WelcomeScreen {...defaultProps} />)
    expect(screen.getByText('Contratar Acelerador')).toBeInTheDocument()
    expect(screen.getByText('Agora não')).toBeInTheDocument()
  })

  it('should call onNext when "Contratar Acelerador" is clicked', () => {
    render(<WelcomeScreen {...defaultProps} />)
    
    fireEvent.click(screen.getByText('Contratar Acelerador'))
    expect(defaultProps.onNext).toHaveBeenCalledTimes(1)
  })

  it('should call onSecondary when "Agora não" is clicked', () => {
    render(<WelcomeScreen {...defaultProps} />)
    
    fireEvent.click(screen.getByText('Agora não'))
    expect(defaultProps.onSecondary).toHaveBeenCalledTimes(1)
  })

  it('should have correct button variants', () => {
    render(<WelcomeScreen {...defaultProps} />)
    
    const primaryButton = screen.getByText('Contratar Acelerador')
    const secondaryButton = screen.getByText('Agora não')
    
    expect(primaryButton).toHaveClass('bg-orange-400')
    expect(secondaryButton).toHaveClass('bg-gray-100')
  })

  it('should render all benefit checkmarks', () => {
    render(<WelcomeScreen {...defaultProps} />)
    
    const checkmarks = screen.getAllByText('✓')
    expect(checkmarks).toHaveLength(3)
  })
})
