import React from 'react'
import { Grid, GridItem } from 'saxa-react'

const Box = ({ children }) => (
  <div style={{ width: '100%', height: 300, display: 'flex', alignItems: "center", justifyContent: "center" }}>
    {children}
  </div>
)

export const GridExample = () => {
  return (
    <div>
      <h1>Grid</h1>
      <hr />

    <Grid>
        <GridItem sm={6} md={4} lg={3} xl={2} >
            <Box>1</Box>
        </GridItem>
        <GridItem sm={6} md={4} lg={3} xl={2} >
            <Box>2</Box>
        </GridItem>
        <GridItem sm={6} md={4} lg={3} xl={2} >
            <Box>3</Box>
        </GridItem>
        <GridItem sm={6} md={4} lg={3} xl={2} >
            <Box>4</Box>
        </GridItem>
        <GridItem sm={6} md={4} lg={3} xl={2} >
            <Box>5</Box>
        </GridItem>
        <GridItem sm={6} md={4} lg={3} xl={2} >
            <Box>6</Box>
        </GridItem>
    </Grid>

    </div>
  )
}
