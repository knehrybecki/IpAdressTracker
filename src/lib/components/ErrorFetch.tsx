import { useTranslations } from 'lib/hooks'
import { Dimmer } from 'semantic-ui-react'
import styled from 'styled-components'
import 'semantic-ui-css/semantic.min.css'

export const ErrorFetch = () => {
	const T = useTranslations()

	return (
		<ContainerDimmer
			active 
			inverted
		>
			<ErrorMessage>{T.components.app.error}</ErrorMessage>
		</ContainerDimmer>
	)
}

const ContainerDimmer = styled(Dimmer)`
	border-radius: '15px';
`

const ErrorMessage = styled.div`
	color: '#ff0000';
	font-size: '20px';
`
