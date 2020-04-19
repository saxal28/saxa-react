import React from 'react'

import { ExampleComponent } from 'saxa-react'
import 'saxa-react/dist/index.css'

const App = () => {
  return (
    <div
      style={{
        maxWidth: '42rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '1.5rem 1.125rem',
        paddingTop: '1.5rem',
      }}
    >
      {/* <ExampleComponent text='Create React Library Example 😄😄' /> */}
      <h1>Typography.js</h1>
      <p>A powerful toolkit for building websites with beautiful design.</p>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>

      <h2>Install</h2>
      <code>npm install typography</code>

      <h2>Demo/playground</h2>
      <div>
        <a href='http://kyleamathews.github.io/typography.js'>
          http://kyleamathews.github.io/typography.js
        </a>
      </div>

      <h2>Why</h2>
      <p>
        Typography is a complex system of interrelated styles. 100s of style
        declarations on dozens of elements must be in harmonious order. Trying
        one design change can mean making dozens of tedious recalculations and
        CSS value changes. Creating new Typography themes with CSS feels hard.
        Typography.js provides a vastly simpler way to define and explore
        typography designs. You provide configuration to the Typography.js JS
        api and it uses its Typography engine to generate CSS for block and
        inline elements. Typography.js makes it easy to create designs that are
        unique, personal, and custom to your project.
      </p>
    </div>
  )
}

export default App
