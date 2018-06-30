import React, { Component } from 'react';
import Details from './Details.jsx';
import Hours from './Hours.jsx';
import Misc from './Misc.jsx';
import axios from 'axios';
import moment from 'moment';

export default class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      hours: {},
      misc: {}
    }
  }

  componentDidMount() {
    //random search on refresh
    this.addRestaurants();
  }

  addRestaurants() {
    const e = Math.floor(Math.random() * 9999999 + 1);
//    axios.post('/api/restaurants')
//      .then((data) => {
        this.getDetails(e);
        this.getHours(e);
        this.getMisc(e);
//      })
//      .catch((err) => console.log('err from post ', err))
      console.log('searching for restaurant id ', e)
      console.log("The time is ", moment().format('HHmm'))

  }

  getDetails(e) {
    axios('/api/details', {params: { id: e }})
      .then(details => {
        delete details.data.rows[0].id;
        // delete details.data[0].rid;
        console.log('what is details ', details.data.rows[0]);
        this.setState({ details: details.data.rows[0] });
      })
      .catch(err => {
        console.log('failed /api/details get ', err);
      })
  }

  getHours(e) {
    axios('/api/hours', {params : { id: e }})
      .then(hours => {
        delete hours.data.rows[0].id;
        // delete hours.data[0].rid;
        console.log('what is hours ', hours.data.rows[0]);
        this.setState({ hours: hours.data.rows[0] });
      })
      .catch(err => {
        console.log('failed to load /api/hours ', err)
      })
  }

  getMisc(e) {
    axios('/api/misc', {params: { id: e }})
      .then(misc => {
        delete misc.data.rows[0].id;
        // delete misc.data[0].rid;
        console.log('what is misc ', misc.data.rows[0]);
        this.setState({ misc: misc.data.rows[0] });
      })
      .catch(err => {
        console.log('failed /api/misc get ', err);
      })
  }

  render() {
    const hours = this.state.hours;
    const now = moment().format('H') * 60 + moment().format('m') * 1;
    const today = moment().format('ddd').toLowerCase();
    const min = (time) => {
      return time.slice(0,5).replace(/:/, '').trim().slice(2) * 1;
    }
    const oneTime = (time) => {
      return time.slice(10).trim();
    }
    const twoTimes = (time) => {
      return time.slice(-18).replace(/\n/, '').trim();
    }

    Object.keys(hours).map(day => {
      const open1 = parseInt(hours[day]) * 60 + min(hours[day]);
      const closed1 = (parseInt(oneTime(hours[day])) + 12) * 60 + min(oneTime(hours[day]));
      const open2 = (parseInt(twoTimes(hours[day])) + 12) * 60 + min(twoTimes(hours[day]));
      let closed2 = (parseInt(oneTime(twoTimes(hours[day]))) + 12) * 60 + min(oneTime(twoTimes(hours[day])));
      parseInt(oneTime(twoTimes(hours[day]))) + 12 === 0 ?
        closed2 += 720
        :
        '';

      day !== today ?
        ''
        :
        now >= open1 && now <= closed1 ?
          this.state.isOpen1 = true
          :
          now < open2 || hours[day].length < 25 ?
            this.state.early = true
            :
            now >= open2 && now <= closed2 ?
              this.state.isOpen2 = true
              :
              ''
    });

  console.log('state: ',this.state);
  console.log('now: ', now);
  console.log('today: ', today);
  console.log('oneTime: ', oneTime)

    return(
      <div>
        <div>
          <Details details={this.state.details} hours={this.state.hours} isOpen1={this.state.isOpen1} isOpen2={this.state.isOpen2}/>
        </div>
        <div>
          <Hours hours={this.state.hours} isOpen1={this.state.isOpen1} isOpen2={this.state.isOpen2} early={this.state.early}/>
        </div>
        <div>
          <Misc misc={this.state.misc}/>
        </div>
      </div>
    )
  }
}
