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
    .then(function (response) {
      console.log(response);
      })
    .catcch(function (error) {
      console.log(error)
      })
    )

const getUserById = () => 
  axios
    .get(`${USER_URL}/${id}`
    .then(function (response) {
      console.log(response);
    })
    .catcch(function (error) {
      console.log(error)
    })
  )

const updateUser = (userDetails, id) => {
  return axios
  .get(`${USER_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(userDetails)
  })
  .then(response)
}
///////////////////////////////////////
// E X H I B I T   A P I   C A L L S //
///////////////////////////////////////
const getExhibits = () => 
  axios
    .get(`${EXHIBIT_URL}`)
    .then(function (response) {
      console.log(response);
      })
    .catcch(function (error) {
      console.log(error)
    })

const getExhibitById = (id) => 
  axios
    .get(`${EXHIBIT_URL}`)
    .then(function (response) {
      console.log(response);
      })
    .catcch(function (error) {
      console.log(error)
    })

const newExhibit = exhibitDetails => {
  return axios({
    method: 'POST',
    body: JSON.stringify({ 
      exhibit: exhibitDetails
    })
    .then(response)
  })
}

const editExhibit = (exhibitDetails, id) => {
  return axios({
    method: 'PUT',
    body: JSON.stringify({ 
      exhibit: exhibitDetails 
    })
  })
  .then(response);
}

const deleteExhibit = (id) => {
  return axios({
    method: 'DELETE',
  })
  .then(response);
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
    url: `${API_ENDPOINT}/exhibit`,
    data: {
       artworkIds: artworkIds,
       exhibit_id: exhibit_id
    }
  })
}

////////////////////////
// E X P O R T  A L L //
////////////////////////

export default {
  getUsers,
  getUserById,
  updateUser,
  getExhibits,
  getExhibitById,
  newExhibit,
  editExhibit,
  deleteExhibit,
  addArtToExhibit
};


