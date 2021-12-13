import React from "react";
import Button from "@mui/material/Button";
import PersonBoyUser from "./PersonBoyUser";
import { useRouter } from "next/router";

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

  const router = useRouter();
  return (
    <>
      {/* {cartBoy && type === "TotalCartPerson" && (
        <PersonBoyUser type={type} onChange={handleChange} />
      )}
      {cartBoy && type === "TotalDeliveryBoy" && (
        <PersonBoyUser type={type} onChange={handleChange} />
      )}
      {cartBoy && type === "TotalUsers" && (
        <PersonBoyUser type={type} onChange={handleChange} />
      )}
      {cartBoy && type === "UnassignedOrders" && (
        <PersonBoyUser type={type} onChange={handleChange} />
      )}
      {cartBoy && type === "TotalItems" && (
        <PersonBoyUser type={type} onChange={handleChange} />
      )}
      {cartBoy && type === "Denied/DisputedOrder" && (
        <PersonBoyUser type={type} onChange={handleChange} />
      )}
      {cartBoy && type === "ScheduledOrder" && (
        <PersonBoyUser type={type} onChange={handleChange} />
      )} */}

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
          // setCartBoy(!cartBoy);
          if (
            type === "TotalCartPerson" ||
            type === "TotalDeliveryBoy" ||
            type === "TotalUsers"
          ) {
            router.push(`/CartPersonDeliveryBoyUserDetails/${type}`);
          }
        }}
        {...rest}
      >
        {text}
      </Button>
    </>
  );
}

export default OrangeButton;
