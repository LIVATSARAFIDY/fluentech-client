import {Container,Box,Typography,Avatar,Pagination,Stack,Skeleton} from '@mui/material'
import { useEffect, useState } from 'react';
import CharacterMarvelModel from './models/Character';
import CHARACTERS from './mock-data';

function App() {
  const [ loadingCharacters,setLodingCharacters ] = useState<boolean>(true)
  const [ charactersToDisplay, setCharactersToDisplay ] = useState<CharacterMarvelModel[]|null>(null)
  const [ nbTotalOfCharacters, setnbTotalOfCharacters ] = useState<number>(0)
  const [pageActive,setPageActive] = useState<number>(1)

  const handleChangePage = (page:number) => {
    const allCharacters = [...CHARACTERS]
    const beginningIndex = ((page-1)*5)
    const charactersToDisplayTemp = allCharacters.splice(beginningIndex,5)
    setCharactersToDisplay(charactersToDisplayTemp)
    setPageActive(page)
  }

  useEffect(() =>{
    setTimeout(() => {
      const allCharacters = [...CHARACTERS]
      const charactersToDisplayTemp = allCharacters.splice(0,5)
      setnbTotalOfCharacters(CHARACTERS.length)
      setCharactersToDisplay(charactersToDisplayTemp)
      setLodingCharacters(false)
    }, 1000);
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
              {
                (charactersToDisplay !== null && charactersToDisplay.length > 0) && (
                  <>
                    {
                      charactersToDisplay.map( charcter => (
                        <Avatar
                          alt="charcter-marvel"
                          src={charcter.imageUrl}
                          sx={{ width: 200, height: 200, border:"1px solid #732380", m:1 }}
                        />
                      ) ) 
                    }
                  </>
                ) 
              }
            </>
          )
        }
      </Box>
      <Box className="pagination" sx={{display:"flex",justifyContent:"center",mt:2}} >
        <Stack spacing={2}>
          <Pagination
            // count={1564/5} 
            count={nbTotalOfCharacters/5} 
            variant="outlined" 
            color="secondary" 
            boundaryCount={9}
            sx={{
              '& .MuiPaginationItem-root': {
                color: 'white'
              },
            }}
            onChange={(e,page) => handleChangePage(page)}
          />
        </Stack>
      </Box>
    </Container>
  );
}

export default App;
