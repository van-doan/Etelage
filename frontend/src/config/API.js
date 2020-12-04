const axios = require("axios");
const API_ENDPOINT = 'http://localhost:8000'
const USER_URL = `${API_ENDPOINT}/user`
const EXHIBIT_URL = `${API_ENDPOINT}/exhibit`
// const COMMENT_URL = `${API_ENDPOINT}/comment`

/////////////////////////////////
// U S E R   A P I   C A L L S //
/////////////////////////////////
const getUsers = () => 
  axios
    .get(`${USER_URL}`
    .then((res) => res.json())
    .catch((err) =>  {
      console.log(err)
    })
    )

const getUserById = () => 
  axios
    .get(`${USER_URL}/${id}`
    .then((res) => res.json())
    .catch((err) =>  {
      console.log(err)
    })
  )

const updateUser = (userDetails, id) => {
  return axios
  .get(`${USER_URL}/${id}`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(userDetails)
  })
  .then((res) => res.json())
}

const deleteUser = id => {
  return axios({
    method: "DELETE",

  })
}
///////////////////////////////////////
// E X H I B I T   A P I   C A L L S //
///////////////////////////////////////
const getExhibits = () => 
  axios
    .get(`${EXHIBIT_URL}`)
    .then((res) => res.json())
    .catch((err) =>  {
      console.log(err)
    })

const getExhibitById = (id) => 
  axios
    .get(`${EXHIBIT_URL}`)
    .then((res) => res.json())
    .catch((err) =>  {
      console.log(err)
    })

const newExhibit = exhibitDetails => {
  return axios({
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ 
      exhibit: exhibitDetails
    })
    .then((res) => res.json())
  })
}

const editExhibit = (exhibitDetails, id) => {
  return axios({
    method: 'PUT',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ 
      exhibit: exhibitDetails 
    })
  })
  .then((res) => res.json())
}

const deleteExhibit = (id) => {
  return axios({
    method: 'DELETE',
  })
  .then((res) => res.json())
}
// ***** FEATURE NOT READY ***** //

// const exhibitLikes = (likes) => {
//   return axios({
//       url: `${API_ENDPOINT}/exhibit_likes`, 
//       method: 'POST',
//       body: JSON.stringify({
//         likes: likes
//        })
//     })
//     .then(response);
// }

// const exhibitUnlike = id => {
//   return axios({
//     url: `${API_ENDPOINT}/exhibit_likes/${id}`, 
//     method: 'DELETE'
//   })
//   .then(response)
// }

// ***** FEATURE NOT READY ***** //

// const followUser = (followed) => {
//   return axios({
//     method: 'POST',
//     body: JSON.stringify({ following: followed })
//   })
//   .then(response)
// }

// const unfollowUser = following_id => {
//   return axios({
//     method: 'DELETE',
//   })
//   .then(response)
// }

//////////////////////////////////////
// A D D  A R T  T O  E X H I B I T //
//////////////////////////////////////
const addArtToExhibit = (artworkIds, exhibit_id) => {
  return axios({
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    url: `${API_ENDPOINT}/exhibit`,
    data: {
       artworkIds: artworkIds,
       exhibit_id: exhibit_id
    }
  })
  .then((res) => res.json())
}

////////////////////////
// E X P O R T  A L L //
////////////////////////

export default {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getExhibits,
  getExhibitById,
  newExhibit,
  editExhibit,
  deleteExhibit,
  addArtToExhibit
};


