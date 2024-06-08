import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useTable } from "react-table";
import Sidebar from "./AdminPannel/Dash/Sidebar";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const dt = localStorage.getItem("DKAUTH");

    if (dt) {
      const parsedDt = JSON.parse(dt);
      setToken(parsedDt.token);
    } else {
      console.log("No data found in localStorage for 'DKAUTH'");
    }
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        "http://bhartiyabiotech.ap-south-1.elasticbeanstalk.com/order/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setOrders(response.data);
      console.log(response, " order response ");
    } catch (error) {
      console.error("Failed to fetch orders:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      }
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Order ID",
        accessor: "orderId",
      },
      {
        Header: "Order Date",
        accessor: "orderDate",
        Cell: ({ value }) => new Date(value).toLocaleDateString(),
      },
      {
        Header: "Order Status",
        accessor: "orderStatus",
      },
      {
        Header: "Total Amount",
        accessor: "totalAmount",
        Cell: ({ value }) => `$${value}`,
      },
      {
        Header: "Billing Address",
        accessor: "billingAddress",
      },
      {
        Header: "Shipping Address",
        accessor: "shippingAddress",
      },
      {
        Header: "Details",
        accessor: "detailsLink",
        Cell: ({ row }) => (
          <NavLink
            to={`/order/${row.original.orderId}`}
            className="text-blue-600 hover:underline"
          >
            View Details
          </NavLink>
        ),
      },
    ],
    []
  );

  const data = React.useMemo(() => orders, [orders]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className="min-h-screen container mx-auto flex bg-gray-100">
      <div className="w-1/6 bg-white shadow-md">
        <Sidebar />
      </div>
      <div className="w-5/6 m-2 p-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">My Orders</h1>
        <h4 className="text-lg font-semibold mb-4 text-gray-700 text-end">
          Total Orders: {orders.length}
        </h4>
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table
            {...getTableProps()}
            className="min-w-full bg-white border border-gray-200"
          >
            <thead className="bg-gray-100">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b"
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody
              {...getTableBodyProps()}
              className="bg-white divide-y divide-gray-200"
            >
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className="hover:bg-gray-50">
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        className="px-6 py-4 text-sm text-gray-700"
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
