import {
  DefaultToastOptions,
  Renderable,
  ValueOrFunction,
} from 'react-hot-toast';

export interface ToastMsgs {
  loading: Renderable;
  success: ValueOrFunction<Renderable, any>;
  error: ValueOrFunction<Renderable, any>;
}

export type ToastOpts = DefaultToastOptions | undefined;
