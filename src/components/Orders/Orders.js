import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Header from "../Header/Header";
import { loadingSvg } from "../Loading/Loading";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [user, loading] = useAuthState(auth);
  const [orderLoading, setOrderLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      const url = `${process.env.REACT_APP_API_DOMAIN}/order?email=${user.email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setOrders(data);
          setOrderLoading(false);
        });
    }
  }, [user]);

  return (
    <>
      <Header />
      <div className="md:container mx-auto p-5">
        <h1 className="text-2xl">Orders</h1>
        <p>Total orders: {orders.length}</p>
        {(orderLoading || loading) && (
          <div className="w-full h-[300px] flex justify-center items-center">
            {loadingSvg}
          </div>
        )}
        <div className="space-y-3 mt-4">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border bg-gray-50 p-3 rounded-lg flex items-center"
            >
              <img width={100} src={order.orderedFood[0].img} alt="" />
              <div className="ml-3">
                <h1>Order id: {order._id}</h1>
                <p>Address: {order.addressOne}</p>
                <p>Total {order.orderedFood.length} items</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Orders;
