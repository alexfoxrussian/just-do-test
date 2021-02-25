const path = require('path');
const uuid = require('uuid');
const { readJsonFile, writeJsonFile } = require('../utils/file.utils');

const FILE_PATH = path.resolve(path.dirname(require.main.filename),'src', 'server', 'data', 'users.json');

const usersRepository = {

  async getAll() {
    return await readJsonFile(FILE_PATH) || [];
  },

  async get(email) {
    const users = await this.getAll();
    return users.find(user => user.email === email);
  },

  async add(user) {
    const users = await this.getAll();
    const newUser = {
      id: uuid.v1(),
      ...user
    };
    users.push(newUser);

    await writeJsonFile(FILE_PATH, users);

    return newUser;
  }
};

module.exports = usersRepository;
