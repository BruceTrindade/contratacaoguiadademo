import { render, screen } from '@testing-library/react'
import { PassportAnimation } from '../PassportAnimation'

describe('PassportAnimation', () => {
  it('should render lottie animation', () => {
    render(<PassportAnimation />)
    expect(screen.getByTestId('lottie-animation')).toBeInTheDocument()
  })

  it('should have default props', () => {
    render(<PassportAnimation />)
    const animation = screen.getByTestId('lottie-animation')
    expect(animation).toHaveAttribute('style', 'width: 100%; max-width: 400px; height: auto;')
  })

  it('should apply custom className', () => {
    render(<PassportAnimation className="custom-class" />)
    const animation = screen.getByTestId('lottie-animation')
    expect(animation).toHaveClass('custom-class')
  })

  it('should pass loop and autoplay props', () => {
    render(<PassportAnimation loop={false} autoplay={false} />)
    const animation = screen.getByTestId('lottie-animation')
    expect(animation).toBeInTheDocument()
  })
})
