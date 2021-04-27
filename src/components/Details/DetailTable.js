import React from "react";
import PropTypes from "prop-types";
import { Table } from "antd";

const columns = [
  {
    title: "Event",
    key: ["Event", "c_Name"],
    render: (data) => (
      <span>
        {data.Event.c_Name} {data.Gender.c_Name}
      </span>
    ),
  },
  {
    title: "Participant",
    dataIndex: ["Participant", "c_Participant"],
    key: ["Participant", "c_Participant"],
  },
];

const DetailTable = ({ data }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey={(record) => record.n_EventPhaseID}
    />
  );
};

DetailTable.propTypes = {
  data: PropTypes.array.isRequired,
};
export default DetailTable;
