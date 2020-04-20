import React from 'react'

import 'saxa-react/dist/index.css'
import { ButtonExample } from './examples/ButtonExample'
import { TypographyExample } from './examples/TypographyExample'
import { GridExample } from "./examples/GridExample"

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
  
      <TypographyExample/>
      <ButtonExample/>
      <GridExample/>
    
    

    </div>
  )
}

export default App
