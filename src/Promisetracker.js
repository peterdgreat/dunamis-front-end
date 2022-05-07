import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import { usePromiseTracker } from 'react-promise-tracker';
import { colors } from './styles/colors';

export default function Promisetracker() {
  const { promiseInProgress } = usePromiseTracker();
  return (
    <div>
      {promiseInProgress
    && (
    <div
      style={{
        width: '100%',
        height: '100',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TailSpin color={colors.secondary} ariaLabel="loading-indicator" />
    </div>
    )}
    </div>
  );
}
