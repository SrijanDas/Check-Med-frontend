import { Button, Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import axios from "../helpers/axios";
import { useDispatch, useSelector } from "react-redux";
import { loadingStart, loadingSuccess } from "../store/actions/loadingActions";
import { deleteShop } from "../store/actions/shopActions";

function DeleteShop(props) {
  const shop = useSelector((state) => state.shop.shop);
  const dispatch = useDispatch();

  const handleDelete = async () => {
    dispatch(loadingStart());
    try {
      const res = await axios.post("/shop/delete/", { shop_id: shop.id });
      if (res.status === 200) {
        dispatch(deleteShop());
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
    dispatch(loadingSuccess());
  };
  return (
    <div>
      <Card className="shopCreate__card">
        <CardContent>
          <Typography gutterBottom variant="h5">
            Are you sure?
          </Typography>
          <Button variant="text" color="primary" onClick={handleDelete}>
            Yes
          </Button>
          <Button
            variant="text"
            color="primary"
            onClick={() => {
              props.setDeleteShopOpen(false);
            }}
          >
            No
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default DeleteShop;
