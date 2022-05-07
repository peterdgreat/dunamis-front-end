import React from 'react';
import { Circles } from 'react-loader-spinner';
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
      <Circles color={colors.secondary} ariaLabel="loading-indicator" />
    </div>
    )}
    </div>
  );
}
