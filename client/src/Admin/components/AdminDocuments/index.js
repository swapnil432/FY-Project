import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { styled, Button, Container } from '@mui/material';
import Title from '../Title';
const AdminDocuments = ({}) => {
  return (
    <>
    <Title>Users Documents</Title>
    <div style={{ width: '100%', marginTop: '1rem' }}>
      <Box
        display="flex"
        component="span"
        
        sx={{
          height:'5.5rem',  
          display: 'block',
          p: 1,
          m: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
        }}
      >
          <Typography variant="h6" sx={{marginLeft:"5rem",marginTop:'1rem'}}>
            AadharCard
          </Typography>
          <Button  variant="contained" sx={{ paddingLeft: '3rem', marginTop:'-1.5rem', float:'right', paddingRight: '3rem',}}>
              Download Document
          </Button>
      </Box>
      <Box
        display="flex"
        component="span"
        
        sx={{
          height:'5.5rem',  
          display: 'block',
          p: 1,
          m: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
        }}
      >
          <Typography variant="h6" sx={{marginLeft:"5rem",marginTop:'1rem'}}>
            AadharCard
          </Typography>
          <Button  variant="contained" sx={{ paddingLeft: '3rem', marginTop:'-1.5rem', float:'right', paddingRight: '3rem',}}>
              Download Document
          </Button>
      </Box>
      <Box
        display="flex"
        component="span"
        
        sx={{
          height:'5.5rem',  
          display: 'block',
          p: 1,
          m: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
        }}
      >
          <Typography variant="h6" sx={{marginLeft:"5rem",marginTop:'1rem'}}>
            PanCard
          </Typography>
          <Button  variant="contained" sx={{ paddingLeft: '3rem', marginTop:'-1.5rem', float:'right', paddingRight: '3rem',}}>
              Download Document
          </Button>
      </Box>
      <Box
        display="flex"
        component="span"
        
        sx={{
          height:'5.5rem',  
          display: 'block',
          p: 1,
          m: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
        }}
      >
          <Typography variant="h6" sx={{marginLeft:"5rem",marginTop:'1rem'}}>
            Residence Certificate
          </Typography>
          <Button  variant="contained" sx={{ paddingLeft: '3rem', marginTop:'-1.5rem', float:'right', paddingRight: '3rem',}}>
              Download Document
          </Button>
      </Box>
      <Box
        display="flex"
        component="span"
        
        sx={{
          height:'5.5rem',  
          display: 'block',
          p: 1,
          m: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
        }}
      >
          <Typography variant="h6" sx={{marginLeft:"5rem",marginTop:'1rem'}}>
            Election Card
          </Typography>
          <Button  variant="contained" sx={{ paddingLeft: '3rem', marginTop:'-1.5rem', float:'right', paddingRight: '3rem',}}>
              Download Document
          </Button>
      </Box>

    </div>

      


      
    

    </>
  )
}

export default AdminDocuments