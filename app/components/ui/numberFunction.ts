"use client";
// import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

export function numberFunction() {
  const searchParams = useSearchParams();

  //  const search = searchParams.get("");
  return searchParams;
}
