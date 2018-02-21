export const fromGoogle = (obj) => {
    return {
        address: obj.formatted_address,
        geometry: {
            type: 'Point',
            coordinates: [
                obj.geometry.location.lng,
                obj.geometry.location.lat
            ]
        }
    }
}