import { BriefcaseBusiness, Mail, Monitor, UserRound } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="grid grid-cols-1 text-white md:grid-cols-2 lg:grid-cols-4">
      <div className="flex gap-3 bg-slate-900 p-16">
        <UserRound className="h-24 w-24" />
        <div>
          <h3 className="text-lg font-bold">About us</h3>
          <p className="text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            nobis.
          </p>
        </div>
      </div>
      <div className="flex gap-3 bg-slate-800 p-16">
        <Monitor className="h-24 w-24" />
        <div>
          <h3 className="text-lg font-bold">Services</h3>
          <p className="text-slate-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor,
            distinctio.
          </p>
        </div>
      </div>
      <div className="flex gap-3 bg-slate-700 p-16">
        <BriefcaseBusiness className="h-24 w-24" />
        <div>
          <h3 className="text-lg font-bold">Our Work</h3>
          <p className="text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, maxime.
          </p>
        </div>
      </div>
      <div className="flex gap-3 bg-slate-600 p-16">
        <Mail className="h-24 w-24" />
        <div>
          <h3 className="text-lg font-bold">Contact us</h3>
          <p className="text-slate-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
            nobis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
