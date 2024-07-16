import { StarIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const CustomerReviews = () => {
  return (
    <div className="relative">
      <div className="min-h-64 bg-gradient-to-b from-transparent via-white to-white absolute bottom-0 w-full"></div>
      <div className="container mx-auto px-4 md:px-6 py-28">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold">
            What Our Customers Say About Us
          </h2>
          <p className="max-w-2xl mx-auto mt-4">
            We are grateful for the wonderful testimonials from our happy and
            beloved clients. See what a recent partner has to say about working
            with us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <Avatar className="w-10 h-10 mr-4">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-muted-foreground text-sm">Acme Inc.</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              "The service was fantastic and the team was very responsive. I
              highly recommend this company."
            </p>
            <div className="flex items-center mt-4">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <Avatar className="w-10 h-10 mr-4">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JA</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">Jane Appleseed</h3>
                <p className="text-muted-foreground text-sm">
                  Globex Corporation
                </p>
              </div>
            </div>
            <p className="text-muted-foreground">
              "I was impressed with the attention to detail and the quality of
              the work. I will definitely use this company again."
            </p>
            <div className="flex items-center mt-4">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <Avatar className="w-10 h-10 mr-4">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">Sarah Miller</h3>
                <p className="text-muted-foreground text-sm">
                  Stark Industries
                </p>
              </div>
            </div>
            <p className="text-muted-foreground">
              "I was hesitant at first, but the team went above and beyond to
              ensure I was satisfied. I'm so glad I chose this company."
            </p>
            <div className="flex items-center mt-4">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <Avatar className="w-10 h-10 mr-4">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-muted-foreground text-sm">Acme Inc.</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              "The service was fantastic and the team was very responsive. I
              highly recommend this company."
            </p>
            <div className="flex items-center mt-4">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <Avatar className="w-10 h-10 mr-4">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JA</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">Jane Appleseed</h3>
                <p className="text-muted-foreground text-sm">
                  Globex Corporation
                </p>
              </div>
            </div>
            <p className="text-muted-foreground">
              "I was impressed with the attention to detail and the quality of
              the work. I will definitely use this company again."
            </p>
            <div className="flex items-center mt-4">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <Avatar className="w-10 h-10 mr-4">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">Sarah Miller</h3>
                <p className="text-muted-foreground text-sm">
                  Stark Industries
                </p>
              </div>
            </div>
            <p className="text-muted-foreground">
              "I was hesitant at first, but the team went above and beyond to
              ensure I was satisfied. I'm so glad I chose this company."
            </p>
            <div className="flex items-center mt-4">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
