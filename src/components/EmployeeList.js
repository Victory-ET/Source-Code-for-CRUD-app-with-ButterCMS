import { React, useState, useEffect } from "react";
import { HandleFetch, HandleDelete } from "../Api";

const EmployeeList = ({ toggle }) => {
  const [list, setList] = useState([]);
  let editmode = false;

  useEffect(() => {
    const getList = async () => {
      try {
        await HandleFetch().then((data) => {
          setList(data);
        });
      } catch (err) {
        console.log(err);
      }
    };
    getList();
  }, []);

  return (
    <div className=" h-full w-full">
      <div className=" mt-14">
        <div className=" font-semibold text-2xl flex w-1/2 justify-between pl-3 mb-8">
          <p>Employee Name</p>
          <p>Income ($)</p>
        </div>
        {list &&
          list.map((item) => {
            return (
              <div className=" pl-8 w-full flex mb-4" key={item.meta.id}>
                <div className=" w-1/2 flex justify-between mr-28 pr-10">
                  <h2>{item.employee_name}</h2>
                  <h2>{item.expected_income}</h2>
                </div>
                <span>
                  <button
                    className=" bg-green-400 text-white px-3 py-1 rounded-sm mr-4"
                    onClick={() => {
                      toggle(!editmode, [item.meta.id, item.employee_name, item.expected_income]);
                      editmode = true;
                    }}
                  >
                    Edit record
                  </button>
                  <button className=" bg-red-500 text-white px-3 py-1 rounded-sm"
                  onClick={
                    () => {
                      HandleDelete(item.meta.id);
                    }
                  }
                  >
                    Delete record
                  </button>
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default EmployeeList;
