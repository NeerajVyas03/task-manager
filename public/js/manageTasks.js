import { showAlert } from "./alert.js";

export const addTask = async (data) => {
  try {
    console.log(data);
    const res = await axios({
      method: "POST",
      url: `/api/tasks`,
      data: data,
    });
    if (res.data.status === "success") {
      showAlert("success", "Added successfully");
      window.setTimeout(() => {
        location.assign("/");
      }, 1000);
    }
  } catch (err) {
    console.log(err);
  }
};

export const editTask = async (data) => {
  try {
    const res = await axios({
      method: "PATCH",
      url: `/api/tasks`,
      data: data,
    });
    if (res.data.status === "success") {
      showAlert("success", "Updated successfully");
      window.setTimeout(() => {
        location.assign("/");
      }, 1000);
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteTask = async (id) => {
  try {
    const res = await axios({
      method: "DELETE",
      url: `/api/tasks/${id}`,
      data: id,
    });
    if (res.data.status === "success") {
      showAlert("success", "Deleted successfully");
      window.setTimeout(() => {
        location.assign("/");
      }, 1000);
    }
  } catch (err) {
    console.log(err);
  }
};

export const completeTask = async (id) => {
  try {
    const res = await axios({
      method: "PATCH",
      url: `/api/tasks/${id}`,
      data: id,
    });
    if (res.data.status === "success") {
      showAlert("success", "Completed successfully");
      window.setTimeout(() => {
        location.assign("/");
      }, 1000);
    }
  } catch (err) {
    console.log(err);
  }
};
