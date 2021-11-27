import React, { useState, useEffect } from "react";
import "./AdminPanel.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Tab, Tabs, Table, Button, Container, Row, Col } from "react-bootstrap";
import { FaTrashAlt, FaEdit, FaSearch } from "react-icons/fa";
import Paginator from "../Paginator/Paginator";
import SelectInput from "../SelectInput/SelectInput";
import Clients from "./Clients";
import Queries from "./Queries";
import { useCookies } from "react-cookie";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const records = ["10", "20", "30", "40", "50", "60", "70"];
export default function App() {
  const [mounted, SetMounted] = useState(false);
  const [cookies, setCookie] = useCookies(["user"]);
  const [userToken, setUserToken] = useState(cookies.token);
  const [ibsData, SetIbsData] = useState([]);
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedItems, setSelectedItems] = useState(records[0]);

  if (!mounted) {
    const requestOptions = {
      method: "GET",
      headers: {
        "x-auth-token": userToken,
        "Content-Type": "application/json",
      },
    };
    fetch("api/ibs/me", requestOptions)
      .then((res) => res.json())
      .then((d) => {
        SetIbsData(d);
      });
  }

  useEffect(() => {
    SetMounted(true);
  }, []);

  console.log(ibsData, "ibs");

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

    const filtered = ibsData.filter((d) =>
      d.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    SetIbsData(filtered);
  };

  let perPage;
  let slice = [];
  let pageCount;
  if (ibsData.length > 0) {
    perPage = selectedItems;
    pageCount = Math.ceil(ibsData.length / perPage);
    slice = ibsData.slice(offset, offset + perPage);
  }
  const handleClick = (e) => {
    const selectedPage = e.selected;
    const newOffset = selectedPage * perPage;
    setOffset(newOffset);
    setCurrentPage(selectedPage);
  };

  return (
    <div className="default-layout">
      <Header />
      <div className="container">
        <div className="App">
          <Tabs
            defaultActiveKey="ibs"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="ibs" title="Ibs">
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
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Experience</th>
                    <th>Description</th>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  {slice.map((d) => (
                    <tr className="body-row">
                      <td>{d.name}</td>
                      <td>{d.email}</td>
                      <td>{d.experience}</td>
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
                <div className="recordbtn">Total Ibs: {ibsData.length}</div>
              </div>
            </Tab>
            <Tab eventKey="clients" title="Clients">
              <Clients />
            </Tab>
            <Tab eventKey="query" title="Query">
              <Queries />
            </Tab>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
}
