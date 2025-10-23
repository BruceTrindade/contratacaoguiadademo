import { render, screen, fireEvent } from '@testing-library/react'
import { ConversionScreen } from '../ConversionScreen'

describe('ConversionScreen', () => {
  const defaultProps = {
    onBack: vi.fn(),
    currentStep: 3,
    totalSteps: 3,
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render header with back button', () => {
    render(<ConversionScreen {...defaultProps} />)
    
    expect(screen.getByText('Multiplique suas milhas e viaje mais')).toBeInTheDocument()
    expect(screen.getByTestId('arrow-left')).toBeInTheDocument()
  })

  it('should render progress bar', () => {
    render(<ConversionScreen {...defaultProps} />)
    expect(screen.getByText('Passo 3 de 3')).toBeInTheDocument()
  })

  it('should render title and description', () => {
    render(<ConversionScreen {...defaultProps} />)
    
    expect(screen.getByText('Ative seu Acelerador')).toBeInTheDocument()
    expect(screen.getByText('Você está prestes a multiplicar seus pontos!')).toBeInTheDocument()
  })

  it('should render airplane icon', () => {
    render(<ConversionScreen {...defaultProps} />)
    expect(screen.getByText('✈️')).toBeInTheDocument()
  })

  it('should render benefits list', () => {
    render(<ConversionScreen {...defaultProps} />)
    
    expect(screen.getByText('O que você vai ganhar:')).toBeInTheDocument()
    expect(screen.getByText('Multiplicador de pontos')).toBeInTheDocument()
    expect(screen.getByText('Sem taxa de adesão')).toBeInTheDocument()
    expect(screen.getByText('Pontos ilimitados')).toBeInTheDocument()
  })

  it('should render benefit statuses', () => {
    render(<ConversionScreen {...defaultProps} />)
    
    expect(screen.getByText('Ativo')).toBeInTheDocument()
    expect(screen.getByText('Gratuito')).toBeInTheDocument()
    expect(screen.getByText('Ilimitado')).toBeInTheDocument()
  })

  it('should render security info', () => {
    render(<ConversionScreen {...defaultProps} />)
    
    expect(screen.getByText('Processo 100% seguro')).toBeInTheDocument()
    expect(screen.getByText('Seus dados estão protegidos com criptografia bancária')).toBeInTheDocument()
  })

  it('should render main CTA button', () => {
    render(<ConversionScreen {...defaultProps} />)
    
    expect(screen.getByText('🚀 Ativar Agora')).toBeInTheDocument()
    expect(screen.getByText('Ativação instantânea • Sem compromisso')).toBeInTheDocument()
  })

  it('should call window.open when CTA button is clicked', () => {
    render(<ConversionScreen {...defaultProps} />)
    
    fireEvent.click(screen.getByText('🚀 Ativar Agora'))
    expect(window.open).toHaveBeenCalledWith('https://www.google.com', '_blank')
  })

  it('should call onBack when back button is clicked', () => {
    render(<ConversionScreen {...defaultProps} />)
    
    fireEvent.click(screen.getByTestId('arrow-left'))
    expect(defaultProps.onBack).toHaveBeenCalledTimes(1)
  })

  it('should render help section', () => {
    render(<ConversionScreen {...defaultProps} />)
    
    expect(screen.getByText('Precisa de ajuda?')).toBeInTheDocument()
    expect(screen.getByText('Nossa equipe está pronta para te ajudar')).toBeInTheDocument()
    expect(screen.getByText('Falar com suporte')).toBeInTheDocument()
  })

  it('should render all benefit icons', () => {
    render(<ConversionScreen {...defaultProps} />)
    
    expect(screen.getByText('3x')).toBeInTheDocument()
    expect(screen.getByText('✓')).toBeInTheDocument()
    expect(screen.getByText('∞')).toBeInTheDocument()
  })
})
