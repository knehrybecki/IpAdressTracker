import { APP_CONFIG } from 'lib/config'
import mapboxgl from 'mapbox-gl'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

mapboxgl.accessToken = APP_CONFIG.MAPS_API

type MapsProps = {
  lng: string
  lat: string
}

export const Maps: React.FunctionComponent<MapsProps> = ({
  lng,
  lat,
}) => {
  const mapContainer = useRef(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [zoom, setZoom] = useState(3)

  useEffect(() => {
    if (map.current) return

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/streets-v11/',
      center: [Number(lng), Number(lat)],
      zoom: zoom,
    })
  }, [map, mapContainer])

  useEffect(() => {
    setZoom(11)

    if (!map.current) return

    map.current.on('load', () => {
      map.current!.flyTo({
        center: [Number(lng), Number(lat)],
        zoom: zoom,
        essential: true,
      })
    })

    map.current.flyTo({
      center: [Number(lng), Number(lat)],
      zoom: zoom,
      essential: true,
    })
  })

  return <BaseMaps ref={mapContainer} />
}

const BaseMaps = styled.div`
  width: 100%;
  height: 70%;
`
