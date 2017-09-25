export default class geojson {
    static pointFromGoogle = (place) => {
        return {
            address: place.formatted_address,
            tags: place.types,
            geometry: {
                type: 'Point',
                coordinates: [place.geometry.location.lng, place.geometry.location.lat]
            }
        }
    }
}