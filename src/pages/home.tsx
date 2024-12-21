import { Html } from "@elysiajs/html";

export default function Home() {
  return (
    <html lang="en">
      <head>
        <title>PromptPay QR</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <div class="p-6 flex flex-col items-center justify-center h-[100dvh]">
          <h1 class="text-4xl font-bold">PromptPay QR</h1>
          <form class="mt-6 flex flex-col gap-2" action="/generate">
            <input
              class="p-2 border-2 border-black rounded-lg h-12 outline-none w-80"
              placeholder="Phone or ID"
              name="phone"
            />
            <input
              class="p-2 border-2 border-black rounded-lg h-12 outline-none w-80"
              placeholder="Amount"
              name="amount"
            />
            <button
              class="p-2 bg-black h-12 text-white rounded-lg w-80 mt-4"
              type="submit"
              //goto /phone/amount
              onclick={"window.location.href = `/${phone}/${amount}`"}
            >
              Generate QR
            </button>
          </form>
        </div>
      </body>
    </html>
  );
}
