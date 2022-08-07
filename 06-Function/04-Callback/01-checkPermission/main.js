const adminExe = () => alert("ACCESS GRANTED");
const guestExe = () => alert("ACCESS DENIED");

const checkPermission = (role, adminFunct, nonAdminFunct) =>
  role == "ADMIN" ? adminFunct() : nonAdminFunct();

let user = prompt("Enter role");

checkPermission(user, adminExe, guestExe);
