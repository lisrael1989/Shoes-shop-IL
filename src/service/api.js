const BASE_URL = 'https://673dae2e0118dbfe8608492a.mockapi.io/shoes';

export async function fetchShoes() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch Shoes: ${response.status} ${response.statusText}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching shoe:', error.message);
    return [];
  }
}

export async function addShoes(newShoe) {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newShoe),
    });
    if (!response.ok) {
      throw new Error(
        `Failed to add shoe: ${response.status} ${response.statusText}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error('Error adding recipe:', error.message);
    return null;
  }
}
