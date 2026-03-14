import { Router, type IRouter } from "express";
import { CreateLeadBody } from "@workspace/api-zod";
import { db, leadsTable } from "@workspace/db";

const router: IRouter = Router();

router.post("/leads", async (req, res) => {
  try {
    const parsed = CreateLeadBody.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: "Validation failed", details: parsed.error.message });
      return;
    }

    const data = parsed.data;
    const [lead] = await db.insert(leadsTable).values({
      type: data.type,
      companyName: data.companyName ?? null,
      contactName: data.contactName,
      email: data.email,
      phone: data.phone ?? null,
      country: data.country ?? null,
      brandName: data.brandName ?? null,
      inquiryCategory: data.inquiryCategory ?? null,
      estimatedOrderVolume: data.estimatedOrderVolume ?? null,
      message: data.message,
      sourcePage: data.sourcePage ?? null,
    }).returning();

    res.status(201).json({
      id: lead.id,
      message: "Thank you for your inquiry. We will be in touch shortly.",
      success: true,
    });
  } catch (error) {
    console.error("Error creating lead:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
