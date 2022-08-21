import { useState } from 'react'
import { API_CONFIG } from 'lib/config'
import { location } from 'features/ipTracker'
import axios from 'axios'
import { IpTrackerState } from './types'

export const useIpTracker = () => {
	const [ipTracker, setIpTracker] = useState<IpTrackerState>({
		ip: '',
		location: {} as location,
		isp: '',
	})
	const [positionOnMap, setPositionOnMap] = useState<any>({
		lat: 20,
		lng: 30,
	})
	const [ipFromInput, setIpFromInput] = useState<string>('')
	const [error, setHasError] = useState<boolean>(false)
	const [loading, setLoading] = useState<boolean>(true)

	const getUserIp = () => {
		axios.get(API_CONFIG.API_URL_GETIPUSER).then(res => {
			setIpFromInput(res.data.ip)
		})
	}

	return {
		setIpFromInput,
		ipFromInput,
		positionOnMap,
		setPositionOnMap,
		ipTracker,
		setIpTracker,
		getUserIp,
		setHasError,
		error,
		setLoading,
		loading,
	}
}
