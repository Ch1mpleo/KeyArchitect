import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Container>
      <Outlet/>
    </Container>
  )
}

export default App