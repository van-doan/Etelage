const axios = require("axios");
const API_ENDPOINT = 'http://localhost:8000/api'
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

const getUserById = async (id) => 
  {
    let res = await axios
    .get(`${USER_URL}/${id}`) 
    return res.data;
  }
  

const updateUser = async (userDetails, id) => {
  let res = await axios
  .put(`${USER_URL}/${id}`, userDetails)
  return res.data;
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

const getExhibitById = async (id) => 
  {
    let res = await axios
    .get(`{${EXHIBIT_URL}/${id}`)
    return res.data;
  }

const newExhibit = async exhibitDetails => {
  let res = await axios
    .post(`${EXHIBIT_URL}`, exhibitDetails);
    return res.data;
}

const editExhibit = async (exhibitDetails, id) => {
  let res = await axios
  .put(`${EXHIBIT_URL}/${id}`, exhibitDetails)
  return res.data;
}

const deleteExhibit = async (id) => {
  let res = await axios
  .delete(`${EXHIBIT_URL}/${id}`)
  return res("Exhibit has been deleted")
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


