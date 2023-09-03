import { NextResponse } from "next/server";

export function middleware(req, res) {
  // console.log("I am middleware");
  if (req.nextUrl.pathname.startsWith("/api/product-api")) {
    // console.log("This is API Route Inside Product Dir");

    // const reqHeader = new Headers(req.headers);
    // const token = reqHeader.get("token");

    // reqHeader.set("user_id", "001");

    // if (token === "123-ABC") {
    //   return NextResponse.next({
    //     request: { headers: reqHeader },
    //   });
    // } else {
    //   return NextResponse.json({ msg: "fail" }, { status: 401 });
    // }

    const res = NextResponse.next();
    res.headers.set("API_KEY", "Example-Key");

    return res;

    //return NextResponse.next();
  }
  // else if (req.nextUrl.pathname.startsWith("/cartlist")) {
  //   //console.log("This is API Route Inside CArt List Dir");

  //   return NextResponse.next();
  // }
}

// export const config = {
//   matcher: ["/api/:path*", "/cartlist"],
// };
