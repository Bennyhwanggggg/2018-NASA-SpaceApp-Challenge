const city = {
    cities: [
        {name: "Zurich", coordinates: [8.5417, 47.3769], remainDays: 24,},
        {name: "Singapore", coordinates: [103.8198, 1.3521], remainDays: 2,},
        {name: "San Francisco", coordinates: [-122.4194, 37.7749], remainDays: 30,},
        {name: "Sydney", coordinates: [151.2093, -33.8688], remainDays: 30,},
        {name: "Lagos", coordinates: [3.3792, 6.5244], remainDays: 15,},
        {name: "Buenos Aires", coordinates: [-58.3816, -34.6037], remainDays: 40,},
        {name: "Shanghai", coordinates: [121.4737, 31.2304], remainDays: 4,},
    ],

    getCityByName: (cityName) => {
        for (let i of city.cities) {
            if (i.name === cityName) {
                return i
            }
        }
    },

    getCityNextLaunch: () => {
        let nextLaunchCity = city.cities[0];
        for (let i of city.cities) {
            if (i.remainDays < nextLaunchCity.remainDays) {
                nextLaunchCity = i;
            }
        }

        return nextLaunchCity;
    },
};


export default city