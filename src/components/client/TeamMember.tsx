import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function TeamMember() {
  return (
    <div className="bg-card rounded-lg shadow-lg overflow-hidden text-slate-800">
      <div className="flex flex-col gap-6">
        <Image
          src="/images/team-member.jpg"
          alt="John Doe"
          width={800}
          height={600}
          className="w-full h-[400px] object-cover object-center"
        />
        <div className="p-6 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-2xl font-bold text-slate-800">John Doe</h3>
              <p className="text-muted-foreground">Senior Designer</p>
            </div>
          </div>
          <div className="prose text-muted-foreground">
            <p>
              John is a highly skilled senior designer with over 15 years of
              experience in the industry. He has a keen eye for detail and a
              passion for creating visually stunning designs that captivate
              audiences.
            </p>
            {/* <p>
              Throughout his career, John has worked on a wide range of
              projects, from branding and web design to print and packaging. His
              work has been recognized with numerous awards and accolades, and
              he is known for his ability to consistently deliver high-quality
              results.
            </p> */}
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <MailIcon className="w-4 h-4 mr-2" />
              Email
            </Button>
            <Button variant="outline" size="sm">
              <LinkedinIcon className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
