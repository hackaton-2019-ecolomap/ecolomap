import React from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from 'react-simple-maps';
import topology from '../static/world-50m';
import { withContext } from '../Provider';

const Map = ({ setCountryName }) => {
  const onCountryClick = geography => {
    setCountryName(geography.properties.NAME);
  };

  return (
    <ComposableMap
      projectionConfig={{ scale: 205 }}
      width={980}
      height={551}
      style={{
        width: '100%',
        height: 'auto'
      }}
    >
      <ZoomableGroup center={[0, 20]} zoom={1}>
        <Geographies geography={topology}>
          {(geographies, projection) =>
            geographies.map(
              (geography, i) =>
                geography.id !== '010' && (
                  <Geography
                    // eslint-disable-next-line react/no-array-index-key
                    key={i}
                    geography={geography}
                    projection={projection}
                    style={{
                      default: {
                        fill: '#ECEFF1',
                        stroke: '#607D8B',
                        strokeWidth: 0.75,
                        outline: 'none'
                      },
                      hover: {
                        fill: '#CFD8DC',
                        stroke: '#607D8B',
                        strokeWidth: 0.75,
                        outline: 'none'
                      },
                      pressed: {
                        fill: '#FF5722',
                        stroke: '#607D8B',
                        strokeWidth: 0.75,
                        outline: 'none'
                      }
                    }}
                    onClick={onCountryClick}
                  />
                )
            )
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default withContext('setCountryName')(Map);
