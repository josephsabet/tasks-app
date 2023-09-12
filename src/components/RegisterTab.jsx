import { useDispatch } from "react-redux";
import UserController from "../controllers/user-controller";
import User from "../models/user";
import SocialMediaComponent from "./SocialMediaComponents";
import { useRef } from "react";
import { authActions } from "../redux/slices/auth_slice";
export default function RegisterTab() {
  let controller = new UserController();
  let nameRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();
  let PasswordConfirmationRef = useRef();
  let dispatch = useDispatch();

  let onFormSubmitHandler = async (event) => {
    event.preventDefault();
    let response = await controller.register(user());
    if (response.status) {
      // console.log(response.message);
      localStorage.setItem("token", response.data.idToken);
      localStorage.setItem("userId", response.data.localId);
      localStorage.setItem("loggedIn", true);

      dispatch(
        authActions.setToken({
          token: response.data.idToken,
          userId: response.data.localId,
        })
      );
    }
    //  else {
    // }
    alert(response.message);
  };
  let user = () => {
    return new User(
      nameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value,
      PasswordConfirmationRef.current.value
    );
  };
  // let checkData =()=>{};
  return (
    <div
      className="tab-pane fade"
      id="pills-register"
      role="tabpanel"
      aria-labelledby="tab-register"
    >
      <form onSubmit={onFormSubmitHandler}>
        <SocialMediaComponent message="Register in Task System with" />

        <h4 className="mb-4 mt-5 text-center">or:</h4>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="registerName"
            className="form-control"
            placeholder="Name"
            ref={nameRef}
          />
        </div>

        {/* <div className="form-outline mb-4">
          <input
            type="text"
            id="registerUsername"
            className="form-control"
            placeholder="Username"
          />
        </div> */}

        <div className="form-outline mb-4">
          <input
            type="email"
            id="registerEmail"
            className="form-control"
            placeholder="Email"
            ref={emailRef}
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerPassword"
            className="form-control"
            placeholder="password"
            ref={passwordRef}
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerRepeatPassword"
            className="form-control"
            placeholder="repeat password"
            ref={PasswordConfirmationRef}
          />
        </div>

        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value
            id="registerCheck"
            // checked
            defaultChecked
            aria-describedby="registerCheckHelpText"
          />
          <label className="form-check-label" htmlFor="registerCheck">
            I have read and agree to the terms
          </label>
        </div>

        <button type="submit" className="btn btn-main btn-block mb-3">
          Sign in
        </button>
      </form>
    </div>
  );
}
