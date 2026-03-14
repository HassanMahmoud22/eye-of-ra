import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const leadsTable = pgTable("leads", {
  id: serial("id").primaryKey(),
  type: varchar("type", { length: 50 }).notNull(),
  companyName: varchar("company_name", { length: 255 }),
  contactName: varchar("contact_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  country: varchar("country", { length: 100 }),
  brandName: varchar("brand_name", { length: 255 }),
  inquiryCategory: varchar("inquiry_category", { length: 100 }),
  estimatedOrderVolume: varchar("estimated_order_volume", { length: 100 }),
  message: text("message").notNull(),
  sourcePage: varchar("source_page", { length: 255 }),
  status: varchar("status", { length: 50 }).notNull().default("new"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const insertLeadSchema = createInsertSchema(leadsTable).omit({ id: true, createdAt: true, updatedAt: true, status: true });
export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leadsTable.$inferSelect;
