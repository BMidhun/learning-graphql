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

  deleteCategory: (parent, args, context) => {
    const { id } = args;
    const { db } = context;
    db.categories = db.categories.filter(
      (category) => category.id !== parseInt(id)
    );

    db.products = db.products.map((product) => {
      if (product.categoryId === parseInt(id)) {
        product.categoryId = null;
      }
      return product;
    });

    return true;
  },
};

export default Mutation;
