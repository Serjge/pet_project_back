import { Uuid6 } from "id128";

export const getUuid = () => Uuid6.generate().toCanonical().toLowerCase();
