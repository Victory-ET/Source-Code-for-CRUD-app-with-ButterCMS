import { React, useState, useEffect } from "react";
import { HandleCreate, HandleUpdate } from "../Api";

const CreateModal = ({ editfile }) => {
  const [Employeename, setEmployeename] = useState("");
  const [Employeeincome, setEmployeeincome] = useState("");

  useEffect(() => {
    if (editfile.length > 0) {
      setEmployeename(editfile[1]);
      setEmployeeincome(editfile[2]);
    }
  }, [editfile]);

  return (
    <div className=" h-1/2 w-3/4 bg-slate-100 shadow-lg pt-4 flex items-center flex-col">
      <p className=" text-center text-blue-500 text-2xl font-bold mb-10">
        Create new record
      </p>
      <div className="flex justify-center items-center w-4/5 flex-col gap-8">
        <input
          className="w-full border-2 border-blue-500 p-2"
          type="text"
          placeholder="Employee Name"
          value={Employeename}
          onChange={(e) => setEmployeename(e.target.value)}
        />
        <input
          className="w-full border-2 border-blue-500 p-2"
          type="number"
          placeholder="Employee Income ($)"
          value={Employeeincome}
          onChange={(e) => setEmployeeincome(e.target.value)}
        />
      </div>
      <div className=" w-4/5 flex justify-end mt-8">
        <button
          className=" bg-blue-500 text-white px-3 py-1 rounded-sm"
          onClick={() => {
            HandleCreate(Employeename, Employeeincome);
            setEmployeeincome("");
            setEmployeename("");
          }}
        >
          Create Record
        </button>

        <button
          className=" bg-blue-500 text-white px-3 py-1 rounded-sm ml-4"
          onClick={() => {
            HandleUpdate(editfile[0], Employeename, Employeeincome);
            setEmployeeincome("");
            setEmployeename("");
          }}
        >
          Update Record
        </button>
      </div>
    </div>
  );
};

export default CreateModal;
