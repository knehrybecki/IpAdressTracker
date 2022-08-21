import { useTranslations } from 'lib/hooks'
import { Title } from './Typography'
import { Images } from 'assets'
import { IoChevronForward } from 'react-icons/io5'
import styled from 'styled-components'

type HeaderProps = {
	onClick: () => void
	ipInput: (value: string) => void
}

export const Header: React.FunctionComponent<HeaderProps> = ({
	ipInput,
	onClick,
}) => {
	const T = useTranslations()

	return (
		<HeaderContainer>
			<Title>{T.components.header.title}</Title>
			<InputContainer>
				<Input
					type='text'
					placeholder={T.components.input.placeholder}
					onChange={event => ipInput(event.target.value)}
				/>
				<Button onClick={() => onClick()}>
					<Icon />
				</Button>
			</InputContainer>
		</HeaderContainer>
	)
}

const HeaderContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	min-height: 40%;
	background-image: url(${Images.HeaderBackground});
	background-repeat: no-repeat;
	background-position: top;
	background-size: cover;
	padding-top: 20px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		min-height: 35%;
	}
`

const InputContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 15px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		margin-top: 30px;
	}
`

const Input = styled.input`
	height: 60px;
	width: 70%;
	border: none;
	border-top-left-radius: 15px;
	border-bottom-left-radius: 15px;
	padding: 20px;
	font-size: 18px;
	outline-style: none;

	:hover {
		outline-color: black;
		outline-style: solid;
		outline-offset: -3px;
		outline-width: 3px;
	}
	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		max-width: 40%;
	}
`
const Button = styled.button`
	height: 60px;
	width: 60px;
	border-top-right-radius: 15px;
	border-bottom-right-radius: 15px;
	position: relative;
	left: -3px;
	top: 0px;
	border-color: #000;
	background-color: #000;
	color: #fff;
	cursor: pointer;

	:hover {
		background-color: #282828;
		border: 3px solid #282828;
	}
`
const Icon = styled(IoChevronForward)`
	font-size: 1.5rem;
`
