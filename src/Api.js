import React from "react";
import axios from "axios";

const read_token = process.env.REACT_APP_READ_TOKEN;
const write_token = process.env.REACT_APP_WRITE_TOKEN;

export const HandleFetch = async () => {
  const url = `https://api.buttercms.com/v2/content/payroll_system/?auth_token=${read_token}`;
  return axios.get(url).then((res) => {
    return res.data.data.payroll_system;
  });
};

export const HandleCreate = async (name, income) => {
  try {
    return axios
      .post(
        "https://api.buttercms.com/v2/content/",
        {
          key: "payroll_system",
          status: "published",
          fields: [
            {
              employee_name: name,
              expected_income: income,
            },
          ],
        },
        {
          headers: {
            Authorization: `Token ${write_token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((json) => {
        return json.data;
      });
  } catch (err) {
    console.log(err);
  }
};

export const HandleUpdate = async (id, name, income) => {
  try {
    return axios
      .put(
        `https://api.buttercms.com/v2/content/payroll_system/${id}`,
        {
          status: "published",
          fields: [
            {
              employee_name: name,
              expected_income: income,
            },
          ],
        },
        {
          headers: {
            Authorization: `Token ${write_token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((json) => {
        return json.data;
      });
  } catch (err) {
    console.log(err);
  }
}

export const HandleDelete = async (id) => {
  try {
    return axios
      .delete(`https://api.buttercms.com/v2/content/payroll_system/${id}`, {
        headers: {
          Authorization: `Token ${write_token}`,
          "Content-Type": "application/json",
        },
      })
      .then((json) => {
        return json.data;
      });
  } catch (err) {
    console.log(err);
  }
}
