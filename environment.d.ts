declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      APP_PORT: number;
      APP_NAME: string;
      DB_ID: string;
      DB_USER: string;
      DB_PASSWD: string;
      DB_PORT: number;
      DB_HOST: string;
    }
  }
}

export {};
