import React, { useState } from "react";

const ParentForm = ({ handleFormSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [userCreated, setUserCreated] = useState("");
  //   const [subjects, setSubjects] = useState("");
  //   const [id, setId] = useState(true);
  const styles = {
    font: {
      fontFamily: "Special Elite, cursive",
    },
    heading: {
      paddingTop: 40,
    },
  };

  return (
    <>
      <div>
        <h1 className="title is-3 has-text-centered" style={styles.heading}>
          Create Your Tutor Hub Account
        </h1>
        <h4 className="subtitle is-6 has-text-centered">
          Already Have an Account?<a href="/signin"> Login</a>
        </h4>
      </div>
      <div className="container" style={styles.font}>
        <form
          className="col s12"
          onSubmit={(e) => {
            handleFormSubmit(e, {
              name,
              email,
              password,
              // userCreated,
              // subjects,
              // id,
            });
          }}
        >
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="Parent Name"
                id="name"
                type="text"
                //   name="title"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <label htmlFor="name"style={styles.font}>name</label>
            </div>
            <div className="input-field col s6">
              <input
                placeholder="Parent Email"
                id="email"
                type="text"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="email"style={styles.font}>email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                placeholder="Parent Password"
                id="password"
                type="text"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <label htmlFor="password"style={styles.font}>Password</label>
            </div>
          </div>
          {/* <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="User Created"
              id="userCreated"
              type="data"
              name="userCreated"
              value={userCreated}
              onChange={(e) => {
                setUserCreated(e.target.value);
              }}
            />
            <label htmlFor="userCreated">User Created</label>
          </div>
        </div> */}
          {/* <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Parent Subject"
              id="subject"
              type="text"
              name="subject"
              value={subjects}
              onChange={(e) => {
                setSubjects(e.target.value);
              }}
            />
            <label htmlFor="subject">Subject</label>
          </div>
        </div> */}
          {/* <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Parent id"
              id="id"
              type="number"
              name="id"
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <label htmlFor="id">Parent Id</label>
          </div>
          
        </div> */}
          <div className="row">
            <div className="col s12">
              <button className="waves-effect waves-light btn" style={styles.font}>
                Create New Parent Profile
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default ParentForm;