import { useRef } from "react";
import SocialMediaComponent from "./SocialMediaComponents";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/slices/auth_slice";
import UserController from "../controllers/user-controller";
import User from "../models/user";

export default function LoginTab() {
  let controller = new UserController();
  let emailRef = useRef();
  let passwordRef = useRef();

  let navigator = useNavigate();
  let dispatch = useDispatch();

  let onFormSubmitHandler = async (event) => {
    // if (checkData()){
    //     login();
    // }
    event.preventDefault();
    let response = await controller.signIn(user());
    if (response.status) {
      localStorage.setItem("userId", response.data.idToken);
      localStorage.setItem("userId", response.data.localId);
      localStorage.setItem("loggedIn", true);

      dispatch(
        authActions.setToken({
          token: response.data.idToken,
          userId: response.data.localId,
        })
      );
      // navigator("/dashboard",{replace:true});
    }
    alert(response.message);
  };

  let user = () => {
    return new User(null, emailRef.current.value, passwordRef.current.value);
  };
  // let checkData = () => {
  //   if (emailRef.current.value != "" && passwordRef.current.value != "") {
  //     return true;
  //   }
  //   alert("enter required data");
  // };

  // let login =() =>{
  //   localStorage.setItem("loggedIn",true);
  //   dispatch(authActions.signIn());
  //   navigator("/dashboard",{replace:true});
  // };

  return (
    <div
      className="tab-pane  fade show active"
      id="pills-login"
      role="tabpanel"
      aria-labelledby="tab-login"
    >
      <form onSubmit={onFormSubmitHandler}>
        <SocialMediaComponent message="Login To Task System With" />

        <h4 className="mb-5 mt-2 text-center">or</h4>

        <div className="form-outline mb-4">
          <input
            type="email"
            id="loginName"
            ref={emailRef}
            className="form-control"
            placeholder="Email or username"
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="loginPassword"
            ref={passwordRef}
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="row mb-4">
          <div className="col-md-6 d-flex justify-content-center">
            <div className="form-check mb-3 mb-md-0">
              <input
                className="form-check-input"
                type="checkbox"
                value
                id="loginCheck"
                // checked
              />
              <label className="form-check-label" htmlFor="loginCheck">
                Remember me{" "}
              </label>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center">
            <a href="#!">Forgot password?</a>
          </div>
        </div>
        <button type="submit" className="btn btn-main btn-block mb-4">
          Log in
        </button>

        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
}
