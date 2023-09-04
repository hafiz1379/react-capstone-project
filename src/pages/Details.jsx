import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import { useDispatch, useSelector } from 'react-redux';
import { getInfo } from '../redux/airPollution/airPollutionSlice';
import { chartData, getDisplayName } from '../utils/chartData';
import Footer from '../footer/Footer';

ChartJS.register(ArcElement, Tooltip, Legend);

const Details = () => {
  const { id } = useParams();
  const [coordinates, country, countryCode] = id.split(':');
  const [lat, lon] = coordinates.split(',');
  const infoArr = useSelector((state) => state.info);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfo([lat, lon]));
  }, [dispatch, lat, lon]);

  return (
    <div className="">
      <div className="">
        <header className="bg-blue_l flex items-center gap-4 p-4 w-[100vw]">
          <img
            className="map_svg w-3/5 h-1/5"
            alt={country}
            src={`https://raw.githubusercontent.com/Ginohmk/worldMaps/main/maps/${countryCode}/vector.svg`}
          />
        </header>
        <div className="bg-[#35548B] p-2">
          <h4 className="uppercase">
            {country}
            <span className="capitalize font-light ml-2">
              {' '}
              air pollution ( μg/m3 ) stats
            </span>
          </h4>
        </div>
        <div className="">
          <div className="p-4 bg-blue_header">
            {Object.entries(infoArr).map(([key, value]) => (
              <div className="flex justify-between" key={key}>
                <p>
                  {getDisplayName(key)}
                  :
                </p>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-2 bg-black">
          <h2>Doughnut Chart</h2>
          <Doughnut data={chartData(infoArr)} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Details;
