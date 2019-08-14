module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    GOOGLE_APPLICATION_CREDENTIALS: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    GOOGLE_APPLICATION_CREDENTIALS: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  }
}
