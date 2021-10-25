import { Typography, Grid, Box,Button, Container, Link } from "@mui/material"
import facebookIcon from '/public/resource/facebook.svg'
import instagramIcon from '/public/resource/instagram.svg'
import twitterIcon from '/public/resource/twitter.svg'
import Image from 'next/image'
export default function Social() {
  const icons =[
    {img: facebookIcon,
     alt: "facebook icon link"
    },
    {img: instagramIcon,
     alt: "instagram icon link"
    },
    {img: twitterIcon,
     alt: "twitter icon"
    },
  ]
  return (
    <Container sx={{marginTop:'4rem'}}>
      <div style={{textAlign: 'center'}}>
         <Typography variant='h4' component='h3' color='#252B42' >
      Contact Us
      </Typography>
      <Typography variant='body1'> Need more detailed information?
        <span style={{display: "block"}}>Get in touch Us</span>
        </Typography>
      </div>
      <Box  sx={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
      {icons.map((item,index)=>(
        <Link key={index} href='/' sx={{margin: '0 2rem'}}>
        <Image src={item.img} alt={item.alt}/>
        </Link>
      )) }
        
      </Box>
      

      
    </Container>
  )
}
