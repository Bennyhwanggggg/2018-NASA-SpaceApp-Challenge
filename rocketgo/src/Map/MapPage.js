import React, { Component } from "react"
import map from './world-50m'
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
    Markers,
    Marker,
} from "react-simple-maps"
import { VictoryPie } from "victory"

const wrapperStyles = {
    width: "100%",
    maxWidth: 980,
    margin: "0 auto",
};

class MapPage extends Component {
    constructor() {
        super();
        this.state = {
            center: [0,20],
            zoom: 1,
            cities: [
                { name: "Zurich", coordinates: [8.5417,47.3769], remainDays: 24 },
                { name: "Singapore", coordinates: [103.8198,1.3521], remainDays: 2  },
                { name: "San Francisco", coordinates: [-122.4194,37.7749], remainDays: 30 },
                { name: "Sydney", coordinates: [151.2093,-33.8688], remainDays: 30},
                { name: "Lagos", coordinates: [3.3792,6.5244], remainDays: 15 },
                { name: "Buenos Aires", coordinates: [-58.3816,-34.6037], remainDays: 40  },
                { name: "Shanghai", coordinates: [121.4737,31.2304], remainDays: 4 },
            ]
        };
    }
    handleCitySelection = (evt) => {
        const cityId = evt.target.getAttribute("data-city");
        const city = this.state.cities[cityId];
        this.setState({
            center: city.coordinates,
            zoom: 2,
        })
    };

    handleReset = () => {
        this.setState({
            center: [0,20],
            zoom: 1,
        })
    };

    getCountDown = (remainDays) => remainDays/30*100;

    render() {
        return (
            <div>
                <div style={wrapperStyles}>
                    {
                        this.state.cities.map((city, i) => (
                            <button
                                key={i}
                                className="btn px1"
                                data-city={i}
                                onClick={this.handleCitySelection}
                            >
                                { city.name }
                            </button>
                        ))
                    }
                    <button onClick={this.handleReset}>
                        { "Reset" }
                    </button>
                </div>
                <div style={wrapperStyles}>
                    <ComposableMap
                        projectionConfig={{
                            scale: 205,
                        }}
                        width={980}
                        height={551}
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                    >
                        <ZoomableGroup center={this.state.center} zoom={this.state.zoom}>
                            <Geographies geography={map}>
                                {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                                    <Geography
                                        key={i}
                                        geography={geography}
                                        projection={projection}
                                        style={{
                                            default: {
                                                fill: "#ECEFF1",
                                                stroke: "#607D8B",
                                                strokeWidth: 0.75,
                                                outline: "none",
                                            },
                                            hover: {
                                                fill: "#607D8B",
                                                stroke: "#607D8B",
                                                strokeWidth: 0.75,
                                                outline: "none",
                                            },
                                            pressed: {
                                                fill: "#FF5722",
                                                stroke: "#607D8B",
                                                strokeWidth: 0.75,
                                                outline: "none",
                                            },
                                        }}
                                    />
                                ))}
                            </Geographies>
                            <Markers>
                                {this.state.cities.map((city, i) => (
                                    <Marker
                                        key={i}
                                        marker={city}
                                        style={{
                                            default: {
                                                outline: "none",
                                            },
                                            hover: {
                                                outline: "none",
                                            },
                                            pressed: {
                                                outline: "none",
                                            },
                                        }}
                                    >
                                        <g transform="translate(-15,-15)">
                                            <circle cx={20} cy={20} r={21} fill="transparent" stroke="#607D8B" />
                                            <circle cx={20} cy={20} r={9} fill="transparent" stroke="#607D8B" />
                                            <VictoryPie
                                                standalone={ false }
                                                width={ 40 }
                                                height={ 40 }
                                                padding={ 0 }
                                                innerRadius={ 10 }
                                                style={{
                                                    labels: { fill: "transparent" },
                                                    data: { stroke: "#ECEFF1" },
                                                }}
                                                data={[
                                                    { x: null, y: 100 - this.getCountDown(city.remainDays), fill: "#FF5722" },
                                                    { x: null, y: this.getCountDown(city.remainDays), fill: "#00BCD4" },
                                                ]}
                                            />
                                        </g>
                                    </Marker>
                                ))}
                            </Markers>

                            {/*<Markers>*/}
                                {/*{*/}
                                    {/*this.state.cities.map((city, i) => (*/}
                                        {/*<Marker key={i} marker={city}>*/}
                                            {/*<circle*/}
                                                {/*cx={0}*/}
                                                {/*cy={0}*/}
                                                {/*r={6}*/}
                                                {/*fill="#FF5722"*/}
                                                {/*stroke="#DF3702"*/}
                                            {/*/>*/}
                                        {/*</Marker>*/}
                                    {/*))*/}
                                {/*}*/}
                            {/*</Markers>*/}
                        </ZoomableGroup>
                    </ComposableMap>
                </div>
            </div>
        )
    }
}

export default MapPage