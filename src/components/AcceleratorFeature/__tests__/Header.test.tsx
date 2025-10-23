import { render, screen, fireEvent } from '@testing-library/react'
import { Header } from '../Header'

describe('Header', () => {
  it('should render title', () => {
    render(<Header title="Test Title" />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('should not show back button by default', () => {
    render(<Header title="Test Title" />)
    expect(screen.queryByTestId('arrow-left')).not.toBeInTheDocument()
  })

  it('should show back button when showBackButton is true', () => {
    const handleBack = vi.fn()
    render(
      <Header 
        title="Test Title" 
        onBack={handleBack} 
        showBackButton={true} 
      />
    )
    expect(screen.getByTestId('arrow-left')).toBeInTheDocument()
  })

  it('should call onBack when back button is clicked', () => {
    const handleBack = vi.fn()
    render(
      <Header 
        title="Test Title" 
        onBack={handleBack} 
        showBackButton={true} 
      />
    )
    
    fireEvent.click(screen.getByTestId('arrow-left'))
    expect(handleBack).toHaveBeenCalledTimes(1)
  })

  it('should not show close button by default', () => {
    render(<Header title="Test Title" />)
    expect(screen.queryByTestId('x-icon')).not.toBeInTheDocument()
  })

  it('should show close button when showCloseButton is true', () => {
    const handleClose = vi.fn()
    render(
      <Header 
        title="Test Title" 
        onClose={handleClose} 
        showCloseButton={true} 
      />
    )
    expect(screen.getByTestId('x-icon')).toBeInTheDocument()
  })

  it('should call onClose when close button is clicked', () => {
    const handleClose = vi.fn()
    render(
      <Header 
        title="Test Title" 
        onClose={handleClose} 
        showCloseButton={true} 
      />
    )
    
    fireEvent.click(screen.getByTestId('x-icon'))
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('should show both back and close buttons when both are enabled', () => {
    const handleBack = vi.fn()
    const handleClose = vi.fn()
    render(
      <Header 
        title="Test Title" 
        onBack={handleBack} 
        onClose={handleClose}
        showBackButton={true} 
        showCloseButton={true} 
      />
    )
    
    expect(screen.getByTestId('arrow-left')).toBeInTheDocument()
    expect(screen.getByTestId('x-icon')).toBeInTheDocument()
  })
})
