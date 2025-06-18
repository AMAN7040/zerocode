module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/chat",
        permanent: false, // Use false to allow future changes
      },
    ];
  },
};
