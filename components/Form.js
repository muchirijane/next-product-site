import * as React from "react"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"

const Form = () => {
    
    return (
        <Container maxWidth='md'>
            <Grid
                sx={{
                    p: '20px',
                    borderRadius: '10px',
                    border: '2px solid lightgrey',
                    "@media (max-width: 720px)": {
                        border: 'none'
                    }
                }}
                direction="column"
                container
                mt={2}
                justify="center"
                alignItems="center">
                <h1>Send a Message</h1>    
                <TextField
                    sx={{
                    mb: '30px',
                    "& .MuiFilledInput-root": { borderRadius: '50px' },
                    "& .MuiFilledInput-root::before": { borderBottom: 0 },
                    "& .MuiFilledInput-root::after": { borderBottom: 0 },
                        "& .MuiFilledInput-root:hover:not(.Mui-disabled):before": { borderBottom: 0 },
                    "& .MuiFilledInput-input": { ml: '15px' }
                    }}
                fullWidth
                hiddenLabel
                id="filled-hidden-label-normal"
                defaultValue="Your Name"
                variant="filled"
                    />  
                <TextField
                    sx={{
                    mb: '30px',
                    "& .MuiFilledInput-root": { borderRadius: '50px' },
                    "& .MuiFilledInput-root::before": { borderBottom: 0 },
                    "& .MuiFilledInput-root::after": { borderBottom: 0 },
                    "& .MuiFilledInput-root:hover:not(.Mui-disabled):before": { borderBottom: 0 },
                    "& .MuiFilledInput-input": { ml: '15px' }
                    }}
                fullWidth
                hiddenLabel
                id="filled-hidden-label-normal"
                defaultValue="Your Email"
                variant="filled"
                    />
                <TextField
                    sx={{
                    mb: '30px',
                    "& .MuiFilledInput-root::before": { borderBottom: 0 },
                    "& .MuiFilledInput-root::after": { borderBottom: 0 },
                    "& .MuiFilledInput-root:hover:not(.Mui-disabled):before": { borderBottom: 0 },
                     "& .MuiFilledInput-input": { m: '10px' }
                    }}
                fullWidth
                hiddenLabel
                multiline
                rows={6}
                id="filled-multiline-flexible"
                defaultValue="Your Message"
                variant="filled"
                />
                <Button
                    sx={{
                    p: '15px',
                    borderRadius: '50px',
                    color: '#FFF',
                    backgroundColor: '#02897A',
                    alignSelf: 'flex-start',
                    textTransform: 'none',
                    minWidth: '150px',
                    boxShadow: '2px 3px 5px lightgrey',
                        "&:hover": {
                            boxShadow: '2px 3px 5px lightgrey',
                            bgcolor: 'rgb(1, 95, 85)'
                        }
                    }}
                >Send</Button>
            </Grid> 
        </Container>
    )
}
export default Form