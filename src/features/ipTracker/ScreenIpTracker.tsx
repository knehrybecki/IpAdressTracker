import {
  ErrorFetch,
  Header,
  LoaderFetch,
  Maps,
  NetworkInformation,
} from 'lib/components'
import { useEffect } from 'react'
import { checkIP } from './actions'
import { useIpTracker } from './useIpTracker'

export const ScreenIpTracker = () => {
  const {
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
    loading,
    setLoading,
  } = useIpTracker()

  const fetchCheckIp = async () => {
    const { ip, isp, location } = await checkIP(
      ipAdress,
      setHasError,
      setLoading
    )
    const { lat, lng } = location

    setIpAdress(ip)
    setisp(isp)
    setlocation(location)
    setLng(lng)
    setLat(lat)
  }

  useEffect(() => {
    getUserIp()
  }, [])

  useEffect(() => {
    fetchCheckIp()
  }, [ipAdress])

  return (
    <>
      <Header
        onClick={() => {
          setIpAdress(ipFromInput)
        }}
        ipInput={setIpFromInput}
      />
      <NetworkInformation
        ipAdress={ipAdress}
        isp={isp}
        location={location}
        loading={loading}
        error={error}>
        {loading && <LoaderFetch />}
        {error && <ErrorFetch />}
      </NetworkInformation>
      <Maps lng={lng} lat={lat} />
    </>
  )
}
