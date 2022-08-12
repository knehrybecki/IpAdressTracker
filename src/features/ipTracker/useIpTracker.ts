import axios from 'axios'
import { location } from 'features/ipTracker'
import { API_CONFIG } from 'lib/config'
import { useState } from 'react'

export const useIpTracker = () => {
  const [isp, setisp] = useState('')
  const [location, setlocation] = useState<location>({} as location)
  const [ipFromInput, setIpFromInput] = useState<string>('')
  const [lng, setLng] = useState<string>('20')
  const [lat, setLat] = useState<string>('30')
  const [ipAdress, setIpAdress] = useState<string>('')
  const [error, setHasError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  const getUserIp = async () => {
    const userIp =  await axios.get(API_CONFIG.API_URL_GETIPUSER)

    setIpAdress(userIp.data.ip)
  }

  return {
    isp,
    location,
    setisp,
    setlocation,
    setIpFromInput,
    ipFromInput,
    setLat,
    setLng,
    lat,
    lng,
    ipAdress,
    setIpAdress,
    getUserIp,
    setHasError,
    error,
    setLoading,
    loading,
  }
}
