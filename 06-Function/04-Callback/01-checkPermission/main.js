const checkPermission = (role, adminFunct, nonAdminFunct) => role == "ADMIN" ? adminExe("ACCESS GRANTED") : guestExe("ACCESS DENIED");
const adminExe = () => alert("ACCESS GRANTED");
const guestExe = () => alert("ACCESS DENIED");

checkPermission(prompt("Enter role"), alert, alert);