import { render, screen, fireEvent } from '@testing-library/react'
import { AcceleratorFeature } from '../AcceleratorFeature'

describe('AcceleratorFeature', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render welcome screen initially', () => {
    render(<AcceleratorFeature />)
    
    expect(screen.getByText(/Multiplique suas milhas e/)).toBeInTheDocument()
    expect(screen.getByText('Contratar Acelerador')).toBeInTheDocument()
    expect(screen.getByText('Agora não')).toBeInTheDocument()
  })

  it('should navigate to conversion screen when "Contratar Acelerador" is clicked', () => {
    render(<AcceleratorFeature />)
    
    fireEvent.click(screen.getByText('Contratar Acelerador'))
    
    expect(screen.getByText('Ative seu Acelerador')).toBeInTheDocument()
    expect(screen.getByText('🚀 Ativar Agora')).toBeInTheDocument()
  })

  it('should navigate to simulator screen when "Agora não" is clicked', () => {
    render(<AcceleratorFeature />)
    
    fireEvent.click(screen.getByText('Agora não'))
    
    expect(screen.getByText('Veja quanto você pode ganhar')).toBeInTheDocument()
    expect(screen.getByText('Contratar Acelerador')).toBeInTheDocument()
  })

  it('should navigate from simulator to conversion when "Contratar Acelerador" is clicked', () => {
    render(<AcceleratorFeature />)
    
    // Go to simulator first
    fireEvent.click(screen.getByText('Agora não'))
    expect(screen.getByText('Veja quanto você pode ganhar')).toBeInTheDocument()
    
    // Then go to conversion
    fireEvent.click(screen.getByText('Contratar Acelerador'))
    expect(screen.getByText('Ative seu Acelerador')).toBeInTheDocument()
  })

  it('should navigate back from simulator to welcome', () => {
    render(<AcceleratorFeature />)
    
    // Go to simulator
    fireEvent.click(screen.getByText('Agora não'))
    expect(screen.getByText('Veja quanto você pode ganhar')).toBeInTheDocument()
    
    // Go back to welcome
    fireEvent.click(screen.getByTestId('arrow-left'))
    expect(screen.getByText(/Multiplique suas milhas e/)).toBeInTheDocument()
  })

  it('should navigate back from conversion to simulator', () => {
    render(<AcceleratorFeature />)
    
    // Go to simulator first
    fireEvent.click(screen.getByText('Agora não'))
    
    // Then go to conversion
    fireEvent.click(screen.getByText('Contratar Acelerador'))
    expect(screen.getByText('Ative seu Acelerador')).toBeInTheDocument()
    
    // Go back to simulator
    fireEvent.click(screen.getByTestId('arrow-left'))
    expect(screen.getByText('Veja quanto você pode ganhar')).toBeInTheDocument()
  })

  it('should show correct progress bar for each screen', () => {
    render(<AcceleratorFeature />)
    
    // Welcome screen
    expect(screen.getByText('Passo 1 de 3')).toBeInTheDocument()
    
    // Go to simulator
    fireEvent.click(screen.getByText('Agora não'))
    expect(screen.getByText('Passo 2 de 3')).toBeInTheDocument()
    
    // Go to conversion
    fireEvent.click(screen.getByText('Contratar Acelerador'))
    expect(screen.getByText('Passo 3 de 3')).toBeInTheDocument()
  })

  it('should call window.open when close button is clicked in simulator', () => {
    render(<AcceleratorFeature />)
    
    // Go to simulator
    fireEvent.click(screen.getByText('Agora não'))
    
    // Click close button
    fireEvent.click(screen.getByTestId('x-icon'))
    expect(window.open).toHaveBeenCalledWith('https://www.google.com', '_blank')
  })

  it('should call window.open when activate button is clicked in conversion', () => {
    render(<AcceleratorFeature />)
    
    // Go to conversion
    fireEvent.click(screen.getByText('Contratar Acelerador'))
    
    // Click activate button
    fireEvent.click(screen.getByText('🚀 Ativar Agora'))
    expect(window.open).toHaveBeenCalledWith('https://www.google.com', '_blank')
  })
})
