import axios from "axios";

export const loginRequest = (email, password) => {
  return axios({
    method: "post",
    url: "https://radiant-beyond-91789.herokuapp.com/api/auth",
    data: {
      email,
      password,
    },
  });
};

export const currentUser = async (token) => {
  return axios({
    method: "GET",
    url: "https://radiant-beyond-91789.herokuapp.com/api/users/me",
    headers: {
      "x-auth-token": token,
    },
  });
};

export const registerRequest = (email, password, fname, lname, phone) => {
  return axios({
    method: "POST",
    url: "https://radiant-beyond-91789.herokuapp.com/api/users",
    data: {
      firstName: fname,
      lastName: lname,
      email,
      phoneNumber: phone,
      password,
    },
  });
};