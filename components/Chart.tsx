'use client';
import IllustrtionChart from '../assets/home/illustration-charts.svg';
import { useState, useEffect } from 'react';

export default function Chart() {
  const [width, setWidth] = useState<number>(768);
  const tabletBreakpoint = 768;
  const desktopBreakpoint = 1280;

  const MobileChart = () => {
    return (
      <IllustrtionChart
        width="200"
        height="250"
        viewBox="0 0 500 500"
        aria-label="chart"
      />
    );
  };

  const TabletChart = () => {
    return (
      <IllustrtionChart
        className="min-w-max"
        width="400"
        height="500"
        viewBox="0 0 500 500"
        aria-label="chart"
      />
    );
  };

  const DesktopChart = () => {
    return (
      <IllustrtionChart
        width="600"
        height="700"
        viewBox="0 0 500 600"
        aria-label="chart"
      />
    );
  };

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  return (
    <>
      {width >= tabletBreakpoint && width < desktopBreakpoint ? (
        <TabletChart />
      ) : width >= desktopBreakpoint ? (
        <DesktopChart />
      ) : (
        <MobileChart />
      )}
    </>
  );
}
