import { useTranslations } from 'lib/hooks'
import 'semantic-ui-css/semantic.min.css'
import { Dimmer, Loader } from 'semantic-ui-react'
import styled from 'styled-components'

export const LoaderFetch = () => {
	const T = useTranslations()

	return (
		<ContainerDimmer 
      active 
      inverted
    >
			<Loader 
        size='big' 
        inverted
      >
				{T.components.app.loading}
			</Loader>
		</ContainerDimmer>
	)
}

const ContainerDimmer = styled(Dimmer)`
	border-radius: 15px;
`
