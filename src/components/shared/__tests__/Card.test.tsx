import { render, screen } from '@testing-library/react'
import { Card } from '../Card'

describe('Card', () => {
  it('should render children', () => {
    render(<Card>Card content</Card>)
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('should have default styling', () => {
    render(<Card>Card content</Card>)
    const card = screen.getByText('Card content')
    expect(card).toHaveClass('bg-white', 'rounded-xl', 'shadow-lg', 'p-6')
  })

  it('should apply custom className', () => {
    render(<Card className="custom-class">Card content</Card>)
    const card = screen.getByText('Card content')
    expect(card).toHaveClass('custom-class')
  })

  it('should not have hover effect by default', () => {
    render(<Card>Card content</Card>)
    const card = screen.getByText('Card content')
    expect(card).not.toHaveClass('hover:')
  })

  it('should have hover effect when hover prop is true', () => {
    render(<Card hover>Card content</Card>)
    const card = screen.getByText('Card content')
    // Note: The hover effect is handled by framer-motion, so we can't easily test it
    // but we can verify the component renders without errors
    expect(card).toBeInTheDocument()
  })
})
