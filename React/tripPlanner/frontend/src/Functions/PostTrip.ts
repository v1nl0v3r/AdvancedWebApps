import type IOrderData from "../Interfaces/IOrderData";

export default function postTrip(trip: IOrderData): Promise<void> {
  const headers = new Headers();

  headers.set("Content-Type", "application/json");

  headers.set("Accept", "application/json");

  const request: RequestInfo = new Request("http://localhost:3000/post", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(trip),
  });

  // Send the request and print the response
  return fetch(request)
    .then((res: Response) => res.json())
    .then((data: IOrderData) => {
      console.log("response body:", data);
    })
    .catch((err) => console.error("fetch error:", err));
}
