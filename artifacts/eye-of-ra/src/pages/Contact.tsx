import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCreateLead } from "@workspace/api-client-react";
import { PageHero } from "@/components/ui/PageHero";
import { useToast } from "@/hooks/use-toast";
import { CreateLeadRequestType } from "@workspace/api-client-react";
import contactImg from "@assets/empty-modern-room-with-furniture_1773518895807.jpg";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  contactName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  companyName: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const mutation = useCreateLead();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    mutation.mutate(
      { 
        data: {
          ...data,
          type: CreateLeadRequestType.contact,
          sourcePage: "/contact"
        }
      },
      {
        onSuccess: () => {
          toast({
            title: "Message Sent",
            description: "Thank you for reaching out. We will get back to you shortly.",
          });
          reset();
        },
        onError: () => {
          toast({
            variant: "destructive",
            title: "Error",
            description: "There was a problem sending your message. Please try again.",
          });
        }
      }
    );
  };

  return (
    <div className="min-h-screen pb-24 bg-background">
      <PageHero 
        title="Contact Us" 
        subtitle="General inquiries and partnership opportunities."
        imageSrc={contactImg}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid md:grid-cols-3 gap-12">
          
          <div className="md:col-span-1 space-y-8">
            <div>
              <h3 className="text-white font-display text-xl mb-2">Headquarters</h3>
              <p className="text-muted-foreground text-sm">Cairo, Egypt<br/>Connecting Africa to the World.</p>
            </div>
            <div>
              <h3 className="text-white font-display text-xl mb-2">Email</h3>
              <a href="mailto:info@eyeofra-textiles.com" className="text-primary hover:underline text-sm">info@eyeofra-textiles.com</a>
            </div>
            <div>
              <h3 className="text-white font-display text-xl mb-2">Project Inquiries</h3>
              <p className="text-muted-foreground text-sm mb-2">Ready to manufacture?</p>
              <a href="/start-project" className="text-primary font-medium text-sm hover:underline border-b border-primary pb-1 inline-block">Fill out project form →</a>
            </div>
          </div>

          <div className="md:col-span-2 bg-[#0f0f0f] border border-white/5 p-8 md:p-10">
            <h2 className="text-2xl font-display text-white mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name *</label>
                <input 
                  {...register("contactName")}
                  className="w-full bg-[#151515] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your full name"
                />
                {errors.contactName && <p className="text-destructive text-xs mt-1">{errors.contactName.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email *</label>
                  <input 
                    {...register("email")}
                    className="w-full bg-[#151515] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="you@company.com"
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Company</label>
                  <input 
                    {...register("companyName")}
                    className="w-full bg-[#151515] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message *</label>
                <textarea 
                  {...register("message")}
                  rows={5}
                  className="w-full bg-[#151515] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="How can we help you?"
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button 
                type="submit" 
                disabled={mutation.isPending}
                className="w-full bg-primary text-primary-foreground font-medium py-4 tracking-wider hover:bg-primary/90 transition-colors disabled:opacity-50 flex justify-center items-center"
              >
                {mutation.isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : "SEND MESSAGE"}
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
