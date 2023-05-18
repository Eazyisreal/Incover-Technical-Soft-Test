import "./App.css";

import  { useEffect, useState } from 'react';

import axios from 'axios';

const Table = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const pageSize = 10;

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://apistaging.boiibonline.ng/api/VehiclePremiumPolicyHolder/GetByFirmId?FirmId=a9a4c543-f958-4bd0-8e24-41e1d0a111e0&PageNumber=${page}&PageSize=${pageSize}`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
      setData([]);
    }
  };

  const handleViewClick = async (id) => {
    try {
      const response = await axios.get(
        `https://apistaging.boiibonline.ng/api/VehiclePremiumPolicyHolder/GetRegVehiclePolicyDetailsById?Id=${id}`
      );
      const registeredVehicleInfo = response.data.RegisteredVehicleInfoModel;

      console.log(registeredVehicleInfo); // Log the response to check data

      const selectedRecord = data.find((record) => record.id === id);
      setSelectedRecord({ ...selectedRecord, registeredVehicleInfo });
    } catch (error) {
      console.log(error);
    }
  };

  const handlePreviousClick = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="p-4">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Record</th>
            <th className="py-2 px-4 border">View</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) &&
            data.map((record) => (
              <tr key={record.id}>
                <td className="py-2 px-4 border">{record.recordData}</td>
                <td className="py-2 px-4 border">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleViewClick(record.id)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center mt-4">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l"
          disabled={page === 1}
          onClick={handlePreviousClick}
        >
          Previous
        </button>
        <span className="py-2 px-4">{page}</span>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
      {selectedRecord && selectedRecord.registeredVehicleInfo && (
        <div className="mt-4">
          {selectedRecord.registeredVehicleInfo.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Registered Vehicle"
              className="w-32 h-32 object-cover mr-4 mb-4"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Table;
