export let userInfo = {
  name: localStorage.getItem("_name") || "userName",
  id: localStorage.getItem("_id") || "userId"
};
