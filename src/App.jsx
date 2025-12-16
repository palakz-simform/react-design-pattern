import { useState } from 'react'
import './App.css'
import HOCExample from './HOC/Example'
import HooksExample from './Hooks/Example'
import CompoundExample from './Compound/Example'
import ContainerPresentationExample from './ContainerPresentation/Example'
import RenderPropsExample from './RenderProps/Example'

function App() {
  const [activePattern, setActivePattern] = useState('HOC')

  const patterns = [
    { name: 'HOC', component: HOCExample },
    { name: 'Hooks', component: HooksExample },
    { name: 'Compound', component: CompoundExample },
    { name: 'Container/Presentation', component: ContainerPresentationExample },
    { name: 'Render Props', component: RenderPropsExample }
  ]

  const activeComponent = patterns.find(p => p.name === activePattern)?.component

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React Design Patterns</h1>
        <p>Learn common design patterns used in React applications</p>
      </header>

      <nav className="tab-navigation">
        {patterns.map((pattern) => (
          <button
            key={pattern.name}
            className={`tab-button ${activePattern === pattern.name ? 'active' : ''}`}
            onClick={() => setActivePattern(pattern.name)}
          >
            {pattern.name}
          </button>
        ))}
      </nav>

      <main className="content-area">
        <div style={{ display: activePattern === 'HOC' ? 'block' : 'none' }}>
          {HOCExample({})}
        </div>
        <div style={{ display: activePattern === 'Hooks' ? 'block' : 'none' }}>
          {HooksExample({})}
        </div>
        <div style={{ display: activePattern === 'Compound' ? 'block' : 'none' }}>
          {CompoundExample({})}
        </div>
        <div style={{ display: activePattern === 'Container/Presentation' ? 'block' : 'none' }}>
          {ContainerPresentationExample({})}
        </div>
        <div style={{ display: activePattern === 'Render Props' ? 'block' : 'none' }}>
          {RenderPropsExample({})}
        </div>
      </main>
    </div>
  )
}

export default App
