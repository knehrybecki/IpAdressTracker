import { ScreenIpTracker } from 'features/ipTracker'
import { theme } from 'lib/styles'
import styled, { ThemeProvider } from 'styled-components'

export const App = () => (
	<ThemeProvider theme={theme}>
		<Container>
			<ScreenIpTracker />
		</Container>
	</ThemeProvider>
)

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	width: 100%;
	height: 100vh;
`
