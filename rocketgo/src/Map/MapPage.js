import React from "react"
import map from './world-50m'
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
    Markers,
    Marker,
} from "react-simple-maps"
import {VictoryPie} from "victory"

const wrapperStyles = {
    width: "100%",
    maxWidth: 980,
    margin: "0 auto",
};

const cities = [
    {name: "Zurich", coordinates: [8.5417, 47.3769], remainDays: 24,},
    {name: "Singapore", coordinates: [103.8198, 1.3521], remainDays: 2,},
    {name: "San Francisco", coordinates: [-122.4194, 37.7749], remainDays: 30,},
    {name: "Sydney", coordinates: [151.2093, -33.8688], remainDays: 30,},
    {name: "Lagos", coordinates: [3.3792, 6.5244], remainDays: 15,},
    {name: "Buenos Aires", coordinates: [-58.3816, -34.6037], remainDays: 40,},
    {name: "Shanghai", coordinates: [121.4737, 31.2304], remainDays: 4,},
];

const zoomCenter = (zoomCity) => zoomCity ? zoomCity.coordinates : [0, 20];

const zoomRate = (zoomCity) => zoomCity ? 4 : 1;

const getCountDownData = (remainDays) => [
    {x: null, y: 100 - remainDays / 30 * 100, fill: "#FF5722"},
    {x: null, y: remainDays / 30 * 100, fill: "#00BCD4"},
];

const MapPage = ({zoomCity}) => (
    <div>
        <div style={wrapperStyles}>
            <ComposableMap width={980} height={551} projectionConfig={{scale: 205}}
                           style={{width: "100%", height: "auto",}}>
                <ZoomableGroup center={zoomCenter(zoomCity)} zoom={zoomRate(zoomCity)}>
                    <Geographies geography={map}>
                        {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                            <Geography key={i} geography={geography} projection={projection}
                                       style={{
                                           default: {fill: "#ECEFF1", stroke: "#607D8B", strokeWidth: 0.75, outline: "none"},
                                           hover: {fill: "#607D8B", stroke: "#607D8B", strokeWidth: 0.75, outline: "none"},
                                           pressed: {fill: "#FF5722", stroke: "#607D8B", strokeWidth: 0.75, outline: "none"},
                                       }}
                            />
                        ))}
                    </Geographies>
                    <Markers>
                        {cities.map((city, i) => (
                            <Marker key={i} marker={city}
                                    style={{
                                        default: {outline: "none"},
                                        hover: {outline: "none"},
                                        pressed: {outline: "none"},
                                    }}>
                                <g transform="translate(-15,-15)">
                                    <circle cx={20} cy={20} r={21} fill="transparent" stroke="#607D8B"/>
                                    <circle cx={20} cy={20} r={9} fill="transparent" stroke="#607D8B"/>
                                    <VictoryPie standalone={false} width={40} height={40} padding={0} innerRadius={10}
                                                data={getCountDownData(city.remainDays)} style={{
                                        labels: {fill: "transparent"},
                                        data: {stroke: "#ECEFF1"},
                                    }}
                                    />
                                </g>
                                <text textAnchor="middle" y={40} color="black" style={{
                                    fontFamily: "Roboto, sans-serif",
                                    fill: "#607D8B",
                                    stroke: "none",
                                }}
                                >
                                    {city.name}
                                </text>
                            </Marker>
                        ))}
                    </Markers>
                </ZoomableGroup>
            </ComposableMap>
        </div>
    </div>
);

export default MapPage