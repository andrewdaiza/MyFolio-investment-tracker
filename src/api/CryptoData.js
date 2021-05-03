export const getCryptoData = async (searchInput, limit) => {
  try {
    const res = await fetch(
      `https://api.coincap.io/v2/assets?search=${searchInput}&limit=${limit}`
    );

    return await res.json();
  } catch (e) {
    console.error(e);
  }
};
