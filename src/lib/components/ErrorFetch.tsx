import { useTranslations } from 'lib/hooks'
import 'semantic-ui-css/semantic.min.css'
import styled from 'styled-components'

export const ErrorFetch = () => {
	const T = useTranslations()

	return (
		<ContainerError>
			<Message>{T.components.app.error}</Message>
		</ContainerError>
	)
}
const ContainerError = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 15px;
	background-color: rgba(255, 255, 255, 0.85);
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
`
const Message = styled.div`
	color: ${({ theme }) => theme.colors.error};
	font-size: 20px;
`
