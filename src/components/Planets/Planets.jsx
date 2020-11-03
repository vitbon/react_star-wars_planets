import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./planets.css";

const SITE_API = 'https://swapi.dev/api/';

export default class Planets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        method: 'GET',
        url: SITE_API + "planets/",
        params: {
          page: `${props.page}`,
        },
      },
      persons: [],
    }
  };

  async componentDidMount() {
    await axios(this.state.config)
      .then(res => {
        this.setState({ persons: res.data.results });
        return res.data.results;
      })
      .catch(() => alert(`😱 Axios request failed`));
    this.state.persons.map(item => {
      for (let pole in item) {
        if (item[pole] === "unknown" || item[pole] === "0" || item[pole] === "N/A") 
          item[pole] = "";
      }
    });
    this.setState({ persons: this.state.persons });    
  };

  render() {
    return (
      <div className="container">
        { this.state.persons.map( person => 
            <Link to={{ pathname: `/page${this.props.page}/modal`,
                        data: {person} }}
                  key={this.props.page + person.name} >
              <div className="card">                
                { person.name ? <span className="card__name"><b> Название: {person.name.toUpperCase()}</b></span>
                              : <span className="card__name_error"><b> Название: нет данных ☹</b></span>
                }
                { person.climate ? <span className="card__field"> Климат: {person.climate} </span>
                                 : <span className="card__name_error"> Климат: нет данных ☹ </span>
                }
                { person.population ? <span className="card__field"> Население: {person.population} </span>
                                    : <span className="card__name_error"> Население: нет данных ☹ </span>
                }
              </div>
            </Link>
        )}
      </div>
    )
  };
};