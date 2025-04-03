export interface ResponseType<T = unknown> {
  code: number;
  message: string;
  status: boolean;
  data?: T;
}