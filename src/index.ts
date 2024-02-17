function curry(a: number) {
    return function (b: number) {
    // 클로저로 a에 접근할 수 있다.
        return a + b
    }
}

const discounted_price = (price: number, percent: number) => {
  return price - price * percent;
};

const curried_discounted_price = (percent: number) => (price: number) => {
    return price - price * percent;
}

console.log(discounted_price(15000, 0.1)); // 13500
console.log(curried_discounted_price(0.1)(15000)); // 13500

const discount_1percent = curried_discounted_price(0.01);
const discount_10percent = curried_discounted_price(0.1);

console.log(discount_1percent(15000));
console.log(discount_10percent(15000));
