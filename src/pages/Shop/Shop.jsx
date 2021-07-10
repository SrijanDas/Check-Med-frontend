import React, { useEffect } from "react";
import "./Shop.css";
import { useSelector } from "react-redux";
import { Card, CardContent, CardActions, Button } from "@material-ui/core";

import axios from "../../helpers/axios";
import { useState } from "react";
import ShopCreate from "../../components/ShopCreate/ShopCreate";

function ShopDetails() {
  const user = useSelector((state) => state.auth.user);
  const [shop, setShop] = useState({});

  useEffect(() => {
    const fetchStore = async () => {
      if (user) {
        try {
          const body = { userID: user.id };
          const res = await axios.post("get-shop/", body);
          setShop(res.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchStore();
  }, [user]);

  return (
    <div className="shop">
      {shop.length ? (
        <Card className="card">
          <CardContent>
            <h3 className="dashboard__shopName">Shop Name</h3>
            <p>Contact No: 1234567</p>
            <p>Address: NG Road, State, District, PIN-123</p>
          </CardContent>
          <CardActions>
            <Button>Go to Dashboard</Button>
            <Button>See Reports</Button>
          </CardActions>
        </Card>
      ) : (
        <ShopCreate setShop={setShop} />
      )}
    </div>
  );
}

export default ShopDetails;
