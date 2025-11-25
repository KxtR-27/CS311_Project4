import { createContext, type Context } from "react";

// @ts-expect-error - official React documentation uses this method
// https://react.dev/reference/react/useContext#passing-data-deeply-into-the-tree
const CRUDContext: Context<CRUD> = createContext(null);

export default CRUDContext;
