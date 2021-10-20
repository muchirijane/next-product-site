import * as React from "react"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import { green } from "@mui/material/colors"



const Form = () => {
    return (
        <Container maxWidth='sm'>
            <Grid direction="column" container spacing={3} mt={2} justify="center">
                <Grid
                item
                >
                <TextField
                sx={{
                "& .MuiFilledInput-root": { borderRadius: '50px' }
                }}
                fullWidth
                hiddenLabel
                id="filled-hidden-label-normal"
                defaultValue="Your Name"
                variant="filled"
                    />  
                </Grid>
                <Grid
                item
                >
                <TextField
                sx={{
                "& .MuiFilledInput-root": { borderRadius: '50px' }
                }}
                fullWidth
                hiddenLabel
                id="filled-hidden-label-normal"
                defaultValue="Your Email"
                variant="filled"
                    />
                </Grid>
                <Grid
                item
                >
                <TextField
                fullWidth
                hiddenLabel
                multiline
                rows={6}
                id="filled-multiline-flexible"
                defaultValue="Your Message"
                variant="filled"
                />
                </Grid>
                <Button
                    sx={{
                        borderRadius: '20px',
                        color: '#FFF',
                        backgroundColor: '#02897A',
                        alignSelf: 'flex-start',
                        m: '20px'
                    }}
                >Send</Button>
            </Grid>   
        </Container>
    )
}
export default Form