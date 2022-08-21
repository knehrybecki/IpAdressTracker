import React, { useEffect, useRef, useState } from 'react'
import { APP_CONFIG, MAPS_CONFIG } from 'lib/config'
import mapboxgl from 'mapbox-gl'
import styled from 'styled-components'

mapboxgl.accessToken = APP_CONFIG.MAPS_API

type MapsProps = {
  positionOnMap: {
    lat: number,
    lng: number,
  }
}

export const Maps: React.FunctionComponent<MapsProps> = ({
  positionOnMap,
}) => {
  const mapContainer = useRef(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [zoom, setZoom] = useState(3)

  useEffect(() => {
    if (map.current) {
      return
    }

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: MAPS_CONFIG.style,
      center: [positionOnMap.lng, positionOnMap.lat],
      zoom: zoom,
    })
  }, [map, mapContainer])

  useEffect(() => {
    setZoom(11)

    if (!map.current) {
      return
    }

    map.current.on(MAPS_CONFIG.onLoad, () => {
      map.current!.flyTo({
        center: [positionOnMap.lng, positionOnMap.lat],
        zoom: zoom,
        essential: true,
      })
    })

    map.current.flyTo({
      center: [positionOnMap.lng, positionOnMap.lat],
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
