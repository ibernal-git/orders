import NextAuth from 'next-auth'
import CognitoProvider from 'next-auth/providers/cognito'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '../../../db/prisma'

const cognitoClientId = process.env.COGNITO_CLIENT_ID
const cognitoClientSecret = process.env.COGNITO_CLIENT_SECRET
const cognitoIssuer = process.env.COGNITO_ISSUER
if (!cognitoClientId || !cognitoClientSecret || !cognitoIssuer) {
  throw new Error('Missing Cognito environment variables')
}

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CognitoProvider({
      clientId: cognitoClientId,
      clientSecret: cognitoClientSecret,
      issuer: cognitoIssuer
    })
  ],
  pages: {
    signIn: '/'
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  }
})
