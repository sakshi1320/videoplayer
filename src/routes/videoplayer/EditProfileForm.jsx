import { TextField } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

export function EditProfileForm() {
  return (
    <div className="container-fluid edit-box">
      <div>
        <nav className="nav">
          <h4>Edit Profile</h4>
        </nav>
      </div>
      <div className="editInput">
        <TextField
          id="outlined-basic"
          label="First Name"
          name="FirstName"
          varient="outlined"
          size="small"
          sx={{ width: "40ch" }}
        ></TextField>
      </div>
      <div className="editInput">
        <TextField
          id="outlined-basic"
          label="Last Name"
          //   name="FirstName"
          varient="outlined"
          size="small"
          sx={{ width: "40ch" }}
        ></TextField>
      </div>
      <div className="editInput">
        <TextField
          id="outlined-basic"
          label="Email Address"
          type="email"
          //   name="FirstName"
          varient="outlined"
          size="small"
          sx={{ width: "40ch" }}
        ></TextField>
      </div>
      <div className="editInput">
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          //   name="FirstName"
          varient="outlined"
          size="small"
          sx={{ width: "40ch" }}
        ></TextField>
      </div>
      <div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}
