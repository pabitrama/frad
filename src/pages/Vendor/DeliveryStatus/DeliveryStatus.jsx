import React, {
  useState
} from "react";

import {
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

import DeliveryTrackingFilters from "../../../components/DeliveryStatus/DeliveryTrackingFilters";

import DeliveryProgressTimeline from "../../../components/DeliveryStatus/DeliveryProgressTimeline";

import ShipmentTrackingCard from "../../../components/DeliveryStatus/ShipmentTrackingCard";

import DeliveryMonitoringTable from "../../../components/DeliveryStatus/DeliveryMonitoringTable";

import DelayAlertPanel from "../../../components/DeliveryStatus/DelayAlertPanel";

const DeliveryStatus = () => {

  const [search, setSearch] =
    useState("");

  const shipments = [

    {
      trackingId: "TRK-1001",
      destination: "Khordha",
      batch: "HB-2201",
      breed: "Holstein",
      quantity: 120,
      eta: "22 May 2026",
      dispatchDate: "19 May 2026",
      status: "In Transit"
    },

    {
      trackingId: "TRK-1002",
      destination: "Cuttack",
      batch: "GR-1180",
      breed: "Gir",
      quantity: 90,
      eta: "23 May 2026",
      dispatchDate: "20 May 2026",
      status: "Delivered"
    }

  ];

  const filteredRows = shipments.filter(
    (item) => {

      if (!search) return true;

      return (

        item.trackingId
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

      );

    }
  );

  return (
    <React.Fragment>
        <div className="delivery-status-page">

        {/* HEADER */}

        <div className="page-header mb-4">

            <h3 className="fw-bold mb-1">

            Delivery Status Tracking

            </h3>

            <p className="text-muted mb-0">

            Monitor shipment delivery lifecycle and tracking progress

            </p>

        </div>

        {/* FILTERS */}

        <DeliveryTrackingFilters

            search={search}

            setSearch={setSearch}

        />

        {/* TIMELINE */}

        <DeliveryProgressTimeline />

        {/* ALERT */}

        <DelayAlertPanel />

        {/* TRACKING CARDS */}

        <Row className="mb-4">

            {filteredRows.map(
            (item, index) => (

                <Col
                lg="4"
                key={index}
                className="mb-4"
                >

                <ShipmentTrackingCard
                    item={item}
                />

                </Col>

            )
            )}

        </Row>

        {/* MONITORING TABLE */}

        <Card className="border-0 shadow-sm">

            <CardBody>

            <h5 className="fw-bold mb-3">

                Shipment Monitoring

            </h5>

            <DeliveryMonitoringTable
                rows={filteredRows}
            />

            </CardBody>

        </Card>

        </div>
    </React.Fragment>

  );

};

export default DeliveryStatus;