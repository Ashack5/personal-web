import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Footer } from '.'

export default {
  title: 'core/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = () => (
  <div style={{ padding: '16px' }}>
    <Footer />
  </div>
)

export const Default = Template.bind({})
Default.args = {}
