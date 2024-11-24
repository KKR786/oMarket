export const getBanner = async () => {
  const res = await fetch("http://localhost:2006/api/site/1/banner", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await res.json();
  if (res.ok) {
    return json.banners;
  } else {
    console.log(json.error || "Failed to fetch banners");
  }
};
