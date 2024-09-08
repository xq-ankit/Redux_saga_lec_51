export async function fetchUsersData(count: number) {
    const res = await fetch("https://randomuser.me/api?results=" + count);
    return res.json();
  }
  