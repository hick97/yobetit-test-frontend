import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';

import api from '../../services/api';

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
  // States
  const [loading, setLoaging] = useState(false);
  const [countryToPush, setCountryToPush] = useState('');
  const [pushedCountries, setPushedCountries] = useState([]);
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState([]);

  function handleCountryChange(e) {
    e.target.name === 'added_country'
      ? setCountryToPush(e.target.value)
      : setCountry(e.target.value);
  }

  // Getting countries from array
  async function getCountriesFromArray(e) {
    try {
      e.preventDefault();

      setLoaging(true);
      const response = await api.post('/country/names', {
        names: pushedCountries,
      });

      const result = [];

      response.data.map(c => {
        result.push(...c);
      });

      setCountries(result);

      setPushedCountries([]);
      setLoaging(false);
    } catch (err) {
      toast.error('Failed to load countries');
    }
  }

  // Getting country by name
  async function handleCountryByName(e) {
    try {
      e.preventDefault();

      setLoaging(true);
      const response = await api.get(`/country/name/${country}`);

      setCountries([response.data]);
      setLoaging(false);
    } catch (err) {
      toast.error('Failed to load country');
    }
  }

  // Getting all countries
  async function handleGetAll() {
    try {
      setLoaging(true);
      const response = await api.get('/country/all');

      setCountries(response.data);
      setLoaging(false);
    } catch (err) {
      toast.error('Failed to load countries');
    }
  }

  // Pushing countries in array
  function handlePushCountry(e) {
    e.preventDefault();

    setCountries([]);

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
  return (
    <Container>
      <ContentHeader>
        <h1>Country Hunter</h1>
        <Link to="/meetup">
          <button>SLOT MACHINE</button>
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
              <button type="submit">+</button>
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
        {countries &&
          countries.map(c => (
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
