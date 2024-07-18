import Title from "@/components/shared/Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const Faq = () => {
  const questions = [
    {
      q: "What kind of services do you offer?",
      a: "Risus cum orci sollicitudin fringilla lectus neque rhoncus eget pretium magna, accumsan ante torquent a pellentesque tellus fermentum cursus.",
    },
    {
      q: "What kind of technology do you use?",
      a: "Risus cum orci sollicitudin fringilla lectus neque rhoncus eget pretium magna, accumsan ante torquent a pellentesque tellus fermentum cursus.",
    },
    {
      q: "How much experience do you have?",
      a: "Risus cum orci sollicitudin fringilla lectus neque rhoncus eget pretium magna, accumsan ante torquent a pellentesque tellus fermentum cursus.",
    },
  ];

  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-5">
      <div className="flex-1">
        <Title
          title="Digital Solution That Improve Your Agency Growth"
          subtitle="Just ask us some questions"
        />
        <Accordion type="single" collapsible className="mt-5">
          {questions.map((question, idx) => (
            <AccordionItem value={`item-${idx + 1}`} key={idx}>
              <AccordionTrigger>
                <h3 className="text-2xl font-bold hover:no-underline">
                  {question.q}
                </h3>
              </AccordionTrigger>
              <AccordionContent>{question.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div>
        <Image
          src="/images/faq-img.png"
          alt="faq image"
          height={556}
          width={643}
        />
      </div>
    </div>
  );
};

export default Faq;
