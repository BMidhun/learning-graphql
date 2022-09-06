interface ILoginData {
    errors: { message: string }[];
    token: string;
  }
  
  interface MutationVariable {
    credentials: {
      email: string;
      password: string;
    };
  }
  
  interface ILoginResponse {
    signIn: ILoginData;
  }

export type {ILoginData, ILoginResponse, MutationVariable}