const store = {
    zoomLocation: undefined,
    missions: [
        {
            launchCenter: 'French Space Center',
            coordinates: [5.239, -52.768],
            remainDays: 5,
            launchDetail: [
                {
                    rocket: 'Ariane 5 ECA',
                    missionCode: 'Hellas Sat 4/SaudiGeoSat-1',
                    agency: 'Arianespace',
                    date: '31/10/2018',
                    location: 'Kourou, French Guiana',
                    missionDetails: 'Top Secret!!!!!!!!!!'
                },
                {
                    rocket: 'Ariane 5 ECA',
                    missionCode: 'EDRS-C/HYLAS 3',
                    agency: 'Arianespace',
                    date: '30/11/2018',
                    location: 'Kourou, French Guiana',
                    missionDetails: 'Top Secret!!!!!!!!!!'
                },
                {
                    rocket: 'Ariane 5 ECA',
                    missionCode: 'GEO-KOMPSAT-2A',
                    agency: 'Arianespace',
                    date: '30/11/2018',
                    location: 'Kourou, French Guiana',
                    missionDetails: 'Top Secret!!!!!!!!!!'
                },
                {
                    rocket: 'Ariane 5 ECA',
                    missionCode: 'GSAT-31',
                    agency: 'Arianespace',
                    date: '30/11/2018',
                    location: 'Kourou, French Guiana',
                    missionDetails: 'Top Secret!!!!!!!!!!'
                },
                {
                    rocket: 'Vega-C',
                    missionCode: 'KOMPSAT-7',
                    agency: 'Arianespace',
                    date: '30/11/2018',
                    location: 'Kourou, French Guiana',
                    missionDetails: 'KOMPSAT-7 is the follow-up model of KOMPSAT-3A whose mission is to provide high-resolution satellite images to satisfy South-Korea’s governmental and institutional needs.'
                },
                {
                    rocket: 'Soyuz STB/Fregat',
                    missionCode: 'MetOp-C',
                    agency: 'Arianespace',
                    date: '06/11/2018',
                    location: 'Kourou, French Guiana',
                    missionDetails: 'MetOp is a series of three polar orbiting meteorological satellites developed by the European Space Agency (ESA).'
                },
                {
                    rocket: 'Vega',
                    missionCode: 'Mohammed VI-B',
                    agency: 'Arianespace',
                    date: '05/11/2018',
                    location: 'Kourou, French Guiana',
                    missionDetails: 'Top Secret!!!!!!!!!!'
                },
            ]
        },


        {
            launchCenter: 'China Aerospace Science and Technology Corporation',
            coordinates: [100.291, 40.958],
            remainDays: 29,
            launchDetail: [
                {
                    rocket: 'Long March 2C',
                    missionCode: 'CFOSAT',
                    agency: 'China Aerospace Science and Technology Corporation',
                    date: '29/10/2018',
                    location: "Jiuquan, People's Republic of China",
                    missionDetails: "CFOSAT (China-France Oceanography SATellite) is a joint mission of the Chinese (CNSA) and French (CNES) space agencies with the goal to monitor the ocean surface winds and waves and to provide information on related ocean and atmospheric science and applications. The primary objective of CFOSAT is to monitor on a global scale the wind and waves at the ocean surface."
                },
            ]
        },

        {
            launchCenter: 'Indian Space Research Organization',
            coordinates: [80.2304, 13.7199],
            remainDays: 21,
            launchDetail: [
                {
                    rocket: 'GSLV Mk III',
                    missionCode: 'GSAT-29',
                    agency: 'Indian Space Research Organization',
                    date: '31/10/2018',
                    location: 'Sriharikota, Republic of India',
                    missionDetails: 'GSAT-29 is a geostationary communications satellite developed by ISRO. GSAT-29 carries Ka x Ku multi-beam and optical communication payloads.'
                },
                {
                    rocket: 'GSLV Mk II',
                    missionCode: 'GSAT-7A',
                    agency: 'Indian Space Research Organization',
                    date: '31/10/2018',
                    location: 'Sriharikota, Republic of India',
                    missionDetails: 'GSAT-7A is a geostationary communications satellite for the Indian Air Force (IAF).'
                },
                {
                    rocket: 'PSLV',
                    missionCode: 'EMISAT',
                    agency: 'Indian Space Research Organization',
                    date: '30/10/2018',
                    location: 'Sriharikota, Republic of India',
                    missionDetails: 'Top Secret!!!!!!!!!!'
                },
                {
                    rocket: 'PSLV XL',
                    missionCode: 'HySIS',
                    agency: 'Indian Space Research Organization',
                    date: '21/10/2018',
                    location: 'Sriharikota, Republic of India',
                    missionDetails: 'Top Secret!!!!!!!!!!'
                },
            ]
        },

        {
            launchCenter: 'Khrunichev State Research and Production Space Center',
            coordinates: [63.342, 45.92],
            remainDays: 7,
            launchDetail: [
                {
                    rocket: 'Soyuz-FG',
                    missionCode: 'Progress MS-10 (71P)',
                    agency: 'Khrunichev State Research and Production Space Center',
                    date: '31/10/2018',
                    location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
                    missionDetails: "The Progress resupply vehicle is an automated, unpiloted version of the Soyuz spacecraft that is used to bring supplies and fuel to the International Space Station."
                },
                {
                    rocket: 'Proton-M',
                    missionCode: 'MLM Nauka',
                    agency: 'Khrunichev State Research and Production Space Center',
                    date: '07/11/2018',
                    location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
                    missionDetails: 'Top Secret!!!!!!!!!!'
                },
                {
                    rocket: 'Soyuz 2.1A',
                    missionCode: 'Soyuz MS-16',
                    agency: 'Russian Federal Space Agency (ROSCOSMOS)',
                    date: '20/10/2018',
                    location: 'Baikonur Cosmodrome, Republic of Kazakhstan',
                    missionDetails: 'Top Secret!!!!!!!!!!'
                },
            ]
        },

        {
            launchCenter: 'Onenui Station',
            coordinates: [177.864469, -39.262833],
            remainDays: 30,
            launchDetail: [
                {
                    rocket: 'Electron',
                    missionCode: "It's Business Time",
                    agency: 'Rocket Lab Ltd',
                    date: '31/10/2018',
                    location: 'Onenui Station, Mahia Peninsula, New Zealand',
                    missionDetails: "Electron's first commercial launch will feature two Lemur-2 cubesats for Spire Global, a single cubesat for GeoOptics, a NABEO drag sail demonstrator for High Performance Space Structure Systems, and an IRVINE01 cubesat from the Irvine CubeSat STEM Program."
                },
                {
                    rocket: 'Electron',
                    missionCode: 'VCLS ELaNa XIX',
                    agency: 'Rocket Lab Ltd',
                    date: '30/10/2018',
                    location: 'Onenui Station, Mahia Peninsula, New Zealand',
                    missionDetails: 'Top Secret!!!!!!!!!!'
                },
            ]
        },

        {
            launchCenter: 'Space Launch Complex',
            coordinates: [-120.6262, 34.5815],
            remainDays: 10,
            launchDetail: [
                {
                    rocket: 'Delta IV Heavy',
                    missionCode: 'NROL-71',
                    agency: 'United Launch Alliance',
                    date: '28/11/2018',
                    location: 'Vandenberg AFB, CA, USA',
                    missionDetails: 'Classified payload for the U.S. National Reconnaissance Office.'
                },
                {
                    rocket: 'Atlas V 401',
                    missionCode: 'Landsat 9',
                    agency: 'United Launch Alliance',
                    date: '30/11/2018',
                    location: 'Vandenberg AFB, CA, USA',
                    missionDetails: "Landsat 9 is a partnership between NASA and the U.S. Geological Survey to continue the Landsat program's critical role in monitoring, understanding and managing the land resources needed to sustain human life. Landsat 9, like Landsat 8, will have a higher imaging capacity than past Landsats, allowing more valuable data to be added to the Landsat’s global land archive. Satellite will operaite in sun-synchronous orbit at an altitude of 705 km and has a mission lifetime of 5 years."
                },
                {
                    rocket: 'Falcon 9 Block 5',
                    missionCode: 'Spaceflight SSO-A',
                    agency: 'SpaceX',
                    date: '19/11/2018',
                    location: 'Vandenberg AFB, CA, USA',
                    missionDetails: 'Dedicated rideshare launching payloads into sun-synchronous orbit. Payloads include ORS-6, EU:CROPIS, STPSat-5, BlackSky Global-1 to -4, HawkEye Pathfinder 1-3, Iceye, NEXTSat-1, 2 SkySats, Centauri II, and a Flock of Doves.'
                }, 
                {
                    rocket: 'Falcon 9 Block 5',
                    missionCode: 'Sentinel-6A (Jason-CS)',
                    agency: 'SpaceX',
                    date: '31/10/2018',
                    location: 'The Sentinel-6A mission, also known as Jason Continuity of Service (Jason-CS), is a partnership between NASA, NOAA, ESA, and EUMETSAT. This mission consists of two parts: the first one continues the long-term global sea surface height data record begun by first Jason satellites in 1992. This part of the mission will provide altimeter data necessary for ocean climate monitoring, ocean modelling and numerical ocean prediction, weather forecasting, marine meteorology, coastal altimetry and modelling. A secondary objective of the mission is to collect high-resolution vertical profiles of temperature, using the Global Navigation Satellite System (GNSS) Radio-Occultation sounding technique, to assess temperature changes in the troposphere and stratosphere and to support numerical weather prediction. Sentinel-6A is to operate in a highly-inclined circular orbit at an altitude of 1336 km, with an operational mission lasting 5 years.'
                }
            ]
        },

        {
            launchCenter: 'Kennedy Space Center',
            coordinates: [-80.60428186, 28.60822681],
            remainDays: 24,
            launchDetail: [
                {
                    rocket: 'Falcon 9 Block 5',
                    missionCode: "Es'hail 2",
                    agency: 'SpaceX',
                    date: '14/11/2018',
                    location: 'FL, USA',
                    missionDetails: "Es'hail 2 is a communications satellite operated by a Quatar based company. The satellite will operate at 26 degrees East longitude along a geostationary orbit to provide direct-to-home television services in the Middle East and North Africa region."
                },
                {
                    rocket: 'Falcon Heavy',
                    missionCode: 'Arabsat-6A',
                    agency: 'SpaceX',
                    date: '30/11/2018',
                    location: 'Vandenberg AFB, CA, USA',
                    missionDetails: 'top secret mission'
                }
            ]
        },
        {
            launchCenter: 'Plesetsk Cosmodrome',
            coordinates: [62.92883, 40.457098],
            remainDays: 3,
            launchDetail: [
                {
                    rocket: 'Soyuz 2.1B/Fregat-M',
                    missionCode: 'Glonass-M',
                    agency: 'Russian Space Forces',
                    date: '02/11/2018',
                    location: 'Plesetsk Cosmodrome, Russian Federation',
                    missionDetails: 'Glonass-M, also known as Uragan-M, are the second generation of Uragan satellite design used for GLONASS satellite navigation system. GLONASS is a Russian space-based navigation system comparable to the similar GPS and Galileo systems. This generation improves on accuracy, power consumption and design life. Each satellite weighs 1415 kg, is equipped with 12 L-band antennas, and has an operational lifetime of 7 years.'
                },
                {
                    rocket: 'Soyuz 2.1B',
                    missionCode: 'Lotos-S1',
                    agency: 'Russian Space Forces',
                    date: '24/10/2018',
                    location: 'Plesetsk Cosmodrome, Russian Federation',
                    missionDetails: 'Lotos-S1 spacecraft is a part of the Liana constellation, designed for orbital electronic intelligence.'
                }
            ]
        }

    ],

};

export default store