import {
  useState
} from "react";

import {
  Card,
  CardBody,
  Row,
  Col,
  Input,
  Label,
  FormGroup
} from "reactstrap";

// import MDBDataTable from "mdb-react-ui-kit";
import MDBDataTableComponent from '../../../components/common/MDBDataTable/MDBDataTableComponent'

import AddProcurementModal from "./AddProcurementModal";

import ViewProcurementModal from "./ViewProcurementModal";

import CustomButton from "../../../components/common/Button/CustomButton";

const Procurement = () => {

  /* =========================================
     FILTER STATE
  ========================================= */

  const [search, setSearch] =
    useState("");


    const [modal, setModal] =
  useState(false);

const [viewModal, setViewModal] =
  useState(false);

const [editData, setEditData] =
  useState(null);

const [viewData, setViewData] =
  useState(null);

const [tableRows, setTableRows] =
  useState([
    {
      procurementId: "PROC-001",
      vendor: "ABC Vendor",
      breed: "Holstein",
      quantity: "1200",
      date: "2026-05-13",
      status: "Approved"
    }
  ]);



    /* ADD / UPDATE */

const handleSubmit = (values) => {

  if (editData) {

    setTableRows((prev) =>

      prev.map((item) =>

        item.procurementId ===
        editData.procurementId

          ? values

          : item
      )
    );

  } else {

    setTableRows((prev) => [
      ...prev,
      values
    ]);

  }

  setEditData(null);

};

/* DELETE */

const handleDelete = (id) => {

  setTableRows((prev) =>

    prev.filter(
      (item) =>
        item.procurementId !== id
    )
  );

};


  /* =========================================
     TABLE DATA
  ========================================= */

//   const data = {

//     columns: [

//       {
//         label: "Sl No",
//         field: "sl",
//         width: 70
//       },

//       {
//         label: "Procurement ID",
//         field: "procurementId",
//         width: 180
//       },

//       {
//         label: "Vendor Name",
//         field: "vendor",
//         width: 180
//       },

//       {
//         label: "Breed Type",
//         field: "breed",
//         width: 150
//       },

//       {
//         label: "Quantity",
//         field: "quantity",
//         width: 100
//       },

//       {
//         label: "Procurement Date",
//         field: "date",
//         width: 150
//       },

//       {
//         label: "Status",
//         field: "status",
//         width: 120
//       },

//       {
//         label: "Actions",
//         field: "action",
//         width: 180
//       }

//     ],

//     rows: [

//       {
//         sl: 1,

//         procurementId:
//           "PROC-2026-001",

//         vendor:
//           "Odisha Genetics Pvt Ltd",

//         breed:
//           "Holstein",

//         quantity:
//           "1500 Doses",

//         date:
//           "12 May 2026",

//         status:
//           <span className="status-badge success">
//             Approved
//           </span>,

//         action:
//           <div className="d-flex gap-2">

//             <CustomButton
//               text="View"
//               variant="primary"
//               icon="bi bi-eye"
//             />

//             <CustomButton
//               text="Edit"
//               variant="secondary"
//               icon="bi bi-pencil"
//             />

//           </div>
//       },

//       {
//         sl: 2,

//         procurementId:
//           "PROC-2026-002",

//         vendor:
//           "National Breed Center",

//         breed:
//           "Jersey",

//         quantity:
//           "950 Doses",

//         date:
//           "10 May 2026",

//         status:
//           <span className="status-badge warning">
//             Pending
//           </span>,

//        action: (

//         <div className="d-flex gap-2">

//             {/* VIEW */}
//             <button
//             className="btn btn-sm btn-primary"
//             onClick={() => {

//                 setViewData(Row);

//                 setViewModal(true);

//             }}
//             >

//             View

//             </button>

//             {/* EDIT */}
//             <button
//             className="btn btn-sm btn-warning"
//             onClick={() => {

//                 setEditData(Row);

//                 setModal(true);

//             }}
//             >

//             Edit

//             </button>

//             {/* DELETE */}
//             <button
//             className="btn btn-sm btn-danger"
//             onClick={() =>
//                 handleDelete(
//                 Row.procurementId
//                 )
//             }
//             >

//             Delete

//             </button>

//         </div>

//         )
//       }

//     ]

//   };

const columns = [

  {
    label: "Sl No",
    field: "sl"
  },

  {
    label: "Procurement ID",
    field: "procurementId"
  },

  {
    label: "Vendor Name",
    field: "vendor"
  },

  {
    label: "Breed Type",
    field: "breed"
  },

  {
    label: "Quantity",
    field: "quantity"
  },

  {
    label: "Date",
    field: "date"
  },

  {
    label: "Status",
    field: "status"
  },

  {
    label: "Actions",
    field: "action"
  }

];

const rows = tableRows

  .filter((item) => {

    if (!search) return true;

    return (

      item.procurementId
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )

      ||

      item.vendor
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )

    );

  })

  .map((row, index) => ({

    sl: index + 1,

    procurementId:
      row.procurementId,

    vendor:
      row.vendor,

    breed:
      row.breed,

    quantity:
      row.quantity,

    date:
      row.date,

    status: (

      <span
        className={`
          status-badge

          ${
            row.status ===
            "Approved"

              ? "success"

              : row.status ===
                "Rejected"

                ? "danger"

                : "warning"
          }
        `}
      >

        {row.status}

      </span>

    ),

    action: (

      <div className="d-flex gap-2">

        {/* VIEW */}
        <button
          className="btn btn-sm btn-primary"

          onClick={() => {

            setViewData(row);

            setViewModal(true);

          }}
        >

          <i className="bi bi-eye"></i>

        </button>

        {/* EDIT */}
        <button
          className="btn btn-sm btn-warning"

          onClick={() => {

            setEditData(row);

            setModal(true);

          }}
        >

          <i className="bi bi-pencil"></i>

        </button>

        {/* DELETE */}
        <button
          className="btn btn-sm btn-danger"

          onClick={() => {

            if (

              window.confirm(
                "Are you sure?"
              )

            ) {

              handleDelete(
                row.procurementId
              );

            }

          }}
        >

          <i className="bi bi-trash"></i>

        </button>

      </div>

    )

  }));




  return (

    <div className="procurement-page">

      {/* =========================================
          PAGE HEADER
      ========================================= */}

      <div className="page-header d-flex justify-content-between align-items-center mb-4">

        <div>

          <h3 className="fw-bold mb-1">
            Procurement Management
          </h3>

          <p className="text-muted mb-0">
            Manage procurement requests,
            vendors and inventory intake
          </p>

        </div>

        <CustomButton
          text="Add Procurement"
          variant="primary"
          icon="bi bi-plus-circle"
          onClick={() => {

            setEditData(null);

            setModal(true);

        }}
        />

      </div>

      {/* =========================================
          FILTER CARD
      ========================================= */}

      <Card className="border-0 shadow-sm mb-4">

        <CardBody>

          <Row>

            {/* SEARCH */}
            <Col lg="4" md="6">

              <FormGroup>

                <Label>
                  Search
                </Label>

                <Input
                  type="text"
                  placeholder="Search Procurement ID / Vendor"
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                />

              </FormGroup>

            </Col>

            {/* STATUS */}
            <Col lg="3" md="6">

              <FormGroup>

                <Label>
                  Status
                </Label>

                <Input type="select">

                  <option>
                    All Status
                  </option>

                  <option>
                    Approved
                  </option>

                  <option>
                    Pending
                  </option>

                  <option>
                    Rejected
                  </option>

                </Input>

              </FormGroup>

            </Col>

            {/* DATE */}
            <Col lg="3" md="6">

              <FormGroup>

                <Label>
                  Procurement Date
                </Label>

                <Input type="date" />

              </FormGroup>

            </Col>

            {/* FILTER BUTTON */}
            <Col lg="2" md="6" className="d-flex align-items-end" >
            
                <FormGroup>
                <CustomButton
                    text="Filter"
                    variant="secondary"
                    icon="bi bi-funnel"
                    fullWidth={true}
                />
                </FormGroup>
            </Col>

          </Row>

        </CardBody>

      </Card>

      {/* =========================================
          TABLE
      ========================================= */}

      <Card className="border-0 shadow-sm">

        <CardBody>

            <MDBDataTableComponent

            columns={columns}

            rows={rows}
            scrollX={true}

            // fixedLeftColumns={1}

            fixedRightColumns={1}

            // searchable={true}

            // pagination={true}

            // exportable={true}

            // columnVisibility={true}

            />

        </CardBody>

      </Card>


      <AddProcurementModal

  isOpen={modal}

  toggle={() =>
    setModal(!modal)
  }

  onSubmit={handleSubmit}

  editData={editData}

/>

<ViewProcurementModal

  isOpen={viewModal}

  toggle={() =>
    setViewModal(!viewModal)
  }

  data={viewData}

/>

    </div>
  );
};

export default Procurement;