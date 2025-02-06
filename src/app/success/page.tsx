export default function SuccessPage() {
  return (
    <div className="w-full flex justify-center">
    <div className="flex flex-col gap-4 text-center border rounded-md border-gray-300 max-w-fit p-2 my-8 shadow-xl">
      <h1 className="text-2xl font-bold text-green-600">Payment Successful!</h1>
      <p>Thank you for your order.</p>
      <a href="/" className="text-blue-500 hover:text-blue-800">Go back to home</a>
    </div>
    </div>
  );
}

  