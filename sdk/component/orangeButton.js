import React from "react";
import Button from "@mui/material/Button";
import PersonBoyUser from "../../pages/personBoyUser";

function OrangeButton({
  width,
  height,
  background,
  color,
  text,
  type,
  ...rest
}) {
  const [cartBoy, setCartBoy] = React.useState(false);
  function handleChange() {
    setCartBoy(false);
  }

  return (
    <>
      {cartBoy && type === "Total Cart Person" && (
        <PersonBoyUser type={type} onChange={handleChange} />
      )}
      {cartBoy && type === "Total Delivery Boy" && (
        <PersonBoyUser type={type} onChange={handleChange} />
      )}
      {cartBoy && type === "Total Users" && (
        <PersonBoyUser type={type} onChange={handleChange} />
      )}
      {cartBoy && type === "Unassigned orders" && (
        <PersonBoyUser type={type} onChange={handleChange} />
      )}
      {cartBoy && type === "Total Items" && (
        <PersonBoyUser type={type} onChange={handleChange} />
      )}
      {cartBoy && type === "Denied/Disputed order" && (
        <PersonBoyUser type={type} onChange={handleChange} />
      )}
      {cartBoy && type === "Scheduled order" && (
        <PersonBoyUser type={type} onChange={handleChange} />
      )}

      <Button
        variant="contained"
        sx={{
          width: `${width}`,
          height: `${height}`,
          color: `${color}`,
          background: `${background}`,
        }}
        onClick={() => {
          console.log("hello button is working");
          setCartBoy(!cartBoy);
        }}
        {...rest}
      >
        {text}
      </Button>
    </>
  );
}

export default OrangeButton;
