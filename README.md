# Next.js Vercel Deployment with Glass Typography

This is a [Next.js](https://nextjs.org/) project configured for seamless deployment on Vercel with beautiful glass typography components.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🚀 Features

- **Modern UI Components** - Built with shadcn/ui for consistent design
- **Glass Morphism Effects** - Beautiful frosted glass styling
- **Advanced Typography** - Gradient text, typing animations, and more
- **Theme Support** - Dark/light mode with smooth transitions
- **TypeScript First** - Full TypeScript support
- **Accessible** - WCAG compliant components
- **Responsive** - Mobile-first design approach

## 📦 Installation

### Prerequisites

Ensure you have shadcn/ui set up in your project:

```bash
npx shadcn-ui@latest init
```

### Install Dependencies

```bash
npm install @radix-ui/react-dialog @radix-ui/react-switch
npm install framer-motion clsx tailwind-merge
npm install lucide-react
```

### Required shadcn/ui Components

Install the required shadcn/ui components:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add dialog  
npx shadcn-ui@latest add switch
```

## Components

### AI Components
Intelligent and responsive UI components designed for AI-powered applications.

**Features:**
- Auto-completion and suggestion interfaces
- Chat and conversation components
- Loading states and progress indicators
- Error handling and fallback UIs

**Usage:**
```jsx
import { AIChat, AICompletion } from './components/ai'

<AIChat
  messages={messages}
  onSend={handleSend}
  isLoading={isLoading}
/>
```

### Button Component
Versatile button component with multiple variants and states using shadcn/ui design system.

**Variants:**
- `default` - Primary action button
- `destructive` - Dangerous actions
- `outline` - Secondary actions
- `secondary` - Subtle actions
- `ghost` - Minimal styling
- `link` - Text-like appearance

**Sizes:**
- `default` - Standard size
- `sm` - Small
- `lg` - Large
- `icon` - Icon-only buttons

**Usage:**
```jsx
import { Button } from './components/ui/button'

<Button variant="default" size="lg">
  Click me
</Button>

<Button variant="destructive" size="sm">
  Delete
</Button>
```

### Hook Components
Custom React hooks for common functionality and state management.

**Available Hooks:**
- `useLocalStorage` - Persistent local storage state
- `useDebounce` - Debounced values for performance
- `useAsync` - Async operation handling
- `useToggle` - Toggle state management
- `useFetch` - Data fetching with loading states

**Usage:**
```jsx
import { useLocalStorage, useDebounce } from './hooks'

function MyComponent() {
  const [value, setValue] = useLocalStorage('key', 'defaultValue')
  const debouncedValue = useDebounce(value, 500)
  
  return (
    <input 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
    />
  )
}
```

### Text Component
Typography component with consistent styling and semantic meaning.

**Variants:**
- `h1`, `h2`, `h3`, `h4` - Headings
- `p` - Paragraph text
- `lead` - Lead text
- `large` - Large text
- `small` - Small text
- `muted` - Muted/secondary text

**Usage:**
```jsx
import { Text } from './components/ui/text'

<Text variant="h1">Main Heading</Text>
<Text variant="p">Regular paragraph text</Text>
<Text variant="muted">Secondary information</Text>
```

## 🎨 Glass Typography Components

### Gradient Text Component

Beautiful gradient text with customizable colors and animations.

#### Usage

```tsx
import { GradientText } from '@/components/ui/gradient-text'

function App() {
  return (
    <GradientText 
      className="text-4xl font-bold"
      gradient="from-blue-600 via-purple-600 to-pink-600"
    >
      Beautiful Gradient Text
    </GradientText>
  )
}
```

### Typing Text Component

Animated typing effect with customizable speed and cursor.

#### Usage

```tsx
import { TypingText } from '@/components/ui/typing-text'

function App() {
  return (
    <TypingText 
      text="Hello, World! This is a typing animation."
      speed={50}
      showCursor={true}
    />
  )
}
```

### Theme Toggle Component

Elegant theme switcher with glass morphism design.

#### Usage

```tsx
import { ThemeToggle } from '@/components/ui/theme-toggle'

function App() {
  return (
    <ThemeToggle />
  )
}
```

### Animated Modal Component

Beautiful modal with glass morphism and smooth animations.

#### Usage

```tsx
import { AnimatedModal } from '@/components/ui/animated-modal'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      
      <AnimatedModal 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Beautiful Modal"
      >
        <p>This is a beautiful animated modal with glass morphism effects.</p>
      </AnimatedModal>
    </>
  )
}
```

## 🎯 Glass Heating Typography Showcase

Complete example combining multiple components:

```tsx
// pages/showcase.tsx
import { GradientText } from '@/components/ui/gradient-text'
import { TypingText } from '@/components/ui/typing-text'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { AnimatedModal } from '@/components/ui/animated-modal'
import { GlassButton } from '@/components/ui/glass-button'
import { useState } from 'react'

export default function TypographyShowcase() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <GradientText 
            className="text-4xl font-bold"
            gradient="from-blue-600 via-purple-600 to-pink-600"
            animated
          >
            Typography Showcase
          </GradientText>
          <ThemeToggle />
        </div>

        {/* Typing Animation */}
        <div className="glass-card p-8">
          <TypingText 
            text="Welcome to our beautiful glass heating typography showcase. Experience the magic of animated text effects."
            speed={50}
            className="text-xl"
          />
        </div>

        {/* Interactive Demo */}
        <div className="glass-card p-8 text-center space-y-6">
          <h2 className="text-2xl font-semibold">Interactive Demo</h2>
          <GlassButton onClick={() => setModalOpen(true)}>
            Open Glass Modal
          </GlassButton>
        </div>

        <AnimatedModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Glass Modal Demo"
          size="lg"
        >
          <div className="space-y-4">
            <p>This modal demonstrates the beautiful glass morphism effect with smooth animations.</p>
            <GradientText gradient="from-green-400 to-blue-500">
              Gradient text inside modal
            </GradientText>
          </div>
        </AnimatedModal>
      </div>
    </div>
  )
}
```

## Deployment

### Production Deployment

Deploy to production:

```bash
npm run deploy
```

### Preview Deployment

Deploy a preview version:

```bash
npm run deploy:preview
```

## Environment Variables

Copy `.env.example` to `.env.local` and update the values:

```bash
cp .env.example .env.local
```

## Vercel Configuration

The project includes a `vercel.json` configuration file that:

- Specifies the build output directory (`.next`)
- Configures proper rewrites for Next.js routing
- Sets up security headers
- Handles environment variables for both production and preview environments
- Supports the glass typography components with proper static asset handling

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript configuration
- ✅ Tailwind CSS for styling
- ✅ Glass typography components
- ✅ Vercel deployment configuration
- ✅ Environment variable handling
- ✅ Security headers
- ✅ Preview deployment support

## Tech Stack

- **React** - UI library
- **Next.js** - React framework
- **TypeScript** - Type safety
- **shadcn/ui** - UI components and design system
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible UI primitives

## Project Structure

```
├── components/
│   ├── ai/           # AI-powered components
│   ├── ui/           # Base UI components
│   └── hooks/        # Custom React hooks
├── lib/              # Utility functions
├── styles/           # Global styles
└── types/            # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and ensure they pass
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [shadcn/ui](https://ui.shadcn.com/)
- Powered by [Radix UI](https://radix-ui.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

Made with ❤️ and glass morphism ✨