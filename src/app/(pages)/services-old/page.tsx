import CardTwo from "@/components/shared/CardTwo";
import {
  CircleGauge,
  MousePointerClickIcon,
  PaintBucket,
  ScanSearch,
  TabletSmartphone,
  Timer,
} from "lucide-react";

const items = [
  {
    img: <CircleGauge className="h-12 w-12" />,
    title: "High Performance",
    description: "Optimized for great page loading speed & performance",
  },
  {
    img: <MousePointerClickIcon className="h-12 w-12" />,
    title: "One Click Demo Import",
    description: "Import demo content quickly and easily",
  },
  {
    img: <TabletSmartphone className="h-12 w-12" />,
    title: "Fully Responsive",
    description: "Smartic is fully responsive and retina ready.",
  },
  {
    img: <ScanSearch className="h-12 w-12" />,
    title: "SEO Optimization",
    description: "Code optimized for the better SEO",
  },
  {
    img: <Timer className="h-12 w-12" />,
    title: "Real-Time Customization",
    description: "Build and customize the site visually",
  },
  {
    img: <PaintBucket className="h-12 w-12" />,
    title: "Color & Font Settings",
    description: "Unlimited options to change",
  },
];

const page = () => {
  return (
    <>
      <div className="bg-green-400 text-white py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="rounded-full p-7 bg-green-600">{item.img}</div>
              <div>
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#f1f3f6]">
        <div className="container mx-auto py-16">
          <h3 className="text-2xl md:text-5xl font-bold text-center text-slate-800">
            Stunning premade inside pages
          </h3>
          <p className="text-center mt-3">and more coming soon</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <CardTwo />
            <CardTwo />
            <CardTwo />
            <CardTwo />
            <CardTwo />
            <CardTwo />
            <CardTwo />
            <CardTwo />
            <CardTwo />
            <CardTwo />
            <CardTwo />
            <CardTwo />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
