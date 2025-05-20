'use client';

import WorldMap from "react-svg-worldmap";

export default function MyWorldMap({data}) {
  return (
    <div className="App">
      <WorldMap
        color="red"
        title="Top 10 Populous Countries"
        value-suffix="people"
        size="xxl"
        data={data}
      />
    </div>
  );
}