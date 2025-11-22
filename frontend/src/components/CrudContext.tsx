import { createContext, type Context } from "react";

// @ts-expect-error - Provider always assigns non-null value
const CRUDContext: Context<CRUD> = createContext(null);

export default CRUDContext;