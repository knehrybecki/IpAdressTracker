import styled, { ThemeProvider } from 'styled-components'
import { theme } from 'lib/styles'
import { ScreenIpTracker } from 'features/ipTracker'

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<ScreenIpTracker />
			</Container>
		</ThemeProvider>
	)
}
const Container = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	width: 100%;
	height: 100vh;
`
