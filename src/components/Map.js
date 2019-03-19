import React from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from 'react-simple-maps';
import { Motion, spring } from 'react-motion';
import styled from 'styled-components';
import topology from 'static/world-50m';
import { withContext } from 'Provider';

const StyledZoomButton = styled.button`
  width: 50px;
  height: 50px;
  margin: 5px 0;
`;

const StyledWrapperButtons = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 20px;
  bottom: 0px;
`;

class Map extends React.Component {
  state = {
    center: [0,20],
    zoom: 1,
  }

  handleZoomIn = () => {
    this.setState({ zoom: this.state.zoom * 2 });
  }

  handleZoomOut = () => {
    this.setState({ zoom: this.state.zoom / 2 });
  }

  onCountryClick = (geography) => {
    const { setCountryName } = this.props;
    setCountryName(geography.properties.NAME);
    // this.setState({
    //   zoom: 2,
    //   center: geography.geometry.coordinates,
    // })
  };

  render = () => {
    return (
      <div className="columns">
        <StyledWrapperButtons>
          <StyledZoomButton onClick={this.handleZoomIn} className="btn">
            +
          </StyledZoomButton>
          <StyledZoomButton onClick={this.handleZoomOut} className="btn">
            -
          </StyledZoomButton>          
        </StyledWrapperButtons>
        <Motion
          defaultStyle={{
            zoom: 1,
            x: 0,
            y: 20,
          }}
          style={{
            zoom: spring(this.state.zoom, {stiffness: 210, damping: 20}),
            x: spring(this.state.center[0], {stiffness: 210, damping: 20}),
            y: spring(this.state.center[1], {stiffness: 210, damping: 20}),
          }}
          >
          {({zoom,x,y}) => (
            <ComposableMap
              projectionConfig={{ scale: 205 }}
              width={980}
              height={551}
              style={{
                width: "100%",
                height: "auto",
              }}
              >
              <ZoomableGroup center={[x,y]} zoom={zoom}>
                <Geographies geography={topology}>
                  {(geographies, projection) =>
                    geographies.map((geography, i) => geography.id !== "010" && (
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
                            fill: "#CFD8DC",
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
                        onClick={this.onCountryClick}
                      />
                  ))}
                </Geographies>
              </ZoomableGroup>
            </ComposableMap>
          )}
        </Motion>
      </div>
    );
  }
}

export default withContext('setCountryName')(Map);
