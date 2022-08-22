export const APP_CONFIG = {
	MAPS_API: import.meta.env.VITE_MAPS_API_KEY,
	IPLOCATION_API: import.meta.env.VITE_IPLOCATION_API_KEY,
}
export const MAPS_CONFIG = {
	style: 'mapbox://styles/mapbox/streets-v11/',
	onLoad: 'load',
}

export const API_CONFIG = {
	API_URL: 'https://api.ipgeolocation.io/ipgeo?apiKey=',
	API_URL_OPTIONS: '&ip=',
	API_URL_GETIPUSER: 'https://api.ipgeolocation.io/getip',
}
