import React from "react";
import { FiFilter } from "react-icons/fi";
//import { BiSearchAlt2 } from "react-icons/bi";
//import "./NavBar.css";
import styled from "styled-components";

const Navbar = () => {
  const HEADER = styled.div`
    height: auto;
    width: 100%;
    background-color: #e2e7e1;
  `;
  const ITEM = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    left: 70px;

    input {
      border-radius: 5px;
      cursor: pointer;
    }
    button {
      color: rgb(255, 255, 255);
      background-color: rgb(4, 40, 147);
      border: 1px solid rgb(4, 40, 147);
      border-radius: 4px;
      cursor: pointer;
      position: relative;
      left: 400px;
    }
  `;
  const TABLE = styled.div`
    position: absolute;
    top: 200px;
    left: 100px;
    border: 1px solid black;
    table {
      border-collapse: separate;
      border-spacing: 20px 35px;
    }
  `;

  return (
    <div>
      <HEADER>
        <h3>Toll Management Application</h3>
      </HEADER>
      <ITEM>
        <h4>Toll entries/Vehicle entries</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <FiFilter />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          placeholder="                 Search Vehicle"
          name="search"
        ></input>
        &nbsp;&nbsp;
        <button>Add vehicle entry</button>&nbsp;&nbsp;
        <button>Add new toll</button>&nbsp;&nbsp;
        <button>View all tolls</button>&nbsp;&nbsp;
      </ITEM>
      <TABLE>
        <table>
          <th>VEHICLE TYPE</th>
          <th>VEHICLE NUMBER</th>
          <th>DATE/TIME</th>
          <th>TOLLNAME</th>
          <th>TARIFF</th>

          <tr>
            <td>Car/Jeep/Van</td>
            <td>TN24AQ4644</td>
            <td>09/09/2022, 16:43:48</td>
            <td>Chengalpattu</td>
            <td>60</td>
          </tr>
          <tr>
            <td>Car/Jeep/Van</td>
            <td>TN19QQ1234</td>
            <td>09/09/2022,15:30:34</td>
            <td>Kappalur</td>
            <td>75</td>
          </tr>
          <tr>
            <td>Heavy Vehicle</td>
            <td>TN24AA1234</td>
            <td>09/09/2022,12:12:34</td>
            <td>Kappalur</td>
            <td>400</td>
          </tr>
        </table>
      </TABLE>
    </div>
  );
};
export default Navbar;
