const Product = {
  category: (parent, args, context) => {
    const categoryId = parent.categoryId;

    return context.categories.find(
      (category) => category.id === parseInt(categoryId)
    );
  },

  reviews: (parent, args, context) => {
    const { reviews } = context;
    const { id } = parent;
    console.log(JSON.stringify(reviews), parent);

    const result = reviews.filter(
      (review) => parseInt(review.productId) === id
    );
    console.log(result);
    return result;
  },
};

export default Product;
