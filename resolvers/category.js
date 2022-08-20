const Category = {
  products: (parent, args, context) => {
    const categoryId = parent.id;
    const { filter } = args;

    let filteredProducts = context.products.filter(
      (product) => product.categoryId === parseInt(categoryId)
    );

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
};

export default Category;
