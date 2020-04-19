import React from 'react'

import { ExampleComponent, Button } from 'saxa-react'
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
        paddingBottom: '1.5rem',
      }}
    >
      <h1>Saxa React</h1>
      <p>A Modern React Component with Saxappeal.</p>

      {/* typography section */}
      <h1>Typography</h1>
      <hr />
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>

      <p>
        <a href='http://kyleamathews.github.io/typography.js'>
          http://kyleamathews.github.io/typography.js
        </a>
      </p>

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

      {/* buttons section */}
      <h1>Buttons</h1>
      <hr />

      <div
        style={{
          marginBottom: 10,
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Button>Default</Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button success>Success</Button>
        <Button danger>Danger</Button>
      </div>

      <div
        style={{
          marginBottom: 10,
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Button outline>Default</Button>
        <Button primary outline>Primary</Button>
        <Button secondary outline>Secondary</Button>
        <Button success outline>Success</Button>
        <Button danger outline>Danger</Button>
      </div>


      <div
        style={{
          marginBottom: 10,
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Button disabled>Default</Button>
        <Button primary disabled>Primary</Button>
        <Button secondary disabled>Secondary</Button>
        <Button success disabled>Success</Button>
        <Button danger disabled>Danger</Button>
      </div>


      <div
        style={{
          marginBottom: 10,
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Button outline disabled>Default</Button>
        <Button primary outline disabled>Primary</Button>
        <Button secondary outline disabled>Secondary</Button>
        <Button success outline disabled>Success</Button>
        <Button danger outline disabled>Danger</Button>
      </div>

      <div
        style={{
          marginBottom: 10,
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Button rounded>Default</Button>
        <Button primary rounded>Primary</Button>
        <Button secondary rounded>Secondary</Button>
        <Button success rounded>Success</Button>
        <Button danger rounded>Danger</Button>
      </div>

      <div
        style={{
          marginBottom: 10,
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Button outline rounded>Default</Button>
        <Button primary outline rounded>Primary</Button>
        <Button secondary outline rounded>Secondary</Button>
        <Button success outline rounded>Success</Button>
        <Button danger outline rounded>Danger</Button>
      </div>



    </div>
  )
}

export default App
