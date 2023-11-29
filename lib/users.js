export const getUsers = async () => {

    const users = await readUsers();

    return users;

}