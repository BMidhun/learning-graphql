const Mutation = {
  addCategory: (parent, args, context) => {
    console.log(args);
    const { input } = args;
    const { db } = context;
    const newCategory = {
      id: db.categories[db.categories.length - 1].id + 1,
      ...input,
    };

    db.categories.push(newCategory);

    return db.categories[categories.length - 1];
  },

  addProduct: (parent, args, context) => {
    const inputProduct = args.input;
    const { db } = context;

    const product = {
      id: db.products[db.products.length - 1].id + 1,
      ...inputProduct,
    };

    db.products.push(product);

    return db.products[db.products.length - 1];
  },

  addReview: (parent, args, context) => {
    const inputReview = args.input;
    const { db } = context;

    const review = {
      id: db.reviews[db.reviews.length - 1].id + 1,
      ...inputReview,
    };

    db.reviews.push(review);

    return db.reviews[db.reviews.length - 1];
  },

  // Soft Deletion of categories and associated products
  // deleteCategory: (parent, args, context) => {
  //   const { id } = args;
  //   const { db } = context;
  //   db.categories = db.categories.filter(
  //     (category) => category.id !== parseInt(id)
  //   );

  //   db.products = db.products.map((product) => {
  //     if (product.categoryId === parseInt(id)) {
  //       product.categoryId = null;
  //     }
  //     return product;
  //   });

  //   return true;
  // },

  // Cascaded deletion of category, associated products and corresponding product reviews.

  deleteCategory: (parent, args, context) => {
    const categoryId = parseInt(args.id);
    const { db } = context;

    db.categories = db.categories.filter(
      (category) => category.id !== categoryId
    );

    db.products = db.products.filter(
      (product) => product.categoryId !== categoryId
    );

    const productIds = db.products.map((product) => product.id);

    db.reviews = db.reviews.filter((review) =>
      productIds.includes(review.productId)
    );

    return true;
  },

  deleteProduct: (parent, args, context) => {
    const productId = parseInt(args.id);
    const { db } = context;

    db.products = db.products.filter((product) => product.id !== productId);
    db.reviews = db.reviews.filter((review) => review.productId !== productId);

    return true;
  },

  deleteReview: (parent, args, context) => {
    const reviewId = parseInt(args.id);
    const { db } = context;

    db.reviews = db.reviews.filter((review) => review.id !== reviewId);

    return true;
  },

  updateCategory: (parent, args, context) => {
    const categoryId = parseInt(args.id);
    const input = args.input;
    const { db } = context;

    const idx = db.categories.findIndex(
      (category) => category.id === categoryId
    );

    db.categories[idx] = { ...db.categories[idx], ...input };

    return true;
  },

  updateProduct: (parent, args, context) => {
    const productId = parseInt(args.id);
    const { db } = context;
    const { input } = args;

    let idx = db.products.findIndex((product) => product.id === productId);

    db.products[idx] = { ...db.products[idx], ...input };

    return true;
  },

  updateReview: (parent, args, context) => {
    const reviewId = parseInt(args.id);
    const { db } = context;
    const { input } = args;

    let idx = db.reviews.findIndex((review) => review.id === reviewId);

    db.reviews[idx] = { ...db.reviews[idx], ...input };

    return true;
  },
};

export default Mutation;
