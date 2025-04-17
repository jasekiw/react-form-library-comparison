/**
 * Logs the provided value and returns it unchanged.
 * Useful for debugging in function pipelines.
 * 
 * @param value - The value to log
 * @param label - Optional label to prefix the log message
 * @returns The original value
 */
export const pipeLog = <T>(value: T, label?: string): T => {
  if (label) {
    console.log(`${label}:`, value);
  } else {
    console.log(value);
  }
  return value;
}; 