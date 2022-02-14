import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";

const cards = [
  {
    image:
      "https://images.unsplash.com/photo-1586861256632-f273baec5254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGl6YXJkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    heading: "Lizard",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    image:
      "https://images.unsplash.com/photo-1526095179574-86e545346ae6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8emVicmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    heading: "Zebra",
    body: "Zebras are African equines with distinctive black-and-white striped coats. There are three living species: the Grévy's zebra, plains zebra, and the mountain zebra",
  },
  {
    image:
      "https://images.unsplash.com/photo-1618752362049-bcc57fb5ddb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2NvcnBpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    heading: "Scorpion",
    body: "Scorpions are predatory arachnids of the order Scorpiones. They have eight legs, and are easily recognized by a pair of grasping pincers",
  },
  {
    image:
      "https://images.unsplash.com/photo-1528158222524-d4d912d2e208?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c25ha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    heading: "Snake",
    body: "Snakes are elongated, limbless, carnivorous reptiles of the suborder Serpentes. Like all other squamates, snakes are ectothermic, amniote vertebrates covered in overlapping scales",
  },
  {
    image:
      "https://images.unsplash.com/photo-1598113972215-96c018fb1a0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    heading: "Camel",
    body: "A camel is an even-toed ungulate in the genus Camelus that bears distinctive fatty deposits known as 'humps' on its back",
  },
];

const Feed = () => {
  return (
    <Grid
      item
      xs={10.5}
      sm={10}
      md={7}
      sx={{
        p: 3,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, 345px)",
        justifyContent: "center",
        gridGap: 30,
      }}
    >
      {cards.map((card) => {
        return (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component='img'
              height='140'
              image={card.image}
              alt='green iguana'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {card.heading}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {card.body}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Share</Button>
              <Button size='small'>Learn More</Button>
            </CardActions>
          </Card>
        );
      })}
    </Grid>
  );
};

export default Feed;
