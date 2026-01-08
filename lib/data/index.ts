import type { Agg } from "../types";
import { wrapped2025 } from "./wrapped2025";
import { agg as generatedAgg } from "./wrapped2025.generated";

export const agg: Agg = generatedAgg ?? wrapped2025;
export const wrapped2025 = agg;
