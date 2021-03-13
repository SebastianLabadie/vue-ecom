import HttpClient from "./HttpClient";

const END_POINT = "ProcGetAllProducts";

const getAllProducts = () => HttpClient.post(END_POINT);

export { getAllProducts };
