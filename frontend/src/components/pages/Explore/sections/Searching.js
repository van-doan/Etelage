import React, { useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useHistory } from "react-router-dom";
import SearchResults from "../sections/SearchResults";
import axios from 'axios'
import { XAPP_TOKEN } from '../../../../config/key'

function Searching(props) {
  const [loading, setLoading] = useState()
  const [data, setData] = useState()
  const [value, setValue] = useState();
  const history = useHistory()

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
    .get(
      `https://api.artsy.net/api/search?q=${value}&type=artwork`,
      {
        headers: {
          'X-Xapp-Token': XAPP_TOKEN,
          'Accept': 'application/vnd.artsy-v2+json'
        }
      }
    )
    .then((response) => {
      setData(response.data);
      setLoading(false);
      console.log(response.data);
    })
    .catch((error) => console.log(error));
  }

  let isEnabled = value !== ''

  const renderSearchResults = () => {
    if(loading) {
      return "Loading..."
    } else if (data) {
      return data._embedded.results.map((artwork, index) => (
        <SearchResults key={index} data={artwork} />
      ))
    } 
  }
  return (
      <Container 
        fluid 
        className="search-container my-5">
        <Row 
          className="search-row">
            <Col
              className="search-col"
              xs={12} sm={12} lg={12} xl={12}>
                <div className="search-form">
                <h1 className="search-header">Search for artwork</h1> 
                <form onSubmit={handleSubmit}>
                  <input className="query" type="text" name="searchQuery" placeholder="art, contemporary, Banksy..." value={value} onChange={handleChange} />
                  <input className="search" type="submit" value="search" disabled={!isEnabled} />
                </form>
              </div>
            </Col>
            <Col
              className="results-col"
              xs={12} sm={12} lg={12} xl={12}>
            {data ? 
            <h1 className="result-header">Showing search results for {data.q}...</h1> : 
            <span className="results">Don't see any results? Use the search bar above.</span>
            }
            {renderSearchResults()}
            </Col>
          </Row>
      </Container>
  );
}

export default Searching;