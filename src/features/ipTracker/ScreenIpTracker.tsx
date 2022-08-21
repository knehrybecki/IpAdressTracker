import { ErrorFetch, Header, LoaderFetch, Maps, NetworkInformation } from 'lib/components'
import { useEffect } from 'react'
import { checkIP } from './actions'
import { useIpTracker } from './useIpTracker'

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

	const fetchCheckIp = async () => {
		await checkIP(ipTracker.ip, setHasError, setLoading)
			.then(res => {
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
			})
			.catch(() => {
				setHasError(true)

				throw new Error('Error while fetching data from API')
			})
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
						location: ipTracker.location,
						isp: ipTracker.isp,
					})
				}
				setIpFromInput={setIpFromInput}
			/>
			<NetworkInformation ipTracker={ipTracker} loading={loading} error={error}>
				{loading && <LoaderFetch />}
				{error && <ErrorFetch />}
			</NetworkInformation>
			<Maps positionOnMap={positionOnMap} />
		</>
	)
}
