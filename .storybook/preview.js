import 'antd/dist/antd.css'
import '../src/_core/styles/globalStyle.css'
import React from 'react'
import { RecoilRoot } from 'recoil'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { RouterContext } from 'next/dist/shared/lib/router-context'

export const decorators = [
  (Story) => (
    <div id='decorators-root'>
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    </div>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone12',
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
