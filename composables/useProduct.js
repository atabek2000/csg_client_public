import { message } from "ant-design-vue";

export default () => {
  const useStarred = () =>
    useState("products_starred", () =>
      localStorage.getItem("products_starred")
    );
  const useBasket = () =>
    useState("products_basket", () => localStorage.getItem("products_basket"));

  // const useBasket = () =>
  // useState("products_basket", () => localStorage.getItem("products_basket"));

  const getBasket = JSON.parse(useBasket().value);
  const getStarred = JSON.parse(useStarred().value);

  const addToBasket = (product) => {
    try {
      const basket = useBasket();
      let basketJson = JSON.parse(basket.value);
      if (Array.isArray(basketJson)) {
        const existsInBasket = basketJson.filter(
          (prod) => prod.id === product.id
        ).length;
        if (existsInBasket) {
          basketJson = basketJson.map((prod) => {
            if (prod.id !== product.id) {
              return prod;
            } else {
              prod.count += product.count;
              return prod;
            }
          });
        } else {
          basketJson.push(product);
        }
      } else {
        basketJson = [product];
      }

      basket.value = JSON.stringify(basketJson);
      localStorage.setItem("products_basket", JSON.stringify(basketJson));
      return true;
    } catch (e) {
      return false;
    }
  };

  const addToStarred = (product) => {
    const basket = useStarred();
    let basketJson = JSON.parse(basket.value);
    if (Array.isArray(basketJson)) {
      const existsInBasket = basketJson.filter(
        (prod) => prod.id === product.id
      ).length;
      if (!existsInBasket) {
        basketJson.push(product);
        document.getElementById("icon-outlined-" + product.id).style.display =
          "none";
        document.getElementById("icon-filled-" + product.id).style.display =
          "block";
      } else {
        basketJson = basketJson.filter((prod) => prod.id !== product.id);
        document.getElementById("icon-outlined-" + product.id).style.display =
          "block";
        document.getElementById("icon-filled-" + product.id).style.display =
          "none";
      }
    } else {
      basketJson = [product];
    }

    basket.value = JSON.stringify(basketJson);
    localStorage.setItem("products_starred", JSON.stringify(basketJson));
  };

  const deleteFromBasket = (id) => {
    const basket = useBasket();
    let basketJson = JSON.parse(basket.value);
    basketJson = basketJson.filter((prod) => prod.id !== id);
    basket.value = JSON.stringify(basketJson);
    localStorage.setItem("products_basket", JSON.stringify(basketJson));
  };

  const deleteFromStarred = (id) => {
    const starred = useStarred();
    let basketJson = JSON.parse(starred.value);
    basketJson = basketJson.filter((prod) => prod.id !== id);
    starred.value = JSON.stringify(basketJson);
    localStorage.setItem("products_starred", JSON.stringify(basketJson));
  };

  const markStarred = (products) => {
    if (products && getStarred) {
      products.value.results.forEach((prod) => {
        getStarred.forEach((star) => {
          if (
            prod.id === star.id &&
            document.getElementById("icon-outlined-" + prod.id)
          ) {
            document.getElementById("icon-outlined-" + prod.id).style.display =
              "none";
            document.getElementById("icon-filled-" + prod.id).style.display =
              "block";
          }
        });
      });
    }
  };

  return {
    useStarred,
    useBasket,
    addToBasket,
    addToStarred,
    getBasket,
    getStarred,
    deleteFromBasket,
    deleteFromStarred,
    markStarred,
  };
};
