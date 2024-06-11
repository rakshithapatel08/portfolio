import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Contact = () => {
    return (
        <div className='mt-16 w-full mb-10'>
            <p className='w-full text-center text-zinc-800 font-bold text-3xl mb-5'>Let's build something <span className='text-white'>together.</span></p>
            <div className='flex justify-center gap-10 mt-10'>
                <div className='w-1/2 ml-10'>
                    <p className='text-zinc-800 text-3xl'>Let's partner up and make</p>
                    <p className='text-zinc-800 text-3xl'>things <span className='text-white text-6xl'>HAPPEN.</span></p>
                </div>
                <div>
                    <Card className="w-[350px]">
                        <CardHeader>
                            <CardTitle>Get in touch</CardTitle>
                            <CardDescription>Turn your ideas into designs.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="name">Email</Label>
                                        <Input id="name" placeholder="Give your email here" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="name">Discuss your idea</Label>
                                        <Input id="name" placeholder="Some description about your thoughts.." />
                                    </div>

                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex justify-end">
                            
                            <Button>Send message</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Contact