const Product = {
  category: (parent, args, context) => {
    const categoryId = parent.categoryId;

    return context.db.categories.find(
      (category) => category.id === parseInt(categoryId)
    );
  },

  reviews: (parent, args, context) => {
    const { db } = context;
    const { id } = parent;

    const result = db.reviews.filter(
      (review) => parseInt(review.productId) === id
    );
    return result;
  },
};

export default Product;
