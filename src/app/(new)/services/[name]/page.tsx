import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function ServiceDeatils() {
  return (
    <div className="flex flex-col gap-8 md:gap-12">
      <section className="bg-slate-700 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Web Development Services
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div>DesignSolution Inc.</div>
              <div className="h-1 w-1 rounded-full bg-muted-foreground" />
              <div>July 18, 2024</div>
            </div>
          </div>
        </div>
      </section>
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-[3fr,1fr] py-10">
        <article className="prose prose-gray max-w-none dark:prose-invert">
          <Image
            src="/images/services/development.jpg"
            alt="Web development"
            height={720}
            width={1080}
          />
          <h2 className="my-5 text-5xl font-bold">
            Our Web Development Services
          </h2>
          <p>
            At DesignSolution Inc., we offer a comprehensive suite of web
            development services to help businesses of all sizes establish a
            strong online presence. Our team of experienced developers and
            designers specializes in creating custom, high-performing websites
            and web applications that meet the unique needs of our clients.
          </p>
          <h3 className="text-4xl font-bold my-5">Front-end Development</h3>
          <p>
            Our front-end development services focus on creating visually
            appealing and user-friendly interfaces. We utilize the latest
            front-end technologies, such as HTML, CSS, and JavaScript, to build
            responsive and interactive websites that provide an exceptional user
            experience across all devices.
          </p>
          <h3 className="text-4xl font-bold my-5">Back-end Development</h3>
          <p>
            Our back-end development services involve building the server-side
            infrastructure and functionality of your web application. We
            leverage powerful programming languages like Python, Ruby, and PHP
            to create robust and scalable back-end systems that handle data
            storage, processing, and business logic.
          </p>
          <h3 className="text-4xl font-bold my-5">Full-stack Development</h3>
          <p>
            For clients who require a complete web development solution, we
            offer full-stack development services. Our team of full-stack
            developers seamlessly integrates the front-end and back-end
            components of your web application, ensuring a cohesive and
            efficient user experience.
          </p>
          <h3 className="text-4xl font-bold my-5">Web Design</h3>
          <p>
            In addition to our development services, we also provide
            comprehensive web design services. Our designers create visually
            stunning and brand-aligned designs that not only look great but also
            enhance the overall user experience of your website.
          </p>
          <h3 className="text-4xl font-bold my-5">Maintenance and Support</h3>
          <p>
            To ensure the long-term success of your web presence, we offer
            ongoing maintenance and support services. Our team will monitor your
            website, perform regular updates and security patches, and provide
            prompt assistance to address any issues that may arise.
          </p>
          <h2>
            Why Choose DesignSolution Inc. for Your Web Development Needs?
          </h2>
          <p>
            At DesignSolution Inc., we pride ourselves on our commitment to
            delivering high-quality, innovative web solutions that drive
            business growth. Our team of experts stays up-to-date with the
            latest industry trends and technologies, ensuring that your web
            presence remains competitive and effective.
          </p>
          <p>
            With years of experience in the web development industry, we have a
            proven track record of successfully completing projects for clients
            across a wide range of industries. Our collaborative approach,
            attention to detail, and focus on customer satisfaction set us apart
            from the competition.
          </p>
          <p>
            If you&apos;re looking to elevate your online presence and take your
            business to new heights, contact us today to learn more about our
            web development services.
          </p>
        </article>
        <aside className="space-y-8">
          <Card className="bg-slate-800 border-slate-800 text-white">
            <CardHeader>
              <CardTitle>Related Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Link href="#" className="group grid gap-2" prefetch={false}>
                  <div className="text-sm font-medium group-hover:underline">
                    Mobile App Development
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Develop custom mobile apps for iOS and Android platforms.
                  </div>
                </Link>
                <Link href="#" className="group grid gap-2" prefetch={false}>
                  <div className="text-sm font-medium group-hover:underline">
                    E-commerce Solutions
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Build robust and scalable e-commerce platforms.
                  </div>
                </Link>
                <Link href="#" className="group grid gap-2" prefetch={false}>
                  <div className="text-sm font-medium group-hover:underline">
                    Digital Marketing
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Enhance your online presence with our digital marketing
                    services.
                  </div>
                </Link>
                <Link href="#" className="group grid gap-2" prefetch={false}>
                  <div className="text-sm font-medium group-hover:underline">
                    IT Consulting
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Get expert advice and guidance for your technology needs.
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
