import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCountries } from '../redux/countries/countriesSlice';

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  const [searchTerm, setSearchTerm] = useState('');

  const { status, error } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  let filteredCountries = [...countries];

  if (searchTerm) {
    filteredCountries = filteredCountries.filter((country) => country.name.common.toLowerCase().includes(searchTerm.toLowerCase())); // eslint-disable-line max-len
  }
  filteredCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));

  const getBackgroundColorClass = (index) => {
    const backgroundColorClasses = ['bg-[#4268B1]', 'bg-[#3E60A2]'];
    const row = Math.floor(index / 2);
    return backgroundColorClasses[(index + row) % backgroundColorClasses.length];
  };

  return (
    <div>
      <main className="bg-blue_l flex-column items-center gap-4 p-4 w-[100vw]">
        <h2>Search by country name</h2>
        <input
          className="w-[90%] p-2 bg-transparent rounded-md border-2 border-white my-4 placeholder-white outline-none"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </main>
      <div className="bg-[#35548B] p-2">
        <h4 className="uppercase">Stats by country</h4>
      </div>
      <div className="grid grid-cols-2">
        {status === 'loading' && (
        <div
          className="text-2xl p-5"
        >
          Loading...
        </div>
        )}
        { filteredCountries.map(({
          cca2, name, population, latlng,
        }, index) => (
          <NavLink key={cca2} to={`${latlng}:${name.common}:${cca2.toLowerCase()}`}>
            <div
              className={`h-full w-full p-4 
          relative ${getBackgroundColorClass(index)}`}
            >
              <img
                className="map_svg h-[60%] mx-auto"
                alt={cca2}
                src={`https://raw.githubusercontent.com/Ginohmk/worldMaps/main/maps/${cca2.toLowerCase()}/vector.svg`}
              />
              <img
                className="absolute top-3 right-3 h-5"
                src="https://api.iconify.design/streamline:interface-arrows-right-circle-1-arrow-keyboard-circle-button-right.svg?color=%23ffffff"
                alt="go"
              />
              <div className="absolute right-4">
                <h3 className="uppercase text-right">{name.common}</h3>
                <p className="text-right">
                  <span className="font-normal">Population:</span>
                  {' '}
                  {population}
                </p>
              </div>
            </div>
          </NavLink>
        ))}
        {status === 'failed' && <div>{error}</div>}
      </div>
    </div>
  );
};

export default Home;
