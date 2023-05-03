import AsyncStorage from '@react-native-async-storage/async-storage'

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace
  }

  async getAccessToken() {
    return JSON.parse(await AsyncStorage.getItem(this.namespace))
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(this.namespace, JSON.stringify(accessToken))
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(this.namespace)
  }
}

export default AuthStorage