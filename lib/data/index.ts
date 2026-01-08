import type { Agg } from "../types";
import { wrapped2025 as fallbackAgg } from "./wrapped2025";
import { agg as generatedAgg } from "./wrapped2025.generated";

export const agg: Agg = generatedAgg ?? fallbackAgg;
export { agg as wrapped2025 };
