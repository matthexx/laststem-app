import { NextRequest, NextResponse } from 'next/server'
import { NextPage } from 'next'

const customer = () => {
    return <h1> meet me</h1>;

}
export default customer
export async function GET(request) {
//     return new NextResponse(
//         JSON.stringify({ success: false, message: 'authentication failed' }),
//         { status: 401, headers: { 'content-type': 'application/json' } },
//     );
//      return new Response('index of users')
// }

// export async function POST(request) {
//     // return new Response('dfs')
//     return new Response(JSON.stringify({
//         'userbd': "userFound"
//     }));


    // const users = await User.find();
    // return  NextResponse.json({ users });


    // return new Response('post to users index')
}