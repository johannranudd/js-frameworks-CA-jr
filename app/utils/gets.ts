export async function getData() {
  const res = await fetch("https://api.noroff.dev/api/v1/online-shop", {
    next: { revalidate: 10 },
  });
  return await res.json();
}
