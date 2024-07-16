import {
  Heart,
  MessageCircle,
  Pencil,
  Send,
  Settings,
  Umbrella,
} from "lucide-react";

const DiscussPanel = () => {
  return (
    <div className="min-h-96 py-12">
      <h2 className="text-center text-3xl font-bold">Your road to success!</h2>
      <p className="max-w-md mx-auto text-center mt-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dolore
        maiores quaerat?
      </p>
      <div className="pt-16 flex flex-col md:flex-row items-center gap-6 lg:gap-16 justify-center">
        <div className="flex flex-col items-center">
          <MessageCircle className="h-12 w-12 text-slate-600" />
          <p className="text-center mt-5 text-lg">Discuss</p>
        </div>
        <div className="flex flex-col items-center">
          <Pencil className="h-12 w-12 text-slate-600" />
          <p className="text-center mt-5 text-lg">Concept</p>
        </div>
        <div className="flex flex-col items-center">
          <Settings className="h-12 w-12 text-slate-600" />
          <p className="text-center mt-5 text-lg">Production</p>
        </div>
        <div className="flex flex-col items-center">
          <Send className="h-12 w-12 text-slate-600" />
          <p className="text-center mt-5 text-lg">Launch</p>
        </div>
        <div className="flex flex-col items-center">
          <Umbrella className="h-12 w-12 text-slate-600" />
          <p className="text-center mt-5 text-lg">Service</p>
        </div>
        <div className="flex flex-col items-center">
          <Heart className="h-12 w-12 text-slate-600" />
          <p className="text-center mt-5 text-lg">Happy Client</p>
        </div>
      </div>
    </div>
  );
};

export default DiscussPanel;
