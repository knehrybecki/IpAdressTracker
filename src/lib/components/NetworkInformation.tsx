import { IpTrackerState } from 'features/ipTracker/types'
import { useTranslations } from 'lib/hooks'
import styled from 'styled-components'
import { Regular, SubTitle } from './Typography'

type NetworkInformationProps = {
	ipTracker: IpTrackerState
	loading: boolean
	error: boolean
	children: React.ReactNode
}

export const NetworkInformation: React.FunctionComponent<NetworkInformationProps> = ({
	children,
	ipTracker,
	loading,
	error,
}) => {
	const T = useTranslations()
	const { ip, location, isp } = ipTracker

	return (
		<Container>
			{children}
			<InformationBox>
				<Info>
					<SubTitle>{T.networkInfo.ip}</SubTitle>
					<Regular>{loading || error ? T.networkInfo.empty : ip}</Regular>
				</Info>
				<Info>
					<SubTitle>{T.networkInfo.location}</SubTitle>
					<Regular>
						{loading || error
							? T.networkInfo.empty
							: `${location.country}${', '}
						${location.city}
						${'\n'}
						${location.postalCode}`}
					</Regular>
				</Info>
				<Info>
					<SubTitle>{T.networkInfo.timezone}</SubTitle>
					<Regular>
						{loading || error ? T.networkInfo.empty : `${T.networkInfo.utc} ${location.timezone}`}
					</Regular>
				</Info>
				<Info>
					<SubTitle>{T.networkInfo.isp}</SubTitle>
					<Regular>{loading || error ? T.networkInfo.empty : isp}</Regular>
				</Info>
			</InformationBox>
		</Container>
	)
}

const Container = styled.div`
	border-radius: 15px;
	background-color: ${({ theme }) => theme.colors.INFOBOX_BACKGROUND};
	justify-self: center;
	align-self: center;
	position: absolute;
	top: 22%;
	width: 80%;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		top: 29%;
	}
`
const InformationBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	text-align: center;
	row-gap: 20px;
	margin: 30px 20px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		flex-direction: row;
		text-align: start;
		column-gap: 10px;
	}

	@media (min-width: ${({ theme }) => theme.media.md}px) {
		column-gap: 30px;
	}

	@media (min-width: ${({ theme }) => theme.media.lg}px) {
		column-gap: 70px;
	}
`
const Info = styled.div`
	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		:nth-child(-n + 3) {
			border-right: 1px solid #e7e6e6;
			padding-right: 10px;
		}
	}

	@media (min-width: ${({ theme }) => theme.media.md}px) {
		:nth-child(-n + 3) {
			padding-right: 20px;
		}
	}

	@media (min-width: ${({ theme }) => theme.media.lg}px) {
		:nth-child(-n + 3) {
			padding-right: 40px;
		}
	}
`
