import {
  useState,
  useMemo
} from "react";

import {
  MDBTable,
  MDBTableHead,
  MDBTableBody
} from "mdb-react-ui-kit";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Button
} from "reactstrap";

import './mdb-datatable.css'

/* =========================================
   MAIN COMPONENT
========================================= */

const MDBDataTableComponent = ({

  columns = [],
  rows = [],

  tableHeight = "500px",

  fixedLeftColumns = 0,
  fixedRightColumns = 0,

  searchable = true,
  pagination = true,
  entries = true,
  exportable = true,
  columnVisibility = true,

  bordered = true,
  striped = true,
  hover = true,

  loading = false,

  noDataText = "No Data Available",

  tableId = "mdb-datatable"

}) => {

  /* =========================================
     STATES
  ========================================= */

  const [searchText, setSearchText] =
    useState("");

  const [currentPage, setCurrentPage] =
    useState(1);

  const [entriesPerPage, setEntriesPerPage] =
    useState(10);

  const [columnDropdown, setColumnDropdown] =
    useState(false);

  const [visibleColumns, setVisibleColumns] =
    useState(
      columns.reduce((acc, col) => {

        acc[col.field] = true;

        return acc;

      }, {})
    );

  /* =========================================
     FILTERED COLUMNS
  ========================================= */

  const filteredColumns =
    columns.filter(
      (col) => visibleColumns[col.field]
    );

  /* =========================================
     SEARCH FILTER
  ========================================= */

  const filteredRows = useMemo(() => {

    if (!searchText) return rows;

    return rows.filter((row) =>

      filteredColumns.some((col) =>

        String(
          row[col.field] || ""
        )
          .toLowerCase()
          .includes(
            searchText.toLowerCase()
          )

      )

    );

  }, [
    searchText,
    rows,
    filteredColumns
  ]);

  /* =========================================
     PAGINATION
  ========================================= */

  const totalPages =
    Math.ceil(
      filteredRows.length /
      entriesPerPage
    );

  const paginatedRows =
    pagination
      ? filteredRows.slice(
          (currentPage - 1) *
            entriesPerPage,

          currentPage *
            entriesPerPage
        )
      : filteredRows;

  /* =========================================
     COLUMN TOGGLE
  ========================================= */

  const handleColumnToggle = (
    field
  ) => {

    setVisibleColumns((prev) => ({
      ...prev,
      [field]: !prev[field]
    }));

  };

  /* =========================================
     EXPORT CSV
  ========================================= */

  const exportCSV = () => {

    const csvRows = [];

    const headers =
      filteredColumns.map(
        (col) => col.label
      );

    csvRows.push(headers.join(","));

    filteredRows.forEach((row) => {

      const values =
        filteredColumns.map(
          (col) =>
            `"${row[col.field] || ""}"`
        );

      csvRows.push(values.join(","));

    });

    const blob = new Blob(
      [csvRows.join("\n")],
      {
        type: "text/csv"
      }
    );

    const url =
      window.URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;

    a.download =
      "datatable-export.csv";

    a.click();

  };



  /* =========================================
   PRINT TABLE
========================================= */

const handlePrint = () => {

  const printContents =
    document.getElementById(
      tableId
    ).innerHTML;

  const printWindow =
    window.open(
      "",
      "",
      "width=1200,height=800"
    );

  printWindow.document.write(`

    <html>

      <head>

        <title>
          Print Table
        </title>

        <style>

          body {

            font-family:
              Arial,
              sans-serif;

            padding: 20px;
          }

          table {

            width: 100%;

            border-collapse:
              collapse;
          }

          th,
          td {

            border:
              1px solid #ccc;

            padding: 10px;

            text-align: left;

            font-size: 13px;
          }

          th {

            background:
              #1e3a8a;

            color:
              white;
          }

        </style>

      </head>

      <body>

        <h2>
          Data Table Report
        </h2>

        ${printContents}

      </body>

    </html>

  `);

  printWindow.document.close();

  printWindow.focus();

  setTimeout(() => {

    printWindow.print();

  }, 500);

};

  return (

    <div className="mdb-datatable-wrapper">

      {/* =========================================
          TOPBAR
      ========================================= */}

      <div className="datatable-topbar">

        {/* ENTRIES */}
        {entries && (

          <div className="entries-box">

            <span>
              Show
            </span>

            <Input
              type="select"
              value={entriesPerPage}
              onChange={(e) =>
                setEntriesPerPage(
                  Number(e.target.value)
                )
              }
            >

              <option value="10">
                10
              </option>

              <option value="25">
                25
              </option>

              <option value="50">
                50
              </option>

              <option value="100">
                100
              </option>

            </Input>

            <span>
              Entries
            </span>

          </div>

        )}

        <div className="datatable-actions">

          {/* SEARCH */}
          {searchable && (

            <Input
              type="text"
              placeholder="Search..."
              className="datatable-search"
              value={searchText}
              onChange={(e) =>
                setSearchText(
                  e.target.value
                )
              }
            />

          )}

          {/* COLUMN VISIBILITY */}
          {columnVisibility && (

            <Dropdown
              isOpen={columnDropdown}
              toggle={() =>
                setColumnDropdown(
                  !columnDropdown
                )
              }
            >

              <DropdownToggle
                caret
                color="secondary"
              >

                Columns

              </DropdownToggle>

              <DropdownMenu>

                {columns.map((col) => (

                  <DropdownItem
                    key={col.field}
                    toggle={false}
                  >

                    <Input
                      type="checkbox"
                      checked={
                        visibleColumns[
                          col.field
                        ]
                      }
                      onChange={() =>
                        handleColumnToggle(
                          col.field
                        )
                      }
                    />

                    {" "}
                    {col.label}

                  </DropdownItem>

                ))}

              </DropdownMenu>

            </Dropdown>

          )}

          {/* EXPORT */}
          {exportable && (
            <>
              <Button
                color="success"
                onClick={exportCSV}
              >

                Export CSV

              </Button>
              <Button
                color="dark"
                onClick={handlePrint}
              >
                Print
              </Button>
            </>
          )}

        </div>

      </div>

      {/* =========================================
          TABLE
      ========================================= */}

      <div
        className="datatable-scroll"
        style={{
          maxHeight: tableHeight
        }}
      >

        <MDBTable
          bordered={bordered}
          striped={striped}
          hover={hover}
          responsive
          className="custom-mdb-table"
        >

          {/* =========================================
              THEAD
          ========================================= */}

          <MDBTableHead>

            <tr>

              {filteredColumns.map(
                (col, index) => (

                  <th
                    key={index}

                    className={`
                      ${
                        index <
                        fixedLeftColumns
                          ? "fixed-left"
                          : ""
                      }

                      ${
                        index >=
                        filteredColumns.length -
                          fixedRightColumns
                          ? "fixed-right"
                          : ""
                      }
                    `}
                  >

                    {col.label}

                  </th>

                )
              )}

            </tr>

          </MDBTableHead>

          {/* =========================================
              TBODY
          ========================================= */}

          <MDBTableBody>

            {!loading &&
            paginatedRows.length > 0 ? (

              paginatedRows.map(
                (row, rowIndex) => (

                  <tr key={rowIndex}>

                    {filteredColumns.map(
                      (
                        col,
                        colIndex
                      ) => (

                        <td
                          key={colIndex}

                          className={`
                            ${
                              colIndex <
                              fixedLeftColumns
                                ? "fixed-left"
                                : ""
                            }

                            ${
                              colIndex >=
                              filteredColumns.length -
                                fixedRightColumns
                                ? "fixed-right"
                                : ""
                            }
                          `}
                        >

                          {
                            row[
                              col.field
                            ]
                          }

                        </td>

                      )
                    )}

                  </tr>

                )
              )

            ) : (

              <tr>

                <td
                  colSpan={
                    filteredColumns.length
                  }
                  className="text-center py-5"
                >

                  {loading
                    ? "Loading..."
                    : noDataText}

                </td>

              </tr>

            )}

          </MDBTableBody>

        </MDBTable>

      </div>

      {/* =========================================
          FOOTER
      ========================================= */}

      <div className="datatable-footer">

        <div>

          Showing
          {" "}
          <strong>
            {
              paginatedRows.length
            }
          </strong>
          {" "}
          of
          {" "}
          <strong>
            {
              filteredRows.length
            }
          </strong>
          {" "}
          entries

        </div>

        {/* PAGINATION */}
        {pagination && (

          <div className="pagination-box">

            <Button
              disabled={
                currentPage === 1
              }
              onClick={() =>
                setCurrentPage(
                  currentPage - 1
                )
              }
            >

              Prev

            </Button>

            <span>

              Page
              {" "}
              {currentPage}
              {" "}
              of
              {" "}
              {totalPages}

            </span>

            <Button
              disabled={
                currentPage ===
                totalPages
              }
              onClick={() =>
                setCurrentPage(
                  currentPage + 1
                )
              }
            >

              Next

            </Button>

          </div>

        )}

      </div>

    </div>

  );

};

export default MDBDataTableComponent;