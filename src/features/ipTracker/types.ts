export type NetworkInformationResponse = {
	ip: string
	continent_code: string
	continent_name: string
	country_code2: string
	country_code3: string
	country_name: string
	country_capital: string
	state_prov: string
	district: string
	city: string
	zipcode: string
	latitude: number
	longitude: number
	is_eu: boolean
	calling_code: string
	country_tld: string
	languages: string
	geoname_id: string
	isp: string
	connection_type: string
	organization: string
	currency: {
		code: string
		name: string
		symbol: string
	}
	time_zone: {
		name: string
		offset: number
		current_time: string
		current_time_unix: number
		is_dst: boolean
		dst_savings: number
	}
}
export type location = {
	country: string
	region: string
	city: string
	lat: number
	lng: number
	postalCode: string
	timezone: string
}

export type IpTrackerState = {
	isp: string
	location: location
	ip: string
}

export type PositionMap = {
	lat: number
	lng: number
}
