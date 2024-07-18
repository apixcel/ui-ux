import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function BlogDetails() {
  return (
    <div className="flex flex-col gap-8 md:gap-12">
      <section className=" py-12 md:py-16 lg:py-20">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              The Complete Guide to Web Development
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div>John Doe</div>
              <div className="h-1 w-1 rounded-full bg-muted-foreground" />
              <div>July 18, 2024</div>
            </div>
          </div>
        </div>
      </section>
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-[3fr,1fr] py-5">
        <article className="prose prose-gray max-w-none dark:prose-invert">
          <Image
            src="/images/blog-1.jpg"
            alt="Blog one"
            height={720}
            width={1080}
          />
          <p className="mt-5">
            Welcome to the complete guide to web development! In this
            comprehensive article, we&apos;ll cover everything you need to know
            to become a successful web developer.
          </p>
          <h2>The Basics of Web Development</h2>
          <p>
            Web development is the process of building and maintaining websites
            and web applications. It involves a wide range of skills, including
            HTML, CSS, JavaScript, and server-side programming languages like
            Python, Ruby, or PHP.
          </p>
          <p>
            The basic structure of a website is built using HTML, which provides
            the content and structure of the page. CSS is used to style the
            appearance of the website, including colors, fonts, and layout.
            JavaScript is used to add interactivity and dynamic functionality to
            the website.
          </p>
          <h2>Front-end vs. Back-end Development</h2>
          <p>
            Web development can be broadly divided into two main areas:
            front-end and back-end development.
          </p>
          <p>
            Front-end development focuses on the user-facing aspects of a
            website, including the design, layout, and interactivity. Front-end
            developers use HTML, CSS, and JavaScript to create the visual and
            interactive elements of a website.
          </p>
          <p>
            Back-end development, on the other hand, focuses on the server-side
            aspects of a website, such as data storage, processing, and business
            logic. Back-end developers use programming languages like Python,
            Ruby, or PHP to build the server-side components of a website.
          </p>
          <h2>The Web Development Ecosystem</h2>
          <p>
            The web development ecosystem is constantly evolving, with new
            technologies, frameworks, and tools being introduced all the time.
            Some of the most popular and widely-used technologies in web
            development include:
          </p>
          <ul>
            <li>
              <strong>Front-end Frameworks:</strong> React, Angular, Vue.js
            </li>
            <li>
              <strong>Back-end Frameworks:</strong> Django, Ruby on Rails,
              Laravel
            </li>
            <li>
              <strong>Database Technologies:</strong> MySQL, PostgreSQL, MongoDB
            </li>
            <li>
              <strong>Deployment and Hosting:</strong> AWS, Google Cloud, Heroku
            </li>
          </ul>
          <p>
            Mastering these technologies and understanding how they fit together
            is essential for becoming a successful web developer.
          </p>
          <h2>The Future of Web Development</h2>
          <p>
            The field of web development is constantly evolving, and there are
            many exciting new trends and technologies on the horizon. Some of
            the key areas to watch include:
          </p>
          <ul>
            <li>
              <strong>Serverless Computing:</strong> Serverless architectures
              that allow developers to build and run applications without
              managing servers.
            </li>
            <li>
              <strong>Progressive Web Apps:</strong> Web applications that
              provide a native-like experience on mobile devices.
            </li>
            <li>
              <strong>Artificial Intelligence and Machine Learning:</strong>
              Integrating AI and ML into web applications to enhance
              functionality and user experience.
            </li>
            <li>
              <strong>WebAssembly:</strong> A new low-level programming language
              that can run in web browsers, enabling high-performance web
              applications.
            </li>
          </ul>
          <p>
            By staying up-to-date with these trends and continuously learning
            new skills, web developers can ensure that they remain competitive
            and in-demand in the ever-changing landscape of web development.
          </p>
        </article>
        <aside className="space-y-8">
          <Card className="bg-slate-800 text-white border-slate-800">
            <CardHeader>
              <CardTitle>Related Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Link href="/" className="group grid gap-2" prefetch={false}>
                  <div className="text-sm font-medium group-hover:underline">
                    The Rise of Serverless Computing
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Explore the benefits and challenges of serverless
                    architectures.
                  </div>
                </Link>
                <Link href="/" className="group grid gap-2" prefetch={false}>
                  <div className="text-sm font-medium group-hover:underline">
                    Mastering React for Front-end Development
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Learn how to build powerful web applications with React.
                  </div>
                </Link>
                <Link href="/" className="group grid gap-2" prefetch={false}>
                  <div className="text-sm font-medium group-hover:underline">
                    The Future of Web Development: AI and ML
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Discover how AI and machine learning are transforming the
                    web.
                  </div>
                </Link>
                <Link href="/" className="group grid gap-2" prefetch={false}>
                  <div className="text-sm font-medium group-hover:underline">
                    Building Progressive Web Apps: A Comprehensive Guide
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Learn how to create PWAs that provide a native-like
                    experience.
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
