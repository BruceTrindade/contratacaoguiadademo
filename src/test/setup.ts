import '@testing-library/jest-dom'

// Mock do Lottie
jest.mock('lottie-react', () => ({
  __esModule: true,
  default: ({ animationData, ...props }: any) => (
    <div data-testid="lottie-animation" {...props}>
      Mock Lottie Animation
    </div>
  ),
}))

// Mock do Framer Motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    input: ({ ...props }: any) => <input {...props} />,
  },
  AnimatePresence: ({ children }: any) => children,
}))

// Mock do Lucide React
jest.mock('lucide-react', () => ({
  ArrowLeft: () => <div data-testid="arrow-left">←</div>,
  X: () => <div data-testid="x-icon">×</div>,
}))

// Mock do window.open
Object.defineProperty(window, 'open', {
  writable: true,
  value: jest.fn(),
})
