const Mutation = {
  addCategory: (parent, args, context) => {
    console.log(args);
    const { input } = args;
    const { categories } = context;
    const newCategory = {
      id: categories[categories.length - 1].id + 1,
      ...input,
    };

    categories.push(newCategory);

    return categories[categories.length - 1];
  },

  addProduct: (parent, args, context) => {
    const inputProduct = args.input;
    const { products } = context;

    const product = {
      id: products[products.length - 1].id + 1,
      ...inputProduct,
    };

    products.push(product);

    return products[products.length - 1];
  },

  addReview: (parent, args, context) => {
    const inputReview = args.input;
    const { reviews } = context;

    const review = { id: reviews[reviews.length - 1].id + 1, ...inputReview };

    reviews.push(review);

    return reviews[reviews.length - 1];
  },
};

export default Mutation;
