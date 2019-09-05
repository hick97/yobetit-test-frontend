import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { MdCasino, MdAdd } from 'react-icons/md';

import {
  getAllCountriesRequest,
  getCountriesByNameRequest,
  getCountriesFromArrayRequest,
} from '../../store/modules/country/actions';

import {
  Container,
  ContentHeader,
  SearchContainer,
  DefaultButton,
  PushedCountriesWrapper,
  CountriesWrapper,
  CountryInfo,
} from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();

  const countries = useSelector(state => state.country.countries);
  const loading = useSelector(state => state.country.loading);

  // States
  const [countryToPush, setCountryToPush] = useState('');
  const [pushedCountries, setPushedCountries] = useState([]);
  const [country, setCountry] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  // Starting initial countries array with all countries

  /*eslint-disable */
  useEffect(() => {
    dispatch(getAllCountriesRequest());
    setFilteredCountries(countries)
  }, []);
  /* eslint-enable */

  // Setting values in filtered array ever that countries values change
  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  function handleCountryChange(e) {
    e.target.name === 'added_country'
      ? setCountryToPush(e.target.value)
      : setCountry(e.target.value);
  }

  // Getting countries from array
  async function getCountriesFromArray(e) {
    e.preventDefault();
    dispatch(getCountriesFromArrayRequest(pushedCountries));
    setPushedCountries([]);
  }

  // Getting country by name
  async function handleCountryByName(e) {
    e.preventDefault();
    dispatch(getCountriesByNameRequest(country));
    setCountry('');
  }

  // Getting all countries
  async function handleGetAll() {
    dispatch(getAllCountriesRequest());
  }

  // Pushing countries in array
  function handlePushCountry(e) {
    e.preventDefault();

    if (pushedCountries.length === 0) {
      setPushedCountries([countryToPush]);
    } else {
      setPushedCountries([...pushedCountries, countryToPush]);
    }

    setCountryToPush('');
  }

  // Resetting pushed countries
  function handleResetPushedCountries(e) {
    e.preventDefault();
    setPushedCountries([]);
  }

  // Filtering countries
  function filterCountries(keySearch) {
    const ks = keySearch.toLowerCase();

    const result = countries.filter(item => {
      const { name } = item;
      return name.toLowerCase().search(ks) !== -1;
    });

    return result;
  }
  async function handleFilter(keySearch) {
    const result = await filterCountries(keySearch);

    setFilteredCountries(result);
  }

  return (
    <Container>
      <ContentHeader>
        <h1>Country Hunter</h1>
        <Link to="/machine">
          <button>
            <MdCasino size={20} color="#FFF" />
            SLOT MACHINE
          </button>
        </Link>
      </ContentHeader>
      <h4>What are you looking for?</h4>
      <ul>
        <span>{loading ? 'Loading...' : null}</span>
        <SearchContainer>
          <strong>Get informations about all countries</strong>

          <DefaultButton onClick={handleGetAll}>GET ALL</DefaultButton>
        </SearchContainer>
        <SearchContainer>
          <strong>Get informations about a unique country by name</strong>
          <div>
            <form onSubmit={handleCountryByName}>
              <input
                name="country"
                placeholder="Country name"
                type="text"
                onChange={handleCountryChange}
                value={country}
              />
              <button type="submit">GET</button>
            </form>
          </div>
        </SearchContainer>
        <SearchContainer>
          <strong>Get informations about a set of countries</strong>
          <div>
            <form onSubmit={handlePushCountry}>
              <input
                name="added_country"
                placeholder="Country name"
                type="text"
                value={countryToPush}
                onChange={handleCountryChange}
              />
              <button type="submit">ADD</button>
            </form>
          </div>
        </SearchContainer>
      </ul>
      {pushedCountries.length > 0 ? (
        <>
          <DefaultButton onClick={handleResetPushedCountries}>
            RESET
          </DefaultButton>
          <DefaultButton onClick={getCountriesFromArray}>SEARCH</DefaultButton>
          <PushedCountriesWrapper>
            {pushedCountries.map((c, index) => (
              <li key={index}>{c}</li>
            ))}
          </PushedCountriesWrapper>
        </>
      ) : null}
      <CountriesWrapper>
        <input
          onChange={e => handleFilter(e.target.value)}
          type="search"
          className="form-control"
          id="inlineFormInputGroup"
          placeholder="Search..."
        />
        {filteredCountries &&
          filteredCountries.map(c => (
            <CountryInfo key={c.numericCode}>
              <img src={c.flag} alt="Brazil" />
              <div>
                <div>
                  <strong>Name: {c.name}</strong>
                  <strong>População: {c.population}</strong>
                  <strong>Capital: {c.capital}</strong>
                  <strong>Alpha2code: {c.alpha2Code}</strong>
                </div>
              </div>
              <div>
                <span>Top level domain: {c.topLevelDomain[0]}</span>
                <span>Region: {c.region}</span>
                <span>Subregion: {c.subregion}</span>
                <span>Demonym: {c.demonym}</span>
              </div>
            </CountryInfo>
          ))}
      </CountriesWrapper>
    </Container>
  );
}
