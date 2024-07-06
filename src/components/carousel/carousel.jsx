/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LzFqTMQPQPw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Link from "next/link"

export default function ProjectCarousel() {
  return (
    <Carousel className="w-full max-w-4xl">
      <CarouselContent>
        <CarouselItem>
          <div className="grid gap-4 md:grid-cols-2 items-center">
            <img
              src="/placeholder.svg"
              width={600}
              height={400}
              alt="Project 1"
              className="rounded-lg object-cover aspect-video"
            />
            <div className="space-y-2">
              <Link href="#" className="text-lg font-semibold hover:underline" prefetch={false}>
                Project 1
              </Link>
              <p className="text-muted-foreground">
                A brief description of the first project showcased in the carousel.
              </p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="grid gap-4 md:grid-cols-2 items-center">
            <img
              src="/placeholder.svg"
              width={600}
              height={400}
              alt="Project 2"
              className="rounded-lg object-cover aspect-video"
            />
            <div className="space-y-2">
              <Link href="#" className="text-lg font-semibold hover:underline" prefetch={false}>
                Project 2
              </Link>
              <p className="text-muted-foreground">
                A brief description of the second project showcased in the carousel.
              </p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="grid gap-4 md:grid-cols-2 items-center">
            <img
              src="/placeholder.svg"
              width={600}
              height={400}
              alt="Project 3"
              className="rounded-lg object-cover aspect-video"
            />
            <div className="space-y-2">
              <Link href="#" className="text-lg font-semibold hover:underline" prefetch={false}>
                Project 3
              </Link>
              <p className="text-muted-foreground">
                A brief description of the third project showcased in the carousel.
              </p>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}