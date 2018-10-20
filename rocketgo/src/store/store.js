const store = {
    zoomLocation: undefined,
    missions: [
        {
            missionCode: 'Hellas Sat 4/SaudiGeoSat-1',
            coordinates: [8.5417, 47.3769],
            remainDays: 15,
            launchDetail: {
                rocket: 'Ariane 5 ECA',
                agency: 'Arianespace',
                date: '31/10/2018',
                location: 'Kourou, French Guiana',
                missionDetails: 'Top Secret!!!!!!!!!!'
            }
        },
        {
            missionCode: 'GSAT-29',
            coordinates: [80.2304, 13.7199],
            remainDays: 40,
            launchDetail: {
                rocket: 'Ariane 5 ECA',
                agency: 'Arianespace',
                date: '31/10/2018',
                location: 'Kourou, French Guiana',
                missionDetails: 'Top Secret!!!!!!!!!!'
            }
        },
    ],
};

export default store