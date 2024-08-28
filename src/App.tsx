import {Container,Box,Typography,Avatar} from '@mui/material'
function App() {
  return (
    <Container>
      <Box className="box-title" >
        <Typography> Consumer MARVEL API </Typography>
      </Box>
      <Box className="container-characters" sx={{display:"flex", border:"2px solid white",justifyContent:"center"}} >
        
        <Avatar
          alt="charcter-marvel"
          src="/images/defaultAvatar.png"
          sx={{ width: 200, height: 200, border:"1px solid red" }}
        /> 
        <Avatar
          alt="charcter-marvel"
          src="/images/defaultAvatar.png"
          sx={{ width: 200, height: 200, border:"1px solid red" }}
        /> 
        <Avatar
          alt="charcter-marvel"
          src="/images/defaultAvatar.png"
          sx={{ width: 200, height: 200, border:"1px solid red" }}
        /> 
        <Avatar
          alt="charcter-marvel"
          src="/images/defaultAvatar.png"
          sx={{ width: 200, height: 200, border:"1px solid red" }}
        /> 
        <Avatar
          alt="charcter-marvel"
          src="/images/defaultAvatar.png"
          sx={{ width: 200, height: 200, border:"1px solid red" }}
        /> 
      </Box>
    </Container>
  );
}

export default App;
