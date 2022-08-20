const Product = {
  category: (parent, args, context) => {
    const categoryId = parent.categoryId;

    return context.categories.find(
      (category) => category.id === parseInt(categoryId)
    );
  },

  reviews: (parent, args, context) => {
    const { reviews } = context;

    const { id: productId } = parent;

    return reviews.filter((review) => review.productId === parseInt(productId));
  },
};

export default Product;
