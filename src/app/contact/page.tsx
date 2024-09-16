"use client";
import React, { useState } from "react";
import { LuSendHorizonal } from "react-icons/lu";
import { TechStack } from "@/components/techstack";
import { social } from "@/data/social";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const discordWebhookUrl = "https://discord.com/api/webhooks/1284926081010237481/sH9zhDCL3wpvQGLS6N7wi3sVYKGZ-UxvJS5CDv1suhHbvix3smjcgff4zFsJl7fmIoJc";

    const messageData = {
      username: name,
      embeds: [
        {
          title: "New Message from Portfolio",
          description:
            "You've received a new message via your portfolio contact form.",
          color: 0x5865f2,
          fields: [
            { name: "Name", value: name, inline: true },
            { name: "Email", value: email, inline: true },
            { name: "Message", value: message },
          ],
          footer: { text: "Portfolio Contact Form" },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      const response = await fetch(discordWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData),
      });

      if (response.ok) {
        window.location.href = "/thanks";
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className=" pt-4 sm:pt-2 grid grid-cols-1 pb-4 sm:pb-8 min-h-screen sm:mt-6 mt-0 ml-2 mr-2 ">
        <div className="flex flex-col  items-center">
          <h1 className="font-medium text-2xl sm:text-3xl mt-1 sm:mt-2">
            Contact
          </h1>

          <div className="border rounded-xl border-none shadow-lg bg-white/5 sm:ml-1 sm:mr-1 ml-3 mr-3 flex flex-col items-center justify-center text-center sm:mt-8 mt-4 pt-2 sm:w-[600px] sm:mx-auto lg:w-[1000px] lg:mx-auto pb-3 sm:pb-7">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col mt-0 sm:mt-8 mb-8 w-full sm:w-[400px] lg:w-[700px] px-6 sm:px-4 lg:px-12 sm:ml-18 sm:mr-18"
            >
              <h2 className="font-medium text-lg sm:text-xl mb-1 sm:mb-5 ">
                Let&apos;s Have a Chat
              </h2>
              <label className="text-left mb-1 sm:mt-0 mt-3" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                id="name"
                className="p-4 mb-4 w-full  border-b border-bordercol rounded-md transition ease-in-out duration-500 focus:outline-none focus:shadow-md focus:shadow-blue-600 sm:mt-3 mt-1"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label className="text-left mb-1 sm:mt-2 mt-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                id="email"
                className="p-4 mb-4 w-full  border-b border-bordercol rounded-md transition ease-in-out duration-500 focus:outline-none focus:shadow-md focus:shadow-blue-600 sm:mt-3 mt-1"
                placeholder="Your E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label className="text-left mb-1 sm:mt-2 mt-1" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                required
                id="message"
                className="p-4 mb-4 w-full  border-b border-bordercol rounded-md transition ease-in-out duration-500 focus:outline-none focus:shadow-md focus:shadow-blue-600 sm:mt-3 mt-1"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <input type="hidden" name="redirect" value="/thanks" />

              <button
                type="submit"
                className=" flex items-center justify-center flex-row space-x-2 font-semibold mb-0 p-4 sm:mb-3 w-full  border-b border-bordercol rounded-md transition ease-in-out duration-500 focus:outline-none hover:shadow-md hover:shadow-blue-600 sm:mt-8 mt-1"
              >
                <h2>Submit</h2>
                <LuSendHorizonal className="mr-2" />
              </button>
            </form>
            <h1 className="font-medium text-lg sm:text-xl mb-1 sm:mb-3">
              Follow me on
            </h1>
            <TechStack techstack={social} />
          </div>
        </div>
      </div>
    </>
  );
}
