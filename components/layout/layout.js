
import { makeStyles } from '@mui/styles';

import Meta from '../meta'
import Navbar from '../Navbar'
import Footer from '../Footer'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#fff',
    color: '#22343D',
    padding: '0 50px',
  }
})


export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <>
      <Meta />



      <Navbar />

      <div className={classes.wrapper}>

        {children}





      </div>
      <Footer />




    </>


  )
}