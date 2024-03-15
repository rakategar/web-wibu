import NextAuth from "next-auth/next"
import githubAuth from "next-auth/providers/github"
import googleProvider from "next-auth/providers/google"

export const authOption = {
    providers : [
        githubAuth({
            clientId : process.env.GITHUB_CLIENT,
            clientSecret : process.env.GITHUB_SECRET

        }),
        googleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    secret : process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOption)

export {handler as GET, handler as POST}
