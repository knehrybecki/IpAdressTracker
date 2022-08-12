import { useTranslations } from 'lib/hooks'
import 'semantic-ui-css/semantic.min.css'
import { Dimmer, Loader } from 'semantic-ui-react'

export const LoaderFetch = () => {
  const T = useTranslations()

  return (
    <Dimmer
      active
      inverted
      style={{
        borderRadius: '15px',
      }}>
      <Loader size='big' inverted>
        {T.components.app.loading}
      </Loader>
    </Dimmer>
  )
}
