import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, UseSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart } from "../actions/cartActions";

const CartScreen = ({ match, location, history }) => {
  const productId = match.product.id;
  const qty = location.search ? Number(location.search("=")[1]) : 1;

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  console.log(qty);

  return <div>Cart</div>;
};

export default CartScreen;
