import React from "react";
import { connect } from "react-redux";
import { changeJobName } from "./redux_actions/JobDetails/JobActions";
import { changeName } from "./redux_actions/UserDetails/UserActions";

const Users1 = (props) => {
  return (
    <React.Fragment>
      <h3>Users1</h3>
      <button
        onClick={() => {
          props.changeUserName("Peter");
          props.changeJobName("Manager")
        }}
      >
        Change Details
      </button>
      <p>
        Name: {props.username}, job: {props.jobname}
      </p>
    </React.Fragment>
  );
};

const mapStateToProps = (store) => {
  return {
    username: store.user.name,
    jobname: store.job.job_name,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    changeUserName: (name) => {
      dispatch(changeName(name));
    },
    changeJobName: (name) => {
      dispatch(changeJobName(name))
    }
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(Users1);
