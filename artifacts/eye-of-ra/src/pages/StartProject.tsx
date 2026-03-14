import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCreateLead } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { CreateLeadRequestType } from "@workspace/api-client-react";
import { Loader2 } from "lucide-react";

const projectSchema = z.object({
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Valid email is required"),
  companyName: z.string().min(2, "Company name is required"),
  phone: z.string().optional(),
  country: z.string().optional(),
  brandName: z.string().optional(),
  inquiryCategory: z.string().optional(),
  estimatedOrderVolume: z.string().optional(),
  message: z.string().min(10, "Please provide some project details"),
});

type ProjectValues = z.infer<typeof projectSchema>;

export default function StartProject() {
  const { toast } = useToast();
  const mutation = useCreateLead();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ProjectValues>({
    resolver: zodResolver(projectSchema),
  });

  const onSubmit = (data: ProjectValues) => {
    mutation.mutate(
      { 
        data: {
          ...data,
          type: CreateLeadRequestType.project,
          sourcePage: "/start-project"
        }
      },
      {
        onSuccess: () => {
          toast({
            title: "Project Inquiry Submitted",
            description: "We've received your brief and will contact you within 48 hours to discuss next steps.",
          });
          reset();
        },
        onError: () => {
          toast({
            variant: "destructive",
            title: "Error",
            description: "There was a problem submitting your inquiry. Please try again.",
          });
        }
      }
    );
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display text-white mb-4">Start a Project</h1>
          <p className="text-muted-foreground text-lg">Provide us with a brief overview of your production needs, and our technical team will prepare a tailored consultation.</p>
        </div>

        <div className="bg-[#0f0f0f] border border-white/10 p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            
            {/* Section 1: Contact Info */}
            <div>
              <h3 className="text-primary font-display text-xl mb-6 border-b border-white/10 pb-2">1. Contact Details</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Full Name *</label>
                  <input {...register("contactName")} className="w-full bg-[#151515] border border-white/10 px-4 py-3 text-white focus:border-primary outline-none transition-colors" />
                  {errors.contactName && <p className="text-destructive text-xs mt-1">{errors.contactName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email Address *</label>
                  <input {...register("email")} type="email" className="w-full bg-[#151515] border border-white/10 px-4 py-3 text-white focus:border-primary outline-none transition-colors" />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                  <input {...register("phone")} className="w-full bg-[#151515] border border-white/10 px-4 py-3 text-white focus:border-primary outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Country Location</label>
                  <input {...register("country")} className="w-full bg-[#151515] border border-white/10 px-4 py-3 text-white focus:border-primary outline-none transition-colors" />
                </div>
              </div>
            </div>

            {/* Section 2: Business Info */}
            <div>
              <h3 className="text-primary font-display text-xl mb-6 border-b border-white/10 pb-2">2. Business Details</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Company/Legal Entity Name *</label>
                  <input {...register("companyName")} className="w-full bg-[#151515] border border-white/10 px-4 py-3 text-white focus:border-primary outline-none transition-colors" />
                  {errors.companyName && <p className="text-destructive text-xs mt-1">{errors.companyName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Brand Name (if different)</label>
                  <input {...register("brandName")} className="w-full bg-[#151515] border border-white/10 px-4 py-3 text-white focus:border-primary outline-none transition-colors" />
                </div>
              </div>
            </div>

            {/* Section 3: Project Requirements */}
            <div>
              <h3 className="text-primary font-display text-xl mb-6 border-b border-white/10 pb-2">3. Project Scope</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Primary Service Interest</label>
                  <select {...register("inquiryCategory")} className="w-full bg-[#151515] border border-white/10 px-4 py-3 text-white focus:border-primary outline-none transition-colors appearance-none">
                    <option value="">Select a service...</option>
                    <option value="sourcing">Material Sourcing</option>
                    <option value="consulting">Brand Consulting & Tech Packs</option>
                    <option value="full-package">Full Package / End-to-End Production</option>
                    <option value="qa">Quality Assurance / Monitoring</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Estimated Order Volume (pcs)</label>
                  <select {...register("estimatedOrderVolume")} className="w-full bg-[#151515] border border-white/10 px-4 py-3 text-white focus:border-primary outline-none transition-colors appearance-none">
                    <option value="">Select volume...</option>
                    <option value="under-500">Under 500</option>
                    <option value="500-2000">500 - 2,000</option>
                    <option value="2000-10000">2,000 - 10,000</option>
                    <option value="10000+">10,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Project Brief / Notes *</label>
                <textarea 
                  {...register("message")}
                  rows={6} 
                  placeholder="Describe your garments, target fabrics, target timelines, and any current pain points..."
                  className="w-full bg-[#151515] border border-white/10 px-4 py-3 text-white focus:border-primary outline-none transition-colors resize-none"
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message.message}</p>}
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                disabled={mutation.isPending}
                className="w-full py-5 bg-primary text-primary-foreground font-bold tracking-widest text-lg hover:bg-primary/90 transition-colors disabled:opacity-70 flex justify-center items-center"
              >
                {mutation.isPending ? <Loader2 className="w-6 h-6 animate-spin" /> : "SUBMIT INQUIRY"}
              </button>
              <p className="text-center text-xs text-gray-500 mt-4">
                Your information is held in strict confidence. We do not share your designs or data with third parties without consent.
              </p>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
