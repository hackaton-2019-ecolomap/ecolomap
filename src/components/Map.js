import React from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from 'react-simple-maps';
import { withRouter } from 'react-router-dom';
import { withContext } from '../Provider';
import topology from '../static/topo-continent';

const Map = ({ setLand, landsList, history }) => {
  const onCountryClick = geography => {
    const { continent } = geography.properties;
    setLand(continent);
    if (landsList.includes(continent)) {
      setLand(continent);
      history.push('/biomes');
    }
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
      <ZoomableGroup center={[0, 20]} zoom={1} disablePanning>
        <Geographies geography={topology}>
          {(geographies, projection) =>
            geographies.map((geography, id) => (
              <Geography
                // eslint-disable-next-line react/no-array-index-key
                key={id}
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
            ))
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default withContext('setLand', 'landsList')(withRouter(Map));
