import React, { Component } from "react";
import { RiArrowLeftRightLine } from "react-icons/ri";
import Date from "./Date";
import { Link } from "react-router-dom";
import Citydata from "../assets/cities.json"; // Assuming Citydata is an array, not a module

class Card extends Component {
  initialState = {
    FROM: "",
    TO: "",
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  commitChange = () => {
    const { FROM, TO } = this.state;
    this.setState({ FROM: TO, TO: FROM });
  };

  onSearch = (name) => {
    this.setState({ FROM: name });
  };

  onSearchh = (name) => {
    this.setState({ TO: name });
  };

  sendCopy = () => {
    const { FROM, TO } = this.state;
    this.props.copiedData({ FROM, TO });
    this.setState(this.initialState);
  };

  render() {
    return (
      <div className="flex-container bg-blue-300 rounded-lg -mt-[80px] justify-center items-center">
        <div className="container border border-white bg-white rounded-xl w-full max-w-md">
          <h1 className="ml-20 mt-5 text-sm font-bold">
            <a
              href="./search"
              className="text-xl font-semibold underline decoration-2 underline-offset-2 decoration-green-400"
            >
              B
            </a>
            us Ticket Booking.
            <Link to="/search" className="text-sm font-semibold text-sky-500">
              Travelling with a group? Hire a bus.
            </Link>
          </h1>

          <div className="h-96 p-14">
            <label className="block">
              <span className="block text-lg font-medium text-slate-700 ml-1">
                From
              </span>
              <input
                name="FROM"
                type="text"
                className="peer p-3 rounded-lg w-full bg-gray-300 mt-1 focus:border blue-500 focus:bg-gray-600 focus:outline-offset-0"
                placeholder="Leaving From"
                onChange={this.handleChange}
                value={this.state.FROM}
              />

              {Citydata.filter((item) => {
                const searchText = this.state.FROM;
                const cname = item.name.toLowerCase();
                return searchText && cname.startsWith(searchText);
              }).map((item, index) => (
                <div
                  key={index}
                  className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 mt-1"
                >
                  <ul
                    className="py-2 text-sm text-gray-300 dark:text-gray-200"
                    aria-labelledby="dropdownDefault"
                  >
                    <li onClick={() => this.onSearch(item.name)}>
                      {item.name}
                    </li>
                  </ul>
                </div>
              ))}
            </label>

            <div
              className="justify-between content-center mt-5 ml-[12rem]"
              onClick={this.commitChange}
            >
              {" "}
              {<RiArrowLeftRightLine size={30} />}
            </div>

            <label>
              <span className="block text-lg font-medium text-slate-700 ml-1">
                To
              </span>
              <input
                name="TO"
                type="text"
                className="p-3 rounded-lg w-full bg-gray-300 mt-2 focus:border blue-500 focus:bg-gray-600 focus:outline-offset-0"
                placeholder="Going To"
                onChange={this.handleChange}
                value={this.state.TO}
              />

              {Citydata.filter((item) => {
                const searchText = this.state.TO;
                const cname = item.name.toLowerCase();
                return searchText && cname.startsWith(searchText);
              }).map((item, index) => (
                <div
                  key={index}
                  className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 mt-1"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefault"
                  >
                    <li onClick={() => this.onSearchh(item.name)}>
                      {item.name}
                    </li>
                  </ul>
                </div>
              ))}
            </label>

              {<Date />}
            <Link to="/search">Search Bus</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
