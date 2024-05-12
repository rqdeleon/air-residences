import Image from "next/image"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "./ui/button"

export default function Hero(){

  return(
  <section className="py-36 px-10">
    <div className="grid grid-cols-1 gap-12 w-full md:grid-cols-2">
      <div className="hero-content">
        <h1 className="mb-5 text-4xl font-bold text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
          Air Residences Makati by Ms Kim
        </h1>
        <p className="mb-8 w-full md:max-w-[480px] text-base text-body-color dark:text-dark-6">
            We invite you to visit us and experience Makati City in magical way
        </p>
        <p className="mb-8 w-full md:max-w-[480px] text-base font-semibold text-body-color dark:text-dark-6">
            RQDELEON Photography. email me @ rqdeleon77@yahoo.com, visit us at mybranches.net
        </p>
        <ul className="flex flex-wrap items-center">
          <li>
      
            <a
              href="https://www.airbnb.com/rooms/960708530378622776?guests=1&adults=1&s=67&unique_share_id=23866c6b-01af-4091-8deb-f7016563d8bc"
              className="inline-flex items-center justify-center rounded-md bg-slate-800 px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7"
            >
              Book Now
            </a>
          </li>
          
          <li>
          <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-white mx-5 p-5 text-lg text-slate-800 font-semibold border-4 border-slate-800 hover:bg-slate-300">Get Voucher</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogDescription>
            Subscribe and we are going to send your Discount Voucher.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
          </li>    
        </ul>
      </div>

        <div className="w-full px-4">
          <div className="lg:ml-auto lg:text-right">
            <div className="relative z-10 inline-block pt-11 lg:pt-0">
              <Image 
                src="https://res.cloudinary.com/duwzronom/image/upload/v1715529541/air-residences/hs0bdxd8vpldgbdy75jf.jpg"
                width={500}
                height={500}
                alt="air-residences makati"
              />

              <span className="absolute -bottom-8 -left-8 z-[-1]">
                <svg
                  width="93"
                  height="93"
                  viewBox="0 0 93 93"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                  <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                  <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                  <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                  <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                  <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                  <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                  <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                  <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                  <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                  <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                  <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                  <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                  <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                  <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                  <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                  <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                  <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                  <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                  <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                  <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                  <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                  <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                  <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                  <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                </svg>
              </span>
            </div>
          </div>
        </div>
    </div>
</section>
)
}