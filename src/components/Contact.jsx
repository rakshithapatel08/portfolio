"use client"
import React, { useState } from 'react'
import emailjs from "@emailjs/browser"
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
    const [fromName, setFromName ] = useState("")
    const [fromEmail, setFromEmail ]= useState("")
    const [message, setMessage ] = useState("")

    const sendEmail = (e) => {
        e.preventDefault()
        if(fromName ==="" || fromEmail ==="" || message ===""){
            console.log("Please enter all the credentials")
        }
        else{
            const templateParams = {
                to_name:"Rakshitha Patel",
                from_name:fromName,
                from_email:fromEmail,
                message:message
            }
            emailjs
            .send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID
            )
            .then(res => console.log(res))
            .catch(error => console.log(error))
        }
    }
    return (
        <div className='mt-16 w-full mb-10' id="contact">
            <p className='w-full text-center text-zinc-800 font-bold text-3xl mb-5'>Let's build something <span className='text-white'>together.</span></p>
            <div className='flex justify-center gap-10 mt-10'>
                <div className='w-1/2 ml-10'>
                    <p className='text-zinc-800 text-3xl'>Let's partner up and make</p>
                    <p className='text-zinc-800 text-3xl'>things <span className='text-white text-6xl'>HAPPEN.</span></p>
                    {/* <p className='text-white text-8xl text-center w-2/5 mt-10'>&lt;/&gt;</p> */}
                    {/* <div className='bg-white rounded-full w-44 h-44 mt-10 absolute z-10 -bottom-14'></div> */}
                </div>
                <div>
                    <Card className="w-[350px]">
                        <CardHeader>
                            <CardTitle>Get in touch</CardTitle>
                            <CardDescription>Turn your ideas into designs.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={(e)=>sendEmail(e)}>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="name">Name</Label>
                                        <Input type="text" id="name" placeholder="Enter your name" onChange={((e)=>setFromName(e.target.value))} />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="name">Email</Label>
                                        <Input type="email" id="name" placeholder="Give your email here" onChange={((e)=>setFromEmail(e.target.value))} />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="name">Discuss your idea</Label>
                                        <Input type="text" id="name" placeholder="Short description about your thoughts.." onChange={((e)=>setMessage(e.target.value))}/>
                                    </div>
                                    <CardFooter className="flex justify-end mt-2 -mb-5">
                                        <Button type="submit" onSubmit={(e) => sendEmail(e)}>Send message</Button>
                                    </CardFooter>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Contact