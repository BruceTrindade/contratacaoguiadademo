import { render, screen } from '@testing-library/react'
import { ProgressBar } from '../ProgressBar'

describe('ProgressBar', () => {
  it('should render current step and total steps', () => {
    render(<ProgressBar currentStep={2} totalSteps={3} />)
    expect(screen.getByText('Passo 2 de 3')).toBeInTheDocument()
  })

  it('should calculate and display percentage', () => {
    render(<ProgressBar currentStep={2} totalSteps={4} />)
    expect(screen.getByText('50% concluído')).toBeInTheDocument()
  })

  it('should display 100% when current step equals total steps', () => {
    render(<ProgressBar currentStep={3} totalSteps={3} />)
    expect(screen.getByText('100% concluído')).toBeInTheDocument()
  })

  it('should display 0% when current step is 0', () => {
    render(<ProgressBar currentStep={0} totalSteps={3} />)
    expect(screen.getByText('0% concluído')).toBeInTheDocument()
  })

  it('should apply custom className', () => {
    render(<ProgressBar currentStep={1} totalSteps={3} className="custom-class" />)
    const container = screen.getByText('Passo 1 de 3').closest('div')
    expect(container).toHaveClass('custom-class')
  })

  it('should round percentage correctly', () => {
    render(<ProgressBar currentStep={1} totalSteps={3} />)
    expect(screen.getByText('33% concluído')).toBeInTheDocument()
  })
})
