interface ISignUpData {
  errors: { message: string }[];
  token: string;
}

interface MutationVariable {
  credentials: {
    email: string;
    password: string;
  };
  bio: string;
  name: string;
}

interface ISignUpResponse {
  signUp: ISignUpData;
}

export type { ISignUpData, MutationVariable, ISignUpResponse };
