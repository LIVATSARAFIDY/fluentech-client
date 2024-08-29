import {Container,Box,Typography,Avatar,Pagination,Stack,Skeleton,Button} from '@mui/material'
import { useEffect, useState } from 'react';
import CharacterMarvelModel from './models/Character';
import CHARACTERS_100_FIRST from './mock-data';

function App() {
  const [ loadingCharacters,setLodingCharacters ] = useState<boolean>(true)
  const [ charactersToDisplay, setCharactersToDisplay ] = useState<CharacterMarvelModel[]|null>(null)
  const [ nbTotalOfCharacters, setnbTotalOfCharacters ] = useState<number>(0)
  const [ pageActive,setPageActive] = useState<number>(1)
  const [ perso,setPerso ] = useState<CharacterMarvelModel[]>(CHARACTERS_100_FIRST)

  const loadMoreCharacters = async () => {
    setLodingCharacters(true)
    
    const persoTemp = [...perso]

    try {
      const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:5000':'https://fluentech.onrender.com'
      const request = await fetch(
        `${baseUrl}/marvel/characters?nbCharacter=${perso.length}`,
        {
          method: 'GET',
          headers:{
            "Content-Type":"application/json"
          }
        }
      )
      const response = await request.json()

      persoTemp.push(...response.data as CharacterMarvelModel[])
      setnbTotalOfCharacters(persoTemp.length)
      setPerso(persoTemp)
      setLodingCharacters(false)
    } catch (error) {
      alert('error loading')
      setLodingCharacters(true)
    }
  }

  const handleChangePage = (page:number) => {
    const allCharacters = [...perso]
    const beginningIndex = ((page-1)*5)
    const charactersToDisplayTemp = allCharacters.splice(beginningIndex,5)
    setCharactersToDisplay(charactersToDisplayTemp)
    setPageActive(page)
  }

  useEffect(() =>{
    console.log('environnement', process.env.NODE_ENV)
      const allCharacters = [...perso]
      const charactersToDisplayTemp = allCharacters.splice(0,5)
      setnbTotalOfCharacters(perso.length)
      setCharactersToDisplay(charactersToDisplayTemp)
      setLodingCharacters(false)
    
  },[])

  return (
    <Container>
      <Box className="box-title" sx={{display:"flex",justifyContent:"center"}} >
        <Typography sx={{fontFamily:"fantasy !important",fontSize:{xs:"1em",md:"4em"}}} > The characters of the marvel world </Typography>
      </Box>
      <Box className="container-characters" sx={{
          display:"flex", flexDirection:{xs:"column",md:"row"},
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
                      charactersToDisplay.map( (charcter,index) => (
                        <Box key={index} >
                          <Avatar
                            alt="charcter-marvel"
                            src={charcter.imageUrl}
                            sx={{ width: 200, height: 200, border:"1px solid #732380", m:1 }}
                          />
                          <Typography sx={{textAlign:"center"}} > {charcter.name} </Typography>
                        </Box>
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
            count={Math.ceil(nbTotalOfCharacters/5)} 
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
      <Box sx={{display:"flex",justifyContent:"center",mt:2}}>
        <Button variant="outlined" sx={
          {
            color: '#732380',              
            borderColor: '#732380',        
            backgroundColor: '#2c1d2d',    
            '&:hover': {
              backgroundColor: '#2c1d2d',  
              borderColor: '#732380',      
              color: '#ffffff',            
            }
           }
          }  
          disabled={ perso.length >= 1564 && true }
          onClick={() => loadMoreCharacters()}
        >
          Load more characters
        </Button>
      </Box>
    </Container>
  );
}

export default App;
