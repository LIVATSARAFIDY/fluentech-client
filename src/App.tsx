import {Container,Box,Typography,Avatar,Pagination,Stack,Skeleton} from '@mui/material'
import { useEffect, useState } from 'react';
function App() {
  const [loadingCharacters,setLodingCharacters] = useState<boolean>(true)
  useEffect(() =>{
    setTimeout(() => {
      setLodingCharacters(false)
    }, 3000);
  },[])

  return (
    <Container>
      <Box className="box-title" sx={{display:"flex",justifyContent:"center"}} >
        <Typography sx={{fontFamily:"fantasy !important",fontSize:{xs:"1em",md:"4em"}}} > The characters of the marvel world </Typography>
      </Box>
      <Box className="container-characters" sx={{
          display:"flex", flexDirection:{xs:"column",md:"row"}, border:"2px solid white",
          alignItems:"center",
          justifyContent:"center"
        }} 
      >
        {
          loadingCharacters ?(
            <>
              <Skeleton variant="circular"  sx={{bgcolor:"#2c1d2d", m:1}} ><Avatar sx={{width:200, height:200}} /></Skeleton>
              <Skeleton variant="circular"  sx={{bgcolor:"#2c1d2d", m:1}} ><Avatar sx={{width:200, height:200}} /></Skeleton>
              <Skeleton variant="circular"  sx={{bgcolor:"#2c1d2d", m:1}} ><Avatar sx={{width:200, height:200}} /></Skeleton>
              <Skeleton variant="circular"  sx={{bgcolor:"#2c1d2d", m:1}} ><Avatar sx={{width:200, height:200}} /></Skeleton>
              <Skeleton variant="circular"  sx={{bgcolor:"#2c1d2d", m:1}} ><Avatar sx={{width:200, height:200}} /></Skeleton>
            </>
          ):
          (
            <>
              <Avatar
                alt="charcter-marvel"
                src="http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg"
                sx={{ width: 200, height: 200, border:"1px solid #732380", m:1 }}
              /> 
              <Avatar
                alt="charcter-marvel"
                src="http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec.jpg"
                sx={{ width: 200, height: 200, border:"1px solid #732380", m:1 }}
              /> 
              <Avatar
                alt="charcter-marvel"
                src="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
                sx={{ width: 200, height: 200, border:"1px solid #732380", m:1 }}
              /> 
              <Avatar
                alt="charcter-marvel"
                src="http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04.jpg"
                sx={{ width: 200, height: 200, border:"1px solid #732380", m:1 }}
              /> 
              <Avatar
                alt="charcter-marvel"
                src="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
                sx={{ width: 200, height: 200, border:"1px solid #732380", m:1 }}
              />
            </>
          )
        }
      </Box>
      <Box className="pagination" sx={{display:"flex",justifyContent:"center",mt:2}} >
        <Stack spacing={2}>
          <Pagination
            count={1564} 
            variant="outlined" 
            color="secondary" 
            boundaryCount={9}
            sx={{
              '& .MuiPaginationItem-root': {
                color: 'white'
              },
            }}
          />
        </Stack>
      </Box>
    </Container>
  );
}

export default App;
