export async function tryCatch<T>(
  promise: Promise<T>,
  onError: (e: unknown) => void,
  onFinally?: () => void
): Promise<T | undefined> {
  try {
    return await promise;
  } catch (error) {
    onError(error);
  } finally {
    if (onFinally) onFinally();
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = () => {};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const asyncNoop = async () => {};

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
