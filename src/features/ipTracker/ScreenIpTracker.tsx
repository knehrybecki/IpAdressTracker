import { useEffect } from 'react'
import { useIpTracker } from './useIpTracker'
import { checkIP } from './actions'
import {
	ErrorFetch,
	Header,
	LoaderFetch,
	Maps,
	NetworkInformation,
} from 'lib/components'

export const ScreenIpTracker = () => {
	const {
		setIpFromInput,
		ipFromInput,
		positionOnMap,
		setPositionOnMap,
		ipTracker,
		setIpTracker,
		getUserIp,
		setHasError,
		error,
		loading,
		setLoading,
	} = useIpTracker()

	const fetchCheckIp = () => {
		checkIP(ipTracker.ip, setHasError, setLoading).then(
			res => {
				setIpFromInput(res.ip)
				setIpTracker({
					ip: res.ip,
					location: res.location,
					isp: res.isp,
				})
				setPositionOnMap({
					lat: res.location.lat,
					lng: res.location.lng,
				})
			}
		)
	}

	useEffect(() => {
		getUserIp()
	}, [])

	useEffect(() => {
		fetchCheckIp()
	}, [ipTracker.ip])

	return (
		<>
			<Header
				onClick={() =>
					setIpTracker({
						ip: ipFromInput,
						location: positionOnMap,
						isp: ipTracker.isp,
					})
				}
				ipInput={setIpFromInput}
			/>
			<NetworkInformation
				ipTracker={ipTracker}
				loading={loading}
				error={error}
			>
				{loading && <LoaderFetch />}
				{error && <ErrorFetch />}
			</NetworkInformation>
			<Maps positionOnMap={positionOnMap} />
		</>
	)
}
