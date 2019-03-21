import React from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from 'react-simple-maps';
import { isMobile } from 'react-device-detect';
import { withRouter } from 'react-router-dom';
import { withContext } from '../Provider';
import topology from '../static/topo-continent';
import sleep from '../lib/utils';

const Map = ({ setLand, landsList, setPose, history }) => {
  const onCountryClick = geography => {
    const { continent } = geography.properties;
    setLand(continent);
    if (landsList.includes(continent)) {
      setPose('end');
      setLand(continent);
      sleep(500).then(() => history.push('/biome'));
    }
  };
  return (
    <ComposableMap
      projectionConfig={{ scale: 205 }}
      width={isMobile ? 1000 : 2600}
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
                onClick={onCountryClick}
                style={{
                  default: {
                    fill: '#ECEFF1',
                    outline: 'none'
                  },
                  hover: {
                    fill: '#CFD8DC',
                    outline: 'none'
                  },
                  pressed: {
                    fill: '#00A99D',
                    outline: 'none'
                  }
                }}
              />
            ))
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default withContext('setLand', 'landsList', 'setPose')(withRouter(Map));
