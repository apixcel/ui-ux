import TeamMember from "@/components/client/TeamMember";
import TopTitle from "@/components/shared/TopTitle";

const page = () => {
  return (
    <>
      <TopTitle title="Team" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto p-4">
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
      </div>
    </>
  );
};

export default page;
