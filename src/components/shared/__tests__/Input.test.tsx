import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from '../Input'

describe('Input', () => {
  it('should render with value and onChange', () => {
    const handleChange = vi.fn()
    render(<Input value="test" onChange={handleChange} />)
    
    const input = screen.getByDisplayValue('test')
    expect(input).toBeInTheDocument()
  })

  it('should call onChange when value changes', () => {
    const handleChange = vi.fn()
    render(<Input value="" onChange={handleChange} />)
    
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'new value' } })
    expect(handleChange).toHaveBeenCalledWith('new value')
  })

  it('should render with placeholder', () => {
    render(<Input value="" onChange={vi.fn()} placeholder="Enter text" />)
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
  })

  it('should render with label', () => {
    render(<Input value="" onChange={vi.fn()} label="Test Label" />)
    expect(screen.getByText('Test Label')).toBeInTheDocument()
  })

  it('should render with different types', () => {
    render(<Input value="" onChange={vi.fn()} type="number" />)
    const input = screen.getByRole('spinbutton')
    expect(input).toHaveAttribute('type', 'number')
  })

  it('should display error message', () => {
    render(<Input value="" onChange={vi.fn()} error="Invalid input" />)
    expect(screen.getByText('Invalid input')).toBeInTheDocument()
    expect(screen.getByText('Invalid input')).toHaveClass('text-red-500')
  })

  it('should apply error styling when error is present', () => {
    render(<Input value="" onChange={vi.fn()} error="Error" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('border-red-500')
  })

  it('should apply custom className', () => {
    render(<Input value="" onChange={vi.fn()} className="custom-class" />)
    const container = screen.getByRole('textbox').closest('div')
    expect(container).toHaveClass('custom-class')
  })

  it('should have default type as text', () => {
    render(<Input value="" onChange={vi.fn()} />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('type', 'text')
  })
})
