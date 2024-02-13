import React, { useEffect, useState } from "react";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosCall } from "react-icons/io";
import { MdMyLocation } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";


function Frame() {
  const [data, setdata] = useState(null)
  async function getdata() {
    const res = await fetch(`https://randomuser.me/api/?`)
    const update = await res.json()
    console.log(update)
    setdata(update)
  }
  useEffect(() => {
    getdata()
  }, [])
  return (
    <>
      <h1 className="profile">Profile details</h1>
      {
        data ? (
          <>
            <div className="main">
              <h4 className="p">Page :- {`${data.info && data.info.page}`} <br /> Version :- {`${data.info && data.info.version}`}</h4>
              <div className="frame">
                <div className="img"><img alt="user" src={`${data.results[0].picture && data.results[0].picture.large}`} /></div>
                <div className="detail">
                  <h1>First Name :- {`${data.results[0].name && data.results[0].name.title}`} {`${data.results[0].name && data.results[0].name.first}`}</h1>
                  <h1>Last Name :- {`${data.results[0].name && data.results[0].name.last}`}</h1>
                  <span>Gender :- {`${data.results[0] && data.results[0].gender}`}</span>
                  <h1 className="dob">D.O.B :- {`${data.results[0].dob && data.results[0].dob.date}`}, {`${data.results[0].dob && data.results[0].dob.age}`}</h1>
                </div>
              </div>
              <div className='page'>
                <div className="first">
                  <h6 style={{ width: "380px" }}><MdMyLocation /> :- {`${data.results[0].location.street && data.results[0].location.street.number}`}
                    , {`${data.results[0].location.street && data.results[0].location.street.name}`},
                    {`${data.results[0].location && data.results[0].location.city}`},
                    {`${data.results[0].location && data.results[0].location.state}`},
                    {`${data.results[0].location && data.results[0].location.country}`},
                    {`${data.results[0].location && data.results[0].location.postcode}`}
                    , {`${data.results[0].location.timezone && data.results[0].location.timezone.offset}`}, {`${data.results[0].location.timezone && data.results[0].location.timezone.description}`}</h6>
                  <h1 className="msg"><MdOutlineEmail /> :- {`${data.results[0] && data.results[0].email}`}</h1>
                  <span className="call"><IoIosCall /> :- {`${data.results[0] && data.results[0].phone}`}</span>
                </div>
                <div className="second">
                  <input type="text" placeholder="Write message"/>
                  <br/>
                  <button>Send</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 style={{ textAlign: "center" }}>loading...</h1>
          </>
        )
      }
    </>
  )
}
export { Frame }