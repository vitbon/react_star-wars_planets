import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import "./modal.css";

const SITE_API = 'https://swapi.dev/api/';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      config: {
        method: 'GET',
        url: SITE_API + "planets/",
        params: {
          page: `${props.page}`,
        },
      },
      citizens: '',
    };
  }

  componentDidMount() {
    this.props.location.data.person.residents.map(item => {
      axios
        .get(item)
        .then(res => {
          if (!this.state.citizens) {
            this.setState({ citizens: res.data.name });
          } else {
            this.setState({ citizens: this.state.citizens + ', ' + res.data.name });
          }
        })
        .catch(() => alert(`😱 Axios request failed`));
    });
  }

  closeModal = () => {
    this.setState({isOpen: false});
    window.history.back();
  }

  render() {
    const planet = this.props.location.data.person;
    return (
      <>
        {(this.state.isOpen) &&
          <div className="modal_overlay">
            <div className="modal_window">
              <div className="modal_header">
                <span className="modal_title">Detailed Information</span>
                <span className="modal_close" onClick={this.closeModal}>X</span>
              </div>
              <div className="modal_body">
                { planet.name ? <div className="modal_field_title"><b> Название: {planet.name.toUpperCase()}</b></div>
                              : <div className="modal_field_title_error"><b> Название: нет данных ☹</b></div>
                }
                { planet.rotation_period ? <div className="modal_field_title"> Период оборота: {planet.rotation_period} </div>
                                         : <div className="modal_field_title_error"> Период оборота: нет данных ☹ </div>
                }
                { planet.diameter ? <div className="modal_field_title"> Диаметр: {planet.diameter} </div>
                                  : <div className="modal_field_title_error"> Диаметр: нет данных ☹ </div>
                }
                { planet.climate ? <div className="modal_field_title"> Климат: {planet.climate} </div>
                                 : <div className="modal_field_title_error"> Климат: нет данных ☹ </div>
                }
                { planet.gravity ? <div className="modal_field_title"> Гравитация: {planet.gravity} </div>
                                 : <div className="modal_field_title_error"> Гравитация: нет данных ☹ </div>
                }
                { planet.terrain ? <div className="modal_field_title"> Тип местности: {planet.terrain} </div>
                                 : <div className="modal_field_title_error"> Тип местности: нет данных ☹ </div>
                }
                { planet.population ? <div className="modal_field_title"> Население: {planet.population} </div>
                                    : <div className="modal_field_title_error"> Население: нет данных ☹ </div>
                }   
                { this.state.citizens ? <div className="modal_field_title"> Известные жители: {this.state.citizens} </div>
                                      : <div className="modal_field_title_error"> Известные жители: нет данных ☹ </div>
                }
              </div>
              <div className="modal_footer">
                <button className="modal_button" onClick={this.closeModal}>OK</button>
              </div>
            </div>
          </div>
        }
      </>
    );
  }
}