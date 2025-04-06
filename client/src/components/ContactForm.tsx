import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(2, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });
  
  const onSubmit = async (data: ContactFormValues) => {
    try {
      // Here you would typically send the data to your API
      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };
  
  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm text-[#8892B0] mb-1">Name</label>
          <input 
            id="name"
            {...register("name")}
            className={`w-full bg-[#0A192F] border ${errors.name ? 'border-red-500' : 'border-[#495670]'} rounded-md px-4 py-2 text-[#CCD6F6] focus:border-[#64FFDA] focus:outline-none focus:ring-1 focus:ring-[#64FFDA] transition-colors duration-300`}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-[#8892B0] mb-1">Email</label>
          <input 
            id="email"
            type="email"
            {...register("email")}
            className={`w-full bg-[#0A192F] border ${errors.email ? 'border-red-500' : 'border-[#495670]'} rounded-md px-4 py-2 text-[#CCD6F6] focus:border-[#64FFDA] focus:outline-none focus:ring-1 focus:ring-[#64FFDA] transition-colors duration-300`}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm text-[#8892B0] mb-1">Subject</label>
        <input 
          id="subject"
          {...register("subject")}
          className={`w-full bg-[#0A192F] border ${errors.subject ? 'border-red-500' : 'border-[#495670]'} rounded-md px-4 py-2 text-[#CCD6F6] focus:border-[#64FFDA] focus:outline-none focus:ring-1 focus:ring-[#64FFDA] transition-colors duration-300`}
          placeholder="Project Inquiry"
        />
        {errors.subject && (
          <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm text-[#8892B0] mb-1">Message</label>
        <textarea 
          id="message"
          {...register("message")}
          rows={5}
          className={`w-full bg-[#0A192F] border ${errors.message ? 'border-red-500' : 'border-[#495670]'} rounded-md px-4 py-2 text-[#CCD6F6] focus:border-[#64FFDA] focus:outline-none focus:ring-1 focus:ring-[#64FFDA] transition-colors duration-300 resize-none`}
          placeholder="Tell me about your project..."
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>
      
      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#64FFDA] text-[#0A192F] font-medium py-2 rounded-md hover:bg-[#57D9BC] transition-colors duration-300 flex items-center justify-center"
      >
        {isSubmitting ? (
          <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        )}
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
