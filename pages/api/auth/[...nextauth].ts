import NextAuth from 'next-auth'
import CognitoProvider from 'next-auth/providers/cognito'
import AzureADProvider from 'next-auth/providers/azure-ad'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '../../../db/prisma'

const cognitoClientId = process.env.COGNITO_CLIENT_ID
const cognitoClientSecret = process.env.COGNITO_CLIENT_SECRET
const cognitoIssuer = process.env.COGNITO_ISSUER
if (!cognitoClientId || !cognitoClientSecret || !cognitoIssuer) {
  throw new Error('Missing Cognito environment variables')
}
const azureClientId = process.env.AZURE_AD_CLIENT_ID
const azureClientSecret = process.env.AZURE_AD_CLIENT_SECRET
const azureTenantId = process.env.AZURE_AD_TENANT_ID
if (!azureClientId || !azureClientSecret || !azureTenantId) {
  throw new Error('Missing Azure AD environment variables')
}

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CognitoProvider({
      clientId: cognitoClientId,
      clientSecret: cognitoClientSecret,
      issuer: cognitoIssuer
    }),
    AzureADProvider({
      clientId: azureClientId,
      clientSecret: azureClientSecret,
      tenantId: azureTenantId
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
