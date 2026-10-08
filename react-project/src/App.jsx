import Student from "./components/student";
import StudentMarks from "./components/studentmarks";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Student
        name="Rahul"
        rollNo="101"
        course="BCA"
        college="ABC College"
      />

      <hr />

      <StudentMarks
        name="Rahul"
        subject="Java"
      />

      <hr />

      <Login />
    </div>
  );
}

export default App;