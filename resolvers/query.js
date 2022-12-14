const Query = {
  products: (parent, args, context) => {
    const { filter } = args;

    let filteredProducts = [...context.products];

    if (filter) {
      const { isOutofStock, avgRating } = filter;

      if (typeof isOutofStock === "boolean")
        filteredProducts = filteredProducts.filter(
          (product) => product.isOutofStock === isOutofStock
        );

      if (parseInt(avgRating) > 0) {
        filteredProducts = filteredProducts.filter((product) => {
          const productId = product.id;
          let totalRating = 0;
          let count = 0;
          context.reviews.forEach((current) => {
            if (current.productId === productId) {
              totalRating += current.rating;
              count++;
            }
          });
          const avg = Math.floor(totalRating / count);

          return avg >= avgRating;
        });
      }
    }

    return filteredProducts;
  },
  categories: (parent, args, context) => context.categories,
  product: (parent, args, context) => {
    let { id } = args;

    const product = context.products.find(
      (product) => product.id === parseInt(id)
    );

    return product ? product : null;
  },

  category: (parent, args, context) => {
    let { id } = args;

    return context.categories.find((category) => category.id === parseInt(id));
  },
};

export default Query;
