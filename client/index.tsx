import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'
import './index.css'
import App from './App'
// import reportWebVitals from './reportWebVitals'

const { REACT_APP_SENTRY_DNS } = process.env

Sentry.init({
  dsn: REACT_APP_SENTRY_DNS,
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0
})

ReactDOM.render(<App />, document.getElementsByTagName('main')[0])

// reportWebVitals(console.log)
