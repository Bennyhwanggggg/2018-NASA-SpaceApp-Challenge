import React from "react"
import map from './world-50m'
import {connect} from 'unistore/react'
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
    Markers,
    Marker,
} from "react-simple-maps"
import {VictoryPie} from "victory"
import action from '../store/zoomCityAction'
import city from '../utilities/city'

const wrapperStyles = {
    width: "100%",
    maxWidth: 980,
    margin: "0 auto",
};

const zoomCenter = (zoomCity) => zoomCity ? zoomCity.coordinates : [0, 20];

const zoomRate = (zoomCity) => zoomCity ? 4 : 1;

const getCountDownData = (remainDays) => [
    {x: null, y: 100 - remainDays / 30 * 100, fill: "#167ac6"},
    {x: null, y: remainDays / 30 * 100, fill: "#999"},
];

const MapPage = ({zoomCity, zoomToCity}) => (
    <div style={{backgroundColor: "#031529"}}>
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
                        {city.cities.map((city, i) => (
                            <Marker key={i} marker={city}
                                    style={{
                                        default: {outline: "none"},
                                        hover: {outline: "none"},
                                        pressed: {outline: "none"},
                                    }}>
                                <g transform="translate(-15,-15)">
                                    <circle cx={20} cy={20} r={21} fill="transparent" stroke="#607D8B"/>
                                    <circle cx={20} cy={20} r={9} fill="transparent" stroke="#607D8B"
                                            onClick={() => {zoomToCity(city);}}/>
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

export default connect(store => ({zoomCity: store.zoomCity}), action)(MapPage)