import React from 'react'
import "./scss/styles.scss"

import { Button } from "./button/button"

// typography
import Typography from "typography"
import sutroTheme from 'typography-theme-sutro'

const typography = new Typography(sutroTheme)
typography.injectStyles()

const ExampleComponent = ({ text }) => {
  return <div>Example Component: {text}</div>
}

export { ExampleComponent, Button }
