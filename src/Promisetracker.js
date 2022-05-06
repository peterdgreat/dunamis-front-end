import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';

export default function Promisetracker() {
  const { promiseInProgress } = usePromiseTracker();
  return (
    <div>
      {promiseInProgress
    && <h1>Hey some async call in progress ! </h1>}
    </div>
  );
}
