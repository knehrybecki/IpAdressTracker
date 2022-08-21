import { API_CONFIG, APP_CONFIG } from 'lib/config'
import { format } from 'date-fns'
import { NetworkInformationResponse } from './types'

export const checkIP = (
	ipAdress: string,
	setHasError: React.Dispatch<React.SetStateAction<boolean>>,
	setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
	const informationOfIp = fetch(
		`${API_CONFIG.API_URL}${APP_CONFIG.IPLOCATION_API}${API_CONFIG.API_URL_OPTIONS}${ipAdress}`
	)
		.then(response => {
			if (response.ok) {
				setHasError(false)

				return response
			}

			throw response
		})
		.then(res => res.json())
		.then((data: NetworkInformationResponse) => {
			const date = new Date(data.time_zone.current_time)
			const getTimezone = format(date, 'XXX')
			const adress = {
				ip: data.ip,
				location: {
					country: data.country_code2,
					region: data.state_prov,
					city: data.city,
					lat: data.latitude,
					lng: data.longitude,
					postalCode: data.zipcode,
					timezone: getTimezone,
				},
				isp: data.isp,
			}

			return adress
		})
		.catch(() => {
			setHasError(true)

			throw new Error('Error while fetching data from API')
		})
		.finally(() => {
			setLoading(false)
		})

	return informationOfIp
}
