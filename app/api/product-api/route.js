import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(req, res) {
  // // Request Params
  // const { searchParams } = new URL(req.url);
  // let id = searchParams.get("id");
  // let product = searchParams.get("product");
  // return NextResponse.json({
  //   status: true,
  //   msg: "This is GET Request",
  //   id: id,
  //   product: product,
  // });

  // //Request Headers
  // const headerList = headers();
  // const apiKey = headerList.get("api-key");
  // return NextResponse.json({ msg: apiKey });

  // // Cookies
  // let token = req.cookies.get("token");
  // // let token = req.cookies.get("token")["name"];
  // return NextResponse.json({ msg: token });

  // // // Response Array, Object, Status, Header, Cookies, Redirect

  // // Response Object
  //return NextResponse.json({ name: "xyz", age: 15, email: "xyz@gmail.com" });

  // // Response Array
  // return NextResponse.json([
  //   { name: "xyz", age: 15, email: "xyz@gmail.com" },
  //   { name: "xyz", age: 15, email: "xyz@gmail.com" },
  //   { name: "xyz", age: 15, email: "xyz@gmail.com" },
  //   { name: "xyz", age: 15, email: "xyz@gmail.com" },
  // ]);

  // // Response Status Code (body, {status,header})
  // return NextResponse.json(
  //   [
  //     { name: "xyz", age: 15, email: "xyz@gmail.com" },
  //     { name: "xyz", age: 15, email: "xyz@gmail.com" },
  //     { name: "xyz", age: 15, email: "xyz@gmail.com" },
  //     { name: "xyz", age: 15, email: "xyz@gmail.com" },
  //   ],
  //   {
  //     status: 201,
  //     headers: {
  //       token1: "XYZ-123",
  //       token2: "XYZ-123",
  //       "Set-Cookie": "Auth=123;path=/;",
  //     },
  //   }
  // );

  // // Redirect
  // redirect("/");

  //return NextResponse.json({ msg: "GET" });

  // let headerList = headers();
  // let user_id = headerList.get("user_id");

  // return NextResponse.json({ msg: user_id });

  return NextResponse.json({ msg: "GET" });
}

export async function POST(req, res) {
  // Request Params with JSON Data

  // const { searchParams } = new URL(req.url);
  // let id = searchParams.get("id");
  // let product = searchParams.get("product");
  // return NextResponse.json({
  //   status: true,
  //   msg: "This is POST Request",
  //   id: id,
  //   product: product,
  // });

  // Request Body with Raw Data (JSON Data)

  const reqBody = await req.json();
  return NextResponse.json(reqBody);
}

export async function PUT(req, res) {
  // Request Body with Form Data
  let formData = await req.formData();
  let mobile = formData.get("mobile");
  return NextResponse.json({ mobile: mobile });
}

export async function PATCH() {
  return NextResponse.json({ status: true, msg: "This is PATCH Request" });
}

export async function DELETE() {
  return NextResponse.json({ status: true, msg: "This is DELETE Request" });
}

// export async function POST() {
//   return NextResponse.json({ msg: "This is POST Request" });
// }
