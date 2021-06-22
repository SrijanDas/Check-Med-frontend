import React from "react";
import ShopCard from "../../components/ShopCard";
import SearchForm from "../../components/SearchForm/SearchForm";
import Container from "@material-ui/core/Container";
import useStyles from "./HomeStyles";

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.homePage}>
      <Container maxWidth="md">
        <SearchForm />

        <h4 style={{ fontWeight: 400 }} className="mt-5">
          Medicine available here..
        </h4>
        <ShopCard inStock={30} />
        <ShopCard inStock={25} />
        <ShopCard inStock={4} />
      </Container>
    </div>
  );
}

export default Home;
