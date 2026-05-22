import React, {
  useState
} from "react";

import {
  Card,
  CardBody
} from "reactstrap";

import MDBDataTableComponent from "../../../components/common/MDBDataTable/MDBDataTableComponent";

import ServiceHistorySummary from "../../../components/ServiceHistory/ServiceHistorySummary";

import ServiceTimelineCard from "../../../components/ServiceHistory/ServiceTimelineCard";

import ServiceHistoryFilters from "../../../components/ServiceHistory/ServiceHistoryFilters";

import ServiceHistoryStatusBadge from "../../../components/ServiceHistory/ServiceHistoryStatusBadge";

import ServiceHistoryActionButtons from "../../../components/ServiceHistory/ServiceHistoryActionButtons";

import ViewServiceHistoryModal from "../../../components/ServiceHistory/ViewServiceHistoryModal";

const ServiceHistory = () => {

  const [search, setSearch] =
    useState("");

  const [viewModal, setViewModal] =
    useState(false);

  const [viewData, setViewData] =
    useState(null);

  const tableRows = [

    {
      id: 1,
      farmerName: "Rakesh Das",
      animalTagId: "TAG-1001",
      breed: "Holstein",
      batchNumber: "HB-2201",
      serviceDate: "2026-05-20",
      status: "Successful",
      remarks: "Healthy conception"
    },

    {
      id: 2,
      farmerName: "Ajit Kumar",
      animalTagId: "TAG-1002",
      breed: "Gir",
      batchNumber: "GR-1102",
      serviceDate: "2026-05-18",
      status: "Follow-up",
      remarks: "Recheck required"
    }

  ];

  const columns = [

    {
      label: "Farmer",
      field: "farmerName"
    },

    {
      label: "Animal Tag",
      field: "animalTagId"
    },

    {
      label: "Breed",
      field: "breed"
    },

    {
      label: "Batch",
      field: "batchNumber"
    },

    {
      label: "Service Date",
      field: "serviceDate"
    },

    {
      label: "Result",
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

        item.farmerName
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

      );

    })

    .map((row) => ({

      farmerName:
        row.farmerName,

      animalTagId:
        row.animalTagId,

      breed:
        row.breed,

      batchNumber:
        row.batchNumber,

      serviceDate:
        row.serviceDate,

      status: (

        <ServiceHistoryStatusBadge
          status={row.status}
        />

      ),

      action: (

        <ServiceHistoryActionButtons

          row={row}

          onView={(row) => {

            setViewData(row);

            setViewModal(true);

          }}

        />

      )

    }));

  return (
    <React.Fragment>
        <div className="service-history-page">

          {/* HEADER */}

          <div className="page-header mb-4">

            <h3 className="fw-bold mb-1">

              AI Service History

            </h3>

            <p className="text-muted mb-0">

              View historical AI treatment and utilization records

            </p>

          </div>

          {/* SUMMARY */}

          <ServiceHistorySummary />

          {/* FILTERS */}

          <ServiceHistoryFilters

            search={search}

            setSearch={setSearch}

          />

          {/* TIMELINE */}

          <ServiceTimelineCard />

          {/* TABLE */}

          <Card className="border-0 shadow-sm">

            <CardBody>

              <MDBDataTableComponent

                columns={columns}

                rows={rows}

                searchable={true}

                pagination={true}

                exportable={true}

                columnVisibility={true}

                tableHeight="500px"

              />

            </CardBody>

          </Card>

          {/* VIEW */}

          <ViewServiceHistoryModal

            isOpen={viewModal}

            toggle={() =>
              setViewModal(!viewModal)
            }

            data={viewData}

          />

        </div>
    </React.Fragment>
  );

};

export default ServiceHistory;