import React from "react";

export default function SearchResults({ params }: any) {
  console.log(params.searchTerm);
  return <div className="bg-pink-700">SearchResults: {params.searchTerm}</div>;
}
