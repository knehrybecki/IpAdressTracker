import { useTranslations } from 'lib/hooks'
import 'semantic-ui-css/semantic.min.css'
import { Dimmer } from 'semantic-ui-react'

export const ErrorFetch = () => {
  const T = useTranslations()

  return (
    <Dimmer
      active
      inverted
      style={{
        borderRadius: '15px',
      }}>
      <div
        style={{
          color: '#ff0000',
          fontSize: '20px',
        }}>
        {T.components.app.error}
      </div>
    </Dimmer>
  )
}
