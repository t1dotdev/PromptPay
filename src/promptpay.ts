import generatePayload from "promptpay-qr";
var QRCode = require("qrcode");

export const getPromptPay = async (phone: string, amount?: number) => {
  if (!phone || !/^\d{10,13}$/.test(phone)) {
    return "Please provide a valid phone number or ID";
  }

  if (amount && (isNaN(amount) || amount <= 0)) {
    return "Please provide a valid amount";
  }

  const promptpay = generatePayload(phone, { amount });
  console.log(promptpay);
  const base64 = await QRCode.toDataURL(promptpay, {
    width: 500,
  });
  const buffer = Buffer.from(base64.split(",")[1], "base64");

  return new Response(buffer, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
