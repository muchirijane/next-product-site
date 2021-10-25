import StoryCard from "./StoryCard"
import { Grid, Typography, Box } from "@mui/material"
import { Card } from "@mui/material"
import CardContent from "@mui/material/CardContent"

export default function Customers() {
  
  const stories =[
    {
      title: 'Increasing Prosperity with Positive Thinking 1',
      author:'Wahid Ari',
      date: '03 March 2019',
      banner:'/resources/story-demo-banner.jpeg'
    },
    {
      title: 'Increasing Prosperity with Positive Thinking 2', 
      author:'Wahid Ari',
      date: '03 March 2019',
      banner:'/resources/story-demo-banner.jpeg'
    },
    {
      title: 'Increasing Prosperity with Positive Thinking 3', 
      author:'Wahid Ari',
      date: '03 March 2019',
      banner:'/resources/story-demo-banner.jpeg'
    }
  ]
  return (
    <>
    
      <Typography
        style={{ textAlign: "center", marginTop: "3rem" }}
        variant="h3"
        fontWeight="800"
      >
        Latest stories
      </Typography>
      <Typography
        style={{ textAlign: "center" , marginTop: ".5rem"}}
        fontWeight="3"
      >
        {"We focus on ergonomics and meeting you where you work. It's only a keystroke away"}
      </Typography>
      
      <Grid container>
        {stories.map((story, index)=>
          <StoryCard
            key={index}
            title={story.title}
            author={story.author}
            date={story.date}
            banner={story.banner}
          />
        )}
      </Grid>
    </>
  )
}
