import React from "react";
import ShopCard from "../components/ShopCard";
import SearchForm from "../components/SearchForm";
// import UserLocationCard from "../components/UserLocationCard";

function Home() {
  return (
    <div>
      <SearchForm />

      {/* <UserLocationCard /> */}

      <h4 style={{ fontWeight: 400 }} className="mt-5">
        Medicine available here..
      </h4>
      <ShopCard inStock={30} />
      <ShopCard inStock={25} />
      <ShopCard inStock={4} />
    </div>
  );
}

export default Home;
