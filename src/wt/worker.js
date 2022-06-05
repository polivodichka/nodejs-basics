import { workerData, parentPort } from 'worker_threads';

const answer = {}

// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    parentPort.postMessage({status: 'resolved', data: nthFibonacci(workerData)});
};
sendResult();