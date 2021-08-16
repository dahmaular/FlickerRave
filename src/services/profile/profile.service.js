import axios from "axios";


export const updateRequest = (id, fname, lastname, email, phone, password) => {
  return axios({
    method: "PUT",
    url: `https://radiant-beyond-91789.herokuapp.com/api/users/${id}`,
    data: {
        firstName: fname,
        lastName: lastname,
        email,
        phoneNumber: phone,
        password,
    },
  });
};

