const action = store => ({
    cleanZoom(store) {
        return {
            ...store,
            zoomCity: undefined,
        }
    },
    zoomToCity(store, city) {
        return {
            ...store,
            zoomCity: city,
        }
    }
});

export default action