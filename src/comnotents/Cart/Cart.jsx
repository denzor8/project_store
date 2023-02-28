import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// custom
import { useCart } from "../../contexts/CartContextProvider";
import { Button, TextField, Typography } from "@mui/material";

export default function Cart() {
  const { getCart, cart, changeProductCount, deleteProductFromCart } =
    useCart();

  useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Picture</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Count</TableCell>
            <TableCell align="center">Sub Price</TableCell>
            <TableCell align="center">---</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.products.map((row) => (
            <TableRow
              key={row.item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <img src={row.item.picture} alt="error:(" width="50" />
              </TableCell>
              <TableCell align="center">{row.item.name}</TableCell>
              <TableCell align="center">{row.item.type}</TableCell>
              <TableCell align="center">{row.item.price}</TableCell>
              <TableCell align="center" style={{ textAlign: "center" }}>
                <TextField
                  type="number"
                  value={row.count}
                  size="small"
                  onChange={(e) =>
                    changeProductCount(e.target.value, row.item.id)
                  }
                />
              </TableCell>
              <TableCell align="center">{row.subPrice}</TableCell>
              <TableCell align="center">
                <button onClick={() => deleteProductFromCart(row.item.id)}>
                  Delete From Cart
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography variant="h6" component="div">
        Total Price: {cart?.totalPrice}
        <Button onClick={cartCleaner}>Buy Now</Button>
      </Typography>
    </TableContainer>
  );
}
