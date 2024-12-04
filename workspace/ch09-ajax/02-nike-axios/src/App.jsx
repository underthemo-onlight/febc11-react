import { useCallback, useEffect, useMemo, useState } from "react";
import Product from "./Product";
import Shipping from "./Shipping";
import { BeatLoader } from "react-spinners";
import { useAxiosInstance } from "../hooks/useAxiosInstance.js";

function App() {
  const [data, setData] = useState(); // 1번
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const axios = useAxiosInstance();

  const fetchData = async (_id) => {
    setIsLoading(true);
    try {
      const res = await axios(`/products/${_id}?delay=3000`);
      console.log("res", res);
      setData(res.data.item); // 4번 (마운트 후)
      setError(null);
    } catch (err) {
      console.log(err);
      setError({ message: "잠시 후 다시 요청하세요." });
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  // fetchData() // 바로 적용해버리면 매번 return 값이 달라질 수 있어, useEffect에..
  useEffect(() => {
    fetchData(1); // 3번
  }, []); // 마운트 된 이후에 최초 한번만 실행

  const basicShippingFees = 3000;

  const [quantity, setQuantity] = useState(1);
  const [shippingFees, setShippingFees] = useState(basicShippingFees);

  // 수량이 변경되면 배송비 다시 계산
  const handleQuantityChange = (e) => {
    const newQuantity = Number(e.target.value);
    setShippingFees(basicShippingFees * Math.ceil(newQuantity / 5));
    setQuantity(newQuantity);
  };

  const handlePayment = useCallback(() => {
    alert(`배송비 ${shippingFees}원이 추가됩니다. 상품을 결제하시겠습니까?`);
  }, [shippingFees]);

  // return <h1></h1> 2번 (마운트)
  return (
    <>
      <h1>01 Nike 상품 상세 조회</h1>
      {isLoading && <BeatLoader />}
      {error && <p>{error.message}</p>}
      {data && (
        <div>
          <Product product={data} />

          <h2>수량 선택</h2>
          <div>
            가격: {data.price.toLocaleString()}원<br />
            수량:{" "}
            <input
              type="number"
              min="1"
              max={data.quantity - data.buyQuantity}
              value={quantity}
              onChange={handleQuantityChange}
            />
            (배송비는 5개당 {basicShippingFees.toLocaleString()}원씩
            추가됩니다.)
            <br />
            상품 금액: {(data.price * quantity).toLocaleString()}원
          </div>

          <Shipping fees={shippingFees} handlePayment={handlePayment} />
        </div>
      )}
    </>
  );
}

export default App;
