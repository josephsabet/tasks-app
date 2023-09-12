import { useRef } from "react";
import TasksController from "../controllers/tasks-controllers";
import Task from "../models/task";
import { useDispatch, useSelector } from "react-redux";
import { tasksActions } from "../redux/slices/tasks-slice";

export default function NewTaskPage() {
  let nameRef = useRef();
  let categoryRef = useRef();
  let detailsRef = useRef();
  let startDateRef = useRef();
  let endDateRef = useRef();

  let controller = new TasksController();
  let dispatch = useDispatch();
  let userId =useSelector((state) => state.auth.userId);

  let onsubmitHandler = async (event) => {
    event.preventDefault();
    // if (checkData()){
    await createTask();
  };
  //   let checkData =()=>{
  //     if(
  //       nameRef.current.value != "" &&
  //       categoryRef.current.value != "" &&
  //       detailsRef.current.value != "" &&
  //       startDateRef.current.value != "" &&
  //       endDateRef.current.value != ""
  //     ){
  // return true;
  //     }
  //     alert('enter required data !');
  //     return false;
  //   };

  let createTask = async () => {
    let task = new Task(
      nameRef.current.value,
      categoryRef.current.value,
      detailsRef.current.value,
      startDateRef.current.value,
      endDateRef.current.value,
      userId
    );
    const response = await controller.create(task);
    if (response.status) {
      dispatch(tasksActions.create(response.data));
      clear();
    }
    alert(response.message);
  };
  let clear = () => {
    nameRef.current.value = "";
    categoryRef.current.value = "";
    detailsRef.current.value = "";
    startDateRef.current.value = "";
    endDateRef.current.value = "";
  };

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2 mt-3">Add New Task </h1>
      </div>
      <form className="row mt-5" onSubmit={onsubmitHandler}>
        <div className="col-md-12">
          <div className="form-outline mb-4">
            <label className="form-label">Task name</label>
            <input
              type="texy"
              id="loginName"
              className="form-control"
              ref={nameRef}
              placeholder="Task name"
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-outline mb-4">
            <label className="form-label">Task Category</label>
            <select
              className=" dropdown form-control pull-right"
              placeholder="Filter By status"
              ref={categoryRef}
              autoComplete="off"
            >
              <option value="">Select Category</option>
              <option value="Work">Work</option>
              <option value="Home">Home</option>
              <option value="Family">Family</option>
              <option value="Sport">Sport</option>
            </select>
          </div>
        </div>

        <div className="col-md-12">
          <label className="form-label">Task Details</label>
          <div className="form-outline mb-4">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              ref={detailsRef}
            ></textarea>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-outline mb-4">
            <label className="form-label">Start date</label>
            <input
              type="date"
              className="form-control"
              placeholder="Task name"
              ref={startDateRef}
            />
          </div>
        </div>
        <div className="col-md-6">
          <label className="form-label">End date</label>
          <div className="form-outline mb-4">
            <input
              type="date"
              className="form-control"
              placeholder="Task name"
              ref={endDateRef}
            />
          </div>
        </div>
        <div>
          <button type="submit" className="pull-right btn btn-main mb-4">
            Add New Task
          </button>
        </div>
      </form>
    </main>
  );
}
