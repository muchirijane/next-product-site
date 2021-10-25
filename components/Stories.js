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
      banner:'/resources/post1.png'
    },
    {
      title: 'Motivation is the first step to success', 
      author:'Wahid Ari',
      date: '03 March 2019',
      banner:'/resources/post2.png'
    },
    {
      title: 'Sucessful step for your personal or business life', 
      author:'Jane Tracy',
      date: '25 March 2019',
      banner:'/resources/post3.png'
    },
    {
      title: 'How to increase your productivity',
      author:'Jane Tracy',
      date: '20 October 2021',
      banner:'/resources/post4.png'
    },
    {
      title: 'Grow your start up with 5 steps', 
      author:'Jane Tracy',
      date: '25 October 2021',
      banner:'/resources/post5.png'
    },
    {
      title: 'How to be more confident during presentation', 
      author:'Wahid Ari',
      date: '26 October 2021',
      banner:'/resources/post6.png'
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
