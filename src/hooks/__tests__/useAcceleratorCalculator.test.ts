import { renderHook, act } from '@testing-library/react'
import { useAcceleratorCalculator } from '../useAcceleratorCalculator'

describe('useAcceleratorCalculator', () => {
  it('should initialize with empty monthly spending', () => {
    const { result } = renderHook(() => useAcceleratorCalculator())
    
    expect(result.current.monthlySpending).toBe('')
    expect(result.current.calculation.basePoints).toBe(0)
    expect(result.current.calculation.acceleratedPoints).toBe(0)
    expect(result.current.calculation.extraPoints).toBe(0)
    expect(result.current.calculation.multiplier).toBe(3)
  })

  it('should update monthly spending', () => {
    const { result } = renderHook(() => useAcceleratorCalculator())
    
    act(() => {
      result.current.setMonthlySpending('2000')
    })
    
    expect(result.current.monthlySpending).toBe('2000')
  })

  it('should calculate points correctly for 2000 monthly spending', () => {
    const { result } = renderHook(() => useAcceleratorCalculator())
    
    act(() => {
      result.current.setMonthlySpending('2000')
    })
    
    expect(result.current.calculation.basePoints).toBe(2000)
    expect(result.current.calculation.acceleratedPoints).toBe(6000)
    expect(result.current.calculation.extraPoints).toBe(4000)
  })

  it('should calculate points correctly for 5000 monthly spending', () => {
    const { result } = renderHook(() => useAcceleratorCalculator())
    
    act(() => {
      result.current.setMonthlySpending('5000')
    })
    
    expect(result.current.calculation.basePoints).toBe(5000)
    expect(result.current.calculation.acceleratedPoints).toBe(15000)
    expect(result.current.calculation.extraPoints).toBe(10000)
  })

  it('should handle invalid input gracefully', () => {
    const { result } = renderHook(() => useAcceleratorCalculator())
    
    act(() => {
      result.current.setMonthlySpending('invalid')
    })
    
    expect(result.current.calculation.basePoints).toBe(0)
    expect(result.current.calculation.acceleratedPoints).toBe(0)
    expect(result.current.calculation.extraPoints).toBe(0)
  })

  it('should format points correctly', () => {
    const { result } = renderHook(() => useAcceleratorCalculator())
    
    act(() => {
      result.current.setMonthlySpending('1500')
    })
    
    expect(result.current.formatPoints(1500)).toBe('1.500')
    expect(result.current.formatPoints(4500)).toBe('4.500')
  })

  it('should return examples with correct calculations', () => {
    const { result } = renderHook(() => useAcceleratorCalculator())
    
    const examples = result.current.getExamples()
    
    expect(examples).toHaveLength(3)
    expect(examples[0].spending).toBe(1500)
    expect(examples[0].basePoints).toBe(1500)
    expect(examples[0].acceleratedPoints).toBe(4500)
    expect(examples[0].extraPoints).toBe(3000)
    
    expect(examples[1].spending).toBe(3000)
    expect(examples[1].basePoints).toBe(3000)
    expect(examples[1].acceleratedPoints).toBe(9000)
    expect(examples[1].extraPoints).toBe(6000)
    
    expect(examples[2].spending).toBe(5000)
    expect(examples[2].basePoints).toBe(5000)
    expect(examples[2].acceleratedPoints).toBe(15000)
    expect(examples[2].extraPoints).toBe(10000)
  })
})
