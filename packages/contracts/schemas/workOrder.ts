import { z } from "zod";

export const WorkOrderSchema = z.object({
  id: z.string().uuid(),
  technicianId: z.string().uuid(),
  assetId: z.string().uuid(),
  description: z.string(),
  status: z.enum(["open", "in_progress", "done"]),
  createdAt: z.string().datetime(),
});

export type WorkOrder = z.infer<typeof WorkOrderSchema>;