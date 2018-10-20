const action = store => ({
    cleanZoom(store) {
        return {
            ...store,
            zoomLocation: undefined,
        }
    },
    zoomTo(store, location) {
        return {
            ...store,
            zoomLocation: location,
        }
    },
    zoomToNextLaunch(store) {
        let nextLaunch = store.missions[0];
        for (let i of store.missions) {
            if (i.remainDays < nextLaunch.remainDays) {
                nextLaunch = i;
            }
        }

        return {
            ...store,
            zoomLocation: nextLaunch
        }
    }
});

export default action