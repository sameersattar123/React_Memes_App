import { Card, Grid ,styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getMemes } from "../Services/Api";

const StyledCard = styled(Card)({
    '&:hover': {
        transform: 'scale(1.5)',
        borderRadius: 0,
        height: 200
    }
})

const Memes = () => {
  const [memes, setMemes] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await getMemes();
      setMemes(response.data.children);
    };
    getData();
  }, []);
  return (
    <>
      <Grid container margin={3}>
        {memes.map((meme) => (
          <Grid item xs={2}>
          <StyledCard>
           <img src={meme.data.url} alt="" style={{ height: 200 }} />
          </StyledCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Memes;
