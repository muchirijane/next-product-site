import Container from "@mui/material/Container"
import { Grid,Typography } from "@mui/material"
import { Card ,CardMedia} from "@mui/material"
import CardContent from "@mui/material/CardContent"
import { blue, red, orange, green, lightGreen, grey } from "@mui/material/colors"


const StoryCard = ({title, author, banner, date}) => {
  return (
    <Grid style={{ margin: "auto", marginTop: "70px", display: "flex" }}>
      <Card
        sx={{ maxWidth: 200 }}
        style={{ margin: "auto", borderColor: "#f5f5f5", minWidth: "350px" }}
      >
        <CardMedia
          style={{height: 150}}
          image={banner}
          title={title}
        />
        <CardContent>
          <Typography padding='20px 0'  variant="body1" color="text.secondary">
              By <b>{author}</b> | {date}
              </Typography>
              <Typography fontWeight="800" gutterBottom variant="h5" component="div">
              {title}
            </Typography>        
          </CardContent>
      </Card>
    </Grid>
  )
}

export default StoryCard
