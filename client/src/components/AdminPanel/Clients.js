import React, { useState, useEffect } from "react";
import "./AdminPanel.scss";
import { Table, Button } from "react-bootstrap";
import { FaTrashAlt, FaEdit, FaSearch } from "react-icons/fa";
import Paginator from "../Paginator/Paginator";
import SelectInput from "../SelectInput/SelectInput";
import { useCookies } from "react-cookie";

const records = ["10", "20", "30", "40", "50", "60", "70"];
export default function App() {
  const [mounted, SetMounted] = useState(false);
  const [cookies, setCookie] = useCookies(["user"]);
  const [userToken, setUserToken] = useState(cookies.token);
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedItems, setSelectedItems] = useState(records[0]);
  const [clientsData, SetClientsData] = useState([]);

  if (!mounted) {
    const clientsOptions = {
      method: "GET",
      headers: {
        "x-auth-token": userToken,
        "Content-Type": "application/json",
      },
    };
    fetch("api/clients/me", clientsOptions)
      .then((res) => res.json())
      .then((d) => {
        SetClientsData(d);
      });
  }

  useEffect(() => {
    SetMounted(true);
  }, []);

  console.log(clientsData, "clients");

  const handleChange = (item) => {
    setSelectedItems(item);
  };

  const onSearch = (e) => {
    setSearch(e.target.value);
    // if (!e.target.value) {
    //   return db
    //     .collection("products")
    //     .get()
    //     .then((d) => setProductData(d));
    // }

    const filtered = clientsData.filter((d) =>
      d.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    clientsData(filtered);
  };

  let perPage;
  let slice = [];
  let pageCount;
  if (clientsData.length > 0) {
    perPage = selectedItems;
    pageCount = Math.ceil(clientsData.length / perPage);
    slice = clientsData.slice(offset, offset + perPage);
  }
  const handleClick = (e) => {
    const selectedPage = e.selected;
    const newOffset = selectedPage * perPage;
    setOffset(newOffset);
    setCurrentPage(selectedPage);
  };

  return (
    <div className="App">
      <div className="top-content">
        {/* <div className="search-box">
          <input
            type="search"
            placeholder="Search Ibs..."
            value={search}
            onChange={(e) => onSearch(e)}
          />
          <span className="icon">
            <FaSearch className="fa" aria-hidden="true" />
          </span>
        </div> */}
        <SelectInput
          name="Records"
          placeHolder="Records per Page"
          options={records}
          selectedValue={selectedItems}
          onChange={(item) => {
            handleChange(item);
          }}
        />
      </div>
      <Table hover responsive>
        <thead className="header-row">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>CNIC</th>
            <th>Description</th>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {slice.map((d) => (
            <tr className="body-row">
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.cnic}</td>
              <td>{d.descrption}</td>
              <td>
                <Button variant="link">
                  <FaTrashAlt className="del-icon" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="bg-paginator">
        <Paginator
          pageCount={pageCount}
          pageRangeDisplayed={4}
          marginPagesDisplayed={1}
          onPageChange={handleClick}
        />
        <div className="recordbtn">Total Clients: {clientsData.length}</div>
      </div>
    </div>
  );
}
