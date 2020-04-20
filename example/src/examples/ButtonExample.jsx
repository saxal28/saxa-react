import React from 'react'
import { Button } from 'saxa-react'

export const ButtonExample = () => {
  const containerStyle = {
    marginBottom: 10,
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  }
  return (
    <>
      <h1>Buttons</h1>
      <hr />

      <div style={containerStyle}>
        <Button>Default</Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button success>Success</Button>
        <Button danger>Danger</Button>
      </div>

      <div style={{ ...containerStyle, marginBottom: 30 }}>
        <Button outline>Default</Button>
        <Button primary outline>
          Primary
        </Button>
        <Button secondary outline>
          Secondary
        </Button>
        <Button success outline>
          Success
        </Button>
        <Button danger outline>
          Danger
        </Button>
      </div>

      <div style={containerStyle}>
        <Button disabled>Default</Button>
        <Button primary disabled>
          Primary
        </Button>
        <Button secondary disabled>
          Secondary
        </Button>
        <Button success disabled>
          Success
        </Button>
        <Button danger disabled>
          Danger
        </Button>
      </div>

      <div style={{ ...containerStyle, marginBottom: 30 }}>
        <Button outline disabled>
          Default
        </Button>
        <Button primary outline disabled>
          Primary
        </Button>
        <Button secondary outline disabled>
          Secondary
        </Button>
        <Button success outline disabled>
          Success
        </Button>
        <Button danger outline disabled>
          Danger
        </Button>
      </div>

      <div style={containerStyle}>
        <Button rounded>Default</Button>
        <Button primary rounded>
          Primary
        </Button>
        <Button secondary rounded>
          Secondary
        </Button>
        <Button success rounded>
          Success
        </Button>
        <Button danger rounded>
          Danger
        </Button>
      </div>

      <div style={containerStyle}>
        <Button outline rounded>
          Default
        </Button>
        <Button primary outline rounded>
          Primary
        </Button>
        <Button secondary outline rounded>
          Secondary
        </Button>
        <Button success outline rounded>
          Success
        </Button>
        <Button danger outline rounded>
          Danger
        </Button>
      </div>
    </>
  )
}
